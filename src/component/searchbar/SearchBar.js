import React , { useContext } from 'react';
import {SearchContext} from '../context/SearchContext';

function SearchBar() {
    const {title , handleChangeValue} = useContext(SearchContext)
    return (
        <React.Fragment>
            <input type="text" className="form-control"
            placeholder="Enter name movies..."
            onChange={(e)=>handleChangeValue(e.target.value)}
            value={title}
            />
        </React.Fragment>
    )
}

export default SearchBar;
