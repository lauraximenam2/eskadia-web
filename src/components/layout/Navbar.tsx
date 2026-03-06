"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

import { ChevronDown, Menu, X } from "lucide-react";
import { MagneticButton, ShimmerButton } from "@/components/effects";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? "bg-background/80 backdrop-blur-xl border-b border-border shadow-lg"
        : "bg-transparent"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <img
              src="/logos/eskadia-letra-blanca.svg"
              alt="Eskadia"
              className="h-7 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Products Dropdown */}
            <DropdownMenu.Root>
              <DropdownMenu.Trigger asChild>
                <button className="flex items-center space-x-1 text-foreground hover:text-primary transition-colors">
                  <span>Productos</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
              </DropdownMenu.Trigger>

              <DropdownMenu.Portal>
                <DropdownMenu.Content
                  className="min-w-[300px] bg-card/95 backdrop-blur-xl border border-border rounded-xl p-2 shadow-xl"
                  sideOffset={8}
                >
                  <DropdownMenu.Item asChild>
                    <Link
                      href="/crm"
                      className="flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-card-hover transition-colors cursor-pointer outline-none group"
                    >
                      <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                        <img src="/logos/logo-crm.svg" alt="CRM" className="w-6 h-6" />
                      </div>
                      <div className="flex flex-col">
                        <span className="font-semibold text-foreground text-sm">CRM</span>
                        <span className="text-xs text-muted-foreground">CRM inteligente con IA integrada</span>
                      </div>
                    </Link>
                  </DropdownMenu.Item>

                  <DropdownMenu.Item asChild>
                    <Link
                      href="/automatizacion"
                      className="flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-card-hover transition-colors cursor-pointer outline-none group"
                    >
                      <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                        <img src="/logos/logo-autimatizacion.svg" alt="Automatización" className="w-6 h-6" />
                      </div>
                      <div className="flex flex-col">
                        <span className="font-semibold text-foreground text-sm">Automatización</span>
                        <span className="text-xs text-muted-foreground">Flujos de trabajo a medida</span>
                      </div>
                    </Link>
                  </DropdownMenu.Item>

                  <DropdownMenu.Item asChild>
                    <Link
                      href="/consultoria"
                      className="flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-card-hover transition-colors cursor-pointer outline-none group"
                    >
                      <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                        <img src="/logos/logo-consultoria.svg" alt="Consultoría" className="w-6 h-6" />
                      </div>
                      <div className="flex flex-col">
                        <span className="font-semibold text-foreground text-sm">Consultoría</span>
                        <span className="text-xs text-muted-foreground">Auditoría e implementación de procesos</span>
                      </div>
                    </Link>
                  </DropdownMenu.Item>
                </DropdownMenu.Content>
              </DropdownMenu.Portal>
            </DropdownMenu.Root>

            <Link
              href="/pricing"
              className="text-foreground hover:text-primary transition-colors"
            >
              Precios
            </Link>

            <Link
              href="/about"
              className="text-foreground hover:text-primary transition-colors"
            >
              Nosotros
            </Link>
          </div>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center space-x-4">
            <MagneticButton>
              <Link
                href="/login"
                className="px-4 py-2 text-foreground hover:text-primary transition-colors"
              >
                Iniciar sesión
              </Link>
            </MagneticButton>

            <ShimmerButton shimmerColor="rgba(99, 102, 241, 0.3)">
              <Link
                href="/get-started"
                className="px-6 py-2 bg-primary hover:bg-primary-hover text-white rounded-lg font-semibold transition-colors"
              >
                Empezar gratis
              </Link>
            </ShimmerButton>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden pb-6 pt-2 space-y-4 border-t border-border mt-2">
            <div className="space-y-2">
              <p className="text-sm font-semibold text-muted-foreground px-4">
                Productos
              </p>
              <Link
                href="/crm"
                className="block px-4 py-2 text-foreground hover:bg-card-hover rounded-lg transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                CRM
              </Link>
              <Link
                href="/automatizacion"
                className="block px-4 py-2 text-foreground hover:bg-card-hover rounded-lg transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Automatización
              </Link>
              <Link
                href="/consultoria"
                className="block px-4 py-2 text-foreground hover:bg-card-hover rounded-lg transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Consultoría
              </Link>
            </div>

            <Link
              href="/pricing"
              className="block px-4 py-2 text-foreground hover:bg-card-hover rounded-lg transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Precios
            </Link>

            <Link
              href="/about"
              className="block px-4 py-2 text-foreground hover:bg-card-hover rounded-lg transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Nosotros
            </Link>

            <div className="flex flex-col space-y-2 px-4 pt-4">
              <Link
                href="/login"
                className="px-4 py-2 text-center border border-border rounded-lg hover:bg-card-hover transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Iniciar sesión
              </Link>
              <Link
                href="/get-started"
                className="px-4 py-2 text-center bg-primary hover:bg-primary-hover text-white rounded-lg font-semibold transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Empezar gratis
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
