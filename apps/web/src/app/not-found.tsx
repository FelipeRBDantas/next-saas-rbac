// app/not-found.tsx
export default function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold text-gray-800 mb-2">404</h1>

      <p className="text-gray-500 mb-4">
        O recurso solicitado não foi encontrado.
      </p>

      <a
        href="/"
        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        Voltar à Home
      </a>
    </div>
  )
}
