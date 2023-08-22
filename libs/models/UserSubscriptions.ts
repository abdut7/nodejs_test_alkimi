import {
    Table,
    Column,
    Model,
    PrimaryKey,
    AutoIncrement,
    DataType,
    AllowNull,
    DefaultScope,
    ForeignKey,
    BelongsTo
} from 'sequelize-typescript';
import { Subcriptiontype } from '../constants/enum';
import User from './User';
import Channel from './Channel';
import Package from './Package';

@DefaultScope(() => ({
    attributes: {
        exclude: ['createdAt', 'updatedAt']
    }
}))
@Table({
    tableName: 'user_subscription',
    timestamps: true
})
class UserSubcription extends Model {
    @PrimaryKey
    @AutoIncrement
    @Column(DataType.BIGINT)
    pkSubscriptionId!: number;

    @AllowNull(false)
    @Column(DataType.ENUM(...Subcriptiontype))
    strSubcriptionType: string;
   
    @ForeignKey(() => User)
    @Column(DataType.BIGINT)
    fkUserId: number;

    @AllowNull(true)
    @ForeignKey(() => Package)
    @Column(DataType.BIGINT)
    fkPackageId: number;

    @AllowNull(true)
    @ForeignKey(() => Channel)
    @Column(DataType.BIGINT)
    fkChannelId: number;

    @BelongsTo(() => Package,{
        foreignKey: "fkPackageId",
        as: "package",
    })
    package: Package;

    @BelongsTo(() => Channel,{
        foreignKey: "fkChannelId",
        as: "channel",
    })
    channel: Channel;

    @Column({
        defaultValue: true
    })
    isActive: boolean

}

export default UserSubcription;