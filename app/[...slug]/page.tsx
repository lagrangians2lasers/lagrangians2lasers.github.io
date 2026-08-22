import { getPostBySlug, getPageBySlug, markdownToHtml, getPostSlugs, getPageSlugs, getAllPosts } from "@/lib/api";
import { notFound } from "next/navigation";
import Link from "next/link";
import PostList from "@/components/PostList";
import ImageSlider from "@/components/ImageSlider";

export default async function DynamicRoute({ params }: { params: Promise<{ slug: string[] }> }) {
  const { slug } = await params;
  const slugPath = slug.join('/');
  
  // Try to load as post first, then page
  let post: any = getPostBySlug(slugPath, [
    "title", "date", "slug", "author", "content", "thumbnail-img",
    "cover-img", "subtitle", "position", "email", "Time", "Location",
    "last-updated", "wantimage", "images", "wantpdf", "pdf", "tags"
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
    const allPosts = getAllPosts([
      "title", "date", "slug", "author", "excerpt", "thumbnail-img",
      "subtitle", "Time", "Location"
    ]);
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

  // Find previous and next posts if this is an individual talk
  let prevPost: any = null;
  let nextPost: any = null;
  if (!isPage) {
    const allPosts = getAllPosts(["title", "slug", "date"]);
    const currentIndex = allPosts.findIndex((p: any) => p.slug === post.slug);
    if (currentIndex !== -1) {
      if (currentIndex > 0) {
        prevPost = allPosts[currentIndex - 1]; // newer
      }
      if (currentIndex < allPosts.length - 1) {
        nextPost = allPosts[currentIndex + 1]; // older
      }
    }
  }

  const bgImage = post['cover-img'] || '/assets/img/dbgi.jpeg';
  const wantImage = Boolean(post['wantimage'] && post['images'] && post['images'].length > 0);
  const wantPdf = Boolean(post['wantpdf'] && post['pdf']);

  const dateStr = post.date
    ? new Date(post.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })
    : post.slug
    ? new Date(post.slug.substring(0, 10)).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })
    : '';

  const pdfUrl = post.pdf ? (post.pdf.startsWith('/') ? post.pdf : `/${post.pdf}`) : '';

  return (
    <>
      {/* Unified Editorial Hero matching Home page design */}
      <section className="hero-editorial">
        <div
          className="hero-backdrop"
          style={{ backgroundImage: `url('${bgImage}')` }}
        />
        <div className="hero-scrim" />
        <div className="container-md hero-inner">
          <div className="row">
            <div className="col-xl-9 col-lg-10">
              <p className="hero-kicker">
                {isPage ? "Lagrangians to Lasers · IISER Pune" : "Journal Club Talk · IISER Pune"}
              </p>
              <h1 className="hero-headline">{post.title}</h1>
              
              {post.subtitle && (
                <p className="hero-description">{post.subtitle}</p>
              )}

              {/* Talk Metadata */}
              {!isPage && (
                <div className="hero-meta">
                  {dateStr && (
                    <span>
                      <i className="fas fa-calendar-alt"></i> {dateStr}
                    </span>
                  )}
                  {post.Time && (
                    <>
                      <span className="separator">·</span>
                      <span>
                        <i className="fa-solid fa-clock"></i> {post.Time}
                      </span>
                    </>
                  )}
                  {post.Location && (
                    <>
                      <span className="separator">·</span>
                      <span>
                        <i className="fas fa-map-marker-alt"></i> {post.Location}
                      </span>
                    </>
                  )}
                </div>
              )}

              {/* Speaker Metadata */}
              {!isPage && post.author && (
                <div className="hero-speaker-info">
                  <span>
                    By <strong>{post.author}</strong>
                  </span>
                  {post.position && <span>{post.position}</span>}
                  {post.email && (
                    <span>
                      <a href={`mailto:${post.email.replace('_AT_', '@')}`}>
                        {post.email.replace('_AT_', '@')}
                      </a>
                    </span>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Main content */}
      <main className={post['full-width'] ? "container-fluid" : "container-md"} role="main" style={{ marginTop: "2rem" }}>
        <div className="row">
          <div className={post['full-width'] ? "col" : "col-xl-8 offset-xl-2 col-lg-10 offset-lg-1"}>

            {/* Slider on top for pages (like Jan '23, Gallery) */}
            {isPage && wantImage && (
              <div style={{ marginBottom: "2.5rem" }}>
                <ImageSlider images={post['images']} />
              </div>
            )}

            {/* Body content */}
            <div className="blog-post" dangerouslySetInnerHTML={{ __html: content }} />

            {/* PDF presentation/materials for talk posts */}
            {!isPage && wantPdf && (
              <div style={{ marginTop: '2.5rem', marginBottom: '2rem' }}>
                <h4 style={{ fontWeight: 700, marginBottom: '1rem' }}>
                  <i className="fas fa-file-pdf" style={{ color: '#c0392b', marginRight: '8px' }}></i>
                  Talk Materials &amp; Slides
                </h4>
                <div className="pdf-container" style={{ width: '100%', overflow: 'hidden', borderRadius: '8px', border: '1px solid #dee2e6' }}>
                  <iframe
                    src={pdfUrl}
                    style={{ width: '100%', height: '550px', border: 'none' }}
                    title={`${post.title} PDF`}
                  />
                </div>
                <div style={{ marginTop: '0.5rem', textAlign: 'right' }}>
                  <a
                    href={pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-primary btn-sm"
                    style={{ borderRadius: '4px', textDecoration: 'none' }}
                  >
                    <i className="fas fa-external-link-alt" style={{ marginRight: '5px' }}></i>
                    Open PDF in new tab
                  </a>
                </div>
              </div>
            )}

            {/* Slideshow gallery for individual talk posts */}
            {!isPage && wantImage && (
              <div style={{ marginTop: '2.5rem', marginBottom: '2rem' }}>
                <h4 style={{ fontWeight: 700, marginBottom: '1rem' }}>
                  <i className="fas fa-images" style={{ color: '#146cb7', marginRight: '8px' }}></i>
                  Session Gallery
                </h4>
                <ImageSlider images={post['images']} />
              </div>
            )}

            {/* Post Tags */}
            {!isPage && post.tags && Array.isArray(post.tags) && post.tags.length > 0 && (
              <div className="blog-tags" style={{ marginTop: '2rem' }}>
                <span>Tags: </span>
                <ul className="d-inline list-inline" role="list">
                  {post.tags.map((tag: string) => (
                    <li key={tag} className="list-inline-item" style={{ marginRight: '5px' }}>
                      <span
                        style={{
                          backgroundColor: '#f1f5f9',
                          color: '#475569',
                          padding: '4px 10px',
                          borderRadius: '12px',
                          fontSize: '0.85rem',
                          fontWeight: 500,
                          display: 'inline-block',
                          border: '1px solid #e2e8f0'
                        }}
                      >
                        #{tag}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Previous & Next Post navigation */}
            {!isPage && (prevPost || nextPost) && (
              <ul className="pagination blog-pager" style={{ marginTop: '2.5rem', borderTop: '1px solid #e2e8f0', paddingTop: '1.5rem' }}>
                {prevPost && (
                  <li className="page-item previous">
                    <Link
                      className="page-link"
                      href={`/${prevPost.slug}`}
                      style={{ textDecoration: 'none', borderRadius: '4px' }}
                    >
                      <i className="fas fa-arrow-left" style={{ marginRight: '6px' }}></i>
                      <span className="d-none d-sm-inline-block">Newer Talk</span>
                    </Link>
                  </li>
                )}
                {nextPost && (
                  <li className="page-item next" style={{ marginLeft: 'auto' }}>
                    <Link
                      className="page-link"
                      href={`/${nextPost.slug}`}
                      style={{ textDecoration: 'none', borderRadius: '4px' }}
                    >
                      <span className="d-none d-sm-inline-block" style={{ marginRight: '6px' }}>Older Talk</span>
                      <i className="fas fa-arrow-right"></i>
                    </Link>
                  </li>
                )}
              </ul>
            )}

            {/* Semester catalogue talk list */}
            {isSemesterPage && semesterPosts.length > 0 && (
              <div style={{ marginTop: '2.5rem' }}>
                <div className="talks-section-header">
                  <h2>Semester Talks</h2>
                </div>
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
