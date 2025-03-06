import { IRole } from "../interfaces/RoleInterface";
import { RoleRepository } from "../repositories/RoleRepository";
import { IRolePermission } from "../interfaces/RolePermissionInterface";
import { RolePermissionRepository } from "../repositories/RolePermissionRepository";

const roleRepository = new RoleRepository();
const rolePermissionRepository = new RolePermissionRepository();

export class RoleService{
    async createRole(roleData: IRole, permissionIds: string[]): Promise<IRole>{
        const role = await roleRepository.createRole(roleData);
        await Promise.all(permissionIds.map(permissionId =>
            rolePermissionRepository.createRolePermission({roleId: role.id, permissionId})
        ));
        
        return role;
    }
    async updateRole(id: string, roleData: IRole, permissionIds: string[]): Promise<IRole> {
        await roleRepository.updateRole(id, roleData);
        await Promise.all(permissionIds.map(permissionId =>
            rolePermissionRepository.createRolePermission({roleId: id, permissionId})
        ));
        return await roleRepository.findRoleById(id);
    }
    async deleteRole(id: string): Promise<void> {
        await roleRepository.deleteRole(id);
        await rolePermissionRepository.deletePermissionsByRoleId(id);
    }
}