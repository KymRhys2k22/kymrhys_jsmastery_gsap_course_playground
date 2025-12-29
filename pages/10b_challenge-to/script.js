import gsap from "gsap";

const toastOne = document.querySelector(".one");
const toastTwo = document.querySelector(".two");

const openToast = () => {
  gsap.to(toastOne, {
    scale: 1,
    y: -120,
    opacity: 1,
    delay: 1,
    ease: "power4.out",
    onComplete: () => {
      gsap.to(toastOne, {
        opacity: 0,
        delay: 2,
        y: -40,
        onComplete: () => {
          gsap.to(toastTwo, {
            scale: 1,
            y: -120,
            opacity: 1,
            delay: 2,
            duration: 0.8,
            ease: "power4.out",
            onComplete: () => {
              gsap.to(toastTwo, {
                opacity: 0,
                y: -40,
                delay: 2,
                ease: "power4.out",
                onComplete: () => {
                  setTimeout(openToast(), 2500);
                },
              });
            },
          });
        },
      });
    },
  });
};

openToast();
