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
    ChannelCategory,ChannelLanguage
} from '../constants/enum'
import PackageChannelMap from './PackageChannelMapping';
import UserSubcription from './UserSubscriptions';
@DefaultScope(() => ({
    attributes: {
        exclude: ['createdAt', 'updatedAt']
    }
}))
@Table({
    tableName: 'channels',
    timestamps: true
})
class Channel extends Model {
    @PrimaryKey
    @AutoIncrement
    @Column(DataType.BIGINT)
    pkChannelId!: number;

    @AllowNull(false)
    @Length({
        min: 3,
        max: 45
    })
    @Unique
    @Column(DataType.STRING(45))
    strChannelName: string;


    @AllowNull(true)
    @Length({
        min: 3,
        max: 45
    })
    @Column(DataType.ENUM(...ChannelCategory))
    strCategory: string;

    
    @AllowNull(true)
    @Length({
        min: 3,
        max: 45
    })
    @Column(DataType.ENUM(...ChannelLanguage))
    strLanguage: string;


    @AllowNull(false)
    @Column(DataType.BIGINT)
    intAddOnMonthlyPrice: number;

    @Column({
        defaultValue: true
    })
    isActive: boolean

    @HasMany(() => PackageChannelMap)
    packageChannel: PackageChannelMap[];

    @HasMany(() => UserSubcription)
    userSubcription: UserSubcription[];
}

export default Channel;