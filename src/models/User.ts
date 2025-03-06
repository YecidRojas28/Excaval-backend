import Role from './Role';
import { v4 as uuidv4 } from 'uuid';
import { IUser } from '../interfaces/UserInterface';
import { Table, Column, DataType, ForeignKey, Model, AllowNull, PrimaryKey, Unique, BelongsTo } from "sequelize-typescript";

@Table({
    tableName: 'users',
    timestamps: true
})
class User extends Model<IUser> {
    @PrimaryKey
    @Column({
        type: DataType.UUID,
        defaultValue: () => uuidv4()
    })
    declare id: string;

    @AllowNull(false)
    @Column({
        type: DataType.STRING
    })
    declare name: string;

    @AllowNull(false)
    @Unique(true)
    @Column({
        type: DataType.STRING
    })
    declare document: string;

    @AllowNull(false)
    @Unique(true)
    @Column({
        type: DataType.STRING
    })
    declare email: string;

    @AllowNull(false)
    @Column({
        type: DataType.STRING
    })
    declare password: string;

    @ForeignKey(() => Role)
    @Column({
        type: DataType.UUID,
        allowNull: false 
    })
    declare roleId: string;

    @BelongsTo(() => Role)
    declare role: Role; 
}

export default User;
