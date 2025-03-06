import { Request, Response } from "express";
import { IUser } from "../interfaces/UserInterface";
import { UserService } from "../services/UserService";

export class UserController {
    private userService: UserService;

    constructor() {
        this.userService = new UserService();
    }

    public createUser = async (req: Request, res: Response): Promise<void> => {
        try {
            const userData: IUser = req.body;
            const newUser = await this.userService.createUser(userData);
            res.status(201).json(newUser);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    public getUserByEmail = async (req: Request, res: Response): Promise<void> => {
        try {
            const email = req.params.email;
            const user = await this.userService.getUserByEmail(email);
            if (!user) {
                res.status(404).json({ message: 'Usuario no encontrado' });
                return;
            }
            res.status(200).json(user);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    public getUserById = async (req: Request, res: Response): Promise<void> => {
        try {
            const { id } = req.params;
            const user = await this.userService.getUserById(id); 
            if (!user) {
                res.status(404).json({ message: 'Usuario no encontrado' });
                return;
            }
            res.status(200).json(user);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    public getAllUsers = async (req: Request, res: Response): Promise<void> => {
        try {
            const users = await this.userService.getAllUsers();
            res.status(200).json(users);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    public updateUser = async (req: Request, res: Response): Promise<void> => {
        try {
            const { id } = req.params;
            const userData: Partial<IUser> = req.body; // Cambiado a Partial<IUser>
            const updatedUser = await this.userService.updateUser(id, userData);
            if (!updatedUser) {
                res.status(404).json({ message: 'Usuario no encontrado' });
                return;
            }
            res.status(200).json(updatedUser);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    public deleteUser = async (req: Request, res: Response): Promise<void> => {
        try {
            const { id } = req.params;
            await this.userService.deleteUser(id);
            res.status(204).send();
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}
