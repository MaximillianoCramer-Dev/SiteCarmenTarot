document.addEventListener("DOMContentLoaded", () => {
  const dialogBox1 = document.getElementById("dialogBox1"); // Primeiro balão
  const dialogBox2 = document.getElementById("dialogBox2"); // Segundo balão
  const dialogBox3 = document.getElementById("dialogBox3"); // Terceiro balão

  // Exibe o primeiro balão imediatamente
  dialogBox1.style.display = "block";
  setTimeout(() => {
    dialogBox1.style.display = "none"; // Esconde o primeiro balão após 4 segundos
  }, 5000);

  // Exibe o segundo balão após 5 segundos
  setTimeout(() => {
    dialogBox2.style.display = "block";
    setTimeout(() => {
      dialogBox2.style.display = "none"; // Esconde o segundo balão após 4 segundos
    }, 5000);
  }, 5000);

  // Exibe o terceiro balão após 10 segundos
  setTimeout(() => {
    dialogBox3.style.display = "block";
    setTimeout(() => {
      dialogBox3.style.display = "none"; // Esconde o terceiro balão após 4 segundos
    }, 5000);
  }, 10000);
});
