export default function (req, res, next) {
    console.log("server middleware running",req.url)
    next()
  }