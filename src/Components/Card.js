import React from 'react';

//we can also destructure props like:
// const Card = ({ name,email, id}) =>{....}
const Card = (props)=>{
    const { name,email,id} = props;
    return (
        <div className = 'bg-light-green dib br3 pa1 ma2 grow bw2 shadow-5'>
            <img alt ='photo' src = {`https://robohash.org/${id}?100x100`} ></img>
            <div>
               <h2> {name}</h2> 
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;