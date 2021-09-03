// server.js
const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()
const { PORT = 3000 } = process.env

server.use(middlewares)
server.use(router)

server.listen(3000, () => {
    console.log('JSON Server is running in port: ' + PORT)
})
