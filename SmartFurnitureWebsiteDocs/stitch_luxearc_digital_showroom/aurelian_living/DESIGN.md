---
name: Aurelian Living
colors:
  surface: '#fbf9f9'
  surface-dim: '#dbdad9'
  surface-bright: '#fbf9f9'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f5f3f3'
  surface-container: '#efeded'
  surface-container-high: '#e9e8e7'
  surface-container-highest: '#e4e2e2'
  on-surface: '#1b1c1c'
  on-surface-variant: '#444748'
  inverse-surface: '#303031'
  inverse-on-surface: '#f2f0f0'
  outline: '#747878'
  outline-variant: '#c4c7c7'
  surface-tint: '#5f5e5e'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#1c1b1b'
  on-primary-container: '#858383'
  inverse-primary: '#c8c6c5'
  secondary: '#775a19'
  on-secondary: '#ffffff'
  secondary-container: '#fed488'
  on-secondary-container: '#785a1a'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#1a1c19'
  on-tertiary-container: '#838480'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e5e2e1'
  primary-fixed-dim: '#c8c6c5'
  on-primary-fixed: '#1c1b1b'
  on-primary-fixed-variant: '#474746'
  secondary-fixed: '#ffdea5'
  secondary-fixed-dim: '#e9c176'
  on-secondary-fixed: '#261900'
  on-secondary-fixed-variant: '#5d4201'
  tertiary-fixed: '#e3e3de'
  tertiary-fixed-dim: '#c6c7c2'
  on-tertiary-fixed: '#1a1c19'
  on-tertiary-fixed-variant: '#454744'
  background: '#fbf9f9'
  on-background: '#1b1c1c'
  surface-variant: '#e4e2e2'
typography:
  display-lg:
    fontFamily: Playfair Display
    fontSize: 64px
    fontWeight: '600'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 40px
    fontWeight: '600'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '500'
    lineHeight: '1.3'
  headline-sm:
    fontFamily: Playfair Display
    fontSize: 24px
    fontWeight: '500'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: -0.01em
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-caps:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1.0'
    letterSpacing: 0.1em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1440px
  gutter: 24px
  margin-desktop: 80px
  margin-mobile: 20px
  section-gap: 120px
---

## Brand & Style

The brand personality is curated, prestigious, and serene, mirroring the experience of walking through a high-end architectural showroom. It targets a discerning audience that values artisanal craftsmanship and technical precision. The UI evokes a sense of "quiet luxury"—where the interface recedes to allow high-fidelity product photography to command attention.

The design style is a sophisticated blend of **Minimalism** and **Glassmorphism**. It utilizes expansive white space, precise alignment, and subtle translucent layers to create a multi-dimensional environment. Surfaces feel like frosted glass or polished stone, utilizing soft background blurs to maintain legibility while preserving the cinematic depth of the background imagery.

## Colors

The palette is rooted in a natural, architectural foundation. 
- **Primary (Deep Charcoal):** Used for primary text and structural grounding to provide high contrast against light backgrounds.
- **Secondary (Gold Accents):** Reserved for high-value interactions, luxury indicators, and subtle highlights.
- **Tertiary (Airy Cream):** The primary surface color, softer than pure white to evoke a premium, textile-like warmth.
- **Wood Accents:** Walnut and Oak tones are used for functional indicators or decorative dividers to bring organic texture to the digital space.

In **Dark Mode**, the Airy Cream surfaces transition to a Deep Charcoal base, while the text shifts to an off-white silk tone, maintaining the gold accents for a "night gallery" aesthetic.

## Typography

This design system employs a classic serif/sans-serif pairing to balance heritage with modernity. 
- **Playfair Display** provides the editorial voice, used for product names, section headers, and storytelling. It features tight tracking in display sizes to feel like a high-fashion masthead.
- **Inter** handles the functional UI. It is chosen for its systematic clarity and geometric neutrality, ensuring that price points, specifications, and navigation remain legible at all scales.

Key emphasis is placed on "Label-Caps" for categories and metadata, creating a disciplined, architectural feel within the information hierarchy.

## Layout & Spacing

The layout follows a **Fixed Grid** philosophy for desktop to ensure product imagery is always framed with generous, intentional margins. 
- **The 12-Column Grid:** Desktop layouts use a 12-column grid with wide gutters (24px) to create an "airy" feel. 
- **Cinematic Spacing:** Section vertical gaps are intentionally large (120px+) to encourage a slow, deliberate scrolling pace, mimicking a gallery walkthrough.
- **Mobile Reflow:** On mobile, the grid collapses to 4 columns. Margins reduce significantly, but the vertical rhythm remains generous to maintain the premium feel.

Alignment is strictly centered for brand storytelling moments and left-aligned for functional shopping/specifications.

## Elevation & Depth

Hierarchy is established through **Glassmorphism** and **Tonal Layers** rather than heavy shadows.
- **Surfaces:** Use 60-80% opacity with a `20px` backdrop blur. This allows the rich textures of furniture photography to bleed through the UI subtly.
- **Shadows:** When used, shadows are "Ambient"—extremely diffused (30-50px blur), low opacity (5-10%), and tinted with the primary charcoal color to avoid a "muddy" look.
- **Stroke Depth:** Elements are often defined by a `0.5px` inner highlight or border in a lighter silk or gold tone to simulate the edge of polished glass or metal.

## Shapes

The shape language is primarily **Soft (0.25rem)**. While modern, the design avoids the "bubbly" look of consumer social apps. 
- **Cards & Buttons:** Use a subtle `4px` or `8px` radius to maintain a crisp, architectural silhouette.
- **Product Frames:** Photography containers should remain sharp (`0px`) or very subtly rounded to mimic the precision of high-end furniture joinery.
- **Interactive Elements:** Buttons use the `rounded-lg` (8px) setting to provide a tactile, approachable target without losing the sophisticated edge.

## Components

- **Buttons:** Primary buttons are solid Charcoal with Gold text or vice-versa. They feature a "slight expansion" hover effect. Secondary buttons are "Ghost" style with a `0.5px` border.
- **Cards:** Product cards utilize a "borderless" look on Tertiary backgrounds. On hover, a subtle scale-up and the appearance of a glassmorphic "Quick View" footer occur.
- **Inputs:** Form fields are minimal—single bottom lines or very soft tinted containers. Labels always use the `label-caps` style for a technical aesthetic.
- **Chips/Filters:** Use a pill-shape with a high-contrast stroke. Active states are filled with the Gold accent color.
- **Navigation:** The header is a persistent glassmorphic bar that blurs the content behind it as the user scrolls, creating a sense of continuous depth.
- **Product Gallery:** Utilizes a custom "Magnifier" cursor and smooth-parallax transitions between high-resolution imagery.