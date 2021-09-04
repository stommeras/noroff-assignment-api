// server.js
const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()
const {PORT = 3000} = process.env
if (process.env.NODE_ENV !== 'PRODUCTION') {
    require('dotenv').config()
}


const PROTECTED_HTTP_METHODS = ['POST', 'PATCH', 'DELETE', 'PUT']

server.use(middlewares)

server.use((request, response, next) => {

    if (PROTECTED_HTTP_METHODS.includes(request.method)) {

        const {authorization = ''} = request.headers
        let token = null

        if (authorization.includes('Bearer')) {
            token = authorization.split(' ').pop()
        } else {
            token = authorization
        }

        if (!token) {
            return response.status('401').json({error: 'You are not allowed to access this resource'})
        }

        const key = process.env.API_KEY

        if (token === key) {
            return next()
        } else {
            return response.status('401').json({error: 'You are not allowed to access this resource'})
        }
    }

    next()
})

server.use(router)

server.listen(PORT, () => {
    console.log('JSON Server is running in port: ' + PORT)
})
