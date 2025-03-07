import { SalaryRepository } from '../repositories/SalaryRepository';
import { ISalary } from '../interfaces/SalaryInterface';
import { v4 as uuidv4 } from 'uuid';

const salaryRepository = new SalaryRepository(); // Instanciación

export class SalaryService {
    async setHourlyRate(userId: string, hourlyRate: number): Promise<ISalary> {
        const salary = await salaryRepository.findSalaryByUserId(userId);
        if (salary) {
            salary.hourlyRate = hourlyRate;
            return await salary.save();
        } else {
            return await salaryRepository.createSalary({ id: uuidv4(), userId, hourlyRate });
        }
    }

    async getHourlyRate(userId: string): Promise<number> {
        const salary = await salaryRepository.findSalaryByUserId(userId);
        return salary ? salary.hourlyRate : 0; // Devuelve 0 si no se encuentra
    }

    async updateSalary(userId: string, salaryData: Partial<ISalary>): Promise<ISalary | null> {
        return await salaryRepository.updateSalary(userId, salaryData);
    }

    async deleteSalary(userId: string): Promise<void> {
        await salaryRepository.deleteSalary(userId);
    }
}
