# Aura Medical Aesthetics - Landing Page Implementation Plan

## Project Overview

**Project Type**: Medical Aesthetics Landing Page (Prototype)
**Framework**: Next.js 16 with React 19+
**Styling**: Tailwind CSS v4 + Custom Design Tokens
**Status**: New Project - Fresh Implementation

---

## Design System

### Color Palette

| Token | Color | Usage |
|-------|-------|-------|
| **Background** | `#0f0f0f` | Page background |
| **Surface** | `#1a1a1a` | Cards, containers |
| **Foreground** | `#ffffff` | Primary text |
| **Muted Text** | `#a0a0a0` | Secondary text |
| **Accent Primary** | `#2e4a3f` | Sage green - buttons, accents |
| **Accent Gold** | `#d4af37` | Gold highlights, premium CTAs |
| **Border** | `#404040` | Glass borders, dividers |

### Typography

- **Display Font**: Playfair Display (serif) - Headlines, luxury feel
- **Body Font**: Geist (sans-serif) - Clean, modern readability

### Effects & Components

- **Glass Effects**: `backdrop-blur-md` with white/5 opacity
- **Border Radius**: 0.5rem to 2rem (luxury rounded corners)
- **Transitions**: 200-300ms smooth easing for interactions
- **Animations**: Fade-in, slide-up, scale-in on scroll/load

---

## Project Structure

```
src/
├── app/
│   ├── layout.tsx              # Root layout with metadata, fonts
│   ├── page.tsx                # Landing page main export
│   ├── globals.css             # Design tokens, custom utilities
│   └── contact/
│       └── page.tsx            # Contact form page
├── components/
│   ├── Header.tsx              # Sticky header, mobile menu
│   ├── Hero.tsx                # Hero section with CTA
│   ├── Services.tsx            # Services/Treatments section
│   ├── BeforeAfter.tsx         # Before/After comparison section
│   ├── Pricing.tsx             # Pricing cards section
│   ├── Testimonials.tsx        # Patient testimonials
│   ├── FAQ.tsx                 # FAQ accordion section
│   ├── CTA.tsx                 # Reusable CTA component
│   ├── BookingModal.tsx        # Modal for booking CTAs
│   ├── ScrollToTop.tsx         # Smooth scroll-to-top button
│   ├── Footer.tsx              # Footer section
│   └── ui/
│       ├── Button.tsx          # Reusable button (shadcn)
│       ├── Card.tsx            # Card component (shadcn)
│       └── [other shadcn UI]
├── lib/
│   ├── utils.ts                # cn utility function
│   └── animations.ts           # Framer Motion hooks
├── public/
│   └── images/
│       ├── placeholder-before.png
│       ├── placeholder-after.png
│       └── logo.png
└── hooks/
    └── useScrollAnimation.ts    # Custom scroll animation hook
```

---

## Component Breakdown

### 1. **Header** (150-200 lines)
**Purpose**: Navigation & brand identity
- **Elements**:
  - Logo/Brand name (AURA)
  - Navigation menu (desktop) + hamburger (mobile)
  - Book Appointment CTA button
  - Sticky background with glassmorphism on scroll
  
- **Features**:
  - Transparent initially, solid on scroll
  - Mobile hamburger menu with slide-out navigation
  - Responsive: Hidden menu items on mobile, visible on tablet+
  - Fixed positioning with z-index management

---

### 2. **Hero Section** (180-220 lines)
**Purpose**: First impression & main conversion
- **Elements**:
  - Main headline: "Discover Your Best Self"
  - Subheadline & description
  - Two CTAs: "Book Your Consultation" (gold) + "View Results" (glass border)
  - Background image (placeholder - full width)
  - Scroll hint indicator (animated arrow)

- **Features**:
  - Full viewport height
  - Hero image with overlay gradient
  - Animated scroll indicator
  - Responsive text sizing (mobile-first)
  - CTA buttons with hover effects

---

### 3. **Services Section** (200-250 lines)
**Purpose**: Showcase treatment categories
- **Elements**:
  - Section title: "Our Signature Treatments"
  - 3 service cards in a grid:
    - Smooth Texture (Botox/Fillers)
    - Restore Volume (Dermal Fillers)
    - Brighten Tone (Laser/Peels)
  - Each card: Title, description, icon, CTA link

- **Features**:
  - Glass-effect cards with hover animations
  - Grid layout (3 cols on desktop, 1-2 on mobile/tablet)
  - Icons for each service
  - Smooth transitions on hover
  - Scroll-triggered animations (fade-in)

---

### 4. **Before/After Section** (200-280 lines)
**Purpose**: Show results visually
- **Elements**:
  - Section title: "Real Results"
  - Before/After comparison frame (multiple examples)
  - Treatment details (age, plan, downtime)
  - Optional carousel/slider for multiple examples
  - CTA: "Reserve Your Treatment"

- **Features**:
  - Image slider or side-by-side comparison
  - Glassmorphic info labels
  - Scroll animations
  - Mobile-optimized layout (stacked or interactive slider)
  - Responsive image sizing

---

### 5. **Pricing Section** (200-240 lines)
**Purpose**: Membership & package options
- **Elements**:
  - Section title: "Flexible Pricing Options"
  - 3 pricing cards:
    - The Starter Plan
    - The Rested Package
    - The Rejuvenation Membership
  - Each card: Price, benefits list, CTA button
  - Feature comparison (optional)

- **Features**:
  - Glass-effect cards with hover lift effect
  - Responsive grid (1 mobile, 2 tablet, 3 desktop)
  - Price highlighting in gold accent
  - Hover state shows additional details
  - CTA buttons with booking modal trigger

---

### 6. **Testimonials Section** (150-180 lines)
**Purpose**: Social proof & trust building
- **Elements**:
  - Section title: "Loved by Our Patients"
  - 3-4 testimonial cards:
    - Quote text
    - Patient name, age, treatment
    - Star rating (4.9★)
    - Optional: Patient photo placeholder
  - Trust badge: "412 Verified Google Reviews"

- **Features**:
  - Glass-effect cards
  - Star rating component
  - Scroll animations
  - Responsive layout (1 mobile, 2 tablet, 3 desktop)
  - Hover effects on testimonials

---

### 7. **FAQ Section** (180-220 lines)
**Purpose**: Answer objections & build confidence
- **Elements**:
  - Section title: "Frequently Asked Questions"
  - Accordion component with 6-8 questions
  - Topics: Safety, downtime, results, pricing, etc.
  - Expandable answers with smooth animation

- **Features**:
  - Controlled accordion (one open at a time, optional)
  - Smooth expand/collapse animations
  - Glass-effect styling
  - Mobile-optimized spacing
  - Keyboard accessible

---

### 8. **CTA Module** (80-120 lines)
**Purpose**: Reusable conversion trigger
- **Elements**:
  - Primary text (customizable)
  - Button text & style
  - Modal trigger or external link
  - Multiple placements: After Hero, Services, Pricing, Footer

- **Features**:
  - Prop-based customization
  - Multiple button variants
  - Responsive sizing
  - Smooth animations on appearance

---

### 9. **Booking Modal** (120-150 lines)
**Purpose**: Handle appointment booking CTAs
- **Elements**:
  - Modal overlay (dark background with glass effect)
  - Close button
  - Booking form or external booking link
  - Loading state handling

- **Features**:
  - Smooth open/close animations
  - Click-outside to close
  - ESC key to close
  - Responsive sizing
  - Accessibility features (focus trap)

---

### 10. **Footer** (150-180 lines)
**Purpose**: Navigation, trust, legal
- **Elements**:
  - Left column: Company info, address, phone
  - Center column: Quick links, service links
  - Right column: Contact info, social links, HIPAA badge
  - Bottom: Copyright, legal links

- **Features**:
  - Dark sage green background
  - Glass-effect panels
  - Responsive stacking (3 cols desktop → 1 col mobile)
  - Social media links
  - Contact CTA
  - Smooth scroll-to-top button

---

### 11. **Scroll-to-Top Button** (60-80 lines)
**Purpose**: Improved UX for long pages
- **Elements**:
  - Floating button (bottom-right)
  - Arrow-up icon
  - Glass-effect styling
  - Visible only after scroll threshold

- **Features**:
  - Smooth scroll animation
  - Fade in/out on scroll
  - Hover effects
  - Mobile-optimized sizing

---

## Page Architecture

### Landing Page Flow (page.tsx)

```
1. Header (sticky)
2. Hero Section
3. Services Section
4. Before/After Section
5. Pricing Section
6. CTA Module (Mid-page)
7. Testimonials Section
8. FAQ Section
9. CTA Module (Pre-footer)
10. Footer
11. Booking Modal (Portal)
12. Scroll-to-Top Button (Fixed)
```

---

## Key Features Implementation

### 1. **Responsive Design**
- **Mobile** (320px - 767px): Single column, hamburger menu, large text
- **Tablet** (768px - 1023px): 2-column grids, optimized spacing
- **Desktop** (1024px+): 3-column grids, full features, hover effects

### 2. **Animations & Scroll Behaviors**
- **On Page Load**: Fade-in animations for hero, header
- **On Scroll**: 
  - Fade-in for sections as they enter viewport
  - Slide-up for cards in sequence
  - Scale-in for interactive elements
  - Parallax effects on images (optional)
- **On Interaction**: 
  - Button hover states (color shift, shadow)
  - Card hover lift effects
  - Smooth modal open/close
  - Smooth scroll-to-top

### 3. **Glass Effects**
- Applied to: Cards, buttons, modal, footer panels
- Properties: `backdrop-blur-md`, `bg-white/5`, `border-white/10`
- Hover states: Increased opacity, accent border

### 4. **CTA Placement** (≥3 locations)
1. **Header** - Book Appointment button
2. **Hero** - "Book Your Consultation" + "View Results"
3. **Services** - Implicit in service card descriptions
4. **Pricing** - "Join the Membership" button on each card
5. **Before/After** - "Reserve Treatment" CTA
6. **Footer** - "Secure Your Slot Now" button

### 5. **Form Handling**
- **Booking Modal**: Triggers on CTA clicks
  - Could link to external booking system (Calendly, etc.)
  - Or simple modal with email submission
  - Placeholder for now - can be connected to backend
  
- **Contact Page**: Separate page (`/contact`)
  - Contact form with fields: Name, Email, Phone, Message, Service Interest
  - Spam protection (honeypot field)
  - Smooth form submission with success feedback

### 6. **SEO Optimization**
- **Meta Tags**: Title, description in layout.tsx
- **OG Image**: Custom social preview image path
- **Structured Data**: LocalBusiness schema for med spa
- **Keywords**: Medical aesthetics, Botox, fillers, laser treatments
- **Performance**: Optimized images, lazy loading, code splitting
- **Accessibility**: Semantic HTML, ARIA labels, color contrast WCAG AA

---

## Dependencies & Installation

### Core Dependencies
```json
{
  "next": "16.0.0",
  "react": "19.0.0-rc",
  "tailwindcss": "4.0.0",
  "shadcn-ui": "latest"
}
```

### Additional Packages (Install in order)
```bash
# Animations
pnpm add framer-motion

# Form handling (if needed)
pnpm add react-hook-form zod

# Icons
pnpm add lucide-react

# Accessibility
pnpm add @headlessui/react @radix-ui/react-dialog

# Optional: Image optimization
pnpm add sharp next-image-export-optimizer
```

---

## Development Workflow

### Phase 1: Setup & Layout (Day 1)
- [ ] Initialize Next.js 16 project
- [ ] Configure Tailwind CSS with design tokens
- [ ] Install dependencies
- [ ] Create root layout with fonts (Geist + Playfair Display)
- [ ] Set up folder structure

### Phase 2: Header & Navigation (Day 1)
- [ ] Build Header component with logo
- [ ] Mobile hamburger menu with slide-out
- [ ] Sticky positioning with scroll detection
- [ ] Mobile-responsive navigation

### Phase 3: Hero & Services (Day 2)
- [ ] Hero section with full-width image, overlays
- [ ] CTA buttons with hover states
- [ ] Services section with 3 cards
- [ ] Glass effects on cards
- [ ] Scroll animations setup

### Phase 4: Before/After & Pricing (Day 2)
- [ ] Before/After comparison section
- [ ] Placeholder images (to be replaced later)
- [ ] Pricing cards with benefits
- [ ] Responsive grid layouts

### Phase 5: Testimonials & FAQ (Day 3)
- [ ] Testimonials cards with ratings
- [ ] FAQ accordion component
- [ ] Scroll animations for both sections
- [ ] Mobile-optimized spacing

### Phase 6: Modals & Special Features (Day 3)
- [ ] Booking modal component
- [ ] Scroll-to-top button
- [ ] CTA placement across page
- [ ] Modal animations & accessibility

### Phase 7: Footer & Contact Page (Day 4)
- [ ] Footer with columns, links, social
- [ ] Contact page with form
- [ ] Form validation & submission handling
- [ ] Success/error feedback

### Phase 8: Polish & Optimization (Day 4)
- [ ] Fine-tune all animations
- [ ] Test responsive breakpoints
- [ ] Optimize images & performance
- [ ] Accessibility audit (keyboard nav, contrast)
- [ ] SEO meta tags & structured data
- [ ] Browser compatibility testing

---

## Code Quality Standards

### Component Guidelines
- **Max lines**: 600 per component (keep focused)
- **Structure**: Props interface → Component function → JSX
- **Reusability**: Extract common patterns into utility components
- **Naming**: Descriptive, PascalCase for components, camelCase for utils
- **Comments**: JSDoc for complex logic, inline for non-obvious code

### Tailwind CSS Usage
- Prefer standard spacing scale (p-4, gap-6, etc.)
- Use semantic classes (items-center, justify-between)
- Mobile-first approach with responsive prefixes (md:, lg:)
- Custom utilities in globals.css for repeated patterns
- No arbitrary values unless absolutely necessary

### Performance Targets
- Lighthouse Score: 90+
- First Contentful Paint (FCP): < 1.5s
- Cumulative Layout Shift (CLS): < 0.1
- Interaction to Next Paint (INP): < 200ms
- Image optimization: WebP, lazy loading

### Accessibility Requirements
- WCAG AA compliance minimum
- Color contrast ratio: 4.5:1 for text
- Keyboard navigation for all interactive elements
- ARIA labels for interactive components
- Semantic HTML (header, main, footer, nav)
- Alt text for all meaningful images

---

## Responsive Breakpoints

| Breakpoint | Screen Size | Layout |
|------------|-------------|--------|
| **Mobile** | 320px-767px | Single column, hamburger menu, centered text |
| **Tablet** | 768px-1023px | 2-column grids, adjusted spacing |
| **Desktop** | 1024px+ | 3-column grids, full hover effects |
| **Large** | 1440px+ | Max-width container, centered |

---

## Animation Strategy

### Scroll Animations
- Trigger when element enters 80% of viewport
- Stagger children animations (100-150ms delay)
- Use `IntersectionObserver` or Framer Motion for performance

### Entrance Animations
- Fade-in: 0.6s ease-out
- Slide-up: 0.6s ease-out (20px distance)
- Scale-in: 0.6s ease-out (0.95 → 1)

### Interactive Animations
- Hover state: 200ms transition
- Button press: 100ms scale feedback
- Modal open: 300ms from center
- Modal close: 200ms to center

### Motion Preferences
- Respect `prefers-reduced-motion` media query
- Disable animations for users with vestibular issues

---

## Browser Support

- Chrome/Edge: Latest 2 versions
- Firefox: Latest 2 versions
- Safari: Latest 2 versions (desktop + iOS)
- Mobile browsers: Latest 2 versions
- No IE11 support (modern browsers only)

---

## File Naming Conventions

```
Components/        PascalCase.tsx
Utilities/         camelCase.ts
Styles/           kebab-case.css (in globals.css)
Images/           kebab-case.png
Hooks/            useHookName.ts
```

---

## Testing Checklist

### Functional Testing
- [ ] All CTAs open correct modals/pages
- [ ] Forms submit without errors
- [ ] Navigation links work on all devices
- [ ] Hamburger menu opens/closes smoothly
- [ ] Scroll-to-top button appears/disappears correctly

### Responsive Testing
- [ ] Mobile (iPhone 12): Readability, touch targets, menu
- [ ] Tablet (iPad): Grid layouts, spacing
- [ ] Desktop (1440px+): Full layout, hover effects

### Performance Testing
- [ ] Lighthouse audit scores
- [ ] Image loading speed
- [ ] Animation smoothness (no jank)
- [ ] Modal open/close performance

### Accessibility Testing
- [ ] Tab navigation through all interactive elements
- [ ] Screen reader testing (NVDA/JAWS)
- [ ] Color contrast verification
- [ ] Focus indicators visible
- [ ] Keyboard-only navigation possible

### Browser Testing
- [ ] Chrome, Firefox, Safari, Edge (latest)
- [ ] Mobile Safari (iOS)
- [ ] Chrome Mobile (Android)

---

## Future Enhancements (Post-Launch)

1. **Image Library**: Replace all placeholder images with real patient photos
2. **Dynamic Content**: Connect pricing, FAQs to CMS
3. **Booking Integration**: Connect modal to Calendly/Acuity Scheduling
4. **Contact Form Backend**: Set up email notifications for contact form
5. **Analytics**: Google Analytics, conversion tracking
6. **A/B Testing**: Test CTA button colors, copy variations
7. **Chat Widget**: Live support chat integration
8. **Review System**: Fetch real reviews from Google/Trustpilot
9. **Video Content**: Hero video background, testimonial videos
10. **Membership Portal**: Loyalty program tracking

---

## Notes & Considerations

- **Prototype Status**: Focus on visual design & UX flow first
- **Image Placeholders**: All images are placeholders - will be replaced with real content
- **Form Submissions**: Contact form setup depends on backend/email service choice
- **Booking Modal**: Currently template-only - integrate with booking system as needed
- **SEO**: Meta tags set, structured data included - optimize after launch
- **Accessibility**: Built with WCAG AA compliance in mind - audit before production
- **Performance**: Lazy load images, code split sections, optimize bundle size

---

## Success Criteria

✓ Landing page fully responsive (mobile, tablet, desktop)
✓ All CTAs functional with modal triggers
✓ Smooth animations on scroll and interaction
✓ Contact page with working form
✓ Glass effects applied to key components
✓ Accent color (gold) used throughout
✓ Dark theme consistently applied
✓ SEO optimized with meta tags
✓ WCAG AA accessibility compliance
✓ Lighthouse performance score 90+
✓ Smooth scroll-to-top functionality
✓ Mobile hamburger menu works seamlessly
✓ All images optimized and loading correctly

---

## Deployment

- **Platform**: Vercel (recommended for Next.js)
- **Domain**: Custom domain configuration in Vercel settings
- **Environment Variables**: Set in Vercel project settings if needed
- **Build Command**: `next build`
- **Start Command**: `next start`

---

**Status**: Ready for implementation
**Last Updated**: 2026-07-04
**Version**: 1.0
