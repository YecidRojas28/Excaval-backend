import { Request, Response } from 'express';
import { PermissionService } from '../services/PermissionService';

const permissionService = new PermissionService();

export class PermissionController{
    static getAllPermissions = async (req: Request, res: Response) => {
        try {
            const permissions = await permissionService.getAllPermissions();
            res.status(200).send(permissions);
        } catch (error) {
            res.status(400).send({ error: error.message });
        }
    }
    static getPermissionById = async (req: Request, res: Response) =>{
        try {
            const permission = await permissionService.getPermissionById(req.params.id);
            if (permission) {
                res.status(200).send(permission);
            } else {
                res.status(404).send({ error: 'Permission not found' });
            }
        } catch (error) {
            res.status(400).send({ error: error.message });
        }
    }
}