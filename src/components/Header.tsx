type HeaderComponentProps = {
  numberOfTasks: number;
  numberOfPendients: number;
};

export default function Header({ numberOfTasks, numberOfPendients }: HeaderComponentProps) {
  return (
    <>
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Tareas</h2>
        <span className="text-teal-600 font-semibold">Tiui mx</span>
      </div>
      <div className="flex gap-2 flex-col md:flex-row">
        <div className="flex gap-2 items-center">
          <span className="text-neutral-400">Tareas: </span>
          <span className="text-neutral-200">{numberOfTasks}</span>
        </div>
        <div className="flex gap-2 items-center">
          <span className="text-neutral-400">Pendientes: </span>
          <span className="text-neutral-200">{numberOfPendients}</span>
        </div>
      </div>
    </>
  );
}
