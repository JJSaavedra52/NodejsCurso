
// Loguea errores
const logErrors = (err, req, res, next) => {
  console.log('logErrors');
  console.error(err);
  next(err);
}

// Crear un standard de formato cuando pasa un error
const errorHandler = (err, req, res, next) => {
  console.log('errorHandler');
  res.status(500).json({
    message: err.message,
    stack: err.stack,
  });
}

const boomErrorHandler = (err, req, res, next) => {
  if (err.isBoom) {
    const {output} = err;
    res.status(output.statusCode).json(output.payload);
  } else {
    next(err);
  }
}

module.exports = {logErrors, errorHandler, boomErrorHandler}
