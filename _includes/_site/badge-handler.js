<script>
  // Run as early as possible
  document.addEventListener("readystatechange", function () {
    if (document.readyState === "interactive") {
      document.querySelectorAll('img.no-lightbox').forEach(img => {
        const link = img.closest('a.popup');
        if (link) link.replaceWith(img);
      });
    }
  });
</script>

<script>
  document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('img.no-lightbox').forEach(function (img) {
      const link = img.closest('a');

      // If Chirpy wrapped it in a link for the lightbox, unwrap it
      if (link) {
        link.replaceWith(img);
      }
    });
  });
</script>
