import Route from '@ioc:Adonis/Core/Route'

// User
Route.get('/', async ({ view }) => view.render('user/home'))
Route.get('/search', 'ServiceController.search')
Route.get('/product/:id', 'ServiceController.show')
Route.get('/wishlist', 'WishlistController.index')
Route.post('/wishlist/add/:id', 'WishlistController.add')
Route.get('/contact', ({ view }) => view.render('user/contact'))
Route.post('/contact/send', 'ContactController.store')

// Seller
Route.get('/seller/list', 'ServiceController.index')
Route.get('/seller/add', ({ view }) => view.render('seller/add'))
Route.post('/seller/add', 'ServiceController.store')
Route.get('/seller/viewwishlist', 'WishlistController.viewAll')
