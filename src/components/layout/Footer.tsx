import Link from "next/link";

import { Github, Twitter, Linkedin, Mail } from "lucide-react";

const footerLinks = {
  products: {
    title: "Productos",
    links: [
      { label: "Eskadia CRM", href: "/crm" },
      { label: "Eskadia Automatizaciones", href: "/automatizacion" },
      { label: "Eskadia Consultoría", href: "/consultoria" },
    ],
  },
  company: {
    title: "Empresa",
    links: [
      { label: "Nosotros", href: "/about" },
      { label: "Precios", href: "/pricing" },
      { label: "Blog", href: "/blog" },
      { label: "Contacto", href: "/contact" },
    ],
  },
  resources: {
    title: "Recursos",
    links: [
      { label: "Documentación", href: "/docs" },
      { label: "Soporte", href: "/support" },
      { label: "Comunidad", href: "/community" },
      { label: "Estado del servicio", href: "/status" },
    ],
  },
  legal: {
    title: "Legal",
    links: [
      { label: "Política de privacidad", href: "/privacy" },
      { label: "Términos de servicio", href: "/terms" },
      { label: "Política de cookies", href: "/cookies" },
      { label: "GDPR", href: "/gdpr" },
    ],
  },
};

const socialLinks = [
  { icon: Twitter, href: "https://twitter.com/eskadia_ai", label: "Twitter" },
  { icon: Github, href: "https://github.com/eskadia", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/company/eskadia-ai", label: "LinkedIn" },
  { icon: Mail, href: "mailto:hola@eskadia.ai", label: "Email" },
];

export function Footer() {
  return (
    <footer className="bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Products Column */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">
              {footerLinks.products.title}
            </h3>
            <ul className="space-y-3">
              {footerLinks.products.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">
              {footerLinks.company.title}
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">
              {footerLinks.resources.title}
            </h3>
            <ul className="space-y-3">
              {footerLinks.resources.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Column */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">
              {footerLinks.legal.title}
            </h3>
            <ul className="space-y-3">
              {footerLinks.legal.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          {/* Logo + Copyright */}
          <div className="flex items-center space-x-3">
            <img
              src="/logos/eskadia-letra-blanca.svg"
              alt="Eskadia"
              className="h-40 w-40"
            />
            <span className="text-muted-foreground text-sm">
              © {new Date().getFullYear()} Todos los derechos reservados.
            </span>
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-6">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
