import { WorkHourRepository } from '../repositories/WorkHourRepository';
import { IWorkHour } from '../interfaces/WorkHourInterface';

export class WorkHourService {
    private workHourRepository: WorkHourRepository;

    constructor() {
        this.workHourRepository = new WorkHourRepository();
    }

    async createWorkHour(workHourData: IWorkHour) {
        return await this.workHourRepository.createWorkHour(workHourData);
    }

    async getWorkHoursByUser(userId: string) {
        return await this.workHourRepository.getWorkHoursByUser(userId);
    }

    async calculateTotalHours(userId: string) {
        return await this.workHourRepository.calculateTotalHours(userId);
    }

    async updateWorkHour(id: string, workHourData: Partial<IWorkHour>) {
        return await this.workHourRepository.updateWorkHour(id, workHourData);
    }

    async deleteWorkHour(id: string) {
        return await this.workHourRepository.deleteWorkHour(id);
    }
}
