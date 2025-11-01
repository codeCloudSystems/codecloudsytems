# Design Guidelines - Code Cloud Systems

## Design Approach
**Reference-Based Approach** inspired by modern tech agencies (WD Desenvolvimento, Vercel, Linear) with emphasis on immersive 3D elements and technical sophistication. The design should communicate innovation, technical expertise, and professionalism through dark aesthetics and dynamic animations.

## Core Design Elements

### Typography
- **Primary Font**: Inter or Outfit (Google Fonts) - clean, modern sans-serif
- **Hero/Headings**: 3xl to 6xl, font-weight 700-800, tight line-height (1.1)
- **Section Titles**: 2xl to 4xl, font-weight 600-700
- **Body Text**: base to lg, font-weight 400, line-height 1.7 for readability
- **Labels/Captions**: sm to base, font-weight 500-600

### Layout System
**Spacing Primitives**: Tailwind units of 4, 8, 12, 16, 20, 24, 32 for consistent rhythm
- **Section Padding**: py-20 to py-32 (desktop), py-12 to py-16 (mobile)
- **Container**: max-w-7xl with px-4 to px-8
- **Card Spacing**: gap-6 to gap-8 in grids
- **Element Margins**: mb-4, mb-8, mb-12 for vertical flow

### Visual Treatment
**Dark Theme Palette Focus**:
- Primary backgrounds: Deep blacks (#000000 to #0a0a0a)
- Secondary surfaces: Dark grays (#111111 to #1a1a1a)
- Accent elements: Cyan/electric blue (#00d4ff, #0ea5e9)
- Text hierarchy: White (#ffffff) for headers, gray-300 for body
- Borders: Subtle gray-800 with cyan accents on hover

## Component Library

### Navigation
- Fixed/sticky header with backdrop blur (backdrop-blur-md bg-black/70)
- Logo left-aligned, navigation links center/right
- Mobile: Hamburger menu with slide-in drawer
- CTA button in navigation (rounded, cyan accent)

### Hero Section (Full Viewport)
- **3D Neural Network Canvas**: Full background using Three.js/React Three Fiber
- Animated particles/nodes connected by lines, subtle movement
- Centered content overlay with h-screen positioning
- Primary heading (text-5xl to text-7xl) with gradient text effect
- Subheading (text-xl to text-2xl, text-gray-300)
- Dual CTAs: Primary (solid cyan) + Secondary (outline/ghost)
- Scroll indicator at bottom (animated chevron/mouse icon)

### Linguagens e Tecnologias Section
- **Grid Layout**: 3-4 columns (desktop), 2 columns (tablet), 1 column (mobile)
- Technology cards with hover lift effect (transform translate-y)
- Each card: Icon/logo, technology name, brief description
- Icons: Use recognizable tech logos (React, Python, Node.js, Docker, AWS, etc.)
- Stagger animation on scroll reveal

### Mercados de Atuação Section
- **2-3 Column Grid** with industry cards
- Each market card: Icon, title, 2-3 line description
- Markets: E-commerce, Fintech, Healthcare, Education, Logistics, SaaS
- Cards with gradient borders (border-gradient effect)
- Hover state: Glow effect with cyan accent

### Serviços Section
- **Feature Grid** with 3 columns
- Large icons (custom or from Heroicons)
- Service title + comprehensive description
- "Saiba Mais" link in each card
- Services: Custom Development, Cloud Solutions, API Integration, Consulting, etc.

### Projetos/Portfólio Section
- **Masonry-style grid** or 2-column layout
- Project cards with thumbnail images
- Overlay on hover revealing: project name, tech stack, "Ver Projeto" link
- Filter tabs at top (All, Web, Mobile, APIs)

### Equipe Section
- **3-4 column grid** for team members
- Circular profile images with cyan border on hover
- Name, role/title, brief bio
- Social links (LinkedIn, GitHub) as icons

### Contato Section
- **2-column layout**: Form (left) + Contact info/map (right)
- Form fields: Nome, Email, Empresa, Mensagem
- Inputs with dark background, cyan focus state
- Contact info: Email, phone, address with icons
- "Enviar Mensagem" button (primary cyan)

### Footer
- **Multi-column layout**: Company info, Sitemap, External links, Social media
- Newsletter signup (optional): Email input + Subscribe button
- Logo and tagline in first column
- Bottom bar: Copyright, Privacy Policy links
- Subtle top border (border-gray-800)

## Animation Strategy

### 3D Neural Network (Hero)
- Particle system with 50-100 nodes
- Connecting lines drawn between nearby particles
- Gentle floating movement (noise-based)
- Mouse parallax effect (subtle depth)
- Performance: Use InstancedMesh for optimization

### Scroll Animations
- Fade-in + Slide-up for section content (translate-y-8 to 0)
- Stagger delays for grid items (0.1s intervals)
- Trigger: IntersectionObserver at 70% viewport visibility
- Keep animations subtle (duration: 0.6-0.8s)

### Micro-interactions
- Card hover: Subtle lift (translate-y-1) + shadow increase
- Button hover: Scale (1.02) + brightness increase
- Link hover: Cyan underline animation (width 0 to 100%)

## Images

### Hero Section
- **No static image** - 3D canvas animation serves as background
- Consider adding subtle grid overlay (matrix-style lines)

### Technology Section
- Use official logos/icons for each technology (React, Python, AWS, etc.)
- SVG format preferred for scalability
- Consistent sizing (h-12 to h-16)

### Portfolio Projects
- Project screenshot thumbnails (16:9 aspect ratio)
- Grayscale filter, color on hover
- Minimum 800x450px resolution

### Team Section
- Professional headshots, circular crop
- Consistent background/lighting
- 400x400px minimum

### About/Company Section
- Optional: Abstract tech imagery (server room, code, networks)
- Position right side with text left, or full-width background with overlay

## Responsive Breakpoints
- Mobile: < 768px (single column, stacked layout)
- Tablet: 768px - 1024px (2 columns for most grids)
- Desktop: > 1024px (3-4 columns, full layout)
- Large: > 1280px (max-w-7xl container centered)

## Accessibility
- All interactive elements keyboard navigable
- Proper heading hierarchy (h1 → h6)
- Form labels associated with inputs
- Color contrast ratio 4.5:1 minimum for text
- Focus states visible (ring-2 ring-cyan-500)
- Alt text for all images
- ARIA labels for icon-only buttons

## Performance Considerations
- Lazy load Three.js scene (dynamic import)
- Optimize particle count based on device capability
- Use Next.js Image component for all static images
- Minimize animation on mobile (reduce particle count)
- Implement loading state for 3D canvas