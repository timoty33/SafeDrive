// <-- Functions -->

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function traduzir(idioma) {
  const title = document.getElementById("title");

  const titleIdioma = document.getElementById("titleIdioma");
  const optionPtBr = document.getElementById("optionPtBr");
  const optionEnUs = document.getElementById("optionEnUs");
  const optionEsEs = document.getElementById("optionEsEs");
  const optionPtPt = document.getElementById("optionPtPt");

  const titleAlerta = document.getElementById("titleAlerta");

  const titleVibracao = document.getElementById("titleVibracao");

  switch (idioma) {
    case "pt-BR":
      title.textContent = "Configurações";

      titleIdioma.textContent = "Idioma";
      optionPtBr.textContent = "Português - Brasil";
      optionEnUs.textContent = "Inglês - EUA";
      optionEsEs.textContent = "Espanhol - Espanha";
      optionPtPt.textContent = "Português - Portugal";

      titleAlerta.textContent = "Alerta de Som";
      titleVibracao.textContent = "Alerta de Vibração";
      break;

    case "en-US":
      title.textContent = "Settings";

      titleIdioma.textContent = "Language";
      optionPtBr.textContent = "Portuguese - Brazil";
      optionEnUs.textContent = "English - US";
      optionEsEs.textContent = "Spanish - Spain";
      optionPtPt.textContent = "Portuguese - Portugal";

      titleAlerta.textContent = "Sound Alert";
      titleVibracao.textContent = "Vibration Alert";
      break;

    case "es-ES":
      title.textContent = "Ajustes";

      titleIdioma.textContent = "Idioma";
      optionPtBr.textContent = "Portugués - Brasil";
      optionEnUs.textContent = "Inglés - EE. UU.";
      optionEsEs.textContent = "Español - España";
      optionPtPt.textContent = "Portugués - Portugal";

      titleAlerta.textContent = "Alerta de Sonido";
      titleVibracao.textContent = "Alerta de Vibración";
      break;

    case "pt-PT":
      title.textContent = "Definições";

      titleIdioma.textContent = "Idioma";
      optionPtBr.textContent = "Português - Brasil";
      optionEnUs.textContent = "Inglês - EUA";
      optionEsEs.textContent = "Espanhol - Espanha";
      optionPtPt.textContent = "Português - Portugal";

      titleAlerta.textContent = "Alerta de Som";
      titleVibracao.textContent = "Alerta de vibração";
      break;
  }
}

// <-- Code -->

// Reconhecimento e troca de idioma.
document.getElementById("idioma").addEventListener("change", function () {
  var idioma = document.getElementById("idioma").value;

  console.log(idioma);
  traduzir(idioma);
});
