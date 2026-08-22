import type { Metadata } from "next";
import "./globals.css";
import { Lora, Open_Sans } from "next/font/google";
import Navbar from "@/components/Navbar";

const lora = Lora({ subsets: ["latin"], variable: "--font-lora" });
const openSans = Open_Sans({ subsets: ["latin"], variable: "--font-open-sans" });

export const metadata: Metadata = {
  title: "Lagrangians to Lasers | Physics Journal Club, IISER Pune",
  description: "Lagrangians to Lasers (L2L) is a journal club for Physics enthusiasts at the Indian Institute of Science Education and Research (IISER), Pune.",
  keywords: "Lagrangians to Lasers, Physics, Journal club, IISER Pune, Science, Seminar, Research",
  icons: {
    icon: "/favicon.ico",
    apple: "/assets/img/new_logo.jpeg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${lora.variable} ${openSans.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/assets/img/new_logo.jpeg" />
        <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" />
        <link rel="stylesheet" href="/assets/css/bootstrap-social.css" />
        <link rel="stylesheet" href="/assets/css/beautifuljekyll-compiled.css" />
        <meta name="google-site-verification" content="Sfyyjug8IAVuhQnj2GBhYRkphQSRT7u69RQXfLmPIE0" />
      </head>
      <body>
        <Navbar />

        {children}

        <footer>
          <div className="container-md beautiful-jekyll-footer">
            <div className="row">
              <div className="col-xl-8 offset-xl-2 col-lg-10 offset-lg-1">
                <ul className="list-inline text-center footer-links">
                  <li className="list-inline-item">
                    <a href="mailto:lagrangians2lasers@gmail.com" title="Email us">
                      <span className="fa-stack fa-lg" aria-hidden="true">
                        <i className="fas fa-circle fa-stack-2x"></i>
                        <i className="fas fa-envelope fa-stack-1x fa-inverse"></i>
                      </span>
                      <span className="sr-only">Email</span>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="https://chat.whatsapp.com/JMUyMXHGgXxBl9mI4NOWub?s=cl&p=i&ilr=0" target="_blank" rel="noopener noreferrer" title="WhatsApp Community">
                      <span className="fa-stack fa-lg" aria-hidden="true">
                        <i className="fas fa-circle fa-stack-2x"></i>
                        <i className="fab fa-whatsapp fa-stack-1x fa-inverse"></i>
                      </span>
                      <span className="sr-only">WhatsApp</span>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="https://www.instagram.com/lagrangians2lasers/" target="_blank" rel="noopener noreferrer" title="Instagram">
                      <span className="fa-stack fa-lg" aria-hidden="true">
                        <i className="fas fa-circle fa-stack-2x"></i>
                        <i className="fab fa-instagram fa-stack-1x fa-inverse"></i>
                      </span>
                      <span className="sr-only">Instagram</span>
                    </a>
                  </li>
                </ul>
                <p className="copyright text-muted">
                  Lagrangians to Lasers | Physics Journal Club, IISER Pune
                </p>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
