import { Usuario } from './usuario'

export class UsuariosLista {
  private lista: Usuario[] = []

  // constructor() {}

  // Agregar un usuario
  public agregar (usuario: Usuario): Usuario {
    this.lista.push(usuario)
    return usuario
  }

  // Obtener un usuario
  public getUsuario (id: string): Usuario | undefined {
    return this.lista.find(usuario => usuario.id === id)
  }

  // Borrar un usuario
  public borrarUsuario (id: string): Usuario | undefined {
    const tempUsuario = this.getUsuario(id)

    // Eliminar el usuario de la lista
    this.lista = this.lista.filter(usuario => usuario.id !== id)
    return tempUsuario
  }
}
