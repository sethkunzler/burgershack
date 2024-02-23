import BaseController from "../utils/BaseController.js";

export class BurgersController extends BaseController {
  constructor() {
      super('api/burgers');
  this.router
      .get('', this.getBurger)
      // .get('/:burgerId', this.getBurgerId)
      // .post('', this.createBurger)
      // .delete('/:burgerId', this.removeBurger)
}
  /**
   * @param {import("express").Request} request
   * @param {import("express").Response} response
   * @param {import("express").NextFunction} next
   */
  getBurgers(request, response, next) {
    try {
      const burgers = burgersService.getBurgers()
      response.send(burgers)
    } catch (error) {
      next(error)
    }
  }

}