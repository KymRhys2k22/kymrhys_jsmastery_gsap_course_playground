import gsap from "gsap";

const showToastLoop = () => {
  gsap.to(".toast", {
    y: -120,
    opacity: 1,
    scale: 1,
    duration: 0.5,
    ease: "power4.out",
    onComplete: () => {
      gsap.to(".toast", {
        delay: 2,
        y: -40,
        ease: "power4.out",
        opacity: 0,
        duration: 0.5,
        onComplete: () => {
          setTimeout(showToastLoop, 1000);
        },
      });
    },
  });
};

showToastLoop();
