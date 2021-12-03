import cors from 'cors'

import Server from './models/server'
import router from './routes/router'

// Instancia del  servidor de express
const server = Server.instance

// Middlewares
// Cors
server.app.use(cors())

// Routes
server.app.use('/', router)

// Levantar el servidor
server.start(() => {
  console.log(`Servidor corriendo en http://localhost:${server.port}`)
})
