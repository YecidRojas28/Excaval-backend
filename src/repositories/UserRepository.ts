import User from '../models/User';
import { IUser } from '../interfaces/UserInterface';

export class UserRepository {
    async createUser(userData: IUser): Promise<User> {
        return await User.create(userData);
    }

    async findUserByEmail(email: string): Promise<User | null> {
        return await User.findOne({ where: { email } });
    }

    async findUserById(id: string): Promise<User | null> {
        return await User.findByPk(id);
    }

    async findAllUsers(): Promise<User[]>{
        return await User.findAll();
    }

    async updateUser(id: string, userData: Partial<IUser>): Promise<User | null> {
        const user = await this.findUserById(id);
        if (user) {
            return await user.update(userData);
        }
        return null;
    }

    async deleteUser(id: string): Promise<void> {
        const user = await this.findUserById(id);
        if (user) {
            await user.destroy();
        }
    }
}
