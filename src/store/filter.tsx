import { createContext } from "react";

export type Filter = {
    isPaid: boolean,
    isPending: boolean,
    isDraft: boolean,
    paidToggle: () => void,
    pendingToggle: () => void,
    draftToggle: () => void
}
const FilterStatus = createContext<Filter>({
    isPaid: false,
    isPending: false,
    isDraft: false,
    paidToggle: () => {},
    pendingToggle: () => {},
    draftToggle: () => {}
});

export default FilterStatus;