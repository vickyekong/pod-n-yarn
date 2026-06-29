"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon, Search } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { primaryNavLinks } from "@/data/site";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";
import { useTheme } from "@/components/layout/ThemeProvider";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const isHome = pathname === "/";
  const isTransparent = isHome && !scrolled && !isOpen;
  const logoTheme = isTransparent && theme === "light" ? "dark" : "light";

  return (
    <header
      className={cn(
        "fixed top-0 right-0 left-0 z-50 transition-all duration-500",
        isTransparent
          ? "bg-transparent"
          : "border-b border-border/60 bg-background/90 shadow-sm backdrop-blur-xl"
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3.5 md:px-6 lg:px-8">
        <Logo theme={logoTheme} />

        <div className="hidden items-center gap-0.5 xl:flex">
          {primaryNavLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                pathname === link.href
                  ? "text-accent"
                  : isTransparent
                    ? "text-white/80 hover:text-white"
                    : "text-foreground/70 hover:text-accent"
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <Link
            href="/episodes"
            className={cn(
              "hidden rounded-full p-2 transition-colors sm:inline-flex",
              isTransparent
                ? "text-white/60 hover:bg-white/10 hover:text-white"
                : "text-foreground/60 hover:bg-muted hover:text-foreground"
            )}
            aria-label="Search episodes"
          >
            <Search className="h-5 w-5" />
          </Link>
          <button
            onClick={toggleTheme}
            className={cn(
              "rounded-full p-2 transition-colors",
              isTransparent
                ? "text-white/60 hover:bg-white/10 hover:text-white"
                : "text-foreground/60 hover:bg-muted hover:text-foreground"
            )}
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>
          <Button
            href="/episodes"
            variant="accent"
            size="sm"
            className="hidden sm:inline-flex"
          >
            Watch Latest
          </Button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={cn(
              "rounded-lg p-2 transition-colors xl:hidden",
              isTransparent
                ? "text-white hover:bg-white/10"
                : "text-foreground hover:bg-muted"
            )}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-border/60 bg-background xl:hidden"
          >
            <div className="flex flex-col gap-1 px-4 py-4">
              {primaryNavLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "rounded-lg px-4 py-3 text-base font-medium transition-colors",
                    pathname === link.href
                      ? "bg-muted text-accent"
                      : "text-foreground/70 hover:bg-muted hover:text-foreground"
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <Button href="/episodes" variant="accent" className="mt-2 w-full">
                Watch Latest Episode
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
