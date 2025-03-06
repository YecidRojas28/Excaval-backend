import { Router } from "express";
import { PermissionController } from "../Controllers/PermissionController";

const router = Router();

router.get('/', PermissionController.getAllPermissions);
router.get('/:id', PermissionController.getPermissionById);

export default router;