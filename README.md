# Backend de projet de base de données stock

---

## Stock App (Express.js)

Une API RESTful basique pour gérer une liste de produits, développée avec Node.js et Express.js. Cette API vous permet de créer, lire, mettre à jour et supprimer les produits qui sont la base de données Stock.

## Caractéristiques

- lire tous les produits dans la base de données.
- lire tous un produit specifique par son ID dans la base de données.
- Ajouter un produit dans la base de données.
- Faire la mise à jour du produit excepté son status.
- Faire la mise à jour de status du produit.
- Suprimer un produit par son ID dans la base de données.

## Les outils utilisés

- Node.js
- Express.js

## Pour commencer 

### Les pre-requits

- [Node.js](https://nodejs.org/)
- [Postman](https://www.postman.com/)

### Installation

1. Clone the repository:

    ```bash
    git clone https://https://github.com/hisseinblaise/serveur-basique.git
    cd stock-app
    ````

2. Les installations des dependencies:

    ```bash
    npm install
    ```

3. Demarage du serveur:

    ```bash
    node app.js
    ```

4. Le serveur marche sur le port:

    ```bash
    http://localhost:PORT
    ```

---

## API Reference (Utilsé avec Postman)

Vous pouvez tester l'API avec Postman. Vous trouverez ci-dessous des exemples de requêtes que vous pouvez reproduire dans Postman.
---

### Afficher tous les produits de la base de données.

- **Methode**: `GET`
- **URL**: `http://localhost:PORT/produits`

**Exemple de réponse:**

```json

{
  "produits": [
    {
      "_id": "688360ef07d181d992c9747f",
      "stockStatus": "in-stock",
      "createdAt": "2025-07-25T10:48:15.966Z",
      "updatedAt": "2025-07-25T10:48:15.966Z",
      "__v": 0
    },
    {
      "_id": "6883830ee3720e660b7c09b2",
      "stockStatus": "in-stock",
      "createdAt": "2025-07-25T13:13:50.815Z",
      "updatedAt": "2025-07-25T13:13:50.815Z",
      "__v": 0
    },
    {
      "_id": "688383abd495d71bca223ffb",
      "stockStatus": "in-stock",
      "createdAt": "2025-07-25T13:16:27.799Z",
      "updatedAt": "2025-07-25T13:16:27.799Z",
      "__v": 0
    },
    {
      "_id": "688383bdd495d71bca223ffe",
      "stockStatus": "in-stock",
      "createdAt": "2025-07-25T13:16:45.348Z",
      "updatedAt": "2025-07-25T13:16:45.348Z",
      "__v": 0
    },
    {
      "_id": "688383d6e8bad10b7460e562",
      "stockStatus": "in-stock",
      "createdAt": "2025-07-25T13:17:10.863Z",
      "updatedAt": "2025-07-25T13:17:10.863Z",
      "__v": 0
    },
    {
      "_id": "6883842425dcced363b8121e",
      "productName": "Ordinateur Dell 7",
      "price": 29000,
      "stockStatus": "in-stock",
      "createdAt": "2025-07-25T13:18:28.832Z",
      "updatedAt": "2025-07-25T13:18:28.832Z",
      "__v": 0
    },
    {
      "_id": "6884b49e8d5e4c2b91976beb",
      "productName": "bo",
      "price": 20,
      "stockStatus": "in-stock",
      "createdAt": "2025-07-26T10:57:34.196Z",
      "updatedAt": "2025-07-28T08:21:04.547Z",
      "__v": 0
    }
  ]
}
```

---

### Ajouter un produit dans la base de données

- **Methode**: `POST`
- **URL**: `http://localhost:PORT/produits`
- **Body**: `raw` → `JSON`

```json
POST http://localhost:PORT/produits
Content-Type: application/json

{
    "productName": "Tablette",
    "price": 80000
}

```

**Exemple de réponse:**

```json
{
  "message": "Produit ajouté avec succès",
  "produits": {
    "productName": "Tablette",
    "price": 80000
  }
}
```

---

### Afficher un produit specifiaue par son ID.

- **Methode**: `GET`
- **URL**: `http://localhost:PORT/produits/<id>`

Remplace `<id>`avec l'actual ID du stock.

**Exemple de réponse:**

```json
{
  "produits": {
    "_id": "6884b49e8d5e4c2b91976beb",
    "productName": "bo",
    "price": 20,
    "stockStatus": "in-stock",
    "createdAt": "2025-07-26T10:57:34.196Z",
    "updatedAt": "2025-07-28T08:21:04.547Z",
    "__v": 0
  }
}
```

---

### Mettre à jour le status du produit.

- **Methode**: `PATCH`
- **URL**: `http://localhost:PORT/produits/<id>/in-stock`
- **Body**: `raw` → `JSON`

**Exemple de reponse:**

```json
{
  "message": "La mise à jour de status du produit a été effectuée avec succès.",
  "updatedStatusProduits": {
    "_id": "6884b49e8d5e4c2b91976beb",
    "productName": "bo",
    "price": 20,
    "stockStatus": "low-stock",
    "createdAt": "2025-07-26T10:57:34.196Z",
    "updatedAt": "2025-07-28T11:32:35.874Z",
    "__v": 0
  }
}
```

---

### Mettre à jour le nom et le prix du produit par son ID.

- **Methode**: `PATCH`
- **URL**: `http://localhost:PORT/produits/<id>
{
    "productName": "Laptop",
    "price": 26330
}
- **Body**: `raw` → `JSON`

**Exemple de reponse:**

```json
{
  "message": "La mise à jour a été effectuée avec succès.",
  "updatedproduits": {
    "_id": "6884b49e8d5e4c2b91976beb",
    "productName": "Laptop",
    "price": 26330,
    "stockStatus": "low-stock",
    "createdAt": "2025-07-26T10:57:34.196Z",
    "updatedAt": "2025-07-28T11:38:33.466Z",
    "__v": 0
  }
}
```

---

### Spression d'un produit de la base de données par son ID

- **Methode**: `DELETE`
- **URL**: `http://localhost:PORT/produits/<id>`

**Exemple de reponse:**

```json

{
  "message": "Le produit est supprimé avec succès.",
  "deletedProduits": {
    "_id": "688360ef07d181d992c9747f",
    "stockStatus": "in-stock",
    "createdAt": "2025-07-25T10:48:15.966Z",
    "updatedAt": "2025-07-25T10:48:15.966Z",
    "__v": 0
  }
}
