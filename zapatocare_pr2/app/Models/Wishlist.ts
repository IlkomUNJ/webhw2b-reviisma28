import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm'
import Service from 'App/Models/Service'

export default class Wishlist extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public serviceId: number

  @belongsTo(() => Service)
  public service: BelongsTo

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
