# FM's Power Solar - Design System

## Overview
A premium, modern design system for FM's Power solar energy website. This design emphasizes sustainability, innovation, and trust through a bold color palette and sophisticated typography.

---

## Color Palette

### Primary Colors
| Color | Hex | RGB | Usage |
|-------|-----|-----|-------|
| **Solar Emerald** | `#10B981` | 16, 185, 129 | Primary brand color, CTAs, links |
| **Emerald Dark** | `#059669` | 5, 150, 105 | Hover states, emphasis |
| **Emerald Light** | `#34D399` | 52, 211, 153 | Highlights, accents |

### Accent Colors
| Color | Hex | RGB | Usage |
|-------|-----|-----|-------|
| **Solar Gold** | `#F59E0B` | 245, 158, 11 | Accent, badges, highlights |
| **Gold Dark** | `#D97706` | 217, 119, 6 | Hover states |
| **Gold Light** | `#FBBF24` | 251, 191, 36 | Soft highlights |

### Neutral Colors
| Color | Hex | RGB | Usage |
|-------|-----|-----|-------|
| **Carbon 950** | `#0A0A0B` | 10, 10, 11 | Primary background |
| **Carbon 900** | `#111113` | 17, 17, 19 | Card backgrounds |
| **Carbon 800** | `#1A1A1D` | 26, 26, 29 | Elevated surfaces |
| **Carbon 700** | `#27272A` | 39, 39, 42 | Borders |
| **Carbon 600** | `#3F3F46` | 63, 63, 70 | Disabled states |
| **Carbon 500** | `#52525B` | 82, 82, 91 | Placeholder text |
| **Carbon 400** | `#71717A` | 113, 113, 122 | Secondary text |
| **Carbon 300** | `#A1A1AA` | 161, 161, 170 | Tertiary text |
| **Carbon 200** | `#D4D4D8` | 212, 212, 216 | Body text |
| **Carbon 100** | `#E4E4E7` | 228, 228, 231 | Primary text |
| **Carbon 50** | `#FAFAFA` | 250, 250, 250 | White text |

### Semantic Colors
| Color | Hex | Usage |
|-------|-----|-------|
| **Success** | `#22C55E` | Success states |
| **Warning** | `#EAB308` | Warning states |
| **Error** | `#EF4444` | Error states |
| **Info** | `#3B82F6` | Information |

### Gradients
```css
/* Primary Gradient - Hero sections */
--gradient-primary: linear-gradient(135deg, #10B981 0%, #059669 50%, #047857 100%);

/* Gold Accent Gradient */
--gradient-gold: linear-gradient(135deg, #F59E0B 0%, #D97706 100%);

/* Dark Gradient - Backgrounds */
--gradient-dark: linear-gradient(180deg, #0A0A0B 0%, #111113 50%, #1A1A1D 100%);

/* Glass Gradient */
--gradient-glass: linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%);

/* Mesh Gradient - Premium backgrounds */
--gradient-mesh: radial-gradient(at 40% 20%, rgba(16, 185, 129, 0.15) 0px, transparent 50%),
                 radial-gradient(at 80% 0%, rgba(245, 158, 11, 0.1) 0px, transparent 50%),
                 radial-gradient(at 0% 50%, rgba(16, 185, 129, 0.1) 0px, transparent 50%);
```

---

## Typography

### Font Families
| Font | Usage | Fallback |
|------|-------|----------|
| **Inter** | Body text | system-ui, sans-serif |
| **Space Grotesk** | Headings, display | Inter, sans-serif |
| **JetBrains Mono** | Technical specs, code | monospace |

### Font Scale
| Name | Size | Line Height | Weight | Usage |
|------|------|-------------|--------|-------|
| **Display XL** | 72px / 4.5rem | 1.1 | 700 | Hero headlines |
| **Display LG** | 60px / 3.75rem | 1.15 | 700 | Page titles |
| **H1** | 48px / 3rem | 1.2 | 600 | Section titles |
| **H2** | 36px / 2.25rem | 1.25 | 600 | Subsections |
| **H3** | 30px / 1.875rem | 1.3 | 600 | Card titles |
| **H4** | 24px / 1.5rem | 1.35 | 600 | Small headings |
| **H5** | 20px / 1.25rem | 1.4 | 500 | Labels |
| **H6** | 18px / 1.125rem | 1.4 | 500 | Captions |
| **Body LG** | 18px / 1.125rem | 1.7 | 400 | Lead paragraphs |
| **Body** | 16px / 1rem | 1.7 | 400 | Body text |
| **Body SM** | 14px / 0.875rem | 1.6 | 400 | Secondary text |
| **Caption** | 12px / 0.75rem | 1.5 | 400 | Captions, labels |

### Typography Samples
```
Display XL: SAVE ENERGY, BUILD A BETTER FUTURE
Display LG: Premium Solar Solutions
H1: Our Products
H2: Why Choose FM's Power
H3: S.O Series 4 KW Inverter
Body: We provide high-efficiency solar inverters with intelligent monitoring and maximum power point tracking technology.
Caption: 5-Year Warranty Included
```

---

## Spacing System

| Token | Value | Usage |
|-------|-------|-------|
| `--space-xs` | 4px / 0.25rem | Tight spacing |
| `--space-sm` | 8px / 0.5rem | Small gaps |
| `--space-md` | 16px / 1rem | Default spacing |
| `--space-lg` | 24px / 1.5rem | Section gaps |
| `--space-xl` | 32px / 2rem | Large spacing |
| `--space-2xl` | 48px / 3rem | Section padding |
| `--space-3xl` | 64px / 4rem | Major sections |
| `--space-4xl` | 96px / 6rem | Hero spacing |
| `--space-5xl` | 128px / 8rem | Maximum spacing |

---

## Shadows & Effects

### Box Shadows
```css
/* Subtle shadow for cards */
--shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.3);

/* Default card shadow */
--shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.4),
             0 2px 4px -1px rgba(0, 0, 0, 0.3);

/* Elevated elements */
--shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.5),
             0 4px 6px -2px rgba(0, 0, 0, 0.4);

/* Floating elements */
--shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.5),
             0 10px 10px -5px rgba(0, 0, 0, 0.4);

/* Maximum elevation */
--shadow-2xl: 0 25px 50px -12px rgba(0, 0, 0, 0.6);

/* Glow effects */
--shadow-glow-emerald: 0 0 40px rgba(16, 185, 129, 0.3);
--shadow-glow-gold: 0 0 40px rgba(245, 158, 11, 0.3);
```

### Glassmorphism
```css
/* Glass card effect */
.glass {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

/* Glass card hover */
.glass:hover {
  background: rgba(255, 255, 255, 0.08);
  border-color: rgba(255, 255, 255, 0.15);
}
```

---

## Animation Guidelines

### Timing Functions
```css
--ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
--ease-out: cubic-bezier(0, 0, 0.2, 1);
--ease-in: cubic-bezier(0.4, 0, 1, 1);
--ease-bounce: cubic-bezier(0.68, -0.55, 0.265, 1.55);
--ease-smooth: cubic-bezier(0.25, 0.1, 0.25, 1);
```

### Duration Standards
| Duration | Value | Usage |
|----------|-------|-------|
| Fast | 150ms | Hover states, micro-interactions |
| Normal | 300ms | Standard transitions |
| Slow | 500ms | Complex animations |
| Slower | 700ms | Entrance animations |
| Slowest | 1000ms | Hero animations |

### Hover Effect Rules
- **Buttons:** Scale 1.02, shadow increase, color shift
- **Cards:** Lift (translateY -8px), shadow increase, border glow
- **Links:** Underline animation, color shift
- **Icons:** Rotate or bounce, color change
- **Images:** Scale 1.05 with overflow hidden

---

## Breakpoints

| Name | Min Width | Usage |
|------|-----------|-------|
| **Mobile S** | 320px | Small phones |
| **Mobile M** | 375px | Standard phones |
| **Mobile L** | 425px | Large phones |
| **Tablet** | 768px | Tablets, small laptops |
| **Laptop** | 1024px | Laptops, desktops |
| **Desktop** | 1280px | Large screens |
| **Desktop L** | 1536px | Extra large screens |

### Media Query Pattern
```css
/* Mobile first approach */
.element { /* Mobile styles */ }

@media (min-width: 768px) { /* Tablet */ }
@media (min-width: 1024px) { /* Laptop */ }
@media (min-width: 1280px) { /* Desktop */ }
```

---

## Component Patterns

### Buttons
- **Primary:** Emerald background, white text, glow on hover
- **Secondary:** Transparent with emerald border, emerald text
- **Ghost:** Transparent, light text, subtle hover
- **Gold:** Gold background, dark text (for CTAs)

### Cards
- Glass effect with subtle border
- 3D tilt on hover (transform-style: preserve-3d)
- Smooth shadow transition
- Image zoom on hover

### Forms
- Dark inputs with subtle borders
- Emerald focus glow
- Floating labels (optional)
- Error states with red border/glow

---

## Icons
Use **Lucide Icons** (https://lucide.dev) for consistency:
- Stroke width: 1.5 - 2
- Size: 20px (small), 24px (default), 32px (large)
- Color: Inherit from parent or emerald for emphasis

---

## Brand Guidelines
- **Logo:** "FM's Power" in Space Grotesk bold with solar icon
- **Tagline:** "Save Energy, Build a Better Future"
- **Tone:** Professional, innovative, trustworthy
- **Visual Style:** Dark, premium, futuristic with green/gold accents
