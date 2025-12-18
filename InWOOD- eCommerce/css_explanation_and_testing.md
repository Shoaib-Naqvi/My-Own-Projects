# CSS Explanation

- `:root`: Defines global CSS variables for colors, fonts, spacing, and the container max-width configuration.
- `html`: Sets smooth scrolling and base font size.
- `body`: Applies base font family, text color, and background color.
- `img`: Ensures images are responsive (max-width: 100%) and display as blocks.
- `h1-h6`: Sets heading font family and line height; includes `h1` fluid typography using `clamp()`.
- `.container`: Centers content with a max-width and adds horizontal padding.
- `.skip-link`: Accessibility feature to allow keyboard users to skip to main content.
- `.btn`: Base styles for buttons including padding and transitions.
- `.btn--primary`: Styles for the main call-to-action buttons with a gradient background.
- `.btn--secondary`: Styles for outline buttons using the secondary color.
- `.section`: Adds standard vertical padding for page sections.
- `.header`: Sticky positioning with a semi-transparent backdrop blur effect.
- `.nav__list`: Flexbox layout for the navigation links.
- `.mobile-toggle`: Hides the hamburger menu icon by default (visible only on mobile).
- `.hero__container`: Grid layout for the hero section (text + image).
- `.feature-card`: Card styling with hover effects and scaling background image.
- `.product-grid`: Responsive grid layout for products using `repeat(auto-fill, minmax(...))`.
- `.testimonial-card`: Styled card for testimonials with avatar and quote.
- `.newsletter__container`: Dark background container for the newsletter section.
- `footer`: Dark theme footer with flexbox/grid layouts for columns.
- `@media (max-width: 767px)`: Mobile-specific styles, including the toggleable navigation menu.
- `@media (min-width: 768px)`: Tablet styles, switching grids to 2 columns.
- `@media (min-width: 1024px)`: Desktop styles, switching grids to 3 columns.

# Testing Checklist

Please test the following viewports to ensure pixel-perfect responsiveness:

- [ ] **320px** (iPhone 5/SE - Small Mobile): Verify no horizontal scroll, readable 16px base text.
- [ ] **375px** (iPhone X/12 - Mobile): Check hero text wrapping and button sizes.
- [ ] **768px** (iPad - Tablet Portrait): Verify grid switches to 2 columns, nav remains visible or switches to burger depending on preference (currently burger < 768px).
- [ ] **1024px** (iPad Pro - Tablet Landscape): Verify 3-column product grid and full desktop navigation.
- [ ] **1440px+** (Desktop): Check max-width constraint on container (content shouldn't stretch indefinitely).

**Interaction Tests:**
- click the "Hamburger Menu" on mobile -> Menu should slide/fade in.
- click "Shop Now" -> Smooth scroll to Products section.
- Resize window from desktop to mobile -> Layout should adapt fluidly without breaking.
