const { Router } = require("express");  // importando o express do arquivo server.js

const UsersController = require("../controllers/UsersController");
const ensureAuthenticated = require("../middlewares/ensureAuthenticated");

const userRoutes = Router();

const usersController = new UsersController(); // reservando um espaço em memória para a classe UsersControllers, pois uma classe ao importar precisa fazer isso.

userRoutes.post("/", usersController.create);
userRoutes.put("/", ensureAuthenticated, usersController.update);

module.exports = userRoutes; // exportando para quem quiser utilizar esse arquivo
