"use strict";

/**
 *  JS para la creación del contenido de logeo de usuario
 */

function inicio() {
  //Declaracion de variables
  const main = document.getElementById("main");
  const buttons = document.getElementById("buttons");
  const tituloH2 = document.getElementById("titleMain");
  const inputs = document.getElementById("inputs");
  const btnRegistrar = document.createElement("button");
  const btnAcceder = document.createElement("button");
  const btnCancelar = document.createElement("button");
  const inputEmail = document.createElement("input");
  const inputPssw = document.createElement("input");
  const inputPssw2 = document.createElement("input");

  //Asignacion de TEXTO al boton de login
  btnAcceder.textContent = "Acceder";
  btnRegistrar.textContent = "Registrarse";
  btnCancelar.textContent = "Cancelar";

  //Asignacion de ID a cada boton de login
  btnAcceder.id = "btnAcceder";
  btnRegistrar.id = "btnRegistrar";
  btnCancelar.id = "btnCancelar";

  //Asignacion de NOMBRE a cada boton de login
  btnAcceder.name = "btnAcceder";
  btnRegistrar.name = "btnRegistrar";
  btnCancelar.name = "btnCancelar";

  //Asignacion de TIPO al boton de acceso
  btnAcceder.type = 'submit';
  btnRegistrar.type = 'button';
  btnCancelar.type = 'button';

  //Asignacion de ID a los campos input
  inputEmail.id = "inputEmail";
  inputPssw.id = "inputPssw";
  inputPssw2.id = "inputPssw2";

  //Asignacion de NOMBRE a los campos input
  inputEmail.name = "inputEmail";
  inputPssw.name = "inputPssw";
  inputPssw2.name = "inputPssw2";

  //Asignacion de NOMBRE a los campos input
  inputEmail.type = "email";
  inputPssw.type = "password";
  inputPssw2.type = "password";

    //Asignacion de PLACEHOLDER a los campos input
    inputEmail.placeholder = "E-mail";
    inputPssw.placeholder = "Contraseña";
    inputPssw2.placeholder = "Repita contraseña";

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
    //Titulo de login
    tituloH2.textContent = "Inicio de sesión";

    //Añade el boton al html
    btnCancelar.style.display = "none";
    btnAcceder.style.display = "block";
    btnRegistrar.style.display = "block";
    inputPssw2.style.display = "none";
    inputs.appendChild(inputEmail);
    inputs.appendChild(inputPssw);
    buttons.appendChild(btnAcceder);
    buttons.appendChild(btnRegistrar);
  }

  /**
   * Funcion para cargar los botones de register
   */
  function cargarBtnRegistrar() {
    //Titulo de register
    tituloH2.textContent = "Registrarse";

    //Añade el boton al html
    btnCancelar.style.display = "block";
    btnAcceder.style.display = "block";
    btnRegistrar.style.display = "none";
    inputPssw2.style.display = "block";
    inputs.appendChild(inputEmail);
    inputs.appendChild(inputPssw);
    inputs.appendChild(inputPssw2);
    buttons.appendChild(btnAcceder);
    buttons.appendChild(btnCancelar);
  }
}

window.onload = inicio;
