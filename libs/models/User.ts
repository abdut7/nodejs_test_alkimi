import {
    Table,
    Column,
    Model,
    PrimaryKey,
    AutoIncrement,
    DataType,
    AllowNull,
    DefaultScope,
    Unique,
    Length,
    HasMany
} from 'sequelize-typescript';
import {
    Roles
} from '../constants/enum'
import UserSubcription from './UserSubscriptions';

@DefaultScope(() => ({
    attributes: {
        exclude: ['createdAt', 'updatedAt']
    }
}))
@Table({
    tableName: 'users',
    timestamps: true
})
class User extends Model {
    @PrimaryKey
    @AutoIncrement
    @Column(DataType.BIGINT)
    pkUserId!: number;

    @AllowNull(false)
    @Length({
        min: 3,
        max: 45
    })
    @Unique
    @Column(DataType.STRING(45))
    strUserName: string;

    @AllowNull(false)
    @Length({
        min: 6,
        max: 255
    })
    @Column(DataType.STRING(255))
    strPassword: string;

    @AllowNull(false)
    @Length({
        min: 3,
        max: 45
    })
    @Column(DataType.ENUM(...Object.values(Roles)))
    strUserType: string;

    @Column({
        defaultValue: true
    })
    isActive: boolean

    
    @HasMany(() => UserSubcription)
    userSubcription: UserSubcription[];

}

export default User;