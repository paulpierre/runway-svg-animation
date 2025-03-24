# SVG Path Animation with Anime.js

## The Challenge

I came across [Runway.com's website](https://www.runway.com/) and was captivated by their beautiful scroll-triggered SVG path animations. The way the paths drew in as you scrolled through the page created a compelling visual narrative. I noticed they were using GSAP for these animations, but as an Anime.js enthusiast, I wondered: could I recreate this effect using Anime.js?

![Original Runway.com Animation](runway-scroll.gif)

This project is the result of that challenge - a perfect recreation of Runway's path animation system using Anime.js instead of GSAP.

## Live Demo

Check out the [live demo on GitHub Pages](https://paulpierre.github.io/runway-svg-animation/animejs-demo)!

![Anime.js Implementation](demo.gif)

## How It Works

### Core Principles

The animation follows these key principles:

1. **Outside-In Drawing**: Paths start from the outer edges and converge toward the center as you scroll
2. **Top-to-Bottom Flow**: The animation progresses naturally from top to bottom as you scroll down the page
3. **Initial Progress**: Paths start partially drawn to immediately engage visitors
4. **Multi-Stage Animation**: The longest path animates in segments with different timing to create visual interest
5. **Checkpoint Indicators**: Animated checkmarks appear at key points along the journey

### Script Logic Explained

The script uses these key techniques:

1. **SVG Path Measurement**: We get the total length of each path using `getTotalLength()`
2. **Stroke Dash Animation**: We animate the `strokeDashoffset` property to create the drawing effect
3. **Negative Offset**: By using negative offsets, we make paths draw from the outside toward the center
4. **Scroll Progress Tracking**: We calculate how far the user has scrolled through the SVG
5. **Proportional Drawing**: Each path's drawing speed is adjusted based on its relative length

### Customizable Parameters

You can easily modify these parameters at the top of the script:

```javascript
// Define initial progress for each path (0 to 1)
const initialProgress = {
  path0: 0.2, // Starting progress for path 0 (right branch)
  path1: 0.3, // Starting progress for path 1 (left branch)
  path2: 0.25, // Starting progress for path 2 (bottom branch)
};
```

Other aspects you can customize:

- **Scroll Trigger Point**: Change `scrollStart = windowHeight * 0.8` to adjust when animation begins
- **Checkmark Thresholds**: Modify when checkmarks appear by changing the threshold values
- **Animation Segments**: Adjust the segment percentages in the path2 animation for different timing
- **Spring Animation**: Change the spring easing parameters for the checkmarks

## Usage

1. Include Anime.js in your project:
   ```html
   <script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.2/anime.min.js"></script>
   ```

2. Set up your HTML with the SVG structure (see `index.html`)

3. Add the CSS styles (see `style.css`)

4. Include the JavaScript (see `script.js`)

## Deploy Your Own

### GitHub Pages

To deploy this demo on GitHub Pages:

1. Fork this repository
2. Go to the repository settings
3. Navigate to "Pages" in the sidebar
4. Select your main branch as the source
5. Click "Save"

Your site will be published at `https://github.com/paulpierre/runway-svg-animation/`

### Local Development

To run this project locally:

1. Clone the repository:
   ```
   git clone https://github.com/paulpierre/runway-svg-animation/animejs-demo
   ```

2. Navigate to the project folder:
   ```
   cd runway-path/animejs-demo
   ```

3. Open `index.html` in your browser or use a local server:
   ```
   npx serve
   ```

## Browser Compatibility

This animation works in all modern browsers that support SVG and JavaScript. The animation uses basic scroll events and SVG properties that are well-supported.

## Comparison with GSAP

While GSAP offers plugins like DrawSVGPlugin specifically for path animations, Anime.js can achieve the same effect using standard SVG properties. The main differences:

- **Scroll Tracking**: GSAP has ScrollTrigger plugin; we use custom scroll calculations
- **Timeline Management**: GSAP uses timelines; we use direct animations linked to scroll progress
- **Performance**: Both libraries offer excellent performance for SVG animations

## License

This project is open source and available under the MIT License.

---

Enjoy creating beautiful scroll-triggered path animations with Anime.js!