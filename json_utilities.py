import json
import os

def salvar_json(caminho_relativo, dados):

    # Salva um dicionário Python como um arquivo JSON.
    # Args:
    #     caminho_relativo (str): Caminho relativo para o arquivo JSON (ex: './configs/config.json' ou 'config.json') <- o caminho contém o nome do json.
    #     dados (dict): Dados que serão salvos no arquivo.

    caminho_absoluto = os.path.abspath(caminho_relativo)

    with open(caminho_absoluto, "w", encoding="utf-8") as arquivo:
        json.dump(dados, arquivo, indent=4, ensure_ascii=False)

    print(f"# Configurações salvas com sucesso em: {caminho_relativo}")

def carregar_json(caminho_relativo):

    # Carrega um arquivo JSON e retorna os dados como um dicionário.
    # Args:
    #     caminho_relativo (str): Caminho relativo para o arquivo JSON (ex: './configs/config.json' ou 'config.json').
    # Returns:
    #     dict: Os dados carregados do JSON. Se o arquivo não existir, retorna um dicionário vazio.

    caminho_absoluto = os.path.abspath(caminho_relativo)

    if not os.path.exists(caminho_absoluto):
        print(f"# Arquivo {caminho_relativo} não encontrado. Retornando dicionário vazio.")
        return {}

    with open(caminho_absoluto, "r", encoding="utf-8") as arquivo:
        return json.load(arquivo)
