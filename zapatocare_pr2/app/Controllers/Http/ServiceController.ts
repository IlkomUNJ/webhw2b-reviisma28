import Service from 'App/Models/Service'

export default class ServiceController {
  public async home({ view }) {
    const services = await Service.all()
    return view.render('user/home', { services: services.toJSON() })
  }

  public async search({ request, view }) {
    const q = request.input('q') || ''
    const services = await Service.query().where('name', 'like', `%${q}%`)
    return view.render('user/search', { services: services.toJSON(), q })
  }

  public async index({ view }) {
    const services = await Service.all()
    return view.render('seller/list', { services: services.toJSON() })
  }

  public async show({ params, view }) {
    const service = await Service.find(params.id)
    return view.render('user/product', { product: service ? service.toJSON() : null })
  }

  public async addPage({ view }) {
    return view.render('seller/add')
  }

  public async store({ request, response }) {
    const data = request.only(['name', 'price', 'description', 'image'])
    await Service.create(data)
    return response.redirect('/seller/list')
  }
}
