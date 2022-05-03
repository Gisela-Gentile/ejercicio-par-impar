let dato = document.getElementById("dato");
let btnEnviar = document.getElementById("enviar");
let rotulo1 = document.getElementById("rotulo1");

rotulo1.innerHTML = "Ingrese un número";

btnEnviar.addEventListener("click", () => {
  let datoIngresado: number = Number(dato.value);

  if (datoIngresado == 0) {
    console.log("El número " + datoIngresado + " no es par ni impar");
  } else if (datoIngresado % 2 == 0) {
    console.log("el número " + datoIngresado + " es par");
  } else {
    console.log("el número " + datoIngresado + " es impar");
  }
});
