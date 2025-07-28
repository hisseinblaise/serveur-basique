```markdown
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

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/)
- [Postman](https://www.postman.com/)

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/hmoustaphaousmane/sample-backend.git
    cd todo-app
    ````

2. Install dependencies:

    ```bash
    npm install
    ```

3. Start the server:

    ```bash
    node app.js
    ```

4. Server will run on:

    ```bash
    http://localhost:3000
    ```

---

## API Reference (Use with Postman)

You can test the API using Postman. Below are example requests you can recreate in Postman.

---

### Get all todos

- **Method**: `GET`
- **URL**: `http://localhost:3000/`

**Sample Response:**

```json
[
  {
    "id": 1234,
    "title": "Buy milk",
    "description": "2L of milk",
    "isDone": false
  }
]
```

---

### Create a new todo

- **Method**: `POST`
- **URL**: `http://localhost:3000/todo`
- **Body**: `raw` → `JSON`

```json
{
  "title": "Do laundry",
  "description": "Wash and fold clothes"
}
```

**Sample Response:**

```json
{
  "message": "Todo added successfully",
  "todo": [...]
}
```

---

### Get a specific todo

- **Method**: `GET`
- **URL**: `http://localhost:3000/<id>`

Replace `<id>` with the actual todo ID.

**Sample Response:**

```json
{
  "message": "Todo found",
  "todoFound": {
    "id": 1234,
    "title": "Buy milk",
    "description": "2L of milk",
    "isDone": false
  }
}
```

---

### Update todo status

- **Method**: `PATCH`
- **URL**: `http://localhost:3000/<id>`
- **Body**: `raw` → `JSON`

```json
{
  "isDone": true
}
```

**Sample Response:**

```json
{
  "message": "Todo update successfully",
  "todo": [...]
}
```

---

### Delete a todo

- **Method**: `DELETE`
- **URL**: `http://localhost:3000/<id>`

**Sample Response:**

```json
{
  "message": "Todo deleted successfulle"
}
```

### Authenticaiton

[JWT](https://jwt.io)
```
