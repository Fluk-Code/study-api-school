import { SignUpController } from '../controllers/signup-controller'
import { MissingParamError } from '../errors/missing-param-error'

describe('SignUp Controller', () => {
  test('Should return 400 of no name provided', () => {
    const sut = new SignUpController()

    const httpRequest = {
      body: {
        email: 'any_email@email.com',
        password: 'any_password',
        passwordConfirmation: 'any_password'
      }
    }

    const httpResponse = sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new MissingParamError('name'))
  })
})
