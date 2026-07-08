# IGOGOMI Shopify Theme

live website:

https://igogomi.com

## Project overview

This repository contains the storefront theme for **igogomi.com**.  
It is a Shopify Online Store 2.0 theme customized on top of **Essence v3.1.0** (Alloy Themes), with brand-specific product pages, merchandising sections, and integrations for multiple page-builder ecosystems.

## What this project includes

- **Theme stack:** Shopify Liquid, JSON templates, CSS, and modular JavaScript (`.mjs`).
- **Core storefront architecture:** layout + sections + snippets + JSON templates.
- **Custom commerce UX:** product-focused sections (hero, specs, media, sticky add-to-cart, related/recently viewed, etc.).
- **Page-builder compatibility:** files for BEAE, EComposer/Ecom, GemPages, PageFly, Pagetify, and LayoutHub.
- **Localization support:** multiple locale files in `locales/` (including `en.default`, `de`, `es`, `fr`, `it`, `nl`).

## Repository structure

| Path | Purpose |
| --- | --- |
| `layout/` | Global HTML shells (main theme layout and builder-specific layouts). |
| `templates/` | Page templates (`.json`/`.liquid`) that map sections to routes. |
| `sections/` | Reusable, configurable storefront sections. |
| `snippets/` | Shared Liquid partials used by layouts and sections. |
| `assets/` | Theme CSS/JS bundles, utilities, and static assets. |
| `config/` | Theme settings schema and live settings data. |
| `locales/` | Translations for storefront and theme-editor labels. |

## How rendering works (high level)

1. `layout/theme.liquid` initializes global styles/scripts and shared runtime data.
2. Shopify selects a template from `templates/` for the requested route.
3. The template composes one or more sections from `sections/`.
4. Sections reuse common snippets from `snippets/` and assets from `assets/`.

## Important notes

- Some template/config files are auto-generated or updated by the Shopify Theme Editor.
- Treat `config/settings_data.json` and generated template JSON files carefully, as admin changes can overwrite manual edits.
