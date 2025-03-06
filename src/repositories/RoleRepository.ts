import Role from '../models/Role';
import { IRole } from '../interfaces/RoleInterface';

export class RoleRepository {
    async createRole(roleData: IRole): Promise<Role> {
        return await Role.create(roleData);
    }

    async findRoleById(id: string): Promise<Role | null> {
        return await Role.findByPk(id);
    }

    async findAllRoles(): Promise<Role[]> {
        return await Role.findAll();
    }

    async updateRole(id: string, roleData: Partial<IRole>): Promise<Role | null> {
        const role = await this.findRoleById(id);
        if (role) {
            return await role.update(roleData);
        }
        return null;
    }

    async deleteRole(id: string): Promise<void> {
        const role = await this.findRoleById(id);
        if (role) {
            await role.destroy();
        }
    }
}
