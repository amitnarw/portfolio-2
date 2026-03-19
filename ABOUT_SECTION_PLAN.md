# New About Me Section - Implementation Plan

## Image Analysis

The image shows a professional statistics/about section with the following components:

### Visual Elements:
1. **Central Profile Photo** - Circular image with a subtle border/shadow
2. **Four Statistics Cards** arranged around the photo:
   - Top Left: "07 Years of Experience"
   - Top Right: "4.9 70 Rating"
   - Bottom Left: "1200+ Total Projects"
   - Bottom Right: "20+ Industries Served"
3. **Horizontal Line** - A subtle divider line passing through the center
4. **Clean, Minimalist Design** - White background with dark text

### Layout Structure:
- Grid-based layout (2x2 grid with photo in center)
- Responsive design that works on mobile and desktop
- Statistics positioned at corners with photo centered
- Horizontal line creating visual separation

### Styling Approach:
- Use Tailwind CSS for styling
- Implement with shadcn/ui components where applicable
- Add smooth animations on scroll (intersection observer)
- Use project's color scheme (primary: #ffd976, secondary: #fca546)

## Implementation Plan

### Step 1: Create New Component
Create `about-stats.tsx` in `src/components/homepage/` directory

### Step 2: Component Structure
```typescript
- AboutStats component
- Uses IntersectionObserver for scroll animations
- Grid layout with 4 stat cards + central photo
- Responsive design (stack on mobile, grid on desktop)
```

### Step 3: Stat Card Design
Each stat card will include:
- Large number (e.g., "07", "4.9", "1200+", "20+")
- Label text (e.g., "Years of Experience", "Rating", etc.)
- Subtle hover effects
- Fade-in animation on scroll

### Step 4: Central Photo
- Circular image using existing `my-img.png` from public folder
- Subtle border/shadow effect
- Responsive sizing

### Step 5: Integration
- Add component to `page.tsx` after the existing About section
- Ensure proper spacing and flow

### Step 6: Animations
- Fade-in-up animation for the entire section
- Staggered animation for individual stat cards
- Smooth transitions on hover

## Files to Create/Modify:
1. **Create**: `src/components/homepage/about-stats.tsx`
2. **Modify**: `src/app/page.tsx` (import and add the new component)

## Technical Details:
- Use TypeScript for type safety
- Implement with React hooks (useState, useEffect, useRef)
- Use Tailwind CSS classes matching project theme
- Ensure dark mode support
- Mobile-first responsive design
