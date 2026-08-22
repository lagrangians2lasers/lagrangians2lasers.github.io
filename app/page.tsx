import { getAllPosts } from "@/lib/api";
import PostList from "@/components/PostList";

export default function Home() {
  const allPosts = getAllPosts([
    "title",
    "date",
    "slug",
    "author",
    "excerpt",
    "thumbnail-img",
    "Location",
    "Time",
    "subtitle",
  ]);

  return (
    <>
      {/* Editorial Academic Hero */}
      <section className="hero-editorial">
        <div
          className="hero-backdrop"
          style={{ backgroundImage: "url('/assets/img/dbgi.jpeg')" }}
        />
        <div className="hero-scrim" />
        <div className="container-md hero-inner">
          <div className="row">
            <div className="col-xl-9 col-lg-10">
              <p className="hero-kicker">Physics Journal Club | IISER Pune</p>
              <h1 className="hero-headline">Lagrangians to Lasers</h1>
              <p className="hero-description">
                An undergraduate-led forum bridging subfields of physics through
                weekly peer seminars, literature discussions, and open debate.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="container-md" role="main">
        <div className="row">
          <div className="col-xl-10 offset-xl-1 col-lg-12">
            {/* Minimal Notice */}
            <div className="session-notice">
              {/* <p className="session-notice-lead">
                We meet on <strong>Thursdays at 6:30 PM in LHC 106</strong>.
              </p> */}
              <p className="session-notice-sub">
                Interested in presenting or receiving updates? Fill out the{" "}
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLScWG0-TZOyc0R5JkOOqTtm47HzP0JRF0weeXo9HypWnmRQjhw/viewform?usp=sf_link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Speaker Registration
                </a>
                , join our{" "}
                <a
                  href="https://chat.whatsapp.com/JMUyMXHGgXxBl9mI4NOWub?s=cl&p=i&ilr=0"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp Community
                </a>
                , or subscribe for{" "}
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSeXCEesJytK9IIqmpJ-tZoznBDeIrd5Nc-c4PDpH3VY3f9JrQ/viewform?usp=sf_link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  email notices
                </a>
                .
              </p>
            </div>

            {/* Post Feed */}
            <div className="talks-section-header">
              <h2>Recent Talks</h2>
            </div>
            <PostList allPosts={allPosts} />
          </div>
        </div>
      </div>
    </>
  );
}
