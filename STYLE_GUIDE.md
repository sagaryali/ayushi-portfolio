# Ayushi Portfolio — Style Guide

---

## 1. Color Palette

| Token       | Hex         | Usage                                                        |
|-------------|-------------|--------------------------------------------------------------|
| `--bg`      | `#FDF6EC`   | Page background, tooltip text, nav active text, button text  |
| `--purple`  | `#275F55`   | Primary accent (headings, buttons, borders, tooltips, links)  |
| `--black`   | `#000000`   | Default body text, section headings on About page            |
| `--white`   | `#FFFFFF`   | (Reserved, not actively used in current pages)               |
| Meta label  | `#666666`   | Secondary/muted text (meta labels in project cards)          |
| Footer bg   | `#000000`   | Footer background                                           |

**Note:** Despite the CSS variable name `--purple`, the actual value is a deep teal/forest green (`#275F55`).

---

## 2. Typography

### Font Families

| Class / Token        | Family                  | Role                                              |
|----------------------|-------------------------|----------------------------------------------------|
| `.font-merriweather` | Merriweather (serif)    | Headings, logo, hero text                          |
| `.font-avenir`       | Nunito (sans-serif)     | Body text, navigation, buttons, captions, footer   |

Both are loaded via Google Fonts:
- **Merriweather:** weight 700 only
- **Nunito:** weights 300, 400, 500, 600, 800

### Type Scale

| Element                    | Font            | Size   | Weight | Line Height | Notes                        |
|----------------------------|-----------------|--------|--------|-------------|------------------------------|
| Project page title (h1)   | Merriweather    | 64px   | 700    | default     | Case study pages             |
| Hero heading (h1)         | Merriweather    | 48px   | 700    | 1.2         | Homepage                     |
| Section heading (h2)      | Merriweather    | 48px   | 700    | default     | "Featured Projects", "Beyond UX" |
| Hero subheading            | Merriweather    | 28px   | 700    | 1.4         | Homepage tagline             |
| Project card title (h3)   | Merriweather    | 36px   | 700    | 1.2         | Project cards, About subsections |
| Logo                       | Merriweather    | 22px   | 700    | default     | Nav logo (letter-spacing: 0.05em for "AS") |
| Body / project summary    | Nunito          | 17px   | 400    | 1.75        | Project card descriptions    |
| About bio text             | Nunito          | 17px   | 300    | 1.8         | About page paragraphs        |
| About body text            | Nunito          | 17px   | 400    | 1.7         | About subsection descriptions |
| Case study placeholder    | Nunito          | 24px   | 400    | default     | Project detail pages         |
| Footer text                | Nunito          | 20px   | 300    | 1.7         | Footer body and links        |
| Nav links                  | Nunito          | 16px   | 400    | default     | Navigation items             |
| Button text                | Nunito          | 16px   | 750    | default     | CTA buttons                  |
| Meta labels                | Nunito          | 13px   | 300    | default     | Uppercase, letter-spacing: 0.08em |
| Meta values                | Nunito          | 15px   | 500    | default     | Timeline, capabilities, team |
| Image captions             | Nunito          | 14px   | 400    | 1.4         | About page photo captions    |
| Tooltip text               | Nunito          | 13px   | 600    | default     | Tool circle hover tooltips   |

---

## 3. Layout

### Container
- **Max width:** 1120px
- **Horizontal padding:** 48px
- **Centering:** `margin: 0 auto`

### Vertical Spacing
| Context                     | Value    |
|-----------------------------|----------|
| Nav padding-top             | 32px     |
| Hero section padding-top    | 120px    |
| Tool logos section gap      | 72px from hero |
| Featured projects top       | 96px     |
| Between project cards       | 80px gap |
| Featured projects bottom    | 120px    |
| About photo-bio section top | 100px    |
| About photo-bio bottom      | 160px    |
| Between About subsections   | 120px    |
| Footer padding              | 64px vertical |

---

## 4. Components

### Navigation
- Background: `#FDF6EC`
- Layout: flex, space-between, vertically centered
- Logo: "AS" with hover reveal to "Ayushi Shah" (crossfade + translateY animation, 0.3s ease)
- Links: pill-shaped, 2px border `#275F55`, border-radius 24px, padding 12px 16px
- Active state: filled `#275F55` background, `#FDF6EC` text
- Hover state: text color changes to `#275F55`
- Link gap: 16px

### Buttons (CTA)
- Background: `#275F55`
- Text color: `#FDF6EC`
- Font: Nunito, 16px, weight 750
- Padding: 18px 28px
- Border radius: 24px
- Width: 65% of parent
- Contents: lock icon + label + arrow icon, inline-flex centered
- No hover style defined (static)

### Project Cards
- Layout: two-column flex (image left, text right), 48px gap, items stretch
- Image: `object-cover`, fills container, 4px border-radius
- Flex basis: 420px per column
- Wraps on smaller screens (`flexWrap: wrap`)

### Project Meta Box
- Border: 1px solid `#275F55`
- Border radius: 16px
- Padding: 24px 32px
- Layout: flex row, 120px gap, wraps
- Labels: uppercase, 13px, weight 300, `#666`, letter-spacing 0.08em
- Values: 15px, weight 500, black

### Tool Logo Circles
- Size: 96px x 96px
- Shape: circle (border-radius 50%)
- Background: `#FDF6EC`
- Shadow (default): `6px 6px 14px rgba(0,0,0,0.12), -6px -6px 14px rgba(255,255,255,0.7)` (neumorphic)
- Shadow (hover): `10px 10px 22px rgba(0,0,0,0.16), -8px -8px 18px rgba(255,255,255,0.8)`
- Hover transform: `scale(1.1)`
- Transition: 0.2s ease
- Gap between circles: 20px

### Tooltips
- Background: `#275F55`
- Text: `#FDF6EC`, 13px, weight 600
- Padding: 8px 16px
- Border radius: 999px (pill)
- Position: above element with 14px offset
- Arrow: 6px CSS triangle
- Animation: fade in + translateY, 0.2s ease

### Footer
- Background: `#000`
- Text color: `#FDF6EC`
- Layout: flex, space-between, 64px gap
- Left column: body text, max-width 360px
- Right column: flex column, right-aligned, 8px gap
- Links: no underline by default, underline on hover (via nested span)
- Inline links (left column): underlined

### Image Grids (About Page)
- **2x2 Grid:** `grid-template-columns: 1fr 1fr`, 40px gap, images 320px height
- **Flex rows:** gap 24px, images set to height 320px with auto width
- **Masonry:** CSS `columns: 3`, column-gap 20px, `break-inside: avoid`, 20px margin-bottom

---

## 5. Animations & Transitions

| Element              | Property                   | Duration | Easing |
|----------------------|----------------------------|----------|--------|
| Role word cycling    | opacity, translateY        | 0.4s     | ease   |
| Logo hover reveal    | opacity, translateY        | 0.3s     | ease   |
| Tool circle hover    | transform, box-shadow      | 0.2s     | ease   |
| Tooltip appear       | opacity, translateY        | 0.2s     | ease   |
| Nav link state       | background-color, color    | 0.2s     | ease   |

- Role word cycles every 2.4s with 0.4s fade-out before switching

---

## 6. Iconography

- **Lock icon:** `/public/icons/lock.png` (28x28), used in CTA buttons
- **Arrow icon:** Inline SVG, 16x16, stroke `currentColor`, strokeWidth 2.5, round caps/joins
- **Tool logos:** `/public/logos/logo1-5.png`, displayed at 52x52 (logo4 at 36x36)

---

## 7. Border Radii

| Context          | Radius  |
|------------------|---------|
| Buttons          | 24px    |
| Nav links        | 24px    |
| Tooltips         | 999px   |
| Meta box         | 16px    |
| Project images   | 4px     |
| Tool circles     | 50%     |

---

## 8. Shadows

Only neumorphic shadows on tool circles:
- **Rest:** `6px 6px 14px rgba(0,0,0,0.12), -6px -6px 14px rgba(255,255,255,0.7)`
- **Hover:** `10px 10px 22px rgba(0,0,0,0.16), -8px -8px 18px rgba(255,255,255,0.8)`

No other drop shadows are used across the site.

---

## 9. Design Principles

1. **Warm & organic:** Cream background (`#FDF6EC`) paired with deep teal (`#275F55`) creates an earthy, approachable feel
2. **Neumorphic accents:** Soft raised/inset shadows on interactive elements (tool circles) add tactile depth
3. **Minimal color palette:** Only 3 functional colors (cream, teal, black) keep the focus on content and imagery
4. **Serif + sans-serif pairing:** Merriweather for authority in headings, Nunito for warmth and readability in body
5. **Generous whitespace:** Large padding values (48px horizontal, 96-120px vertical sections) give content room to breathe
6. **Subtle interactions:** Micro-animations (logo reveal, role cycling, tooltip fade) add personality without distraction
7. **Content-forward:** No decorative borders, gradients, or patterns — imagery and text are the primary visual elements
