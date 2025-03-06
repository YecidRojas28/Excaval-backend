import { Router } from "express";
import { UserController } from "../Controllers/UserController";

const router = Router();
const userController = new UserController();


router.post("/", userController.createUser);
router.get("/email/:email", userController.getUserByEmail);
router.get("/:id", userController.getUserById);
router.get("/", userController.getAllUsers);
router.put("/:id", userController.updateUser);
router.delete("/:id", userController.deleteUser);

export default router;
