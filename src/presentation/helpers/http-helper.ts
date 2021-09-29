import { ServerError } from '../errors/server-error'
import { HttpResponse } from '../protocols'

const badRequest = (error: Error): HttpResponse => ({
  statusCode: 400,
  body: error
})

const serverError = (): HttpResponse => ({
  statusCode: 500,
  body: new ServerError()
})

const success = (data: any): HttpResponse => ({
  statusCode: 200,
  body: data
})

export { badRequest, serverError, success }
