// src/utils/notifir.js

/**
 * Centro de notificaciones del sistema domótico
 * Soporta: consola, mensajes JSON y futuras integraciones
 */

// Estilos de colores para la consola
const types = {
  success: "\x1b[32m✔ SUCCESS:\x1b[0m", // verde
  error: "\x1b[31m✖ ERROR:\x1b[0m",     // rojo
  info: "\x1b[36mℹ INFO:\x1b[0m",       // celeste
  warn: "\x1b[33m⚠ WARNING:\x1b[0m",    // amarillo
};

/**
 * Muestra una notificación en consola
 */
function notifyConsole(type, message) {
  console.log(types[type] || types.info, message);
}

/**
 * Genera un mensaje JSON estándar
 */
function notifyJson(type, action, status) {
  return {
    type,
    action,
    status,
    timestamp: new Date().toISOString(),
  };
}

/**
 * Notificación completa: consola + respuesta JSON
 */
function notify(type, action, status) {
  notifyConsole(type, `${action} → ${status}`);
  return notifyJson(type, action, status);
}

module.exports = { notify };
