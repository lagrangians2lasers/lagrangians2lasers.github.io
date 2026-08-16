import { getAllPosts } from "@/lib/api";
import PostList from "@/components/PostList";

export default function Home() {
  const allPosts = getAllPosts(["title", "date", "slug", "author", "excerpt", "thumbnail-img", "Location", "Time", "subtitle"]);

  return (
    <>
      <header className="header-section has-img">
        <div className="intro-header big-img" style={{ backgroundImage: "url('/assets/img/dbgi.jpeg')" }}>
          <div className="container-md">
            <div className="row">
              <div className="col-xl-8 offset-xl-2 col-lg-10 offset-lg-1">
                <div className="page-heading">
                  <h1>Lagrangians to Lasers</h1>
                  <hr className="small" />
                  <span className="page-subheading">Journal Club for Physics at IISER Pune</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="container-md" role="main">
        <div className="row">
          <div className="col-xl-8 offset-xl-2 col-lg-10 offset-lg-1">
            <div className="box-warning" style={{ marginBottom: "30px" }}>
              Read more <a href="https://lagrangians2lasers.github.io/aboutL2L/">About L2L</a>.
              <br />If you'd like to receive email notifications about upcoming sessions at L2L, please fill out <a href="https://docs.google.com/forms/d/e/1FAIpQLSeXCEesJytK9IIqmpJ-tZoznBDeIrd5Nc-c4PDpH3VY3f9JrQ/viewform?usp=sf_link">L2L Email Subscription Form</a> or join our <a href="https://chat.whatsapp.com/JMUyMXHGgXxBl9mI4NOWub">WhatsApp community</a> or follow us on <a href="https://www.instagram.com/lagrangians2lasers/">Instagram</a>.
              <br />Interested in presenting at L2L? Please fill out <a href="https://docs.google.com/forms/d/e/1FAIpQLScWG0-TZOyc0R5JkOOqTtm47HzP0JRF0weeXo9HypWnmRQjhw/viewform?usp=sf_link">L2L Speaker Registration Form</a>.
            </div>

            <PostList allPosts={allPosts} />
          </div>
        </div>
      </div>
    </>
  );
}
