import { v4 } from 'uuid'
const uuidv4 = v4()

export class Ticket {
  id: string
  numero: number
  escritorio: number

  constructor (numero: number) {
    this.id = uuidv4
    this.numero = numero
    this.escritorio = 0
  }
}
