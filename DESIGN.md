---
name: Evocative Name
colors:
  surface: '#fff8f7'
  surface-dim: '#e5d7d6'
  surface-bright: '#fff8f7'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#fff0ef'
  surface-container: '#f9ebe9'
  surface-container-high: '#f3e5e4'
  surface-container-highest: '#eddfde'
  on-surface: '#211a19'
  on-surface-variant: '#534342'
  inverse-surface: '#372f2e'
  inverse-on-surface: '#fcedec'
  outline: '#867371'
  outline-variant: '#d8c1bf'
  surface-tint: '#8f4a48'
  primary: '#8d4845'
  on-primary: '#ffffff'
  primary-container: '#aa5f5d'
  on-primary-container: '#fffbff'
  inverse-primary: '#ffb3af'
  secondary: '#795553'
  on-secondary: '#ffffff'
  secondary-container: '#ffcfcc'
  on-secondary-container: '#7a5654'
  tertiary: '#35645c'
  on-tertiary: '#ffffff'
  tertiary-container: '#4e7d74'
  on-tertiary-container: '#f4fffb'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdad7'
  primary-fixed-dim: '#ffb3af'
  on-primary-fixed: '#3b090a'
  on-primary-fixed-variant: '#733332'
  secondary-fixed: '#ffdad8'
  secondary-fixed-dim: '#eabbb9'
  on-secondary-fixed: '#2e1413'
  on-secondary-fixed-variant: '#5f3e3d'
  tertiary-fixed: '#bbede2'
  tertiary-fixed-dim: '#9fd0c6'
  on-tertiary-fixed: '#00201c'
  on-tertiary-fixed-variant: '#1e4e47'
  background: '#fff8f7'
  on-background: '#211a19'
  surface-variant: '#eddfde'
typography:
  headline-lg:
    fontFamily: Newsreader
    fontSize: 36px
    fontWeight: '600'
    lineHeight: 44px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1.5rem
  margin: 2rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---
## Brand & Style

This design system embodies the legacy, reliability, and human warmth of an established Colombian industrial manufacturer founded in 1982. It rejects transient SaaS aesthetics, sterile tech minimalism, neon hues, and artificial glassmorphic effects in favor of a grounded, tactile, and mercantile character.

The aesthetic is straightforward, clean, and respectable. It conveys the tactile purity of 100% natural cotton fibers, the stability of traditional trade, and the direct commercial clarity expected by workshop managers, industrial procurement officers, hardware store distributors, and long-standing clients. Interfaces built with this system should feel durable, approachable, and immediately legible, balancing institutional confidence with domestic, practical warmth.

## Colors

The palette is rooted in Colombian industrial heritage and agricultural trade stability:

- **Primary (`#AD625F`)**: A muted, warm terracotta rose, representing enduring quality and organic material heritage. Used for dominant branding elements, primary buttons, headers, and active states.
- **Secondary (`#946D6B`)**: A sober dusty mauve. Strictly reserved for high-priority calls to action, urgent quotes, commercial contact triggers, discount badges, and quality certification seals.
- **Tertiary (`#003831`)**: Deep forest teal, applied sparingly for warehouse stock tags, operational status alerts, and commercial notifications.
- **Neutral Base & Canvas**: The primary background surface uses an unbleached soft cream (`#FBF8FC`) paired with clean cotton white (`#FFFFFF`) for elevated cards, backed by warm light gray (`#7F7574`) for subtle section divisions. Body text rests in high-contrast charcoal (`#1B1B1E`) to ensure effortless outdoor and workshop legibility without the harshness of pure black.

## Typography

The typographic system couples a warm, authoritative editorial serif (**Newsreader**) for structural headlines with a clear, workhorse grotesque sans-serif (**Work Sans**) for functional clarity across body text, tabular product data, and interactive controls.

- **Headlines (Newsreader)**: Evoke the company's 1982 origins and industrial pedigree. They deliver warmth, stability, and human craft, setting an unpretentious tone suitable for an established brand.
- **Interface & Body (Work Sans)**: Chosen for its open apertures, robust vertical stems, and dependable legibility under challenging lighting or low-end mobile devices common in inventory and procurement settings.
- **Hierarchy & Microcopy**: Product specifications (weight, cotton blend, sack counts) utilize medium and bold weights of `Work Sans` with tabular figures where necessary, ensuring clear scanning without digital visual noise.

## Layout & Spacing

The layout is built around a grounded 12-column responsive fluid grid on desktop (max container width: 1200px) and a 4-column structure on mobile devices, ensuring content never floats disjointedly on wide screens.

- **Desktop (>= 1024px)**: 12 columns, 24px (`1.5rem`) gutters, and dynamic margins centered with a hard limit of 1200px.
- **Tablet (768px - 1023px)**: 8 columns, 20px gutters, and 24px outer margins.
- **Mobile (< 768px)**: 4 columns, 16px (`1rem`) gutters, and 16px (`1rem`) canvas margins.
- **Rhythm**: Spacing follows an 8px base grid. Layouts rely on ample breathing room between functional blocks (`space-xl`) while keeping technical specs, packing data, and action items tightly grouped (`space-sm` to `space-md`) for effortless operational reference.

## Elevation & Depth

Visual hierarchy rejects artificial glass layers, high-tech neon highlights, or deep float shadows. Elevation relies on practical physical grounding:

- **Surface Baseline**: The foundational surface is soft cream (`#FBF8FC`). Card containers and forms sit on crisp cotton white (`#FFFFFF`) framed with a subtle 1px border in warm slate (`#E4E1E5`).
- **Low-Profile Grounding Shadow**: Interactive cards and elevated containers use a single, warm-tinted diffuse shadow: `0 2px 4px rgba(39, 39, 42, 0.04), 0 1px 2px rgba(39, 39, 42, 0.06)`.
- **Hover & Active States**: On interaction, cards shift subtly with a minor expansion in shadow: `0 6px 12px rgba(173, 98, 95, 0.08)`, gently tinting the shadow toward the primary terracotta rose to indicate tactility.
- **Modals & Overlays**: Modals use a firm 1px border, backdrop wash of warm neutral (`rgba(39, 39, 42, 0.4)`), and a contained drop shadow (`0 12px 24px rgba(0, 0, 0, 0.12)`).

## Shapes

The system uses a balanced corner radius of 8px (`rounded-md`, 0.5rem) as the standard baseline, extending to 12px–16px (`rounded-lg` / `rounded-xl`) on major card containers and product showcases.

This curvature softens the industrial subject matter without feeling bubbly or juvenile. Small interactive elements—such as category tags, data chips, and form fields—retain a structured 8px radius to convey mechanical stability and organized utility. Pill shapes are strictly avoided except for small status indicator badges.

## Components

### Buttons
- **Primary Button**: Solid terracotta rose (`#AD625F`) background, white text, 8px corner radius, horizontal padding of `1.25rem`, vertical padding of `0.75rem`. Hover state darkens slightly.
- **Commercial Action / Urgent Button**: Solid dusty mauve (`#946D6B`) background, white text. Exclusively for direct WhatsApp wholesale queries, quote requests, and urgent order placements.
- **Secondary Button**: Crisp cotton white surface, 1.5px solid border in `#AD625F`, primary text. Hover fills with a light wash.
- **Tertiary / Text Button**: Transparent background, underline on hover, styled with `label-lg` in `#AD625F`.

### Cards & Product Modules
- **Product Card**: White surface, 1px border in `#E4E1E5`, 12px border radius. Internal padding is `1.5rem`. Contains a dedicated thumbnail area for photography showing real estopa textures, followed by technical specifications (cotton composition percentage, bale weight, absorbent grade).
- **Metric / Trust Card**: Soft cream background (`#FBF8FC`) with a solid 4px left-border accent in primary, displaying company milestones (e.g., "Desde 1982", "100% Algodón Puro").

### Input Fields & Controls
- **Text Inputs**: Crisp white background, 8px border radius, 1.5px solid neutral border, text in `#1B1B1E`. Active focus transitions to a 2px primary outline (`#AD625F`) with zero offset glow.
- **Checkboxes & Radios**: 20px square or circular frames with a 2px border. Checked state fills with `#AD625F` displaying a clean white icon.

### Chips & Badges
- **Specification Chip**: 6px radius, neutral gray tint, text in dark neutral, 12px font size. Used for dimensions ("Fardo 25kg", "Hebra Larga").
- **Quality Seal Badge**: Deep accent outline or solid fill, used specifically for "100% Algodón Colombiano" y "Garantía de Brillo y Limpieza".

### Lists & Tables
- **Specification Table**: Alternating rows separated by 1px rules. Headers styled in `label-sm` uppercase with generous letter spacing, conveying industrial order and precision.

## Icon Library

The project uses **Material Symbols Outlined** from Google Fonts for iconography. This provides a consistent, lightweight icon set that matches the design system's aesthetic.

- **Usage**: Icons are implemented using the `material-symbols-outlined` class and specifying the icon name as the element's content (e.g., `<span class="material-symbols-outlined">menu</span>` for the hamburger menu).
- **Benefits**: 
  - Lightweight and fast loading via Google Fonts CDN
  - Consistent stroke weight and style
  - Easy to customize with CSS (size, color, etc.)
  - Wide variety of icons available for different use cases