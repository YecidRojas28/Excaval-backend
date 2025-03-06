import Permission from '../models/Permission';
import { IPermission } from '../interfaces/PermissionInterface';

export class PermissionRepository {
    async findPermissionById(permissionId: string): Promise<Permission | null> {
        return await Permission.findByPk(permissionId);
    }

    async findAllPermissions(): Promise<Permission[]> {
        return await Permission.findAll();
    }
}

export default new PermissionRepository();
