import { Router } from "express";
import { SalaryController } from "../Controllers/SalaryController";

const router = Router();
const salaryController = new SalaryController();

router.post("/", salaryController.setHourlyRate);
router.get("/:userId", salaryController.getHourlyRate);
router.put("/:userId", salaryController.updateSalary);
router.delete("/:userId", salaryController.deleteSalary);
router.get("/calculate-total/:userId", salaryController.calculateTotalToPay);
export default router;
