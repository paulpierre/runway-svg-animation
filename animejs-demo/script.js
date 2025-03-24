// Get all SVG paths
const paths = {
  path0: document.querySelector(".path-0"),
  path1: document.querySelector(".path-1"),
  path2: document.querySelector(".path-2"),
};

// Get path lengths
const pathLengths = {
  path0: paths.path0.getTotalLength(),
  path1: paths.path1.getTotalLength(),
  path2: paths.path2.getTotalLength(),
};

// Define initial progress for each path (0 to 1)
const initialProgress = {
  path0: 0.2, // Starting progress for path 0
  path1: 0.3, // Starting progress for path 1
  path2: 0.25, // Starting progress for path 2
};

// Set initial states
Object.values(paths).forEach((path, index) => {
  const pathKey = `path${index}`;
  path.style.strokeDasharray = path.getTotalLength();
  // Apply initial progress to starting offset
  const initialProgressValue = initialProgress[pathKey] || 0;
  path.style.strokeDashoffset =
    -path.getTotalLength() * (1 - initialProgressValue);
});

// Scroll animation function
function animateOnScroll() {
  const svg = document.querySelector("svg");
  const svgTop = svg.getBoundingClientRect().top;
  const svgBottom = svg.getBoundingClientRect().bottom;
  const windowHeight = window.innerHeight;
  const scrollStart = windowHeight * 0.8; // 80% from top

  // Calculate scroll progress
  let progress = 0;
  if (svgTop <= scrollStart) {
    progress = Math.min(1, (scrollStart - svgTop) / (svgBottom - svgTop));
  }

  // Animate paths based on scroll progress - draw from outside in
  anime.set(paths.path0, {
    strokeDashoffset:
      -anime.setDashoffset(paths.path0) *
      (1 - initialProgress.path0 - progress * (1 - initialProgress.path0)),
  });

  anime.set(paths.path1, {
    strokeDashoffset:
      -anime.setDashoffset(paths.path1) *
      (1 -
        initialProgress.path1 -
        progress * 0.87 * (1 - initialProgress.path1)),
  });

  // Path 2 segments to match GSAP's multi-step animation
  const path2Progress = progress * 5; // Multiply by 5 for the 5 segments
  let path2Offset = -pathLengths.path2 * (1 - initialProgress.path2); // Start with initial progress

  if (path2Progress <= 1) {
    path2Offset =
      -pathLengths.path2 *
      (1 -
        initialProgress.path2 -
        path2Progress * 0.33 * (1 - initialProgress.path2)); // First 33%
  } else if (path2Progress <= 2) {
    path2Offset =
      -pathLengths.path2 *
      0.67 *
      (1 - initialProgress.path2) *
      (1 - (path2Progress - 1) * 0.07); // Next 7%
  } else if (path2Progress <= 3) {
    path2Offset =
      -pathLengths.path2 *
      0.6 *
      (1 - initialProgress.path2) *
      (1 - (path2Progress - 2) * 0.2); // Next 20%
  } else if (path2Progress <= 4) {
    path2Offset =
      -pathLengths.path2 *
      0.4 *
      (1 - initialProgress.path2) *
      (1 - (path2Progress - 3) * 0.2); // Next 20%
  } else {
    path2Offset =
      -pathLengths.path2 *
      0.2 *
      (1 - initialProgress.path2) *
      (1 - (path2Progress - 4)); // Final 20%
  }

  anime.set(paths.path2, {
    strokeDashoffset: path2Offset,
  });

  // Animate checkmarks
  const checks = [
    { circle: ".circle-3", check: ".check-3", threshold: 0.3 },
    { circle: ".circle-2", check: ".check-2", threshold: 0.6 },
    { circle: ".circle-1", check: ".check-1", threshold: 0.9 },
  ];

  checks.forEach(({ circle, check, threshold }) => {
    if (progress >= threshold) {
      anime.set(circle, {
        fill: "#f9a600",
      });

      anime({
        targets: check,
        scale: 1,
        opacity: 1,
        duration: 1,
        easing: "spring(1, 80, 10, 0)",
      });
    }
  });
}

// Add scroll event listener
window.addEventListener("scroll", animateOnScroll);
// Initial animation
animateOnScroll();
