import json_utilities as ju

data = {
  "idioma": "en-US",

  "alerta": 1,
  "vibracao": 1,

  "alerta_sono_estagio_1": 1,
  "alerta_sono_estagio_2": 2,
  "alerta_sono_estagio_3": 3,

  "alerta_distracao": 1,

  "alerta_celular": 1
}

# ju.salvar_json("configs/teste.json", data) <-- Experimentando salvar um arquivo.

ju.salvar_json("configs/config.json", data) # Se colocar o nome de um que já existe, ele refaz o que existe.

configs = ju.carregar_json("configs/config.json")

print(configs)
