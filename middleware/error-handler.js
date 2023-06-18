const errorHandler = (err, res, req, next) => {
  return res.status(err.status).json({ msg: err.message });
};

module.exports = errorHandler;
