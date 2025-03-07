import User from "./User";
import { v4 as uuidv4 } from 'uuid';
import RolePermission from './RolePermision';
import { IRole } from '../interfaces/RoleInterface';
import { Table, Column, DataType, HasMany, Model, AllowNull, PrimaryKey } from "sequelize-typescript";

@Table({
    tableName: 'roles',
    timestamps: true
})
class Role extends Model<IRole> {
    @PrimaryKey
    @Column({
        type: DataType.UUID,
        defaultValue: () => uuidv4()
    })
    declare id: string;

    @AllowNull(false)
    @Column({
        type: DataType.STRING,
        unique: true 
    })
    declare name: string;
    @AllowNull(false)
    @Column({
        type: DataType.STRING
    })
    declare description: string
    @HasMany(() => User)
    declare users: User[];

    @HasMany(() => RolePermission)
    declare rolePermissions: RolePermission[];
}

export default Role;
