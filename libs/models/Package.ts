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
import PackageChannelMap from './PackageChannelMapping';
import UserSubcription from './UserSubscriptions';
@DefaultScope(() => ({
    attributes: {
        exclude: ['createdAt', 'updatedAt']
    }
}))
@Table({
    tableName: 'packages',
    timestamps: true
})
class Package extends Model {
    @PrimaryKey
    @AutoIncrement
    @Column(DataType.BIGINT)
    pkPackageId!: number;

    @AllowNull(false)
    @Length({
        min: 3,
        max: 45
    })
    @Unique
    @Column(DataType.STRING(45))
    strPackageName: string;

    @AllowNull(false)
    @Column(DataType.BIGINT)
    intAnnumPrice: number;

    @Column({
        defaultValue: true
    })
    isActive: boolean

    @HasMany(() => PackageChannelMap)
    packageChannel: PackageChannelMap[];

    @HasMany(() => UserSubcription)
    userSubcription: UserSubcription[];
}

export default Package;