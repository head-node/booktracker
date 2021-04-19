import React from 'react'
import "../card/card.css"
const Card = ({book}) => {  

    return ( 
        <div className="card-container" onClick={()=>alert("clicked")}> 
           {book.volumeInfo!=undefined? 
          <>
          <p>{book.volumeInfo.title}</p> 
           <div> 
               {book.volumeInfo.imageLinks!=undefined ?<img src={book.volumeInfo.imageLinks.thumbnail}/> :null}
           
           </div> 
           </>
           :
           null}
            
        </div>
    )
}

export default Card
