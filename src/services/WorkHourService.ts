import { IWorkHour } from "../interfaces/WorkHourInterface";
import { WorkHourRepository } from "../repositories/WorkHourRepository";

const workHourRepository = new WorkHourRepository();

export class WorkHourService{
    async registerWorkHour(userId: string, hoursWorked: number, isAbsent: boolean): Promise<IWorkHour>{
        const workHourData: IWorkHour = { id:'', userId, hoursWorked, isAbsent, date: new Date() };
        return await workHourRepository.createWorkHour(workHourData);
    }
    async getTotalHours(userId: string): Promise<number>{
        return await workHourRepository.calculateTotalHours(userId);
    }
    async updateWorkHour(id: string, workHourData: Partial<IWorkHour>): Promise<IWorkHour | null>{
        return await workHourRepository.updateWorkHour(id, workHourData);
    }
    async deleteWorkHour(id: string): Promise<void>{
        await workHourRepository.deleteWorkHour(id);
    }
}