import { IUser } from "../interfaces/UserInterface";
import { UserRepository } from "../repositories/UserRepository";
import { hashPassword } from "../utils/auth";

export class UserService{
    private userRepository: UserRepository;
    constructor() {
        this.userRepository = new UserRepository();
    }
    async createUser(userData: IUser): Promise<IUser>{
        userData.password = await hashPassword(userData.password);
        try {
            return await this.userRepository.createUser(userData);
        } catch (err) {
            throw new Error('Error al crear el usuario: ' + err.message);
        }
    }
    async getUserByEmail(email: string): Promise<IUser | null>{
        return await this.userRepository.findUserByEmail(email);
    }
    async getUserById(id: string): Promise<IUser | null>{
        return await this.userRepository.findUserById(id);
    }
    async getAllUsers(): Promise<IUser[]>{
        return await this.userRepository.findAllUsers();
    }
    async updateUser(userId: string, userData: Partial<IUser>): Promise<IUser | null>{
        return await this.userRepository.updateUser(userId, userData);
    }
    async deleteUser(userId: string): Promise<void>{
        await this.userRepository.deleteUser(userId);
    }
}
