import { Table, Column, DataType, HasMany, BelongsTo, ForeignKey, Model, AllowNull, PrimaryKey, Unique } from "sequelize-typescript";
import { v4 as uuidv4 } from 'uuid';

@Table({
    tableName: 'users',
    timestamps: true
})

class User extends Model {
    @PrimaryKey
    @Column({
        type: DataType.UUID,
        defaultValue:() => uuidv4()
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
}
export default User;