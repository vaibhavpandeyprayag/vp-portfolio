"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { profile } from "@/data/profile";

const navLinks = [
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav
      className="sticky top-0 z-50 border-b border-border bg-card/80 backdrop-blur-md"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a
          href="#"
          className="text-lg font-bold text-primary-text transition-colors hover:text-accent-primary focus-visible:ring-2 focus-visible:ring-accent-primary focus-visible:ring-offset-2 rounded"
        >
          {profile.name}
        </a>

        <div className="hidden items-center gap-1 md:flex" role="menubar">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              role="menuitem"
              className="rounded-lg px-3 py-2 text-sm font-medium text-secondary-text transition-colors hover:bg-surface hover:text-primary-text focus-visible:bg-surface focus-visible:text-primary-text"
            >
              {link.label}
            </a>
          ))}
          <div className="ml-2">
            <ThemeToggle />
          </div>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            className="flex items-center justify-center w-9 h-9 rounded-lg border border-border bg-card text-secondary-text transition-colors hover:bg-card-hover hover:text-primary-text"
          >
            {mobileOpen ? (
              <X className="h-4 w-4" aria-hidden="true" />
            ) : (
              <Menu className="h-4 w-4" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        role="menu"
        className={`border-t border-border bg-card px-4 pb-4 pt-2 md:hidden transition-all duration-200 ease-in-out ${
          mobileOpen
            ? "max-h-96 opacity-100"
            : "max-h-0 overflow-hidden opacity-0 border-t-0 pt-0 pb-0"
        }`}
      >
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            role="menuitem"
            onClick={() => setMobileOpen(false)}
            className="block rounded-lg px-3 py-2.5 text-sm font-medium text-secondary-text transition-colors hover:bg-surface hover:text-primary-text"
          >
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
