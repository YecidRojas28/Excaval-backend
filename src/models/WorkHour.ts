import User from './User';
import { v4 as uuidv4 } from 'uuid';
import { IWorkHour } from '../interfaces/WorkHourInterface';
import { Table, Column, DataType, ForeignKey, Model, AllowNull, PrimaryKey } from "sequelize-typescript";

@Table({
    tableName: 'work_hours',
    timestamps: true
})
class WorkHour extends Model<IWorkHour> {
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
        type: DataType.DATE
    })
    declare date: Date;

    @AllowNull(false)
    @Column({
        type: DataType.FLOAT,
        defaultValue: 8.0
    })
    declare hoursWorked: number;

    @Column({
        type: DataType.BOOLEAN,
        defaultValue: false
    })
    declare isAbsent: boolean;
}

export default WorkHour;
