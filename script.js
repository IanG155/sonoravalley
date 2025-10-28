document.addEventListener("DOMContentLoaded", () => {
  const boton = document.getElementById("boton");
  const mensaje = document.getElementById("mensaje");

  boton.addEventListener("click", () => {
    mensaje.textContent = "¡Hola, Abner! 😎 Tu página está funcionando perfectamente.";
  });
});
