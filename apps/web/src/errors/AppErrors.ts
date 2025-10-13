export class NotFoundError extends Error {
  constructor(message = 'Recurso não encontrado') {
    super(message)
    this.name = 'NotFoundError'
  }
}

export class UnauthorizedError extends Error {
  constructor(message = 'Não autorizado') {
    super(message)
    this.name = 'UnauthorizedError'
  }
}

export class ServerError extends Error {
  constructor(message = 'Erro interno do servidor') {
    super(message)
    this.name = 'ServerError'
  }
}
