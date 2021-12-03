/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import express from 'express'
import http from 'http'
import socketIO from 'socket.io'

import { SERVER_PORT } from '../global/environment'
// import * as socket from '../sockets/socket'

export default class Server {
  public app: express.Application
  public port: number
  public io: socketIO.Server
  private static _instance: Server
  private readonly httpServer: http.Server

  private constructor () {
    this.app = express()
    this.port = SERVER_PORT
    this.httpServer = new http.Server(this.app)
    this.io = new socketIO.Server(this.httpServer, { cors: { origin: '*' } })
    this.escucharSockets()
  }

  public static get instance (): Server {
    return this._instance || (this._instance = new this())
  }

  private escucharSockets (): void {
    console.log('🧏‍♂️ Escuchando todas las conexiones - ⚡sockets')
  }

  // Iniciar servidor
  start (callback: Function): void {
    this.httpServer.listen(this.port, callback())
  }
}
