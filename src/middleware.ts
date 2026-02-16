import createMiddleware from "next-intl/middleware";
import { locales } from "./i18n";

export default createMiddleware({
  // Lista de locales soportados
  locales,

  // Locale por defecto
  defaultLocale: "es",
});

export const config = {
  // Matcher para aplicar el middleware a todas las rutas excepto archivos estáticos
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
