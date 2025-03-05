import { v4 as uuidv4 } from 'uuid';
import { Table, Column, DataType, HasMany, Model, AllowNull, PrimaryKey } from "sequelize-typescript";
import User from "./User";

@Table({
    tableName: 'roles',
    timestamps: true
})
class Role extends Model {
    @PrimaryKey
    @Column({
        type: DataType.UUID,
        defaultValue: () => uuidv4()
    })
    declare id: string;

    @AllowNull(false)
    @Column({
        type: DataType.STRING,
        unique: true // Asegura que los nombres de rol sean únicos
    })
    declare name: string;

    @HasMany(() => User)
    declare users: User[];
}

export default Role;
