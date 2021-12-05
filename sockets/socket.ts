/* eslint-disable @typescript-eslint/explicit-function-return-type */
import socketIO, { Socket } from 'socket.io'
import { Usuario } from '../models/usuario'
import { UsuariosLista } from '../models/usuarios-lista'
import { TicketList } from '../models/ticket-list'

export const usuariosConectados = new UsuariosLista()
export const ticketList = new TicketList()

// -------------------Conexion de un cliente---------------------------------------------

// Metodo que se ejecuta cuando un usuario se conecta
export const conectarCliente = (cliente: Socket) => {
  const usuario = new Usuario(cliente.id)
  console.log('✅ Cliente conectado', cliente.id)
  usuariosConectados.agregar(usuario)
}

// Metodo para desconexion de un cliente del socket
export const desconectar = (cliente: Socket, io: socketIO.Server) => {
  cliente.on('disconnect', () => {
    console.log('❌ Cliente desconectado', cliente.id)
    usuariosConectados.borrarUsuario(cliente.id)
  })
}

// -------------------Tickets------------------------------------------------------------

// Escuchar mensajes de cliente(angular)
export const ticket = (cliente: Socket, io: socketIO.Server) => {
  // Escuchar mensaje de cliente
  cliente.on('nuevo-ticket', (payload, callback) => {
    const nuevoTicket = ticketList.crearTicket()
    callback(nuevoTicket)
  })

  cliente.on('siguiente-ticket-trabajar', ({ escritorio }, callback) => {
    const suTicket = ticketList.asignarTicket(escritorio)
    callback(suTicket)

    io.emit('ticket-asignado', ticketList.getUltimos4())
  })
}
