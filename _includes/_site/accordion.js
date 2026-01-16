<script>
document.addEventListener("DOMContentLoaded", () => {

    /* ------------------------------
       SLIDER COMPONENT
    ------------------------------ */
    document.querySelectorAll(".slider").forEach(slider => {
      const track = slider.querySelector(".slider-track");
      const sections = slider.querySelectorAll(".slider-track section");
      const prev = slider.querySelector(".arrow.left");
      const next = slider.querySelector(".arrow.right");

      let index = 0;

      function update() {
        track.style.transform = `translateX(-${index * 100}%)`;
      }

      prev.addEventListener("click", () => {
        index = (index - 1 + sections.length) % sections.length;
        update();
      });

      next.addEventListener("click", () => {
        index = (index + 1) % sections.length;
        update();
      });
    });



  /* ------------------------------
     ACCORDION COMPONENT
  ------------------------------ */
  const allDetails = document.querySelectorAll(".portfolio-card details");

  allDetails.forEach(details => {
    const summary = details.querySelector("summary");
  const body = details.querySelector(".details-body");

  if (!summary || !body) return;

  // Initialize
  if (!details.open) {
    body.style.maxHeight = "0px";
    } else {
    body.style.maxHeight = body.scrollHeight + "px";
    }

    summary.addEventListener("click", event => {
    event.preventDefault();
  const isOpening = !details.open;

      // Close all other details
      allDetails.forEach(other => {
        if (other !== details && other.open) {
          const otherBody = other.querySelector(".details-body");

  otherBody.style.maxHeight = otherBody.scrollHeight + "px";
          requestAnimationFrame(() => {
    otherBody.style.maxHeight = "0px";
          });

  otherBody.addEventListener(
  "transitionend",
            () => {other.open = false; },
  {once: true }
  );
        }
      });

  if (isOpening) {
    details.open = true;

  const fullBodyHeight = body.scrollHeight;
  body.style.maxHeight = fullBodyHeight + "px";

  const transitionDurationMs = 350;
  const scrollDelay = transitionDurationMs * 0.4;

        setTimeout(() => {
          const rect = details.getBoundingClientRect();
  const absoluteTop = rect.top + window.scrollY;
  const effectiveHeight = rect.height;

  const targetScrollTop =
  absoluteTop - window.innerHeight / 2 + effectiveHeight / 2;

  window.scrollTo({
    top: targetScrollTop,
  behavior: "smooth"
          });
        }, scrollDelay);

      } else {
    body.style.maxHeight = body.scrollHeight + "px";
        requestAnimationFrame(() => {
    body.style.maxHeight = "0px";
        });

  body.addEventListener(
  "transitionend",
          () => {details.open = false; },
  {once: true }
  );
      }
    });
  });

});
</script>
