gsap.to(".card", {
  opacity: 1,
  scale: 1,
  duration: 5,
  onComplete: () => {
    gsap.to(".card", {
      y: -20,
      duration: 0.5,
      repeat: -1,
      yoyo: true,
    });
  },
});
