# FM's Power - Premium Solar Energy Solutions

A premium, modern static website for FM's Power solar business featuring high-efficiency solar inverters, lithium batteries, and solar panels.

## Quick Start

Simply open `index.html` in your browser to view the website.

```bash
# If you have a local server, you can also serve the files:
# Using Python
python -m http.server 8000

# Using Node.js (npx)
npx serve .
```

Then open http://localhost:8000 in your browser.

## Project Structure

```
phase-1-static-website/
├── index.html              # Homepage
├── products.html           # Products listing with filtering
├── product-detail.html     # Single product page template
├── about.html              # About us page
├── contact.html            # Contact page with FAQ
├── css/
│   ├── variables.css       # Design system CSS variables
│   ├── reset.css           # CSS reset
│   ├── global.css          # Global styles
│   ├── components.css      # Reusable component styles
│   ├── animations.css      # Animation keyframes & classes
│   └── responsive.css      # Media queries
├── js/
│   └── main.js             # All JavaScript functionality
├── images/
│   ├── hero/               # Hero section images
│   ├── products/           # Product images
│   ├── testimonials/       # Customer photos
│   ├── icons/              # SVG icons
│   └── logo/               # Company logo & favicon
├── design-system/
│   └── DESIGN_SYSTEM.md    # Design system documentation
└── README.md               # This file
```

## Features Implemented

### Pages
- **Homepage** - Hero, products showcase, features, testimonials, services, CTA, contact, footer
- **Products** - Filterable product grid with categories (All, Inverters, Batteries, Panels)
- **Product Detail** - Gallery, specifications, related products, inquiry form
- **About** - Company story, stats, mission, certifications
- **Contact** - Contact form, info cards, map, FAQ accordion

### UI/UX Features
- Modern glassmorphism design
- Dark theme with emerald/gold accent colors
- Smooth scroll animations (reveal on scroll)
- 3D card hover effects
- Testimonials carousel with auto-play
- Mobile-responsive hamburger menu
- Sticky header with scroll effect
- Back to top button
- WhatsApp floating button
- Form validation with feedback
- FAQ accordion
- Product category filtering

### Technical Features
- Pure HTML5, CSS3, JavaScript (no frameworks)
- CSS Custom Properties for theming
- Responsive design (320px to 1920px+)
- CSS Grid and Flexbox layouts
- Intersection Observer for scroll animations
- Touch-friendly for mobile devices
- Accessible (ARIA labels, focus states)
- Print styles included
- Reduced motion support

## Design System

The website uses a custom design system with:

### Colors
- **Primary**: Solar Emerald (#10B981)
- **Accent**: Solar Gold (#F59E0B)
- **Neutral**: Carbon grays (#0A0A0B to #FAFAFA)

### Typography
- **Display Font**: Space Grotesk
- **Body Font**: Inter
- **Mono Font**: JetBrains Mono

### Spacing
8px base unit with consistent scale (xs to 5xl)

See `design-system/DESIGN_SYSTEM.md` for complete documentation.

## Browser Compatibility

Tested on:
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Images

The `/images/` folder contains placeholder files. Replace them with actual product images:

- `products/inverter-1.6kw.png` - 1.6KW Inverter
- `products/inverter-4kw.png` - 4KW Inverter
- `products/inverter-6.2kw.png` - 6.2KW Inverter
- `products/battery-105ah.png` - 105Ah Battery
- `products/battery-280ah.png` - 280Ah Battery
- `products/solar-panel.png` - Solar Panel
- `testimonials/customer-1.jpg` to `customer-5.jpg` - Customer photos
- `hero/solar-installation.jpg` - Hero background

Recommended image sizes:
- Product images: 600x600px PNG (transparent background)
- Testimonial avatars: 200x200px JPG
- Hero images: 1920x1080px JPG

## Contact Information (Real Data)

- **Company**: FM's Power / FM's Trading
- **Phone**: 0322-2550299
- **Email**: thefmstrading@gmail.com
- **WhatsApp**: +923222550299
- **Address**: Shop G31-G50, Ground Floor, Al-Najeebi Electronic Bazar, Agha Khan Road 3, Near Star City Mall, Saddar, Karachi

## Next Steps (Phase 2)

This static website will be converted to:
1. Angular 17 frontend
2. .NET Core backend with Clean Architecture
3. PostgreSQL/SQL Server database
4. Admin dashboard for content management

---

Built with care for FM's Power by Claude
