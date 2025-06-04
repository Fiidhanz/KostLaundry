// Improved and Optimized Script

document.addEventListener("DOMContentLoaded", function () {
  // FAQ Toggle
  document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
      const faqItem = button.parentElement;
      const expanded = button.getAttribute('aria-expanded') === 'true';
      button.setAttribute('aria-expanded', !expanded);
      faqItem.classList.toggle('active');
    });
  });

  // About Section Scroll Animation
  const aboutItems = document.querySelectorAll(".about-item");
  const aboutObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });
  aboutItems.forEach(item => aboutObserver.observe(item));

  // Features Section Scroll Animation
  const features = document.querySelectorAll('.feature');
  const featureObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });
  features.forEach(feature => featureObserver.observe(feature));

  // Dark Mode Toggle
  const toggleBtn = document.getElementById('darkModeToggle');
  const savedMode = localStorage.getItem('darkmode');

  if (savedMode === 'on') {
    document.body.classList.add('darkmode');
    toggleBtn.textContent = '☀️';
  }

  toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('darkmode');
    const mode = document.body.classList.contains('darkmode') ? 'on' : 'off';
    toggleBtn.textContent = mode === 'on' ? '☀️' : '🌙';
    localStorage.setItem('darkmode', mode);
  });

  // Navbar Scroll Effect
  const nav = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 80);
  });

  // Bubble Animation
  const canvas = document.getElementById('bubbleCanvas');
  const ctx = canvas.getContext('2d');
  let bubbles = [];

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight * 0.9;
  }

  window.addEventListener('resize', resizeCanvas);
  resizeCanvas();

  class Bubble {
    constructor() {
      this.reset();
    }
    reset() {
      this.x = Math.random() * canvas.width;
      this.y = canvas.height + 20 + Math.random() * 100;
      this.radius = 5 + Math.random() * 15;
      this.speed = 1 + Math.random() * 2;
      this.opacity = 0.2 + Math.random() * 0.3;
    }
    update() {
      this.y -= this.speed;
      if (this.y < -this.radius) this.reset();
    }
    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(0, 174, 238, ${this.opacity})`;
      ctx.fill();
    }
  }

  for (let i = 0; i < 50; i++) {
    bubbles.push(new Bubble());
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    bubbles.forEach(b => {
      b.update();
      b.draw();
    });
    requestAnimationFrame(animate);
  }
  animate();

  // Form Submit to WhatsApp
  const form = document.getElementById('laundryForm');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const nama = document.getElementById('nama').value.trim();
    const wa = document.getElementById('wa').value.trim();
    const alamat = document.getElementById('alamat').value.trim();
    const layanan = document.getElementById('layanan').value;

    if (!nama || !wa || !alamat || !layanan) {
      alert('Mohon isi semua data dengan benar!');
      return;
    }

    const message = `Halo LaundryOn,%0ASaya ingin memesan layanan:%0A- Nama: ${encodeURIComponent(nama)}%0A- WA: ${encodeURIComponent(wa)}%0A- Alamat: ${encodeURIComponent(alamat)}%0A- Layanan: ${encodeURIComponent(layanan)}`;
    const waLink = `https://wa.me/6281234567890?text=${message}`;
    window.open(waLink, '_blank');
  });

  // Modal Logic
  const modal = document.getElementById("modalReservasi");
  const btn = document.getElementById("openModal");
  const span = document.querySelector(".modal .close");

  btn.onclick = () => modal.style.display = "block";
  span.onclick = () => modal.style.display = "none";
  window.onclick = (event) => {
    if (event.target === modal) modal.style.display = "none";
  };
});

 document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1
    });

    document.querySelectorAll('.animate').forEach(element => {
      observer.observe(element);
    });
  });

  const canvas = document.getElementById("bubbleCanvas");
const ctx = canvas.getContext("2d");

let bubbles = [];

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight / 1.5;
}
resizeCanvas();
window.addEventListener("resize", resizeCanvas);

function createBubbles() {
  for (let i = 0; i < 25; i++) {
    bubbles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 8 + 2,
      d: Math.random() * 2 + 1,
    });
  }
}

function drawBubbles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "rgba(173, 216, 230, 0.4)";
  ctx.beginPath();
  for (let i = 0; i < bubbles.length; i++) {
    let b = bubbles[i];
    ctx.moveTo(b.x, b.y);
    ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2, true);
  }
  ctx.fill();
  moveBubbles();
}

function moveBubbles() {
  for (let i = 0; i < bubbles.length; i++) {
    let b = bubbles[i];
    b.y -= b.d;
    if (b.y < -10) {
      b.y = canvas.height + 10;
      b.x = Math.random() * canvas.width;
    }
  }
}

createBubbles();
setInterval(drawBubbles, 33);


// Animated counter
document.addEventListener("DOMContentLoaded", function () {
  const counters = document.querySelectorAll('.counter');
  const speed = 200;

  counters.forEach(counter => {
    const updateCount = () => {
      const target = +counter.getAttribute('data-count');
      const count = +counter.innerText;
      const inc = target / speed;

      if (count < target) {
        counter.innerText = Math.ceil(count + inc);
        setTimeout(updateCount, 20);
      } else {
        counter.innerText = target;
      }
    };

    updateCount();
  });
});



document.getElementById('laundryForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const nama = document.getElementById('nama').value;
  const wa = document.getElementById('wa').value;
  const alamat = document.getElementById('alamat').value;
  const layanan = document.getElementById('layanan').value;
  const tanggal = document.getElementById('tanggal').value;
  const jam = document.getElementById('jam').value;
  const pesan = document.getElementById('pesan').value;

  const text = `Halo, saya ingin laundry:
Nama: ${nama}
WA: ${wa}
Alamat: ${alamat}
Layanan: ${layanan}
Tanggal & Jam: ${tanggal} - ${jam}
Catatan: ${pesan}`;

  window.open(`https://wa.me/62XXXXXXXXXX?text=${encodeURIComponent(text)}`, '_blank');
});


document.getElementById("estimasiForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const pcs = parseInt(document.getElementById("jumlah").value);
  const layanan = document.getElementById("jenis").value;

  const estimasiKg = pcs * 0.2; // Asumsi 1 pcs = 200 gram

  let total = 0;

  switch (layanan) {
    case "reguler":
      total = estimasiKg * 5000;
      break;

    case "express":
      total = estimasiKg * 25000;
      break;

    case "paket-reguler":
      // Paket per 5kg, hitung kelipatan 5kg (dibulatkan ke atas)
      const paketRegulerKelipatan = Math.ceil(estimasiKg / 5);
      total = paketRegulerKelipatan * 15000;
      break;

    case "paket-express":
      const paketExpressKelipatan = Math.ceil(estimasiKg / 5);
      total = paketExpressKelipatan * 100000;
      break;
  }

  document.getElementById("beratEstimasi").textContent = estimasiKg.toFixed(1);
  document.getElementById("hargaEstimasi").textContent = Math.ceil(total).toLocaleString();
  document.getElementById("hasilEstimasi").classList.remove("hidden");
});


const navbar = document.getElementById('navbar');
  const darkToggle = document.getElementById('darkModeToggle');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  darkToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
      darkToggle.textContent = '☀️';
    } else {
      darkToggle.textContent = '🌙';
    }
  });


const burger = document.getElementById('burger');
const navMenu = document.querySelector('.nav-menu');

burger.addEventListener('click', () => {
  navMenu.classList.toggle('active');
  burger.classList.toggle('active'); // bisa untuk animasi burger (optional)
});
