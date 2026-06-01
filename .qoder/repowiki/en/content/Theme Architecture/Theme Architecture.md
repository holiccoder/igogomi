# Theme Architecture

<cite>
**Referenced Files in This Document**
- [settings_schema.json](file://config/settings_schema.json)
- [theme.liquid](file://layout/theme.liquid)
- [main.mjs](file://assets/main.mjs)
- [main.css](file://assets/main.css)
- [header.liquid](file://sections/header.liquid)
- [footer.liquid](file://sections/footer.liquid)
- [theme-css-colors.liquid](file://snippets/theme-css-colors.liquid)
- [theme-css-typography.liquid](file://snippets/theme-css-typography.liquid)
- [theme-css-layout.liquid](file://snippets/theme-css-layout.liquid)
- [section-attrs.liquid](file://snippets/section-attrs.liquid)
- [cart-modal-item.liquid](file://snippets/cart-modal-item.liquid)
- [product-card.liquid](file://snippets/product-card.liquid)
</cite>

## Table of Contents
1. [Introduction](#introduction)
2. [Project Structure](#project-structure)
3. [Core Components](#core-components)
4. [Architecture Overview](#architecture-overview)
5. [Detailed Component Analysis](#detailed-component-analysis)
6. [Dependency Analysis](#dependency-analysis)
7. [Performance Considerations](#performance-considerations)
8. [Troubleshooting Guide](#troubleshooting-guide)
9. [Conclusion](#conclusion)

## Introduction
This document describes the architectural design of the Igogomi theme, focusing on its component-based system, section-based layout, snippet reusability, and template organization. It explains how Shopify’s Liquid rendering integrates with a modern JavaScript enhancement layer, how configuration drives design and behavior, and how the asset pipeline and CSS variable system enable a flexible, maintainable, and progressively enhanced storefront.

## Project Structure
The theme follows a classic Shopify theme structure with clear separation of concerns:
- Layouts define the shell and global hooks for sections, modals, and scripts.
- Sections encapsulate reusable page regions (header, footer, collections, products).
- Snippets provide small, composable UI building blocks and configuration-driven styles.
- Templates map pages to layouts and sections.
- Assets include the CSS framework, a modern JS module bundle, and vendor scripts.

```mermaid
graph TB
subgraph "Layout"
L["theme.liquid"]
end
subgraph "Sections"
S1["header.liquid"]
S2["footer.liquid"]
S3["...other sections..."]
end
subgraph "Snippets"
SN1["theme-css-colors.liquid"]
SN2["theme-css-typography.liquid"]
SN3["theme-css-layout.liquid"]
SN4["section-attrs.liquid"]
SN5["cart-modal-item.liquid"]
SN6["product-card.liquid"]
end
subgraph "Assets"
A1["main.css"]
A2["main.mjs"]
A3["vendor.mjs"]
end
subgraph "Config"
C1["settings_schema.json"]
end
L --> S1
L --> S2
L --> S3
L --> SN1
L --> SN2
L --> SN3
L --> A1
L --> A2
L --> A3
S1 --> SN4
S2 --> SN4
SN6 --> SN5
C1 --> SN1
C1 --> SN2
C1 --> SN3
```

**Diagram sources**
- [theme.liquid:1-258](file://layout/theme.liquid#L1-L258)
- [header.liquid:1-555](file://sections/header.liquid#L1-L555)
- [footer.liquid:1-325](file://sections/footer.liquid#L1-L325)
- [theme-css-colors.liquid:1-147](file://snippets/theme-css-colors.liquid#L1-L147)
- [theme-css-typography.liquid:1-118](file://snippets/theme-css-typography.liquid#L1-L118)
- [theme-css-layout.liquid:1-20](file://snippets/theme-css-layout.liquid#L1-L20)
- [section-attrs.liquid:1-23](file://snippets/section-attrs.liquid#L1-L23)
- [cart-modal-item.liquid:1-95](file://snippets/cart-modal-item.liquid#L1-L95)
- [product-card.liquid:1-195](file://snippets/product-card.liquid#L1-L195)
- [settings_schema.json:1-1158](file://config/settings_schema.json#L1-L1158)

**Section sources**
- [theme.liquid:1-258](file://layout/theme.liquid#L1-L258)
- [settings_schema.json:1-1158](file://config/settings_schema.json#L1-L1158)

## Core Components
- Settings-driven configuration: The settings schema defines appearance, colors, typography, layout, and product card options. These drive CSS variables and runtime behavior.
- Layout shell: The theme layout wires up global assets, renders configuration-driven CSS snippets, and hosts sections and modals.
- Sections: Header and footer are prominent examples of sections that render navigation, cart, localization controls, and content blocks.
- Snippets: Small, composable pieces for styling, attributes, cart items, and product cards.
- Asset pipeline: Tailwind-based CSS and a modern ES module bundle provide progressive enhancement and animations.

**Section sources**
- [settings_schema.json:1-1158](file://config/settings_schema.json#L1-L1158)
- [theme.liquid:1-258](file://layout/theme.liquid#L1-L258)
- [header.liquid:1-555](file://sections/header.liquid#L1-L555)
- [footer.liquid:1-325](file://sections/footer.liquid#L1-L325)
- [theme-css-colors.liquid:1-147](file://snippets/theme-css-colors.liquid#L1-L147)
- [theme-css-typography.liquid:1-118](file://snippets/theme-css-typography.liquid#L1-L118)
- [theme-css-layout.liquid:1-20](file://snippets/theme-css-layout.liquid#L1-L20)
- [section-attrs.liquid:1-23](file://snippets/section-attrs.liquid#L1-L23)
- [cart-modal-item.liquid:1-95](file://snippets/cart-modal-item.liquid#L1-L95)
- [product-card.liquid:1-195](file://snippets/product-card.liquid#L1-L195)

## Architecture Overview
The architecture blends Shopify’s server-rendered Liquid with a client-side enhancement layer:
- Liquid renders the initial HTML and configuration-driven CSS variables.
- JavaScript enhances interactivity, animations, modals, carousels, and AJAX-driven updates.
- Progressive enhancement ensures core functionality remains intact without JavaScript.

```mermaid
sequenceDiagram
participant Browser as "Browser"
participant Layout as "theme.liquid"
participant Snips as "CSS Snippets"
participant Sections as "Sections"
participant JS as "main.mjs"
participant CSS as "main.css"
Browser->>Layout : Request page
Layout->>Snips : Render theme-css-* snippets
Layout->>Sections : Render header/footer and overlays
Layout->>JS : Load module scripts
Layout->>CSS : Load main.css
JS->>Browser : Enhance UI, bind events, manage modals
Note over Layout,JS : Initial render via Liquid<br/>Enhanced via JS
```

**Diagram sources**
- [theme.liquid:1-258](file://layout/theme.liquid#L1-L258)
- [main.mjs:1-60](file://assets/main.mjs#L1-L60)
- [main.css:1-800](file://assets/main.css#L1-L800)
- [theme-css-colors.liquid:1-147](file://snippets/theme-css-colors.liquid#L1-L147)
- [theme-css-typography.liquid:1-118](file://snippets/theme-css-typography.liquid#L1-L118)
- [theme-css-layout.liquid:1-20](file://snippets/theme-css-layout.liquid#L1-L20)

## Detailed Component Analysis

### Settings Schema and Configuration-Driven Design
The settings schema defines:
- Appearance: corner radii, input styles, icons, and shade intensity.
- Colors: base palette, button variants, headers/footers, product badges, alerts, and extras.
- Typography: fonts, weights, letter spacing, and text transforms.
- Layout: page width and spacing between sections/blocks.
- Product card: visibility toggles and quick-add behavior.

These settings feed CSS variables and runtime flags that shape the UI globally.

```mermaid
flowchart TD
Settings["settings_schema.json"] --> Colors["theme-css-colors.liquid"]
Settings --> Typography["theme-css-typography.liquid"]
Settings --> LayoutVars["theme-css-layout.liquid"]
Colors --> CSSVars["CSS Variables in :root"]
Typography --> CSSVars
LayoutVars --> CSSVars
CSSVars --> Styles["main.css selectors"]
```

**Diagram sources**
- [settings_schema.json:1-1158](file://config/settings_schema.json#L1-L1158)
- [theme-css-colors.liquid:1-147](file://snippets/theme-css-colors.liquid#L1-L147)
- [theme-css-typography.liquid:1-118](file://snippets/theme-css-typography.liquid#L1-L118)
- [theme-css-layout.liquid:1-20](file://snippets/theme-css-layout.liquid#L1-L20)
- [main.css:1-800](file://assets/main.css#L1-L800)

**Section sources**
- [settings_schema.json:1-1158](file://config/settings_schema.json#L1-L1158)
- [theme-css-colors.liquid:1-147](file://snippets/theme-css-colors.liquid#L1-L147)
- [theme-css-typography.liquid:1-118](file://snippets/theme-css-typography.liquid#L1-L118)
- [theme-css-layout.liquid:1-20](file://snippets/theme-css-layout.liquid#L1-L20)
- [main.css:1-800](file://assets/main.css#L1-L800)

### Layout Shell and Global Hooks
The theme layout:
- Renders global header and footer snippets.
- Includes configuration-driven CSS snippets for colors, typography, layout, appearance, and icons.
- Loads vendor and main JS modules.
- Provides global modals and overlays.
- Exposes runtime configuration (flags, routes, translations) to the client.

```mermaid
graph TB
TL["theme.liquid"] --> HC["Render header/footer snippets"]
TL --> CSS["Render theme-css-* snippets"]
TL --> JS["Load vendor.mjs + main.mjs"]
TL --> MOD["Global modals and overlays"]
TL --> CFG["Expose runtime settings/routes"]
```

**Diagram sources**
- [theme.liquid:1-258](file://layout/theme.liquid#L1-L258)

**Section sources**
- [theme.liquid:1-258](file://layout/theme.liquid#L1-L258)

### Header Section
The header section:
- Computes dynamic settings (e.g., transparent header colors, cart drawer behavior).
- Renders logo, navigation, localization dropdowns, search trigger, and cart.
- Integrates with sticky header behavior and mobile menu.
- Emits structured data for SEO.

```mermaid
sequenceDiagram
participant Header as "header.liquid"
participant Nav as "Navigation/Dropdowns"
participant Cart as "Cart Trigger"
participant Sticky as "Sticky Header"
participant Mobile as "Mobile Menu"
Header->>Nav : Render menus and mega menus
Header->>Cart : Render cart with bubble count
Header->>Sticky : Configure sticky behavior
Header->>Mobile : Render mobile menu trigger
```

**Diagram sources**
- [header.liquid:1-555](file://sections/header.liquid#L1-L555)

**Section sources**
- [header.liquid:1-555](file://sections/header.liquid#L1-L555)

### Footer Section
The footer section:
- Renders configurable blocks (links, text, newsletter).
- Supports country/language selectors and social/payment icons.
- Uses section attributes and background color variables.

```mermaid
flowchart LR
Footer["footer.liquid"] --> Blocks["Blocks: links/text/newsletter"]
Footer --> Locales["Country/Language Selectors"]
Footer --> Social["Social/Payment Icons"]
Footer --> Attrs["section-attrs.liquid"]
```

**Diagram sources**
- [footer.liquid:1-325](file://sections/footer.liquid#L1-L325)
- [section-attrs.liquid:1-23](file://snippets/section-attrs.liquid#L1-L23)

**Section sources**
- [footer.liquid:1-325](file://sections/footer.liquid#L1-L325)
- [section-attrs.liquid:1-23](file://snippets/section-attrs.liquid#L1-L23)

### Snippet-Based Composition
- theme-css-colors.liquid: Defines CSS variables from settings and generates foreground colors.
- theme-css-typography.liquid: Injects font faces and typography variables.
- theme-css-layout.liquid: Applies layout constraints and conditional styles.
- section-attrs.liquid: Applies background/text/heading color variables to sections.
- cart-modal-item.liquid: Builds a cart line item UI with image, properties, pricing, and quantity control.
- product-card.liquid: Renders product preview with badges, ratings, vendor, pricing, and quick add.

```mermaid
classDiagram
class ThemeCSSColors {
+reads settings
+generates CSS vars
}
class ThemeCSSTypography {
+injects font faces
+sets typography vars
}
class ThemeCSSLayout {
+sets container width
+conditional styles
}
class SectionAttrs {
+applies bg/text/heading vars
}
class CartModalItem {
+renders line item UI
}
class ProductCard {
+renders product preview
+badges, ratings, quick add
}
ThemeCSSColors --> MainCSS["main.css"]
ThemeCSSTypography --> MainCSS
ThemeCSSLayout --> MainCSS
SectionAttrs --> MainCSS
CartModalItem --> MainCSS
ProductCard --> MainCSS
```

**Diagram sources**
- [theme-css-colors.liquid:1-147](file://snippets/theme-css-colors.liquid#L1-L147)
- [theme-css-typography.liquid:1-118](file://snippets/theme-css-typography.liquid#L1-L118)
- [theme-css-layout.liquid:1-20](file://snippets/theme-css-layout.liquid#L1-L20)
- [section-attrs.liquid:1-23](file://snippets/section-attrs.liquid#L1-L23)
- [cart-modal-item.liquid:1-95](file://snippets/cart-modal-item.liquid#L1-L95)
- [product-card.liquid:1-195](file://snippets/product-card.liquid#L1-L195)
- [main.css:1-800](file://assets/main.css#L1-L800)

**Section sources**
- [theme-css-colors.liquid:1-147](file://snippets/theme-css-colors.liquid#L1-L147)
- [theme-css-typography.liquid:1-118](file://snippets/theme-css-typography.liquid#L1-L118)
- [theme-css-layout.liquid:1-20](file://snippets/theme-css-layout.liquid#L1-L20)
- [section-attrs.liquid:1-23](file://snippets/section-attrs.liquid#L1-L23)
- [cart-modal-item.liquid:1-95](file://snippets/cart-modal-item.liquid#L1-L95)
- [product-card.liquid:1-195](file://snippets/product-card.liquid#L1-L195)
- [main.css:1-800](file://assets/main.css#L1-L800)

### JavaScript Enhancement Layer
The main module provides:
- Custom elements for modals, carousels, dropdowns, galleries, and media players.
- Utility functions for animations, intersection observers, focus traps, and section updates.
- Cart interactions, notifications, and lightweight state preservation during AJAX updates.
- Responsive helpers and breakpoint-aware behavior.

```mermaid
sequenceDiagram
participant DOM as "DOM"
participant CE as "Custom Elements"
participant Util as "Utilities"
participant Cart as "Cart API"
DOM->>CE : Initialize x-modal, media-gallery, dropdown-element
CE->>Util : Use animations, focus-trap, intersection observer
CE->>Cart : Add to cart, change/update quantities
Cart-->>CE : Update sections and UI
CE-->>DOM : Show notifications, update state
```

**Diagram sources**
- [main.mjs:1-60](file://assets/main.mjs#L1-L60)

**Section sources**
- [main.mjs:1-60](file://assets/main.mjs#L1-L60)

## Dependency Analysis
- Layout depends on configuration-driven snippets to inject CSS variables.
- Sections depend on shared snippets for consistent styling and attributes.
- JavaScript depends on DOM structure produced by Liquid and exposes runtime configuration to the browser.
- CSS relies on CSS variables set by snippets and layout.

```mermaid
graph LR
Settings["settings_schema.json"] --> SnipColors["theme-css-colors.liquid"]
Settings --> SnipTypography["theme-css-typography.liquid"]
Settings --> SnipLayout["theme-css-layout.liquid"]
SnipColors --> Layout["theme.liquid"]
SnipTypography --> Layout
SnipLayout --> Layout
Layout --> Sections["header.liquid / footer.liquid"]
Sections --> SnipAttrs["section-attrs.liquid"]
Layout --> CSS["main.css"]
Layout --> JS["main.mjs"]
JS --> DOM["Enhanced DOM"]
```

**Diagram sources**
- [settings_schema.json:1-1158](file://config/settings_schema.json#L1-L1158)
- [theme-css-colors.liquid:1-147](file://snippets/theme-css-colors.liquid#L1-L147)
- [theme-css-typography.liquid:1-118](file://snippets/theme-css-typography.liquid#L1-L118)
- [theme-css-layout.liquid:1-20](file://snippets/theme-css-layout.liquid#L1-L20)
- [theme.liquid:1-258](file://layout/theme.liquid#L1-L258)
- [header.liquid:1-555](file://sections/header.liquid#L1-L555)
- [footer.liquid:1-325](file://sections/footer.liquid#L1-L325)
- [section-attrs.liquid:1-23](file://snippets/section-attrs.liquid#L1-L23)
- [main.css:1-800](file://assets/main.css#L1-L800)
- [main.mjs:1-60](file://assets/main.mjs#L1-L60)

**Section sources**
- [settings_schema.json:1-1158](file://config/settings_schema.json#L1-L1158)
- [theme-css-colors.liquid:1-147](file://snippets/theme-css-colors.liquid#L1-L147)
- [theme-css-typography.liquid:1-118](file://snippets/theme-css-typography.liquid#L1-L118)
- [theme-css-layout.liquid:1-20](file://snippets/theme-css-layout.liquid#L1-L20)
- [theme.liquid:1-258](file://layout/theme.liquid#L1-L258)
- [header.liquid:1-555](file://sections/header.liquid#L1-L555)
- [footer.liquid:1-325](file://sections/footer.liquid#L1-L325)
- [section-attrs.liquid:1-23](file://snippets/section-attrs.liquid#L1-L23)
- [main.css:1-800](file://assets/main.css#L1-L800)
- [main.mjs:1-60](file://assets/main.mjs#L1-L60)

## Performance Considerations
- CSS variables minimize cascade and reduce repaint costs; layout and typography are computed once per setting change.
- Lazy-loading and LQIP placeholders improve perceived performance for images.
- Intersection observers and throttled handlers optimize scroll and resize handling.
- Conditional CSS injection avoids unnecessary styles.
- Progressive enhancement ensures minimal JS overhead and graceful degradation.

[No sources needed since this section provides general guidance]

## Troubleshooting Guide
- If UI flickers or transitions appear before JS loads, confirm the “no-js” class is removed and CSS animations are gated behind a JS class.
- If modals or carousels do not open, verify the modal triggers and custom elements are initialized after DOM hydration.
- If cart actions fail, check network responses and ensure routes are populated in the layout script block.
- If typography or colors look incorrect, validate the settings schema entries and that the corresponding CSS snippets are rendered.

**Section sources**
- [theme.liquid:1-258](file://layout/theme.liquid#L1-L258)
- [main.mjs:1-60](file://assets/main.mjs#L1-L60)

## Conclusion
The Igogomi theme employs a robust, configuration-driven, component-based architecture. Liquid constructs the semantic structure and configuration-driven styles, while JavaScript enhances interactivity and UX without compromising accessibility or functionality. The modular design of sections, snippets, and assets enables easy customization, extension, and maintenance across diverse storefront needs.