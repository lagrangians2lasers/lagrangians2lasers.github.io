import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import { Lora, Open_Sans } from "next/font/google";

const lora = Lora({ subsets: ["latin"], variable: "--font-lora" });
const openSans = Open_Sans({ subsets: ["latin"], variable: "--font-open-sans" });

export const metadata: Metadata = {
  title: "Lagrangians to Lasers",
  description: "Physics Journal Club, IISER Pune",
  keywords: "Lagrangians to Lasers, Physics, Journal club, IISER Pune",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${lora.variable} ${openSans.variable}`}>
      <head>
        <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" />
        <link rel="stylesheet" href="/assets/css/bootstrap-social.css" />
        <link rel="stylesheet" href="/assets/css/beautifuljekyll-compiled.css" />
      </head>
      <body>
        <nav suppressHydrationWarning className="navbar navbar-expand-xl navbar-light fixed-top navbar-custom top-nav-regular">
          <Link href="/" className="navbar-brand navbar-brand-logo">
            <img className="logo-large" alt="Lagrangians to Lasers Logo" src="/assets/img/new_ltl1333.png" />
            <img className="logo-small" alt="Lagrangians to Lasers Logo" src="/assets/img/new_l2l.png" />
          </Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#main-navbar" aria-controls="main-navbar" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="main-navbar">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" href="/aboutL2L">About L2L</Link>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Catalogue</a>
                <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                  <Link className="dropdown-item" href="/pics">Gallery</Link>
                  <Link className="dropdown-item" href="/jan23">Jan '23</Link>
                  <Link className="dropdown-item" href="/aug23">Aug '23</Link>
                  <Link className="dropdown-item" href="/jan24">Jan '24</Link>
                  <Link className="dropdown-item" href="/aug24">Aug '24</Link>
                  <Link className="dropdown-item" href="/jan25">Jan '25</Link>
                </div>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/about-organizer">About organizer</Link>
              </li>
            </ul>
          </div>
          <div className="avatar-container">
            <div className="avatar-img-border">
              <Link href="/">
                <img alt="Navigation bar avatar" className="avatar-img" src="/assets/img/new_logo.jpeg" />
              </Link>
            </div>
          </div>
        </nav>

        {children}

        <footer>
          <div className="container-md beautiful-jekyll-footer">
            <div className="row">
              <div className="col-xl-8 offset-xl-2 col-lg-10 offset-lg-1">
                <ul className="list-inline text-center footer-links">
                  <li className="list-inline-item">
                    <a href="mailto:lagrangians2lasers@gmail.com" title="Email me">
                      <span className="fa-stack fa-lg" aria-hidden="true">
                        <i className="fas fa-circle fa-stack-2x"></i>
                        <i className="fas fa-envelope fa-stack-1x fa-inverse"></i>
                      </span>
                      <span className="sr-only">Email me</span>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href=" https://chat.whatsapp.com/JMUyMXHGgXxBl9mI4NOWub?s=cl&p=i&ilr=0" title="WhatsApp">
                      <span className="fa-stack fa-lg" aria-hidden="true">
                        <i className="fas fa-circle fa-stack-2x"></i>
                        <i className="fab fa-whatsapp fa-stack-1x fa-inverse"></i>
                      </span>
                      <span className="sr-only">WhatsApp</span>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="https://www.instagram.com/lagrangians2lasers" title="Instagram">
                      <span className="fa-stack fa-lg" aria-hidden="true">
                        <i className="fas fa-circle fa-stack-2x"></i>
                        <i className="fab fa-instagram fa-stack-1x fa-inverse"></i>
                      </span>
                      <span className="sr-only">Instagram</span>
                    </a>
                  </li>
                </ul>
                <p className="copyright text-muted">
                  Site by Team L2L
                </p>
              </div>
            </div>
          </div>
        </footer>

        <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"></script>
        <script src="/assets/js/beautifuljekyll.js"></script>
      </body>
    </html>
  );
}
