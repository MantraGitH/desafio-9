const HttpStatus = {
  OK: 200,
  NOT_FOUND: 404,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  INTERNAL_SERVER_ERROR: 500,
};

export const errorsDictionary = {
  ERROR_CREATE_ITEM: "Error al crear",
  ERROR_UPDATE_ITEM: "Error al actualizar",
  ERROR_DELETE_ITEM: "Error al borrar",
  ERROR_ADD_TO_CART: "Error al añadir al carrito",
  ERROR_DELETE_TO_CART: "Error al borrar del carrito",
  ERROR_CREATE_USER: "Error al crear el usuario",
  ERROR_LOGIN: "Error al logear",
  ERROR_DELETE_CART: "Error al borrar carrito",
};

export class HttpResponse {
  Ok(res, data) {
    return res.status(HttpStatus.OK).json({
      status: HttpStatus.OK,
      message: "Éxito",
      data: data,
    });
  }

  NotFound(res, data) {
    return res.status(HttpStatus.NOT_FOUND).json({
      status: HttpStatus.NOT_FOUND,
      message: "No encontrado",
      error: data,
    });
  }

  Unauthorized(res, data) {
    return res.status(HttpStatus.UNAUTHORIZED).json({
      status: HttpStatus.UNAUTHORIZED,
      message: "Sin autorización",
      error: data,
    });
  }

  Forbidden(res, data) {
    return res.status(HttpStatus.FORBIDDEN).json({
      status: HttpStatus.FORBIDDEN,
      message: "Prohibido",
      error: data,
    });
  }

  ServerError(res, data) {
    return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
      status: HttpStatus.INTERNAL_SERVER_ERROR,
      message: "Error interno en el servidor",
      error: data,
    });
  }
}
