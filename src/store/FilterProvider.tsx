import FilterStatus from "./filter";
import React, { useReducer } from "react";
import { Filter } from "./filter";

type State = { isPaid: boolean, isPending: boolean, isDraft: boolean }
type Action = { type: 'paid' | 'pending' | 'draft' | 'draft' | 'reset' }

const initialState: State = {
    isPaid: false,
    isPending: false,
    isDraft: false
}
const reducer = (state: State, action: Action) => {
    switch (action.type) {
        case 'paid':
            return { ...state, isPaid: !state.isPaid }
        case 'pending':
            return { ...state, isPending: !state.isPending }
        case 'draft':
            return { ...state, isDraft: !state.isDraft }
        case 'reset': {
            return initialState
        }
        default:
            return state;
    }
}


interface Props {
    children: React.ReactNode
}
const FilterProvider: React.FC<Props> = ({ children }) => {
    const [filters, dispatchFilters] = useReducer(reducer, initialState)
    const filterInvoice = (type: 'paid' | 'pending' | 'draft' | 'reset') => {
        dispatchFilters({ type: type });
    };
    const selectedFilter: Filter = {
        isPaid: filters.isPaid,
        isPending: filters.isPending,
        isDraft: filters.isDraft,
        filterInvoice,
    }
    return (
        <FilterStatus.Provider value={selectedFilter}>
            {children}
        </FilterStatus.Provider>
    )
}
export default FilterProvider;