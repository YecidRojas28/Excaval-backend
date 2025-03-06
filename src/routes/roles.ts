import { Router } from "express";
import { RoleController } from "../Controllers/RoleController";

const router = Router();

router.post('/', RoleController.createRole);
router.get('/', RoleController.getAllRole);
router.get('/:id', RoleController.getRoleById);
router.put('/:id', RoleController.updateRole);
router.delete('/:id', RoleController.deleteRole);


export default router;