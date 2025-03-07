import { Router } from "express";
import { WorkHourController } from "../Controllers/WorkHourController";

const router = Router();
const workHourController = new WorkHourController();

router.post('/', workHourController.createWorkHour);
router.get('/user/:userId', workHourController.getWorkHoursByUser);
router.get('/totalhours/user/:userId', workHourController.calculateTotalHours);
router.put('/:id', workHourController.updateWorkHour);
router.delete('/:id', workHourController.deleteWorkHour);

export default router;