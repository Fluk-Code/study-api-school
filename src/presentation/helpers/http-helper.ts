import { HttpResponse } from '../protocols'

const badRequest = (error: Error): HttpResponse => ({
  statusCode: 400,
  body: error
})

export { badRequest }
