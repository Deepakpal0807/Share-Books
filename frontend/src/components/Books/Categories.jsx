import React from 'react'
import booksData from '../../dummy';
import Booksmall from './Booksmall';


const Categories = () => {
    // console.log(booksData.bookTypes);
  return (
    <div className="container">
        {booksData.bookTypes.map((el)=>{
            return <Booksmall data={el}/>
        })}

    </div>
  )
}

export default Categories