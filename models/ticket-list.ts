/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { Ticket } from './ticket'

export class TicketList {
  ultimoNumero: number = 0
  pendientes: Ticket[] = []
  asignados: Ticket[] = []

  // constructor () {}

  // Getter para obtener el siguiente numero de ticket
  get siguienteNumero (): number {
    this.ultimoNumero++
    return this.ultimoNumero
  }

  getUltimos4 (): Ticket[] {
    return this.asignados.slice(0, 4)
  }

  // Metodo para crear un ticket
  crearTicket (): Ticket {
    const nuevoTicket = new Ticket(this.siguienteNumero)
    this.pendientes.push(nuevoTicket)
    return nuevoTicket
  }

  asignarTicket (escritorio: number): Ticket |null {
    if (this.pendientes.length === 0) { return null }

    const siguienteTicket = this.pendientes.shift() as Ticket
    siguienteTicket.escritorio = escritorio

    this.asignados.unshift(siguienteTicket)
    return siguienteTicket
  }
}
