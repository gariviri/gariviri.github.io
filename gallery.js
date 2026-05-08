// Egyszerű galéria: cseréld a images tömböt a saját képeidre (web-optimalizált fájlok)
const images = [
  "images/photo1-webp.webp",
  "images/photo2-webp.webp",
  "images/photo3-webp.webp"
];

const gallery = document.getElementById('gallery');

images.forEach(src => {
  const fig = document.createElement('figure');
  const img = document.createElement('img');
  img.src = src;
  img.alt = "Virág Garamszegi fotó";
  img.loading = "lazy";
  fig.appendChild(img);
  gallery.appendChild(fig);
});
Add gallery.js
