import React from 'react';



const SearchBox = ({searchField,SearchChange}) =>{
    return (
    <div className = 'pa1'>
         <input  className = 'pa2 ba ma2 b--green bg-lightest-blue ' 
         type = 'search' 
         placeholder = 'search robots'
         onChange ={ SearchChange} />


    </div>
       
    );
}
export default SearchBox;