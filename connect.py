import eel
import json_utilities as ju

def start():
    eel.init("www")
    eel.start("index.html", size=(800, 600))


@eel.expose
def carregarConfigs():
    configs = ju.carregar_json("configs/config.json")
    return configs

@eel.expose
def salvarJson(data):
    ju.salvar_json("configs/config.json", data)
    print("Configurações salvas")

start()
