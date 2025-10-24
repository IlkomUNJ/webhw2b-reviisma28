import Wishlist from 'App/Models/Wishlist'
import Service from 'App/Models/Service'

export default class WishlistController {
  public async index({ view }) {
    const wishlist = await Wishlist.query().preload('service')
    return view.render('user/wishlist', { wishlist: wishlist.map(w => ({ service: w.service.toJSON() })) })
  }

  public async add({ params, response }) {
    await Wishlist.create({ service_id: params.id })
    return response.redirect('/wishlist')
  }

  public async viewAll({ view }) {
    const wishlist = await Wishlist.query().preload('service')
    return view.render('seller/viewwishlist', { wishlist: wishlist.map(w => ({ service: w.service.toJSON() })) })
  }
}
