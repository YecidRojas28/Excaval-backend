import { Request, Response } from "express";
import { IWorkHour } from "../interfaces/WorkHourInterface";
import { WorkHourService } from "../services/WorkHourService";

export class WorkHourController {
    private workHourService: WorkHourService;
    constructor(){
        this.workHourService = new WorkHourService;
    }
    public createWorkHour = async(req: Request, res: Response):Promise<void> =>{
        try {
            const workHourData : IWorkHour = req.body;
            const workHour = await this.workHourService.createWorkHour(workHourData);
            res.status(201).json(workHour);
        } catch (error) {
            // console.log(error)
            res.status(500).json({ error: error.message });
        }
    }
    public getWorkHoursByUser = async(req: Request, res: Response): Promise<void> => {
        try {
            const { userId } = req.params;
            const workHours = await this.workHourService.getWorkHoursByUser(userId);
            if (!workHours || workHours.length === 0) {
                res.status(404).json({ message: 'Este usuario no tiene horas registradas' });
                return;
            }
    
            res.status(200).json(workHours);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
    public calculateTotalHours = async(req: Request, res: Response): Promise<void> => {
        try {
            const { userId } = req.params;
            const totalHours = await this.workHourService.calculateTotalHours(userId);
            res.status(200).json({totalHours})
        } catch (error) {
            // console.log(error)
            res.status(500).json({ error: error.message });
        }
    }
    public updateWorkHour = async(req: Request, res: Response): Promise<void> => {
        try {
            const { id } = req.params;
            const workHourData : Partial<IWorkHour> = req.body;
            const updateWorkHour = await this.workHourService.updateWorkHour(id, workHourData);
            if (!updateWorkHour) {
                res.status(404).json({ message: 'La hora trabajada no ha sido registrada' });
                return
            }
            res.status(200).json(updateWorkHour);
        } catch (error) {
            // console.log(error)
            res.status(500).json({ error: error.message });
        }
    }
    public deleteWorkHour = async(req: Request, res: Response): Promise<void> => {
        try {
            const { id } = req.params;
            await this.workHourService.deleteWorkHour(id);
            res.status(204).send()
        } catch (error) {
            // console.log(error)
            res.status(500).json({ error: error.message });
        }
    }
}