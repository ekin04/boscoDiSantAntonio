import os
import requests
from bs4 import BeautifulSoup
import json

def download_image(image_url, save_dir, filename):
    """
    Scarica l'immagine dalla URL e la salva in save_dir con il nome filename.
    Restituisce il percorso locale se il download va a buon fine, altrimenti None.
    """
    try:
        response = requests.get(image_url, stream=True)
        response.raise_for_status()
        filepath = os.path.join(save_dir, filename)
        with open(filepath, 'wb') as f:
            for chunk in response.iter_content(1024):
                f.write(chunk)
        return filepath
    except Exception as e:
        print(f"Errore nel scaricare l'immagine {image_url}: {e}")
        return None

def get_full_resolution_image_url(url):
    """
    Rimuove la parte '-550x550' dalla URL dell'immagine per ottenere la versione a piena risoluzione.
    """
    return url.replace("-550x550", "")

def main():
    url = "https://maiellaescursioni.it"
    try:
        response = requests.get(url)
        response.raise_for_status()
    except Exception as e:
        print("Errore nel recuperare la pagina:", e)
        return

    soup = BeautifulSoup(response.text, "html.parser")

    # Selettore automatico: se inizia con '.' è una classe, se inizia con '#' è un id.
    selettore = ".mkdf-tours-carousel"
    if selettore.startswith('.'):
        containers = soup.find_all(class_=selettore[1:])
    elif selettore.startswith('#'):
        containers = soup.find_all(id=selettore[1:])
    else:
        print("Selettore non valido. Deve iniziare con '.' per le classi o '#' per gli id.")
        return

    if not containers:
        print("Nessun elemento trovato con il selettore fornito.")
        return

    if len(containers) > 1:
        print(f"Trovati {len(containers)} contenitori, utilizzo il primo.")
    container = containers[0]

    # Estrazione degli "item" (slide)
    slides = container.find_all("div", class_="mkdf-tours-standard-item")
    if not slides:
        print("Nessun item (slide) trovato all'interno del container.")
        return

    # Definizione della struttura predefinita (senza interazione con l'utente)
    struttura = {
        "h4": "title",
        "a": "link",
        "img": "image"
    }
    print("\nStruttura predefinita applicata:")
    for tag, nome in struttura.items():
        print(f"  {tag} -> {nome}")

    # Applicazione della struttura a tutte le slide
    items = []  # Array di oggetti (un oggetto per slide)
    for slide in slides:
        obj = {}
        for tag, var_name in struttura.items():
            elemento = slide.find(tag)
            if elemento:
                if tag == "a":
                    contenuto = elemento.get("href", "").strip()
                elif tag == "img":
                    contenuto = elemento.get("src", "").strip()
                    contenuto = get_full_resolution_image_url(contenuto)
                else:
                    contenuto = elemento.get_text(strip=True)
            else:
                contenuto = ""  # Se l'elemento non è presente nella slide
            obj[var_name] = contenuto
        items.append(obj)

    # Anteprima degli oggetti creati
    print("\n=== Anteprima degli oggetti creati ===")
    for idx, obj in enumerate(items):
        print(f"Slide {idx + 1}:")
        for key, val in obj.items():
            print(f"  {key}: {val}")
        print("---------")

    # Salvataggio delle immagini localmente, se presente l'elemento "image"
    if "img" in struttura:
        save_dir = "../src/assets/img/cms/carosello/scraping"  # Cartella dove salvare le immagini
        if not os.path.exists(save_dir):
            os.makedirs(save_dir)
        img_key = struttura["img"]
        for index, item in enumerate(items):
            image_url = item.get(img_key, "")
            if image_url:
                base_name = os.path.basename(image_url.split('?')[0])
                filename = f"image_{index+1}_{base_name}"
                local_path = download_image(image_url, save_dir, filename)
                if local_path:
                    # Lasciamo il percorso fisico inalterato per il salvataggio dell'immagine
                    item[img_key] = local_path

    # Preparazione dei dati per il file JSON: rimuovo i due puntini iniziali dal percorso dell'immagine,
    # lasciando inalterate le barre (se presenti).
    items_for_json = []
    for item in items:
        item_copy = item.copy()  # Copia per non modificare l'originale
        if "image" in item_copy and item_copy["image"].startswith(".."):
            item_copy["image"] = item_copy["image"][2:]
        items_for_json.append(item_copy)

    # Salvataggio in JSON in una cartella personalizzata
    json_dir = "../src/content/carousel"  # Cartella dove salvare il file JSON
    if not os.path.exists(json_dir):
        os.makedirs(json_dir)
    file_name = os.path.join(json_dir, "caroselloattivita.json")  # Percorso completo del file JSON

    nome_array = "slide"  # Nome predefinito per l'array degli oggetti
    data = {nome_array: items_for_json}
    try:
        with open(file_name, "w", encoding="utf-8") as f:
            json.dump(data, f, indent=4, ensure_ascii=False)
        print(f"\nDati salvati nel file '{file_name}'!")
    except Exception as e:
        print("Errore nel salvataggio:", e)

if __name__ == "__main__":
    main()
