# JavaScript Framework

<cite>
**Referenced Files in This Document**
- [main.mjs](file://assets/main.mjs)
- [vendor.mjs](file://assets/vendor.mjs)
- [photoswipe.mjs](file://assets/photoswipe.mjs)
- [photoswipe.esm.mjs](file://assets/photoswipe.esm.mjs)
- [beae-69b977da0ba5bf79000588a2.js](file://assets/beae-69b977da0ba5bf79000588a2.js)
- [beae-quickview-default.js](file://assets/beae-quickview-default.js)
- [settings_schema.json](file://config/settings_schema.json)
- [settings_data.json](file://config/settings_data.json)
- [template-modal.liquid](file://snippets/template-modal.liquid)
- [height-observer-script.liquid](file://snippets/height-observer-script.liquid)
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
This document describes the JavaScript framework and modern web components that power the Igogomi theme. It covers the ES6+ module structure, Web Components implementation, asset loading strategy, integration with Shopify’s JavaScript APIs, media carousel systems, interactive elements, event handling patterns, and third-party library integrations such as PhotoSwipe and Model Viewer. It also documents progressive enhancement, accessibility features, and performance optimizations, along with the JavaScript API surface, custom events, and extension points for developers.

## Project Structure
The JavaScript framework is organized around a primary ES module that defines Web Components, utility functions, animations, and integrations. Supporting assets include PhotoSwipe CSS and ESM modules, BEAE-specific scripts for third-party builder integrations, and vendor utilities for prefetching and custom elements polyfills. Configuration files define theme settings and defaults that influence runtime behavior.

```mermaid
graph TB
subgraph "Assets"
A["assets/main.mjs"]
B["assets/vendor.mjs"]
C["assets/photoswipe.mjs"]
D["assets/photoswipe.esm.mjs"]
E["assets/beae-69b977da0ba5bf79000588a2.js"]
F["assets/beae-quickview-default.js"]
end
subgraph "Config"
G["config/settings_schema.json"]
H["config/settings_data.json"]
end
subgraph "Snippets"
I["snippets/template-modal.liquid"]
J["snippets/height-observer-script.liquid"]
end
A --> C
A --> D
A --> I
A --> J
E --> A
F --> A
G --> A
H --> A
```

**Diagram sources**
- [main.mjs](file://assets/main.mjs)
- [vendor.mjs](file://assets/vendor.mjs)
- [photoswipe.mjs](file://assets/photoswipe.mjs)
- [photoswipe.esm.mjs](file://assets/photoswipe.esm.mjs)
- [beae-69b977da0ba5bf79000588a2.js](file://assets/beae-69b977da0ba5bf79000588a2.js)
- [beae-quickview-default.js](file://assets/beae-quickview-default.js)
- [settings_schema.json](file://config/settings_schema.json)
- [settings_data.json](file://config/settings_data.json)
- [template-modal.liquid](file://snippets/template-modal.liquid)
- [height-observer-script.liquid](file://snippets/height-observer-script.liquid)

**Section sources**
- [main.mjs](file://assets/main.mjs)
- [vendor.mjs](file://assets/vendor.mjs)
- [photoswipe.mjs](file://assets/photoswipe.mjs)
- [photoswipe.esm.mjs](file://assets/photoswipe.esm.mjs)
- [beae-69b977da0ba5bf79000588a2.js](file://assets/beae-69b977da0ba5bf79000588a2.js)
- [beae-quickview-default.js](file://assets/beae-quickview-default.js)
- [settings_schema.json](file://config/settings_schema.json)
- [settings_data.json](file://config/settings_data.json)
- [template-modal.liquid](file://snippets/template-modal.liquid)
- [height-observer-script.liquid](file://snippets/height-observer-script.liquid)

## Core Components
The framework centers on a set of custom elements and shared utilities:

- Announcement bar carousel with automatic transitions and manual controls
- Modal system with focus trap, scroll lock, and shadow DOM encapsulation
- Cart form with live updates and optimistic UI
- Media carousel with thumbnails, indicators, and lightbox integration
- Dropdown menus with dynamic positioning and animations
- Faceted filters with live section updates
- Image comparison slider
- Localization form
- Lazy-loading LQIP image wrapper
- Notification banner
- Utility functions for debouncing, throttling, intersection observation, and animation helpers

These components are built with ES6+ classes extending HTMLElement, use Shadow DOM where appropriate, and integrate with Shopify’s APIs for cart and section rendering.

**Section sources**
- [main.mjs](file://assets/main.mjs)

## Architecture Overview
The architecture combines custom elements with a publish/subscribe pattern for cross-component communication, asynchronous section updates via fetch, and modular PhotoSwipe integration. Vendor utilities provide prefetching and custom elements polyfills.

```mermaid
graph TB
subgraph "Custom Elements"
CE1["announcement-bar"]
CE2["x-modal"]
CE3["cart-modal"]
CE4["media-carousel"]
CE5["media-lightbox"]
CE6["dropdown-element"]
CE7["dropdown-list"]
CE8["facet-filters-form"]
CE9["image-comparison"]
CE10["localization-form"]
CE11["lqip-element"]
CE12["notification-wrapper"]
end
subgraph "Utilities"
U1["debounce/throttle"]
U2["intersection observer"]
U3["animation helpers"]
U4["section loader"]
end
subgraph "Third-Party"
TP1["PhotoSwipe (ESM)"]
TP2["Model Viewer"]
end
CE1 --> U3
CE2 --> U3
CE3 --> CE2
CE4 --> CE5
CE4 --> TP1
CE4 --> TP2
CE6 --> U3
CE7 --> CE6
CE8 --> U4
CE12 --> U3
```

**Diagram sources**
- [main.mjs](file://assets/main.mjs)
- [photoswipe.esm.mjs](file://assets/photoswipe.esm.mjs)

**Section sources**
- [main.mjs](file://assets/main.mjs)

## Detailed Component Analysis

### Announcement Bar Carousel
A horizontally scrolling carousel with optional autoplay and directional controls. Uses smooth scroll behavior and IntersectionObserver for visibility detection.

```mermaid
classDiagram
class AnnouncementBar {
+transition
+speed
+currentIndex
+connectedCallback()
+disconnectedCallback()
+startAutoplay()
+stopAutoplay()
+onPrevClick()
+onNextClick()
+prev()
+next()
+animateTransition(prev, next)
+getCurSlide()
+incIndex()
+decIndex()
+animateOutSlide(el)
+animateInSlide(el)
}
```

**Diagram sources**
- [main.mjs](file://assets/main.mjs)

**Section sources**
- [main.mjs](file://assets/main.mjs)

### Modal System (x-modal, modal-drawer, cart-modal)
Encapsulated modals with Shadow DOM, focus trap, scroll lock, and optional body appending. Supports nested drawers and programmatic state preservation.

```mermaid
classDiagram
class XModal {
+open
+appendToBody
+connectedCallback()
+disconnectedCallback()
+onActivatorClick(event)
+beforeShow()
+show(options)
+showElements(options)
+animatePanelIn()
+afterShow()
+beforeHide()
+hide()
+hideElements()
+animatePanelOut()
+afterHide()
+fadeInOverlay()
+fadeOutOverlay()
+lockScroll()
+unlockScroll()
+setActivatorElement(element)
+registerCloseButton()
+onEscapeKeyDown(event)
+saveComponentState()
+loadComponentState(state)
+initDesignMode()
+disableDesignMode()
}
class ModalDrawer {
+isRoot
+isChild
+fadeOnMobile
+parentDrawer
+activeChildDrawer
+getPosition()
+getPositionInverse()
+show(options)
+hide(options)
+animInPanel()
+animOutPanel()
+getFadeXY(offset)
+animOutContentsAndHide()
}
class CartModal {
+sectionId
+reloadContent()
+updateFromSectionHtml(html)
+onOrderNoteUpdated(event)
}
XModal <|-- ModalDrawer
ModalDrawer <|-- CartModal
```

**Diagram sources**
- [main.mjs](file://assets/main.mjs)
- [template-modal.liquid](file://snippets/template-modal.liquid)

**Section sources**
- [main.mjs](file://assets/main.mjs)
- [template-modal.liquid](file://snippets/template-modal.liquid)

### Media Carousel and Lightbox
A horizontally scrollable media gallery with thumbnail navigation, progress indicators, and PhotoSwipe integration for image lightboxes. Supports adaptive height, lazy loading, and Model Viewer integration for 3D models.

```mermaid
sequenceDiagram
participant User as "User"
participant Gallery as "media-carousel"
participant Thumbnails as "media-carousel-dots"
participant Lightbox as "media-lightbox"
participant PS as "PhotoSwipe"
User->>Gallery : Click thumbnail
Gallery->>Gallery : goToMediaId(mediaId)
Gallery->>Thumbnails : Publish indicator change
Thumbnails-->>Gallery : Subscribe and update active dot
User->>Lightbox : Click image
Lightbox->>PS : showLightbox({mediaId})
PS-->>User : Display lightbox
```

**Diagram sources**
- [main.mjs](file://assets/main.mjs)
- [photoswipe.esm.mjs](file://assets/photoswipe.esm.mjs)

**Section sources**
- [main.mjs](file://assets/main.mjs)
- [photoswipe.mjs](file://assets/photoswipe.mjs)
- [photoswipe.esm.mjs](file://assets/photoswipe.esm.mjs)

### Dropdown Menus
Dynamic dropdowns with hover/click handlers, automatic positioning, and optional mobile modal behavior.

```mermaid
flowchart TD
Start(["Open Dropdown"]) --> Handler{"Interaction Type"}
Handler --> |Click| ClickFlow["Toggle open/close on click"]
Handler --> |Hover| HoverFlow["Delay show, hide on leave"]
ClickFlow --> Position["Compute position with middleware"]
HoverFlow --> Position
Position --> Anim["Play animation"]
Anim --> End(["Dropdown Open"])
```

**Diagram sources**
- [main.mjs](file://assets/main.mjs)

**Section sources**
- [main.mjs](file://assets/main.mjs)

### Faceted Filters and Live Updates
Faceted filtering forms submit via fetch to update sections without reload, with abort controller support and URL synchronization.

```mermaid
sequenceDiagram
participant User as "User"
participant Form as "facet-filters-form"
participant Section as ".shopify-section"
participant Server as "Shopify"
User->>Form : Change filter
Form->>Form : Debounce and collect FormData
Form->>Server : fetch(section_id, query)
Server-->>Form : HTML section
Form->>Section : Replace innerHTML
Form->>Form : Update URL via history.replaceState
```

**Diagram sources**
- [main.mjs](file://assets/main.mjs)

**Section sources**
- [main.mjs](file://assets/main.mjs)

### Cart Form and Add-to-Cart
Live cart updates with optimistic UI, quantity change handling, and drawer-based notifications.

```mermaid
sequenceDiagram
participant User as "User"
participant CartForm as "cart-form"
participant Server as "Shopify Cart API"
participant Drawer as "cart-modal"
User->>CartForm : Change quantity/remove item
CartForm->>Server : POST change/update
Server-->>CartForm : JSON sections
CartForm->>Drawer : Update from section HTML
CartForm->>CartForm : Update cart bubble count
CartForm-->>User : Show notification
```

**Diagram sources**
- [main.mjs](file://assets/main.mjs)

**Section sources**
- [main.mjs](file://assets/main.mjs)

### Utility Functions and Animation Helpers
Shared utilities include debounce/throttle, intersection observers, animation helpers, and section loaders.

```mermaid
flowchart TD
A["Utility Functions"] --> B["Debounce/Throttle"]
A --> C["Intersection Observer"]
A --> D["Animation Helpers"]
A --> E["Section Loader"]
B --> F["Cart Form"]
C --> G["Dropdown Menus"]
D --> H["Modals & Carousels"]
E --> I["Faceted Filters"]
```

**Diagram sources**
- [main.mjs](file://assets/main.mjs)

**Section sources**
- [main.mjs](file://assets/main.mjs)

### Third-Party Integrations
- PhotoSwipe: Dynamically imported and CSS injected for lightbox functionality
- Model Viewer: Integration for 3D model previews via data attributes and Shopify XR
- Vendor Prefetch: Instant.page integration for link prefetching

**Section sources**
- [main.mjs](file://assets/main.mjs)
- [photoswipe.mjs](file://assets/photoswipe.mjs)
- [photoswipe.esm.mjs](file://assets/photoswipe.esm.mjs)
- [vendor.mjs](file://assets/vendor.mjs)

## Dependency Analysis
The framework exhibits low coupling between components, with clear separation of concerns:
- Utilities are standalone and reusable
- Custom elements encapsulate behavior and DOM
- Third-party libraries are dynamically loaded
- Shopify APIs are accessed via fetch and routes

```mermaid
graph LR
U["Utilities"] --> CE["Custom Elements"]
CE --> TP["Third-Party"]
CE --> SH["Shopify APIs"]
TP --> PS["PhotoSwipe"]
TP --> MV["Model Viewer"]
```

**Diagram sources**
- [main.mjs](file://assets/main.mjs)
- [photoswipe.esm.mjs](file://assets/photoswipe.esm.mjs)

**Section sources**
- [main.mjs](file://assets/main.mjs)

## Performance Considerations
- Lazy loading: Images and PhotoSwipe are loaded on demand
- Debouncing: Cart form and dropdown interactions are debounced
- Intersection Observer: Used for visibility and loading triggers
- Scroll-aware components: Media carousel adapts to viewport and content
- Optimistic UI: Immediate feedback during cart operations
- Prefetching: Vendor module prefetches links for improved navigation

[No sources needed since this section provides general guidance]

## Troubleshooting Guide
Common issues and resolutions:
- Modals not closing or trapping focus: Verify focus trap initialization and overlay click handlers
- Cart updates failing silently: Check network errors and ensure routes are defined
- Media carousel not syncing thumbnails: Confirm event subscriptions and section IDs
- PhotoSwipe not loading: Ensure CSS injection and ESM import are executed
- Dropdowns misaligned: Confirm middleware placement and dynamic positioning logic

**Section sources**
- [main.mjs](file://assets/main.mjs)

## Conclusion
The Igogomi theme’s JavaScript framework leverages modern web standards and Shopify’s APIs to deliver a responsive, accessible, and performant shopping experience. Its modular Web Components, robust utility layer, and third-party integrations provide a solid foundation for customization and extension while maintaining progressive enhancement and accessibility.