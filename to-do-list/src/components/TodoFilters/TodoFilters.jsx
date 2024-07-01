import { FilterButton, FilterButtonContainer, FiltersContainer, TodosLeft } from "./TodoFilters.components"

const TodoFilters = ( {
    total,
    pendingFilter,
    showAllTodos,
    showPendingTodos,
    showCompleteTodos
} ) => {

    return (
        <FiltersContainer>
            <TodosLeft total={total}/>
            <FilterButtonContainer>
                <FilterButton action={() => showAllTodos()} pending={pendingFilter} filter='All'/>
                <FilterButton action={() => showPendingTodos()} pending={pendingFilter} filter='Pending'/>
                <FilterButton action={() => showCompleteTodos()} pending={pendingFilter} filter='Complete'/>
            </FilterButtonContainer>
        </FiltersContainer>
    )
}

export { TodoFilters }