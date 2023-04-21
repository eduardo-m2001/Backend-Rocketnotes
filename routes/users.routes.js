const { Router } = require("express");
const multer = require("multer");
const uploadConfig = require("../configs/upload")


const UsersController = require("../controllers/UsersController");
const UsersAvatarController = require("../controllers/UserAvatarController")
const ensureAuthenticated =require("../middlewares/ensureAuthenticated")

const usersRoutes = Router();
const upload = multer(uploadConfig.MULTER);

const usersController = new UsersController();
const usersAvatarController = new UsersAvatarController();

usersRoutes.post('/', usersController.create);
usersRoutes.put('/', ensureAuthenticated, usersController.update);
usersRoutes.patch('/avatar', ensureAuthenticated, upload.single("avatar"), usersAvatarController.update)


module.exports = usersRoutes;