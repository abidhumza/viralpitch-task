// Register the MotionPathPlugin
gsap.registerPlugin(MotionPathPlugin);

// Set a common duration and stagger amount for all icons
const commonDuration = 8;
const staggerAmount = 1;

// Create an array of icon classes for easier iteration
const icons = [
  ".facebook",
  ".instagram",
  ".twitter",
  ".heart",
  ".like",
  ".youtube",
  ".money",
];

// Function to animate icons along the path
const animateIcons = (icons, duration, stagger) => {
  icons.forEach((icon, index) => {
    // Initially hide each icon
    gsap.set(icon, { autoAlpha: 0 });

    // Animate each icon along the path
    gsap.to(icon, {
      duration: duration,
      repeat: -1,
      motionPath: {
        path: "#lastOrbitalPath",
        align: "#lastOrbitalPath",
        autoRotate: true,
      },
      ease: "power1.inOut",
      delay: index * stagger,
      onStart: () => {
        // Fade in the icon when it starts animating
        gsap.to(icon, { autoAlpha: 1, duration: 0.5 });
      },
    });
  });
};

// Run the animation for icons
animateIcons(icons, commonDuration, staggerAmount);

// Run initial animations on DOMContentLoaded
document.addEventListener("DOMContentLoaded", () => {
  // Scale animation for the main elements
  gsap.from(
    ".model, .prod1, .prod2, .propcollection, .propwithdraw, .propspebble",
    {
      scale: 0,
      duration: 1,
      ease: "power2.out",
    }
  );

  // Drop animation for specific props
  gsap.from(
    ".propblocks, .propgift, .prophashtag, .propheart, .propmoney, .propplaybutton",
    {
      y: -100,
      duration: 0.8,
      ease: "bounce.out",
    }
  );
});