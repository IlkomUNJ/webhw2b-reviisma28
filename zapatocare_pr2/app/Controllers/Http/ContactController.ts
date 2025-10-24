export default class ContactController {
  public async store({ request, response }) {
    const { name, email, message } = request.only(['name','email','message'])
    console.log('Contact message:', name, email, message)
    return response.redirect('/')
  }
}
