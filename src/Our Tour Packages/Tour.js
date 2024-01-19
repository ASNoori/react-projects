import React,{useState} from 'react'
import './tours.css';

function Tour({id,image,info,price,name,removeTour}) {
    const [readMore,setReadMore] = useState(false);
  return (
    <article className='single-tour'>
        <img src={image} alt={name}/>
        <footer>
            <div className='align'>
                <h4>{name}</h4>
                <h4>${price}</h4>
            </div>
            <p>{readMore ? info : `${info.substring(0,200)}...`}
            <button className='readmore'onClick={()=>setReadMore(!readMore)}>
                {readMore ? 'show less' :'read more' }
            </button>
            </p>
            <button className='btn' onClick={()=>removeTour(id)}>Not interested</button>
        </footer>
    </article>
  )
}

export default Tour