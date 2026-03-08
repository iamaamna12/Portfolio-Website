/* ============================================================
   AAMNA SHAHAB — PORTFOLIO SCRIPTS
   script.js
   ============================================================ */

/* ── Custom cursor ────────────────────────────────────────── */
const dot  = document.getElementById('cursorDot');
const ring = document.getElementById('cursorRing');
let mx = 0, my = 0, rx = 0, ry = 0;

document.addEventListener('mousemove', e => {
  mx = e.clientX;
  my = e.clientY;
});

function animateCursor() {
  dot.style.left = mx + 'px';
  dot.style.top  = my + 'px';

  rx += (mx - rx) * 0.12;
  ry += (my - ry) * 0.12;
  ring.style.left = rx + 'px';
  ring.style.top  = ry + 'px';

  requestAnimationFrame(animateCursor);
}
animateCursor();

document.querySelectorAll('a, button, .project-card').forEach(el => {
  el.addEventListener('mouseenter', () => {
    ring.style.transform   = 'translate(-50%, -50%) scale(1.6)';
    ring.style.borderColor = 'var(--green)';
  });
  el.addEventListener('mouseleave', () => {
    ring.style.transform   = 'translate(-50%, -50%) scale(1)';
    ring.style.borderColor = 'var(--cyan)';
  });
});

/* ── Scroll reveal ────────────────────────────────────────── */
const revealEls = document.querySelectorAll('.reveal');
const observer  = new IntersectionObserver(entries => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 80);
    }
  });
}, { threshold: 0.1 });

revealEls.forEach(el => observer.observe(el));

/* ── Contact form — Web3Forms ─────────────────────────────── */
const submitBtn = document.getElementById('submit-btn');

submitBtn.addEventListener('click', async () => {
  const name    = document.getElementById('f-name').value.trim();
  const email   = document.getElementById('f-email').value.trim();
  const message = document.getElementById('f-msg').value.trim();

  if (!name || !email || !message) {
    alert('Please fill in all fields before sending.');
    return;
  }

  submitBtn.textContent  = 'Sending...';
  submitBtn.style.opacity = '0.6';
  submitBtn.disabled      = true;

  try {
    const res = await fetch('https://api.web3forms.com/submit', {
      method:  'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        access_key: '12d4bc6f-4a56-425f-85da-df0ab16d387a',
        name,
        email,
        message,
        subject: 'New message from aamnashahab.com'
      })
    });

    const data = await res.json();

    if (data.success) {
      document.getElementById('contact-fields').style.display = 'none';
      document.getElementById('success-msg').style.display    = 'block';
    } else {
      throw new Error(data.message || 'Submission failed');
    }
  } catch (err) {
    submitBtn.textContent   = 'Send Message →';
    submitBtn.style.opacity = '1';
    submitBtn.disabled      = false;
    alert('Something went wrong: ' + err.message + '. Please try again.');
  }
});
