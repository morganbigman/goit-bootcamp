import React from 'react';
import PropTypes from 'prop-types';
import Chart from '../Chart/Chart'
import './Search.css'

const Search = ({value, onChange, }) => {
    return (
        <div className='search'>
            <form action="#" method="post" className="search__form">
                <input type="text" className="search__input" placeholder="Search music" value={value} onChange={onChange} name='searchValue'/>
                <input type="submit" value="search" className="search__btn"/>
            </form>
            <Chart/>
        </div>
    );
};

Search.propTypes = {
    
};

export default Search;