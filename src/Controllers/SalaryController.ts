import { Request, Response } from "express";
import { ISalary } from "../interfaces/SalaryInterface";
import { SalaryService } from "../services/SalaryService";
import PaymentService from "../services/PaymentService";

export class SalaryController {
    private salaryService: SalaryService;
    constructor(){
        this.salaryService = new SalaryService;
    }
    public setHourlyRate = async(req: Request, res: Response):Promise<void> => {
        try {
            const { userId, hourlyRate } = req.body;
            const salary: ISalary = await this.salaryService.setHourlyRate(userId, hourlyRate);
            res.status(201).json(salary);
        } catch (error) {
            res.status(500).json({ message: 'Error al establecer la tarifa por hora', error });
        }
    }
    public calculateTotalToPay =async (req: Request, res: Response): Promise<void> => {
        try {
            const userId = req.params.userId;
            const total = await PaymentService.calculateTotalToPay(userId);
            res.json({ total });
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
    public getHourlyRate = async (req: Request, res: Response):Promise<void> => {
        try {
            const { userId } = req.params;
            const hourlyRate: number = await this.salaryService.getHourlyRate(userId);
            res.status(200).json({ hourlyRate });
        } catch (error) {
            res.status(500).json({ message: 'Error al obtener la tarifa por hora', error });
        }
    }
    public updateSalary = async (req: Request, res: Response):Promise<void> => {
        try {
            const { userId } = req.params;
            const salaryData: Partial<ISalary> = req.body;
            const updateSalary = await this.salaryService.updateSalary(userId, salaryData);
            if (!updateSalary) {
                res.status(404).json({ message: 'Salario no encontrado' });
                return
            }
            res.status(200).json(updateSalary)
        } catch (error) {
            res.status(500).json({ message: 'Error al actualizar el salario', error });
        }
    }
    public deleteSalary = async (req: Request, res: Response):Promise<void> => {
        try {
            const { userId } = req.body;
            await this.salaryService.deleteSalary(userId)
            res.status(204).send();
        } catch (error) {
            res.status(500).json({ message: 'Error al eliminar el salario', error });
        }
    }
}