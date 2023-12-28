import requests
from bs4 import BeautifulSoup
import mysql.connector


def scrape_accident_data():
    url = "https://news-tunisia.tunisienumerique.com/tunisia/road-accident/"
    response = requests.get(url)

    if response.status_code == 200:
        soup = BeautifulSoup(response.text, "html.parser")

        post_elements = soup.find_all("li", class_="infinite-post")

        accidents = []
        for idx, post_element in enumerate(post_elements, start=1):
            link_element = post_element.find("a")
            text_div = post_element.find("div", class_="archive-list-text")
            title_element = text_div.find("h2")
            description_element = text_div.find("p")

            link = link_element["href"] if link_element else ""
            title = title_element.text.strip() if title_element else ""
            description = (
                description_element.text.strip() if description_element else ""
            )

            accidents.append(
                {"id": idx, "link": link, "title": title, "description": description}
            )

        return accidents
    else:
        print(
            "Échec de récupération de la page web. Code d'état :", response.status_code
        )
        return None


def create_table(cursor):
    # Définition du schéma de la table ma_table
    table_schema = (
        "CREATE TABLE IF NOT EXISTS datatraffic ("
        "id INT AUTO_INCREMENT PRIMARY KEY,"
        "link VARCHAR(255),"
        "title VARCHAR(255),"
        "description TEXT"
        ")"
    )

    # Création de la table dans la base de données acc
    cursor.execute(table_schema)


def insert_into_database(cursor, accidents):
    # Insertion des données dans la table ma_table
    for accident in accidents:
        sql = "INSERT INTO datatraffic (id, link, title, description) VALUES (%s, %s, %s, %s)"
        values = (
            accident["id"],
            accident["link"],
            accident["title"],
            accident["description"],
        )
        cursor.execute(sql, values)


def main():
    # Connexion à la base de données MySQL via phpMyAdmin
    conn = mysql.connector.connect(
        host="localhost", user="root", password="", database="database", port=3307
    )

    cursor = conn.cursor()

    # Créer la table si elle n'existe pas
    create_table(cursor)

    # Récupérer les données et les ajouter à la base de données
    accident_data = scrape_accident_data()
    if accident_data:
        for accident in accident_data:
            print(f"ID: {accident['id']}")
            print(f"Link: {accident['link']}")
            print(f"Title: {accident['title']}")
            print(f"Description: {accident['description']}")
            print("\n")

        # Ajouter les données à la base de données
        insert_into_database(cursor, accident_data)

        # Valider les changements dans la base de données
        conn.commit()

    # Fermer la connexion à la base de données
    cursor.close()
    conn.close()


if __name__ == "__main__":
    main()
