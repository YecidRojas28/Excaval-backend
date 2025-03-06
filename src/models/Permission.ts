import { v4 as uuidv4 } from 'uuid';
import RolePermission from './RolePermision';
import { IPermission } from '../interfaces/PermissionInterface';
import { Table, Column, DataType, Model, AllowNull, PrimaryKey, HasMany } from "sequelize-typescript";

@Table({
    tableName: 'permissions',
    timestamps: true
})

class Permission extends Model<IPermission> {
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
    declare description: string;

    @HasMany(() => RolePermission)
    declare rolePermissions: RolePermission[];

}

export default Permission;