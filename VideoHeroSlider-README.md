# Video Hero Slider Component

A responsive React component with Tailwind CSS for creating a full-screen video hero slider with autoplay, manual navigation, and smooth transitions.

## Features

- ✅ Full viewport height video background slider
- ✅ Multiple slides with autoplay functionality
- ✅ Muted, looping, auto-playing videos
- ✅ Dark overlay for text readability
- ✅ Centered title text and CTA button
- ✅ Pagination dots navigation
- ✅ Previous/Next arrow navigation
- ✅ Mobile responsive design
- ✅ Smooth fade transitions
- ✅ No video player controls visible
- ✅ Progress indicator bar
- ✅ Accessibility features (ARIA labels)

## Usage

```jsx
import VideoHeroSlider from "./src/components/VideoHeroSlider";

function App() {
  return (
    <div>
      <VideoHeroSlider />
    </div>
  );
}
```

## Component Structure

The component includes:

1. **Video Background**: Full-screen videos that autoplay, loop, and are muted
2. **Dark Overlay**: Semi-transparent overlay for text readability
3. **Content Area**: Centered title and CTA button
4. **Navigation**: Arrow buttons for manual slide control
5. **Pagination**: Dots indicating current slide and allowing direct navigation
6. **Progress Bar**: Visual indicator of slide progression

## Customization

### Adding More Slides

Edit the `slides` array in `VideoHeroSlider.jsx`:

```jsx
const slides = [
  {
    id: 1,
    video: YourVideo1,
    title: "Your Custom Title",
    ctaText: "Your CTA Text",
    ctaLink: "/your-link",
  },
  // Add more slides...
];
```

### Styling Customization

The component uses Tailwind CSS classes. Key customizable elements:

- **Slide duration**: Change the `6000` value in the `setInterval`
- **Transition speed**: Modify `duration-500` classes
- **Button styling**: Update button classes for different appearances
- **Text styling**: Modify title and CTA button classes
- **Overlay opacity**: Change `bg-opacity-40` value

### Mobile Responsiveness

The component is responsive by default with:

- Responsive text sizes (`text-3xl md:text-5xl lg:text-6xl`)
- Adaptive button positioning (`left-4 md:left-8`)
- Mobile-friendly touch interactions

## Browser Compatibility

- Modern browsers with video autoplay support
- Fallback text for browsers without video support
- Optimized for mobile devices

## Performance Notes

- Videos use `preload="metadata"` for faster loading
- Only the current slide's video plays to save bandwidth
- Smooth transitions with CSS transforms and opacity

## Dependencies

- React (with Hooks)
- Tailwind CSS
- Video files in supported formats (MP4 recommended)

## File Structure

```
src/
├── components/
│   └── VideoHeroSlider.jsx
├── assets/
│   ├── BJ40-Video.mp4
│   └── X55-Video.mp4
```

## Accessibility

- ARIA labels for navigation buttons
- Keyboard navigation support
- Screen reader friendly structure
- Disabled state handling for buttons during transitions
