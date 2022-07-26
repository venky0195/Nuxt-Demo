export default function (req, res, next) {
    console.log("helloooo",req.url)
    next()
  }