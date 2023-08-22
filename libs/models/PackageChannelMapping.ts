import {
    Table,
    Column,
    Model,
    PrimaryKey,
    AutoIncrement,
    DataType,
    DefaultScope,
    ForeignKey,
    BelongsTo
} from 'sequelize-typescript';
import Package from './Package';
import Channel from './Channel';

@DefaultScope(() => ({
    attributes: {
        exclude: ['createdAt', 'updatedAt']
    }
}))
@Table({
    tableName: 'package_channel_map',
    timestamps: false
})
class PackageChannelMap extends Model {
    @PrimaryKey
    @AutoIncrement
    @Column(DataType.BIGINT)
    pkPackageChannelId!: number;

    @ForeignKey(() => Package)
    @Column(DataType.BIGINT)
    fkPackageId: number;

    @BelongsTo(() => Package,{
        foreignKey: "fkPackageId",
        as: "package",
    })
    package: Package;

    @ForeignKey(() => Channel)
    @Column(DataType.BIGINT)
    fkChannelId: number;

    @BelongsTo(() => Channel,{
        foreignKey: "fkChannelId",
        as: "channel",
    })
    channel: Channel;

}

export default PackageChannelMap;