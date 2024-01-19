import React,{useState,useEffect} from 'react'
import Loading from './Loading'
import Tours from './Tours';
import './tours.css';

const url = 'https://course-api.com/react-tours-project'

function TourPackages() {
    const [loading,setLoading] = useState(true);
    const [tours,setTours] = useState([]);
    const fetchData = async()=>{
        setLoading(true)
        try{
        const response = await fetch(url);
        const toursData = await response.json();
        setLoading(false);
        setTours(toursData);
        }
        catch(error){
            setLoading(false);
            console.log(error);
        }
    }
    useEffect(()=>{
        fetchData();
    },[])
    if(loading){
        return (
            <main>
               <Loading/>
            </main>
        )
    }
    const removeTour = (id) =>{
        const newTours = tours.filter((tour)=>tour.id !== id)
        setTours(newTours);
    }
    if (tours.length === 0) {
        return (
          <main>
            <div className='title'>
              <h2>no tours left</h2>
              <button className='btn' onClick={() => fetchData()}>
                refresh
              </button>
            </div>
          </main>
        )
      }
  return (
  <main>
    <Tours tours={tours} removeTour={removeTour}/>
  </main>
  )
}

export default TourPackages