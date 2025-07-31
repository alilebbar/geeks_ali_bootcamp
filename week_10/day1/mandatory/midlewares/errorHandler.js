
function errorHandler(err, req, res, next) {
    console.error(err.stack); // log pour le serveur

    const statusCode = err.status || 500;
    res.status(statusCode).json({
        message: err.message || "Something went wrong",
    });
}

module.exports = {errorHandler};