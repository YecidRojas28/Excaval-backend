import RolePermission from '../models/RolePermision';
import { IRolePermission } from '../interfaces/RolePermissionInterface';

export class RolePermissionRepository {
    async createRolePermission(rolePermissionData: IRolePermission): Promise<RolePermission> {
        return await RolePermission.create(rolePermissionData as any);
    }

    async deletePermissionsByRoleId(roleId: string): Promise<void> {
        await RolePermission.destroy({ where: { roleId } });
    }
}

export default new RolePermissionRepository();
