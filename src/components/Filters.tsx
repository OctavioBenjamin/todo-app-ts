import { FILTERS_BUTTONS } from "./consts"
import { FilterValue } from "../types"

interface Props {
    onFilterChange: (filter: FilterValue) => void
    //Utiliza una key del tipo todo
    filterSelected: FilterValue
}

export const Filters: React.FC<Props> = ({ filterSelected, onFilterChange }) => {
    return (
        <ul className="filters">
            {
                Object.entries(FILTERS_BUTTONS).map(([key, { href, literal }]) => {
                    const isSelected = key === filterSelected
                    const className = isSelected ? "selected" : ""

                    return(

                    <li key={key}>
                        <a 
                            href={href}
                            className={ className }
                            // onClick={handleClick(key as FilterValue)}
                            onClick={(event) => {
                                event.preventDefault()
                                onFilterChange(key as FilterValue)
                            }}
                        >
                            {literal}
                        </a>
                    </li>
                    )
                })
            }
        </ul>
    )
}