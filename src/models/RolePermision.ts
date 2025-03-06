import Role from './Role';
import Permission from './Permission';
import { Table, Column, ForeignKey, Model } from 'sequelize-typescript';

@Table({
    tableName: 'role_permissions',
    timestamps: true
})

class RolePermission extends Model {
    @ForeignKey(() => Role)
    @Column
    declare roleId: string;

    @ForeignKey(() => Permission)
    @Column
    declare permissionId: string;
}

export default RolePermission;