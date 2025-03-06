import { Request, Response } from "express";
import { RoleService } from "../services/RoleService";
import { RoleRepository } from "../repositories/RoleRepository";

const roleService = new RoleService();
const roleRepository = new RoleRepository();

export class RoleController {
    static createRole = async (req: Request, res: Response) => {
        try {
            const { permissions, ...roleData } = req.body;
            const role = await roleService.createRole(roleData, permissions);
            res.status(201).send(role);
        } catch (error) {
            res.status(400).send({ error: error.message });
        }
    }
    static updateRole = async (req: Request, res: Response) => {
        try {
            const { permissions, ...roleData } = req.body;
            const roleId = req.params.id;
            const updateRole = await roleService.updateRole(roleId, roleData, permissions);
            res.status(200).send(updateRole);
        } catch (error) {
            res.status(400).send({ error: error.message });
        }
    }
    static getAllRole = async (req: Request, res: Response) => {
        try {
            const roles = await roleRepository.findAllRoles();
            res.status(200).send(roles);
        } catch (error) {
            res.status(400).send({ error: error.message });
        }
    }
    static getRoleById = async (req: Request, res: Response) => {
        try {
            const roleId = req.params.id;
            const role = await roleRepository.findRoleById(roleId);
            if (role) {
                res.status(200).send(role);
            } else {
                res.status(404).send({ error: "Rol no encontrado." });
                return
            }
        } catch (error) {
            res.status(400).send({ error: error.message });
        }
    }
    static deleteRole = async (req: Request, res: Response) => {
        try {
            const roleId = req.params.id;
            const role = await roleRepository.findRoleById(roleId);
            if (!role) {
                res.status(404).send({ error: "Rol no encontrado." });
                return
            }
            await roleRepository.deleteRole(roleId);
        } catch (error) {
            // console.error(error);
            res.status(500).send({ error: "Error al eliminar el rol." });
        }
    }
}