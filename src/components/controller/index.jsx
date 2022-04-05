import React from 'react';
import PropTypes from 'prop-types';
import SearchPanel from './SearchPanel';

const Controller =({term,handleSearch,toogleForm}) =>(
    <div>
      <SearchPanel 
      term ={term}
      handleSearch={handleSearch}
      toggleForm={toogleForm}
      />  
    </div>
)

Controller.propTypes ={
    term:PropTypes.string.isRequired,
    handleSearch:PropTypes.string.isRequired,
    toggleForm:PropTypes.string.isRequired

}

export default Controller