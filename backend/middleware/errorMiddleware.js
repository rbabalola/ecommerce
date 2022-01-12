const notFound = (req, res,next) => {
    const error = new Error(`Not Found - ${req.originalUrl}`)
    res.status(404)
    next(error)
}


const errorHandler = (err, req, res, next) => { // this is a middleware for handling errors
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode   //500 means server error. This means if there is an error, despite the fact that the request status is 200(which is everything is fine), respond with a sever error. if it not 200, then send statuscode
    res.status(statusCode)
    res.json({
        message: err.message,
        stack: process.env.NODE_ENV === 'production' ? null : err.stack,
    })
    }

  export {notFound, errorHandler};