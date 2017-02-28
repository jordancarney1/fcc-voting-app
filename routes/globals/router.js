const router = require('koa-router')()

router.use( function* (next) {
  // Get IP address with Fix for Heroku
  const xip = this.headers["x-forwarded-for"]
  this.request.ipAddress = (xip) ? xip : this.request.ip

  yield next
})

module.exports = router