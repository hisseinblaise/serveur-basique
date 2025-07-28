require("dotenv").config()
const express = require("express");
const mongoose = require("mongoose");

const app = express();
const p = process.env.port;

// connexion de base de données au serveur

mongoose
  .connect(process.env.MongoDB_URI)
  .then(() => {
    console.log("La connection est établie avec succès.");
  })
  .catch((error) => {
    console.error("Echec de connexion.", error);
  });

// creation d'un schema produits



const productModel = mongoose.model("produits", mongoose.Schema(
  {
    productName: {
      type: String,
      require: true,
    },
    price: {
      type: Number,
      require: true,
    },
    stockStatus: {
      type: String,
      enum: ["in-stock", "low-stock", "out-stock"],
      default: "in-stock"
    },
  },
  {
    timestamps: true,
  }
)
);

app.use(express.json());

// Get all produits
app.get("/produits", async (req, res) => {
  const produits = await productModel.find();

  res.send({
    produits,
  });
});

// Add a new produits
app.post("/produits", async (req, res) => {
  const produits = req.body;
  console.log(produits);

  try {
    await productModel.create(produits);
  } catch (error) {
    res.send({
      message: error.message,
    });
    return;
  }

  res.send({
    message: "Produit ajouté avec succès",
    produits,
  });
});

// L'affiche d'un produit par son ID
app.get("/produits/:id", async (req, res) => {
  const id = req.params.id;

  const produits = await productModel.findById(id);
  if (!produits) {
    res.status(404).send({
      message: "le produit n'est pas trouvé.",
    });
    return;
  }

  res.send({ produits });
});


// La mise à jour d'un produit à l'exception de son status

app.patch('/produits/:id', async (req, res) => {
  const produitId = req.params.id;
  const recupere = await productModel.findById(produitId)
  if (!recupere) {
    res.status(404).send({
      message: "Le produit n'est pas trouvé.",
    });
    return;
  }

  const productName = req.body.productName;
  const price = req.body.price;

  const updatedproduits = await productModel.findByIdAndUpdate(produitId, { productName, price }, { "new": true });
  res.send({
    message: "La mise à jour a été effectuée avec succès.",
    updatedproduits
  })

})

// la mise à jour de status du produit

app.patch('/produits/:id/:stockStatus', async (req, res) => {
  const produitId = req.params.id;
  const stockStatus = req.params.stockStatus;
  const recupere = await productModel.findById(produitId)
  if (!recupere) {
    res.status(404).send({
      message: "Le status du produit n'est pas trouvé.",
    });
    return;
  }

  const updatedStatusProduits = await productModel.findByIdAndUpdate(produitId, { stockStatus }, { "new": true });
  res.send({
    message: "La mise à jour de status du produit a été effectuée avec succès.",
    updatedStatusProduits
  })

})

// suppression d'un produit par son ID

app.delete('/produits/:id', async (req, res) => {
  const deletedProduits = await productModel.findByIdAndDelete(req.params.id);

  if (!deletedProduits) {
    res.status(401).send({
      message: "Mauvaise action."
    });
    return;
  }

  res.send({
    message: "Le produit est supprimé avec succès.",
    deletedProduits
  })
})



app.listen(p, () => {
  console.log(`le serveur écoute sur le port ${p}.`);

})

//     # Créer un serveur Express basique

// 1. Connecter le serveur à une base de données MongoDB.
// 2. Créer un shcéma MongoDB avec les propriétés ci-dessous:
//     - `productName` de type `String`, le nom du produit
//     - `price` de type `Number`, le prix du produit
//     - `stockStatus` de type `String`, le status du produit en stock ('en stock', 'petite stock', 'pas en stock').
//     Le `stockStatus` ne peut prendre que l'une des trois valeurs définies dans les parenthèses.
// 3. Créer le model `productModel` à partir du shéma défini precédemment.
// 4. Une route `GET` "/products" qui permet de récuperer la liste de tous les produits.
// 5. Une route `GET` "/products/:id" qui permet de récuperer un produit par son ID.
// 6. Une route `POST` "/products" qui permet d'ajouter un nouvel produit.
// 7. Une route `PATCH` "/products/:id" qui permet de mettre à jour un produit excepté son status en stock.
// 8. Une route `PATCH` "/products/:id"/:status qui permet de mettre à jour le status du produit en stock.
// 9. Une route `DELETE` "/products/:id" qui permet de supprimer un produit.

