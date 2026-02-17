import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";

// Locales soportados
export const locales = ["en", "es"] as const;
export type Locale = (typeof locales)[number];

export default getRequestConfig(async ({ locale }) => {
  // Validar que el locale sea válido
  if (!locale || !locales.includes(locale as Locale)) {
    notFound();
  }

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default,
  } as any;  // Workaround for next-intl typing issue
});
