import Salary from '../models/Salary';
import { ISalary } from '../interfaces/SalaryInterface';

export class SalaryRepository {
    async createSalary(salaryData: ISalary): Promise<Salary> {
        return await Salary.create(salaryData);
    }

    async findSalaryByUserId(userId: string): Promise<Salary | null> {
        return await Salary.findOne({ where: { userId } });
    }

    async updateSalary(userId: string, salaryData: Partial<ISalary>): Promise<Salary | null> {
        const salary = await this.findSalaryByUserId(userId);
        if (salary) {
            return await salary.update(salaryData);
        }
        return null;
    }

    async deleteSalary(userId: string): Promise<void> {
        const salary = await this.findSalaryByUserId(userId);
        if (salary) {
            await salary.destroy();
        }
    }
}
