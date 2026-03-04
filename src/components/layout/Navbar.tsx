"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logos/eskadia-logo-light.png"
              alt="Eskadia"
              width={140}
              height={36}
              className="h-8 w-auto"
              priority
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
                  className="min-w-[260px] bg-card/95 backdrop-blur-xl border border-border rounded-lg p-2 shadow-xl"
                  sideOffset={5}
                >
                  <DropdownMenu.Item asChild>
                    <Link
                      href="/crm"
                      className="flex flex-col px-4 py-3 rounded-md hover:bg-card-hover transition-colors cursor-pointer outline-none"
                    >
                      <span className="font-semibold text-foreground">
                        Eskadia CRM
                      </span>
                      <span className="text-sm text-muted-foreground">
                        CRM inteligente con IA integrada
                      </span>
                    </Link>
                  </DropdownMenu.Item>

                  <DropdownMenu.Item asChild>
                    <Link
                      href="/automatizacion"
                      className="flex flex-col px-4 py-3 rounded-md hover:bg-card-hover transition-colors cursor-pointer outline-none"
                    >
                      <span className="font-semibold text-foreground">
                        Eskadia Automatización
                      </span>
                      <span className="text-sm text-muted-foreground">
                        Flujos de trabajo sin código
                      </span>
                    </Link>
                  </DropdownMenu.Item>

                  <DropdownMenu.Item asChild>
                    <Link
                      href="/ai"
                      className="flex flex-col px-4 py-3 rounded-md hover:bg-card-hover transition-colors cursor-pointer outline-none"
                    >
                      <span className="font-semibold text-foreground">
                        Eskadia AI
                      </span>
                      <span className="text-sm text-muted-foreground">
                        Inteligencia artificial aplicada
                      </span>
                    </Link>
                  </DropdownMenu.Item>

                  <DropdownMenu.Item asChild>
                    <Link
                      href="/consultoria"
                      className="flex flex-col px-4 py-3 rounded-md hover:bg-card-hover transition-colors cursor-pointer outline-none"
                    >
                      <span className="font-semibold text-foreground">
                        Eskadia Consultoría
                      </span>
                      <span className="text-sm text-muted-foreground">
                        Auditoría e implementación de procesos
                      </span>
                    </Link>
                  </DropdownMenu.Item>

                  <DropdownMenu.Item asChild>
                    <Link
                      href="/academy"
                      className="flex flex-col px-4 py-3 rounded-md hover:bg-card-hover transition-colors cursor-pointer outline-none"
                    >
                      <span className="font-semibold text-foreground">
                        Eskadia Academy
                      </span>
                      <span className="text-sm text-muted-foreground">
                        Formación en automatización y n8n
                      </span>
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
                Eskadia CRM
              </Link>
              <Link
                href="/automatizacion"
                className="block px-4 py-2 text-foreground hover:bg-card-hover rounded-lg transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Eskadia Automatización
              </Link>
              <Link
                href="/ai"
                className="block px-4 py-2 text-foreground hover:bg-card-hover rounded-lg transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Eskadia AI
              </Link>
              <Link
                href="/consultoria"
                className="block px-4 py-2 text-foreground hover:bg-card-hover rounded-lg transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Eskadia Consultoría
              </Link>
              <Link
                href="/academy"
                className="block px-4 py-2 text-foreground hover:bg-card-hover rounded-lg transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Eskadia Academy
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
