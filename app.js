// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
function agregarAmigo() {
    const nombre = document.getElementById("amigo").value;
         if (nombre.trim() === "") {
        alert("Por favor, ingrese un nombre.");
      return;
    }
    const nuevoAmigo = document.createElement("li");
    nuevoAmigo.textContent = nombre;
  
        document.getElementById("listaAmigos").appendChild(nuevoAmigo);
        document.getElementById("amigo").value = "";
  }
  
function sortearAmigo() {
    const listaAmigos = document.getElementById("listaAmigos");
    const resultadoLista = document.getElementById("resultado");
    const amigos = [];
  
    for (const amigo of listaAmigos.children) {
      amigos.push(amigo.textContent);
    }
  
    if (amigos.length < 1) {
      alert("Se necesita al menos un participante para el sorteo.");
      return;
    }
  
    const amigoSeleccionado = obtenerAmigoAleatorio(amigos);
  
    mostrarResultado(amigoSeleccionado, resultadoLista);
  }
  
function obtenerAmigoAleatorio(amigos) {
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    return amigos[indiceAleatorio];
  }
  
function mostrarResultado(amigo, resultadoLista) {
    resultadoLista.innerHTML = "";
    const resultadoItem = document.createElement("li");
    resultadoItem.textContent = `Amigo secreto: ${amigo}`;
    resultadoLista.appendChild(resultadoItem);
  }