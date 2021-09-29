import { HttpRequest, HttpResponse } from './http-protocol'

interface Controller {
  handle: (httpRequest: HttpRequest) => Promise<HttpResponse>
}

export { Controller }
