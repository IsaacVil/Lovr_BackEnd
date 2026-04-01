export function errorHandler(err, _req, res, _next) {
  const status = err.statusCode ?? 500;
  const body =
    status === 500
      ? { error: "Error interno del servidor" }
      : { error: err.message, code: err.code };
  res.status(status).json(body);
}
