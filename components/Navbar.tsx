"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`navbar navbar-expand-xl fixed-top navbar-custom ${
        isScrolled ? "top-nav-short" : "top-nav-regular"
      }`}
    >
      <Link href="/" className="navbar-brand navbar-brand-logo">
        <img
          className="logo-large"
          alt="Lagrangians to Lasers Logo"
          src="/assets/img/new_ltl1333.png"
        />
        <img
          className="logo-small"
          alt="Lagrangians to Lasers Logo"
          src="/assets/img/new_l2l.png"
        />
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        aria-controls="main-navbar"
        aria-expanded={mobileMenuOpen}
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div
        className={`collapse navbar-collapse ${mobileMenuOpen ? "show" : ""}`}
        id="main-navbar"
      >
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link
              className="nav-link"
              href="/aboutL2L"
              onClick={() => setMobileMenuOpen(false)}
            >
              About L2L
            </Link>
          </li>
          <li
            className={`nav-item dropdown ${dropdownOpen ? "show" : ""}`}
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              onClick={(e) => {
                e.preventDefault();
                setDropdownOpen(!dropdownOpen);
              }}
              aria-haspopup="true"
              aria-expanded={dropdownOpen}
            >
              Catalogue
            </a>
            <div
              className={`dropdown-menu dropdown-menu-right ${
                dropdownOpen ? "show" : ""
              }`}
              aria-labelledby="navbarDropdown"
            >
              <Link
                className="dropdown-item"
                href="/pics"
                onClick={() => {
                  setDropdownOpen(false);
                  setMobileMenuOpen(false);
                }}
              >
                Gallery
              </Link>
              <Link
                className="dropdown-item"
                href="/jan23"
                onClick={() => {
                  setDropdownOpen(false);
                  setMobileMenuOpen(false);
                }}
              >
                Jan &apos;23
              </Link>
              <Link
                className="dropdown-item"
                href="/aug23"
                onClick={() => {
                  setDropdownOpen(false);
                  setMobileMenuOpen(false);
                }}
              >
                Aug &apos;23
              </Link>
              <Link
                className="dropdown-item"
                href="/jan24"
                onClick={() => {
                  setDropdownOpen(false);
                  setMobileMenuOpen(false);
                }}
              >
                Jan &apos;24
              </Link>
              <Link
                className="dropdown-item"
                href="/aug24"
                onClick={() => {
                  setDropdownOpen(false);
                  setMobileMenuOpen(false);
                }}
              >
                Aug &apos;24
              </Link>
              <Link
                className="dropdown-item"
                href="/jan25"
                onClick={() => {
                  setDropdownOpen(false);
                  setMobileMenuOpen(false);
                }}
              >
                Jan &apos;25
              </Link>
              <Link
                className="dropdown-item"
                href="/aug26"
                onClick={() => {
                  setDropdownOpen(false);
                  setMobileMenuOpen(false);
                }}
              >
                Aug &apos;26
              </Link>
            </div>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link"
              href="/about-organizer"
              onClick={() => setMobileMenuOpen(false)}
            >
              About organizer
            </Link>
          </li>
        </ul>
      </div>
      <div className="avatar-container">
        <div className="avatar-img-border">
          <Link href="/">
            <img
              alt="Navigation bar avatar"
              className="avatar-img"
              src="/assets/img/new_logo.jpeg"
            />
          </Link>
        </div>
      </div>
    </nav>
  );
}
