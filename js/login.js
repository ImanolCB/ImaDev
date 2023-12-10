"use strict";

/**
 *  JS para la creación del contenido de logeo de usuario
 */

function inicio() {
  //Declaracion de variables
  const main = document.getElementById("main");
  const tituloH2 = document.getElementById("titeMain");
  const btnRegistrar = document.createElement("button");
  const btnAcceder = document.createElement("button");
  const btnCancelar = document.createElement("button");

  //Titulo de login
  tituloH2.textContent = "Inicio de sesión";

  //Asignacion de texto al boton de login
  btnAcceder.textContent = "Acceder";
  btnRegistrar.textContent = "Registrarse";
  btnCancelar.textContent = "Cancelar";

  //Asignacion de ID a cada boton de login
  btnAcceder.id = "btnAcceder";
  btnRegistrar.id = "btnRegistrar";
  btnCancelar.id = "btnCancelar";

  //Craga los botones del login
  cargarBtnLognin();

  /**
   * Eventos de los botones de registro y acceso
   */
  btnRegistrar.addEventListener("click", () => {
    cargarBtnRegistrar();
  });
  btnCancelar.addEventListener("click", () => {
    cargarBtnLognin();
  });

  /**
   * Funcion para cargar los botones de login
   */
  function cargarBtnLognin() {
    //Añade el boton al html
    btnCancelar.style.display = "none";
    btnAcceder.style.display = "flex";
    btnRegistrar.style.display = "flex";
    main.appendChild(btnAcceder);
    main.appendChild(btnRegistrar);
  }

  /**
   * Funcion para cargar los botones de register
   */
  function cargarBtnRegistrar() {
    //Añade el boton al html
    btnCancelar.style.display = "flex";
    btnAcceder.style.display = "flex";
    btnRegistrar.style.display = "none";
    main.appendChild(btnAcceder);
    main.appendChild(btnCancelar);
  }
}

window.onload = inicio;
