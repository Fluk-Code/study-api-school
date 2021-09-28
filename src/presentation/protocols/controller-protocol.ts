import { HttpRequest, HttpResponse } from './http-protocol'

interface Controller {
  handle: (httpRequest: HttpRequest) => HttpResponse
}

export { Controller }
