import PermissionRepository from '../repositories/PermissionRepository';
import { IPermission } from '../interfaces/PermissionInterface';

export class PermissionService {
    async getPermissionById(id: string): Promise<IPermission | null> {
        return await PermissionRepository.findPermissionById(id);
    }

    async getAllPermissions(): Promise<IPermission[]> {
        return await PermissionRepository.findAllPermissions();
    }
}

