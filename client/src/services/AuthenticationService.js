import Api from '@/services/Api'

// AuthenticationService.register({
//   email: 'testing@gmail.com',
//   password: '123456'
// })

export default {
  register (credentials) {
    return Api().post('register', credentials)
  }
}
