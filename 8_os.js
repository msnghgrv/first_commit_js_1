const os= require("os")
let user= os.userInfo()
console.log(user)
console.log(`uptime for the current session is: ${os.uptime()}`)
const currentOs={
   name: os.type(),
   release: os.release(),
   totalmem: os.totalmem(),
   freemem: os.freemem()

}
console.log(currentOs)