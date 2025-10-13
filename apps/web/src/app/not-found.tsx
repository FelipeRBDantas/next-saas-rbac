import { ErrorPage } from './(errors)/ErrorPage'

export default function NotFoundPage() {
  return (
    <ErrorPage
      title="404 - Página não encontrada"
      message="O recurso solicitado não foi localizado ou pode ter sido removido."
    />
  )
}
