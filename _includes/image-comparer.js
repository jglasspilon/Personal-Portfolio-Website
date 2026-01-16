<script>
  const compare = document.querySelector('.compare');
  const after = document.querySelector('.after');
  const handle = document.querySelector('.handle');

  compare.addEventListener('pointermove', e => {
    const rect = compare.getBoundingClientRect();
  const x = Math.min(Math.max(0, e.clientX - rect.left), rect.width);
  const pct = (x / rect.width) * 100;

  after.style.clipPath = `inset(0 ${100 - pct}% 0 0)`;
  handle.style.left = pct + '%';
  compare.style.setProperty('--pos', pct + '%');
  document.querySelector('.before-label').style.right = `calc(${100 - pct}% + 12px)`;
  document.querySelector('.after-label').style.left = `calc(${pct}% + 12px)`;
  });

  let velocity = 0;
  let lastX = 50;

  compare.addEventListener('pointermove', e => {
    const rect = compare.getBoundingClientRect();
  const x = (e.clientX - rect.left) / rect.width * 100;
  velocity = x - lastX;
  lastX = x;
  update(x);
  });

  function update(pct) {
    after.style.clipPath = `inset(0 ${100 - pct}% 0 0)`;
  handle.style.left = pct + '%';
  document.querySelector('.before-label').style.right = `calc(${100 - pct}% + 12px)`;
  document.querySelector('.after-label').style.left = `calc(${pct}% + 12px)`;
  }

  compare.addEventListener('pointerup', () => {
    let pct = lastX + velocity * 4;
  pct = Math.min(100, Math.max(0, pct));
  update(pct);
  });

</script>
