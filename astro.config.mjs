import { defineConfig } from "astro/config";
const base = process.env.ASTRO_BASE || "/";
export default defineConfig({ output: "static", site: process.env.SITE_URL || "https://shop.veia.com.mx", base });
