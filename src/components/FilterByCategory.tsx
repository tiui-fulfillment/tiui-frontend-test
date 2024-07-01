import { ChangeEvent } from "react";
import { categories } from "../data/categories"
import { useTodo } from "../hooks/useTodo";

export const FilterByCategory = () => {
    const { dispatch } = useTodo();

    const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
        dispatch({ type: "add-filter-category", payload: { id: e.target.value } })
    }
    return (
        <div className="bg-white rounded-lg my-5">
            <form>
                <div className="flex flex-col md:flex-row md:items-center gap-5">
                    <label htmlFor="category">Filtrar tareas</label>
                    <select id="category" className="bg-slate-100 p-3 flex-1 rounded" onChange={handleChange}>
                        <option value="">-- Todas las categorías --</option>
                        {categories.map(category => (
                            <option key={category.id} value={category.id}>{category.name}</option>
                        ))}
                    </select>
                </div>
            </form>
        </div>
    )
}
