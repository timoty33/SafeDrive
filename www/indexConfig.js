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

  const titleSono1 = document.getElementById("titleSono-1");
  const titleSono2 = document.getElementById("titleSono-2");
  const titleSono3 = document.getElementById("titleSono-3");

  const titleAlertaCelular = document.getElementById("titleAlertaCelular");

  const titleAlertaDistracao = document.getElementById("titleAlertaDistracao");

  const optionDesligado = document.getElementsByClassName("optionDesligado");
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

      titleSono1.textContent = "Sono - Estágio 1";
      titleSono2.textContent = "Sono - Estágio 2";
      titleSono3.textContent = "Sono - Estágio 3";

      titleAlertaCelular.textContent = "Alerta de Uso de Celular";

      titleAlertaDistracao.textContent = "Alerta de Distração";

      // Itere sobre os elementos e defina o textContent
      for (let i = 0; i < optionDesligado.length; i++) {
        optionDesligado[i].textContent = "0 - Desligado";
      }
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

      titleSono1.textContent = "Sleep - Stage 1";
      titleSono2.textContent = "Sleep - Stage 2";
      titleSono3.textContent = "Sleep - Stage 3";

      titleAlertaCelular.textContent = "Cell Phone Usage Alert";

      titleAlertaDistracao.textContent = "Distraction Alert";

      // Itere sobre os elementos e defina o textContent
      for (let i = 0; i < optionDesligado.length; i++) {
        optionDesligado[i].textContent = "0 - Off";
      }
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

      titleSono1.textContent = "Sueño - Etapa 1";
      titleSono2.textContent = "Sueño - Etapa 2";
      titleSono3.textContent = "Sueño - Etapa 3";

      titleAlertaCelular.textContent = "Alerta de Uso de Celular";

      titleAlertaDistracao.textContent = "Alerta de Distracción";

      // Itere sobre os elementos e defina o textContent
      for (let i = 0; i < optionDesligado.length; i++) {
        optionDesligado[i].textContent = "0 - Apagado";
      }
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

      titleSono1.textContent = "Sono - Etapa 1";
      titleSono2.textContent = "Sono - Etapa 2";
      titleSono3.textContent = "Sono - Etapa 3";

      titleAlertaCelular.textContent = "Alerta de Uso de Telemóvel";

      titleAlertaDistracao.textContent = "Alerta de Distração";

      // Itere sobre os elementos e defina o textContent
      for (let i = 0; i < optionDesligado.length; i++) {
        optionDesligado[i].textContent = "0 - Desligado";
      }
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

// <-- Functions Eel -->
async function carregarConfigs() {
  var configs = await eel.carregarConfigs()();
  console.log(configs);

  if (configs["status_config"] == false) {
    alert(
      "Você ainda não fez sua configuração inical, por favor faça antes de iniciar."
    );
  }

  document.getElementById("idioma").value = configs["idioma"];
  document.getElementById("alerta").value = configs["alerta"];
  document.getElementById("vibracao").value = configs["vibracao"];
  document.getElementById("sono-1").value = configs["alerta_sono_estagio_1"];
  document.getElementById("sono-2").value = configs["alerta_sono_estagio_2"];
  document.getElementById("sono-3").value = configs["alerta_sono_estagio_3"];
  document.getElementById("alerta-celular").value = configs["alerta_celular"];
  document.getElementById("alerta-distracao").value =
    configs["alerta_distracao"];

  traduzir(configs["idioma"]);
}

async function salvarConfig() {
  var config = {
    status_config: true,

    idioma: document.getElementById("idioma").value,
    alerta: document.getElementById("alerta").value,
    vibracao: document.getElementById("vibracao").value,
    alerta_sono_estagio_1: document.getElementById("sono-1").value,
    alerta_sono_estagio_2: document.getElementById("sono-2").value,
    alerta_sono_estagio_3: document.getElementById("sono-3").value,
    alerta_distracao: document.getElementById("alerta-distracao").value,
    alerta_celular: document.getElementById("alerta-celular").value,
  };

  eel.salvarJson(config)();

  console.log("Configurações Salvas!");

  window.close();
}

// <-- Code -->

// Reconhecimento e troca de idioma.
document.getElementById("idioma").addEventListener("change", function () {
  var idioma = document.getElementById("idioma").value;

  console.log(idioma);
  traduzir(idioma);
});

// Carregando configurações
carregarConfigs();
