import Link from "next/link"
export function ButttonActions() {
    return(
        <div className="container cont-info-task">
            <Link href="/new_todo">
              <button className="mb-4 px-4 py-2 btn btn-success text-white rounded-lg">Crear Nueva Tarea</button>
            </Link>
            <Link href="/completed">
              <button className="mb-4 px-4 py-2 btn btn-dark text-white rounded-lg w-100">Ver Completados</button>
            </Link>
            <Link href="/in-process">
              <button className="mb-4 px-4 py-2 btn btn-info text-white rounded-lg w-100">Ver En Proceso</button>
            </Link>
          </div>
    )
}