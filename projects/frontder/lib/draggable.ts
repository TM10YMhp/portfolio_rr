// https://www.nextjet.dev/
const DECISION_THRESHOLD = 170;

let isAnimating = false;
let pullDeltaX = 0; // distance from the card being dragged

const createFeedbackIcons = (container: HTMLElement) => {
  // ya no es necesario la opacidad y duracion dinamica?
  const baseClass =
    "opacity-0 absolute top-5 leading-none rounded-full w-fit h-fit pointer-events-none transition-opacity duration-100";

  const like = document.createElement("i");
  like.className = `${baseClass} left-5 text-2xl bg-green-500 p-2.5 nf nf-fa-check`;

  const nope = document.createElement("i");
  nope.className = `${baseClass} right-5 text-xl bg-red-600 p-3 nf nf-fa-close`;

  container.appendChild(like);
  container.appendChild(nope);

  return { like, nope };
};

type DecisionCallback = (liked: boolean) => void;
export const startDrag = (onDecision: DecisionCallback) => {
  return (event: MouseEvent | TouchEvent) => {
    if (isAnimating) return;

    // get the first article element
    if (!(event.target instanceof HTMLElement)) return;
    const actualCard = event.target.closest<HTMLDivElement>("[role=card]");
    if (!actualCard) return;

    // get initial position of mouse or finger
    const startX =
      event instanceof MouseEvent ? event.pageX : event.touches[0].pageX;
    const { like, nope } = createFeedbackIcons(actualCard);

    const onMove = (e: MouseEvent | TouchEvent) => {
      // current position of mouse or finger
      const currentX = e instanceof MouseEvent ? e.pageX : e.touches[0].pageX;
      pullDeltaX = currentX - startX;
      if (pullDeltaX === 0) return;

      isAnimating = true;

      const deg = pullDeltaX / 15;
      const opacity = Math.min(Math.abs(pullDeltaX) / 100, 1); // Capamos la opacidad a 1

      actualCard.style.transform = `translateX(${pullDeltaX}px) rotate(${deg}deg)`;
      actualCard.style.cursor = "grabbing";

      if (pullDeltaX > 0) {
        like.style.opacity = String(opacity);
        nope.style.opacity = "0";
      } else {
        nope.style.opacity = String(opacity);
        like.style.opacity = "0";
      }
    };

    const onEnd = () => {
      cleanupEvents();

      const decisionMade = Math.abs(pullDeltaX) >= DECISION_THRESHOLD;
      if (decisionMade) {
        const goRight = pullDeltaX >= 0;

        // actualCard.style.transition = "transform 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)";
        actualCard.style.transition = "transform 0.1s ease, rotate 0.1s ease";
        actualCard.style.transform = goRight
          ? "translateX(150%) rotate(30deg)" // go-right
          : "translateX(-150%) rotate(-30deg)"; // go-left

        actualCard.addEventListener(
          "transitionend",
          () => {
            onDecision(goRight);
            // actualCard.remove();
          },
          { once: true },
        );
      } else {
        // reset position
        actualCard.style.transition = "transform 0.3s ease";
        actualCard.style.transform = "translateX(0) rotate(0deg)";
        actualCard.style.cursor = "grab";

        // reset the choice info opacity
        like.style.opacity = "0";
        nope.style.opacity = "0";
      }

      // reset variables
      actualCard.addEventListener(
        "transitionend",
        () => {
          like.remove();
          nope.remove();
          pullDeltaX = 0;
          isAnimating = false;
        },
        { once: true },
      );
    };

    const cleanupEvents = () => {
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseup", onEnd);
      document.removeEventListener("touchmove", onMove);
      document.removeEventListener("touchend", onEnd);
    };

    // listen the mouse and touch movements
    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseup", onEnd);
    document.addEventListener("touchmove", onMove, { passive: false });
    document.addEventListener("touchend", onEnd, { passive: false });
  };
};
