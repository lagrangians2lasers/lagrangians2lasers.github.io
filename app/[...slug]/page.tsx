import { getPostBySlug, getPageBySlug, markdownToHtml, getPostSlugs, getPageSlugs, getAllPosts } from "@/lib/api";
import { notFound } from "next/navigation";
import PostList from "@/components/PostList";
import ImageSlider from "@/components/ImageSlider";

export default async function DynamicRoute({ params }: { params: Promise<{ slug: string[] }> }) {
  const { slug } = await params;
  const slugPath = slug.join('/');
  
  // Try to load as post first, then page
  let post: any = getPostBySlug(slugPath, [
    "title", "date", "slug", "author", "content", "thumbnail-img",
    "cover-img", "subtitle", "position", "email", "Time", "Location", "last-updated"
  ]);
  let isPage = false;
  
  if (!post) {
    post = getPageBySlug(slugPath, [
      "title", "slug", "content", "cover-img", "subtitle",
      "wantimage", "images", "full-width"
    ]);
    isPage = true;
  }

  if (!post) {
    return notFound();
  }

  const content = await markdownToHtml(post.content || '');
  
  // Semester pages: jan23, aug23, jan24, aug24, jan25
  const isSemesterPage = isPage && /^(jan|aug)\d{2}$/.test(slugPath);
  let semesterPosts: any[] = [];
  
  if (isSemesterPage) {
    const allPosts = getAllPosts(["title", "date", "slug", "author", "excerpt", "thumbnail-img", "subtitle", "Time", "Location"]);
    const year = "20" + slugPath.substring(3);
    const month = slugPath.substring(0, 3);
    
    semesterPosts = allPosts.filter((p: any) => {
      const pDate = new Date(p.date || p.slug.substring(0, 10));
      const pYear = pDate.getFullYear().toString();
      const pMonth = pDate.getMonth();
      if (pYear !== year) return false;
      if (month === 'jan') return pMonth >= 0 && pMonth <= 5;
      if (month === 'aug') return pMonth >= 7 && pMonth <= 11;
      return false;
    });
  }

  const hasCoverImg = !!(post['cover-img']);
  const bgImage = post['cover-img'] || '';
  const wantImage = post['wantimage'] && post['images'] && post['images'].length > 0;

  const dateStr = post.date
    ? new Date(post.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })
    : post.slug
    ? new Date(post.slug.substring(0, 10)).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })
    : '';

  return (
    <>
      {/* Header section — matches Beautiful Jekyll's header.html */}
      <header className={`header-section${hasCoverImg ? ' has-img' : ''}`}>
        <div
          className={`intro-header${hasCoverImg ? ' big-img' : ''}`}
          style={hasCoverImg ? { backgroundImage: `url('${bgImage}')` } : undefined}
        >
          {(hasCoverImg || post.title) && (
            <div className="container-md">
              <div className="row">
                <div className="col-xl-8 offset-xl-2 col-lg-10 offset-lg-1">
                  <div className={isPage ? "page-heading" : "post-heading"}>
                    <h1>{post.title || <br />}</h1>

                    {post.subtitle && isPage && (
                      <>
                        <hr className="small" />
                        <span className="page-subheading">{post.subtitle}</span>
                      </>
                    )}
                    {post.subtitle && !isPage && (
                      <h2 className="post-subheading">{post.subtitle}</h2>
                    )}

                    {!isPage && post.author && (
                      <div className="event-details">
                        <div className="event-details-small-screen d-md-none">
                          <h6>
                            <span className="date-time">
                              <i className="fas fa-calendar-alt"></i> <i>{dateStr}</i>
                              {post.Time && <><span className="separator" style={{ margin: "0 5px" }}>|</span><span className="fa-solid fa-clock"></span> <i>{post.Time}</i></>}
                            </span>
                          </h6>
                          {post.Location && <h6><span className="date-time"><i className="fas fa-map-marker-alt"></i> <i>{post.Location}</i></span></h6>}
                        </div>
                        <div className="event-details-large-screen d-none d-md-block">
                          <h6>
                            <span className="date-time">
                              <i className="fas fa-calendar-alt"></i> <i>{dateStr}</i>
                              {post.Time && <><span className="separator" style={{ margin: "0 5px" }}>|</span><span className="fa-solid fa-clock"></span> <i>{post.Time}</i></>}
                              {post.Location && <><span className="separator" style={{ margin: "0 5px" }}>|</span><i className="fas fa-map-marker-alt"></i> <i>{post.Location}</i></>}
                            </span>
                          </h6>
                        </div>
                      </div>
                    )}

                    {!isPage && post.author && (
                      <>
                        <p></p>
                        <h5 style={{ fontWeight: "normal" }}>By <strong>{post.author}</strong></h5>
                        {post.position && <h6 style={{ fontWeight: "normal" }}>{post.position}</h6>}
                        {post.email && (
                          <h6 style={{ fontWeight: "normal" }}>
                            <span style={{ color: "rgb(106, 20, 7)" }}><i className="fas fa-envelope"></i> </span> {post.email}
                          </h6>
                        )}
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}
          {hasCoverImg && <span className="img-desc"></span>}
        </div>
      </header>

      {/* Main content — matches Beautiful Jekyll's page.html */}
      <main className={post['full-width'] ? "container-fluid" : "container-md"} role="main">
        <div className="row">
          <div className={post['full-width'] ? "col" : "col-xl-8 offset-xl-2 col-lg-10 offset-lg-1"}>

            {wantImage && (
              <ImageSlider images={post['images']} />
            )}

            <p></p>
            <div className="blog-post" dangerouslySetInnerHTML={{ __html: content }} />

            {isSemesterPage && semesterPosts.length > 0 && (
              <div style={{ marginTop: '3rem' }}>
                <PostList allPosts={semesterPosts} />
              </div>
            )}
          </div>
        </div>
      </main>
    </>
  );
}

export async function generateStaticParams() {
  const postSlugs = getPostSlugs().map(slug => ({ slug: [slug.replace(/\.md$/, '')] }));
  const pageSlugs = getPageSlugs().map(slug => ({ slug: [slug.replace(/\.md$/, '')] }));
  return [...postSlugs, ...pageSlugs];
}
