import { Op } from "sequelize";
import Salary from "../models/Salary";
import WorkHour from "../models/WorkHour";

class PaymentService {
    async calculateTotalToPay(userId: string) {
        const salary = await Salary.findOne({ where: { userId } });

        if (!salary) {
            throw new Error('No salary rate found for this user.');
        }

        const workHours = await WorkHour.findAll({
            where: { userId }
        });

        const totalHours = workHours.reduce((total, workHour) => total + workHour.hoursWorked, 0);
        const totalToPay = totalHours * salary.hourlyRate;

        return totalToPay;
    }
}

export default new PaymentService();