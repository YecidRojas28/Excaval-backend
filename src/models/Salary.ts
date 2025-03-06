import User from './User';
import { v4 as uuidv4 } from 'uuid';
import { ISalary } from '../interfaces/SalaryInterface';
import { Table, Column, DataType, ForeignKey, Model, AllowNull, PrimaryKey } from "sequelize-typescript";

@Table({
    tableName: 'salaries',
    timestamps: true
})
class Salary extends Model<ISalary> {
    @PrimaryKey
    @Column({
        type: DataType.UUID,
        defaultValue: () => uuidv4()
    })
    declare id: string;

    @ForeignKey(() => User)
    @Column({
        type: DataType.UUID,
        allowNull: false
    })
    declare userId: string;

    @AllowNull(false)
    @Column({
        type: DataType.FLOAT,
        defaultValue: 0.0
    })
    declare hourlyRate: number; 
}

export default Salary;
