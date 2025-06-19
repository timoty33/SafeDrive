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
  const optionFraco = document.getElementById("optionFraco");
  const optionMedio = document.getElementById("optionMedio");
  const optionForte = document.getElementById("optionForte");

  const titleAlertaCelular = document.getElementById("titleAlertaCelular");

  const optionVibracaoElements =
    document.getElementsByClassName("optionVibracao");
  const optionAlertaElements = document.getElementsByClassName("optionAlerta");
  const optionAlertaVibracaoElements = document.getElementsByClassName(
    "optionAlertaVibracao"
  );

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
      optionFraco.textContent = "1 - Fraco";
      optionMedio.textContent = "2 - Médio";
      optionForte.textContent = "3 - Forte";

      titleAlertaCelular.textContent = "Alerta de Uso de Celular";

      // Itere sobre os elementos e defina o textContent
      for (let i = 0; i < optionVibracaoElements.length; i++) {
        optionVibracaoElements[i].textContent = "1 - Vibração";
      }
      for (let i = 0; i < optionAlertaElements.length; i++) {
        optionAlertaElements[i].textContent = "2 - Alerta";
      }
      for (let i = 0; i < optionAlertaVibracaoElements.length; i++) {
        optionAlertaVibracaoElements[i].textContent = "3 - Alerta e Vibração";
      }
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
      optionFraco.textContent = "1 - Weak";
      optionMedio.textContent = "2 - Medium";
      optionForte.textContent = "3 - Strong";

      titleAlertaCelular.textContent = "Cell Phone Usage Alert";

      // Itere sobre os elementos e defina o textContent
      for (let i = 0; i < optionVibracaoElements.length; i++) {
        optionVibracaoElements[i].textContent = "1 - Vibration";
      }
      for (let i = 0; i < optionAlertaElements.length; i++) {
        optionAlertaElements[i].textContent = "2 - Alert";
      }
      for (let i = 0; i < optionAlertaVibracaoElements.length; i++) {
        optionAlertaVibracaoElements[i].textContent = "3 - Alert and Vibration";
      }
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
      optionFraco.textContent = "1 - Débil";
      optionMedio.textContent = "2 - Medio";
      optionForte.textContent = "3 - Fuerte";

      titleAlertaCelular.textContent = "Alerta de Uso de Celular";

      // Itere sobre os elementos e defina o textContent
      for (let i = 0; i < optionVibracaoElements.length; i++) {
        optionVibracaoElements[i].textContent = "1 - Vibración";
      }
      for (let i = 0; i < optionAlertaElements.length; i++) {
        optionAlertaElements[i].textContent = "2 - Alerta";
      }
      for (let i = 0; i < optionAlertaVibracaoElements.length; i++) {
        optionAlertaVibracaoElements[i].textContent = "3 - Alerta y Vibración";
      }
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
      optionFraco.textContent = "1 - Fraco";
      optionMedio.textContent = "2 - Médio";
      optionForte.textContent = "3 - Forte";

      titleAlertaCelular.textContent = "Alerta de Uso de Telemóvel";

      // Itere sobre os elementos e defina o textContent
      for (let i = 0; i < optionVibracaoElements.length; i++) {
        optionVibracaoElements[i].textContent = "1 - Vibração";
      }
      for (let i = 0; i < optionAlertaElements.length; i++) {
        optionAlertaElements[i].textContent = "2 - Alerta";
      }
      for (let i = 0; i < optionAlertaVibracaoElements.length; i++) {
        optionAlertaVibracaoElements[i].textContent = "3 - Alerta e Vibração";
      }
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
