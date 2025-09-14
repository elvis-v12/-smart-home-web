// Controlar dispositivos y hacer que el navegador hable
async function controlar(endpoint) {
  const res = await fetch(endpoint, { method: "POST" });
  const data = await res.json();
  alert(data.message || "Acción realizada");
  hablar(data.message); // 🔊 leer mensaje
}

// Refrescar temperatura cada 5 segundos
setInterval(async () => {
  const res = await fetch("/api/temp");
  const data = await res.json();
  document.getElementById("temp").innerText = data.value + " °C";
}, 5000);

// Refrescar estado del movimiento cada 3 segundos
setInterval(async () => {
  const res = await fetch("/api/motion");
  const data = await res.json();
  document.getElementById("motion").innerText =
    data.motion ? "🚨 Movimiento detectado" : "✅ Sin movimiento";
}, 3000);

// Función para hablar en el navegador
function hablar(texto) {
  if ("speechSynthesis" in window) {
    const utter = new SpeechSynthesisUtterance(texto);
    utter.lang = "es-ES";
    speechSynthesis.speak(utter);
  }
}
