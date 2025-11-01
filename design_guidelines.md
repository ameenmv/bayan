# Al-Bayan Academy - Design Guidelines

## Design Approach
**Islamic Educational Platform** - Drawing inspiration from professional Arabic educational institutions with elegant, trustworthy aesthetics. The design emphasizes cultural authenticity through Islamic geometric patterns, RTL layout, and carefully chosen Arabic typography.

## Color Palette
- **Deep Green**: #2E4A40 (Primary - headers, navigation, key elements)
- **Golden Beige**: #D9B45E (Accent - dividers, borders, hover states)
- **Light Cream**: #F9F7F2 (Background - main page background)
- **White**: #FFFFFF (Cards, sections)
- **Soft Gray**: For subtle contrast and secondary text

## Typography
**Headings**: Amiri or Scheherazade (Arabic-style serif fonts via Google Fonts)
- Large headings: 2.5rem - 3.5rem
- Section headings: 2rem - 2.5rem
- Card headings: 1.5rem - 1.75rem

**Body Text**: Cairo or Tajawal (clean, modern Arabic sans-serif)
- Body: 1rem - 1.125rem
- Small text: 0.875rem - 1rem

## RTL Layout System
- **Direction**: Right-to-left (dir="rtl") for all Arabic content
- **Spacing**: Tailwind units of 2, 4, 6, 8, 12, 16, 20, 24
- **Container**: max-w-7xl for content sections
- **Section Padding**: py-16 to py-24 on desktop, py-12 on mobile
- **Card Spacing**: gap-6 to gap-8 in grids

## Component Library

### Header
- Logo placeholder (top-right for RTL): 60px height, white background with golden border
- Navigation links: الرئيسية - من نحن - البرامج - انضم إلينا - تواصل معنا
- Golden underline animation on hover
- Sticky header with soft shadow on scroll

### Hero Section
- **Large Background Image**: Open Quran imagery with subtle overlay (dark green with 40% opacity)
- **Overlay Text** (centered, white):
  - Arabic: "نور لقلبك، ورفعة في دنياك وآخرتك" (3rem, Amiri font)
  - English subtitle: "A light for your heart, and an elevation in this life and the Hereafter" (1.25rem)
- Height: 70vh on desktop, 50vh on mobile

### Section Components

**About Section (من نحن)**
- Light cream background
- Centered content with max-w-4xl
- Decorative golden divider with Islamic geometric SVG pattern (use simple geometric shapes)
- Soft shadow on content card

**Mission & Vision Cards**
- Two-column grid (single column on mobile)
- White cards with rounded corners (border-radius: 1rem)
- Deep green icons (64px)
- Golden hover glow effect (box-shadow transition)

**Programs Section (خدماتنا)**
- Three-column grid (responsive to single column)
- White cards with subtle shadows
- Golden beige top border accent (4px)
- Icons for each program (Quran, book, compass symbols)

**Global Learning Section**
- Split layout: World map illustration (left), text content (right)
- Light background with golden geometric pattern overlay
- Use placeholder for globe/map SVG illustration

**Testimonials**
- Two testimonial cards in grid
- Soft gray background
- Include quote marks in golden beige
- Small circular avatar placeholders

**Call-to-Action**
- Full-width section with golden beige background
- Centered content
- Large green button with golden glow on hover
- Rounded button (border-radius: 0.5rem)

### Footer
- Deep green background
- Three-column layout (contact, links, social media)
- Golden social media icons
- Contact info with phone and website icons
- Light cream text color
- Copyright text centered at bottom

## Animations
- **Smooth Scroll**: Between sections (subtle, 0.3s ease)
- **Hover Effects**: Golden glow (box-shadow: 0 0 20px rgba(217, 180, 94, 0.4))
- **Card Entry**: Gentle fade-up on scroll (0.5s ease-out)
- **Button Hover**: Scale 1.02 with golden glow

## Islamic Design Elements
- **Geometric Patterns**: Light, subtle patterns in backgrounds (use CSS or simple SVG shapes - stars, hexagons)
- **Decorative Dividers**: Golden horizontal lines with centered geometric ornament
- **Rounded Corners**: All cards and buttons (0.5rem to 1rem)
- **Soft Shadows**: box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08)

## Images
- **Hero Image**: Large full-width open Quran image with elegant presentation (70vh height)
- **Globe Illustration**: SVG or image for global learning section
- **Background Patterns**: Subtle Islamic geometric patterns (low opacity overlays)
- **Logo**: Placeholder space in header (60px height, will be uploaded later)

## Responsive Behavior
- **Desktop (lg)**: Full multi-column layouts
- **Tablet (md)**: Two-column maximum, adjusted spacing
- **Mobile**: Single column, stacked navigation (hamburger menu), reduced font sizes
- All images scale proportionally
- Touch-friendly button sizes (minimum 44px height)