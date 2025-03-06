import WorkHour from '../models/WorkHour';
import { IWorkHour } from '../interfaces/WorkHourInterface';

export class WorkHourRepository {
    async createWorkHour(workHourData: IWorkHour): Promise<WorkHour> {
        return await WorkHour.create(workHourData);
    }

    async getWorkHoursByUser(userId: string): Promise<WorkHour[]> {
        return await WorkHour.findAll({ where: { userId } });
    }

    async calculateTotalHours(userId: string): Promise<number> {
        const workHours = await WorkHour.findAll({ where: { userId } });
        return workHours.reduce((total, wh) => total + (wh.isAbsent ? 0 : wh.hoursWorked), 0);
    }

    async updateWorkHour(id: string, workHourData: Partial<IWorkHour>): Promise<WorkHour | null> {
        const workHour = await WorkHour.findByPk(id);
        if (workHour) {
            return await workHour.update(workHourData);
        }
        return null;
    }

    async deleteWorkHour(id: string): Promise<void> {
        const workHour = await WorkHour.findByPk(id);
        if (workHour) {
            await workHour.destroy();
        }
    }
}
