---
name: Peak Recovery Logic
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#393939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1c1b1b'
  surface-container: '#201f1f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353534'
  on-surface: '#e5e2e1'
  on-surface-variant: '#bec9c1'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#313030'
  outline: '#89938b'
  outline-variant: '#3f4943'
  surface-tint: '#86d7ae'
  primary: '#86d7ae'
  on-primary: '#003824'
  primary-container: '#0a6847'
  on-primary-container: '#93e4ba'
  inverse-primary: '#116c4a'
  secondary: '#e7c433'
  on-secondary: '#3b2f00'
  secondary-container: '#c1a100'
  on-secondary-container: '#453800'
  tertiary: '#2ddbde'
  on-tertiary: '#003738'
  tertiary-container: '#006668'
  on-tertiary-container: '#44e9ec'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#a2f4c9'
  primary-fixed-dim: '#86d7ae'
  on-primary-fixed: '#002113'
  on-primary-fixed-variant: '#005236'
  secondary-fixed: '#ffe174'
  secondary-fixed-dim: '#e7c433'
  on-secondary-fixed: '#221b00'
  on-secondary-fixed-variant: '#554500'
  tertiary-fixed: '#5af8fb'
  tertiary-fixed-dim: '#2ddbde'
  on-tertiary-fixed: '#002020'
  on-tertiary-fixed-variant: '#004f51'
  background: '#131313'
  on-background: '#e5e2e1'
  surface-variant: '#353534'
typography:
  display-lg:
    fontFamily: Bebas Neue
    fontSize: 72px
    fontWeight: '400'
    lineHeight: 72px
    letterSpacing: 0.02em
  headline-lg:
    fontFamily: Bebas Neue
    fontSize: 48px
    fontWeight: '400'
    lineHeight: 48px
    letterSpacing: 0.02em
  headline-lg-mobile:
    fontFamily: Bebas Neue
    fontSize: 36px
    fontWeight: '400'
    lineHeight: 36px
  headline-md:
    fontFamily: Bebas Neue
    fontSize: 32px
    fontWeight: '400'
    lineHeight: 32px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-xl:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '700'
    lineHeight: 20px
  label-md:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  container-margin: 24px
  gutter: 16px
  section-gap: 64px
---

## Brand & Style

The design system is engineered for the high-performance athlete, bridging the gap between grueling exertion and scientific restoration. It embodies a **High-Contrast / Bold** aesthetic that feels both elite and technical. 

The visual language draws inspiration from sports journalism and biomechanical engineering. It utilizes high-impact, condensed typography to convey urgency and strength, while the background "cell" or "bubble" motif—inspired by the tactile nodes of recovery equipment—adds a layer of technological sophistication. The overall mood is energetic, professional, and uncompromisingly modern.

## Colors

The palette is anchored in a dark-mode foundation to emphasize depth and professional "gear" aesthetics. 

- **Athletic Green:** The primary driver, representing health, stamina, and the turf.
- **Canary Yellow:** Used exclusively for high-priority actions and essential data call-outs.
- **Recovery Teal:** A technical accent used for data visualizations, glow effects, and "active" recovery states.
- **Deep Charcoal:** The primary surface color, providing a sophisticated backdrop that allows the high-energy colors to pop without causing eye fatigue.

## Typography

Typography in this design system is about impact and clarity. 

**Bebas Neue** is reserved for headlines and large display stats. It should almost always be set in uppercase to maintain its journalistic, "breaking news" intensity. **Inter** provides a clean, functional contrast for body copy and UI labels, ensuring that complex recovery data remains highly readable. Use tight tracking on headlines to emphasize the condensed nature of the typeface.

## Layout & Spacing

The design system employs a **12-column fluid grid** for desktop and a **4-column grid** for mobile. 

A strict 8px spacing scale ensures a rhythmic, athletic balance. Margins are generous (24px on mobile, up to 80px on desktop) to allow the bold elements "room to breathe." Component internal padding should be comfortable, favoring a "dense but clear" look that mirrors the technical interfaces of fitness trackers.

## Elevation & Depth

Hierarchy is established through **tonal layers** and **ambient glow**. 

1. **Base Layer:** Deep Charcoal (#121212) with a subtle "cell" pattern overlay at 5% opacity.
2. **Component Layer:** Slightly lighter Charcoal (#1e1e1e) with a 1px inner border of Teal or Green to define edges.
3. **Shadows:** Use highly diffused shadows with a slight color tint (e.g., a dark green-tinted shadow) to create an organic, "levitating" effect for cards.
4. **Active State:** Elements in an "active" or "recovering" state should feature a soft Teal outer glow to simulate technology in use.

## Shapes

The design system uses a **Rounded** philosophy (0.5rem / 8px base) to balance the aggressive, sharp angles of the condensed typography. 

For larger containers like cards and modal overlays, use `rounded-xl` (1.5rem / 24px) to create a "tech-capsule" appearance. Buttons and input fields should maintain the 12px (0.75rem) radius specifically requested to align with modern performance apparel aesthetics.

## Components

### Buttons
Primary buttons use a solid **Athletic Green** background with White text. Secondary buttons utilize a **Teal** outline. "Urgent" or "Start" buttons may use the **Canary Yellow** with Black text for maximum visibility. All buttons feature a 12px corner radius.

### Cards
Cards are the primary content vehicle. They should have a subtle gradient background—starting from the surface color and fading into a slightly lighter tint. The "cell" motif can be applied as a mask on one corner of the card to reinforce the recovery theme.

### Data Inputs
Fields are dark-filled with a bottom-border-only focus state in **Canary Yellow**. Labels use the `label-md` uppercase style for a technical, readout feel.

### Progress Indicators
Recovery "Cells" or "Nodes" should be used as progress indicators. Instead of a standard bar, consider a series of circular "bubbles" that fill with **Teal** as recovery progress increases.

### Chips & Tags
Use small, pill-shaped chips with low-opacity backgrounds (e.g., 15% Green background with 100% Green text) for categorizing workout types or recovery modalities.