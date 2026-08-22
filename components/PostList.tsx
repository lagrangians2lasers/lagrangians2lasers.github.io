"use client";

import { useState } from "react";
import Link from "next/link";

type Post = {
  title: string;
  date: string;
  slug: string;
  author?: string;
  excerpt?: string;
  'thumbnail-img'?: string;
  Location?: string;
  Time?: string;
  subtitle?: string;
};

export default function PostList({ allPosts }: { allPosts: any[] }) {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 5;
  const totalPages = Math.ceil(allPosts.length / postsPerPage);

  const currentPosts = allPosts.slice(
    (currentPage - 1) * postsPerPage,
    currentPage * postsPerPage
  );

  return (
    <>
      <ul className="posts-list list-unstyled" role="list">
        {currentPosts.map((post: Post) => {
          const postDate = new Date(post.date || post.slug.substring(0, 10)).toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric",
          });

          return (
            <li key={post.slug} className="post-preview">
              <article>
                {post['thumbnail-img'] && (
                  <div className="post-thumbnail">
                    <img src={post['thumbnail-img']} alt={post.title} style={{ maxWidth: "250px", height: "auto" }} />
                  </div>
                )}

                <Link href={`/${post.slug}`}>
                  <h2 className="post-title">{post.title}</h2>
                  {post.subtitle && <h3 className="post-subtitle">{post.subtitle}</h3>}
                </Link>

                {post.author && (
                  <span>By <strong>{post.author}</strong></span>
                )}

                <div className="post-meta" style={{ marginTop: "10px" }}>
                  <div className="event-details">
                    <div className="event-details-small-screen d-md-none">
                      <h6>
                        <span className="date-time">
                          <i className="fas fa-calendar-alt"></i> <i>{postDate}</i>
                          {post.Time && (
                            <>
                              <span className="separator" style={{ margin: "0 5px" }}>|</span>
                              <span className="fa-solid fa-clock"></span> <i>{post.Time}</i>
                            </>
                          )}
                        </span>
                      </h6>
                      {post.Location && (
                        <h6>
                          <span className="date-time">
                            <span className="fas fa-map-marker-alt"></span> <i>{post.Location}</i>
                          </span>
                        </h6>
                      )}
                    </div>
                    <div className="event-details-large-screen d-none d-md-block">
                      <h6>
                        <span className="date-time">
                          <i className="fas fa-calendar-alt"></i> <i>{postDate}</i>
                          {post.Time && (
                            <>
                              <span className="separator" style={{ margin: "0 5px" }}>|</span>
                              <span className="fa-solid fa-clock"></span> <i>{post.Time}</i>
                            </>
                          )}
                          {post.Location && (
                            <>
                              <span className="separator" style={{ margin: "0 5px" }}>|</span>
                              <span className="fas fa-map-marker-alt"></span> <i>{post.Location}</i>
                            </>
                          )}
                        </span>
                      </h6>
                    </div>
                  </div>
                </div>

                <div className="post-entry">
                  <p>
                    {post.excerpt}
                    <Link href={`/${post.slug}`} className="post-read-more" style={{ marginLeft: "5px" }}>
                      [Read&nbsp;More]
                    </Link>
                  </p>
                </div>
              </article>
            </li>
          );
        })}
      </ul>

      {totalPages > 1 && (
        <ul className="pagination main-pager">
          {currentPage > 1 && (
            <li className="page-item previous">
              <a className="page-link" href="#" onClick={(e) => { e.preventDefault(); setCurrentPage(p => p - 1); }}>
                <i className="fas fa-arrow-left"></i>
                <span className="d-none d-sm-inline-block" style={{ marginLeft: "5px" }}>Newer Posts</span>
              </a>
            </li>
          )}
          {currentPage < totalPages && (
            <li className="page-item next" style={{ marginLeft: "auto" }}>
              <a className="page-link" href="#" onClick={(e) => { e.preventDefault(); setCurrentPage(p => p + 1); }}>
                <span className="d-none d-sm-inline-block" style={{ marginRight: "5px" }}>Older Posts</span>
                <i className="fas fa-arrow-right"></i>
              </a>
            </li>
          )}
        </ul>
      )}
    </>
  );
}
