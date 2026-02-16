"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import { Globe } from "lucide-react";

export function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const switchLanguage = (newLocale: string) => {
    // Reemplazar el locale actual en la ruta
    const newPath = pathname.replace(`/${locale}`, `/${newLocale}`);
    router.push(newPath);
  };

  return (
    <div className="relative group">
      <button
        className="flex items-center gap-2 px-3 py-2 text-foreground hover:text-primary transition-colors rounded-lg hover:bg-card-hover"
        aria-label="Change language"
      >
        <Globe className="w-4 h-4" />
        <span className="text-sm font-semibold uppercase">{locale}</span>
      </button>

      {/* Dropdown */}
      <div className="absolute right-0 mt-2 w-32 bg-card/95 backdrop-blur-xl border border-border rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
        <button
          onClick={() => switchLanguage("es")}
          className={`w-full px-4 py-2 text-left hover:bg-card-hover transition-colors first:rounded-t-lg ${
            locale === "es" ? "text-primary font-semibold" : ""
          }`}
        >
          🇪🇸 Español
        </button>
        <button
          onClick={() => switchLanguage("en")}
          className={`w-full px-4 py-2 text-left hover:bg-card-hover transition-colors last:rounded-b-lg ${
            locale === "en" ? "text-primary font-semibold" : ""
          }`}
        >
          🇬🇧 English
        </button>
      </div>
    </div>
  );
}
