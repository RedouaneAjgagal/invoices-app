import { createContext } from "react";

export type Filter = {
    isPaid: boolean,
    isPending: boolean,
    isDraft: boolean,
    filterInvoice: (type: 'paid' | 'pending' | 'draft' | 'reset') => void,
}
const FilterStatus = createContext<Filter>({
    isPaid: false,
    isPending: false,
    isDraft: false,
    filterInvoice: (type) => { },
});

export default FilterStatus;