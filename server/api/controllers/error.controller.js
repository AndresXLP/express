export const errorHandler = (req, res, next) => {
  const statusCode = 400;
  const message = 'Error. Route not found';
  next({ statusCode, message });
};
export const showErrors = (err, req, res, next) => {
  const { statusCode = 500, message = 'Unknown error' } = err;
  res.status(statusCode).json({ message });
};
