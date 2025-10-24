import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Wishlists extends BaseSchema {
  protected tableName = 'wishlists'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('service_id').unsigned().references('id').inTable('services')
      table.timestamps(true)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
