import "bootstrap/dist/css/bootstrap.min.css";
import { useSelector, useDispatch } from 'react-redux'
import { getRobot, getRobotsApi, searchRobotsFunc } from '../redux/actions'
import {useEffect} from 'react'

const Robots = () => {
    const searchRobots = useSelector(state => state.searchRobots)
    const listOfRobots = useSelector(state => state.listOfRobots)
    const dispatch = useDispatch()
    const varName = searchRobots.length === 0 ? listOfRobots : searchRobots
    useEffect (()=> {
       dispatch(getRobotsApi())
    }, [])

    return (
            <>
            <div style={{backgroundImage: 'url(circuit-pattern.png)'}}>
    <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" style={{fontFamily:'SEGA LOGO FONT'}}>ROBOFRIENDS</a>
          <form className="d-flex" role="search">
            <input onChange={(e)=> dispatch(searchRobotsFunc(e.target.value))} className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          </form>
        </div>
      </nav>
      <div style={{padding: '100px'}}>

        <div className="row row-cols-1 row-cols-md-3 g-4 base_js">
           
            {varName.length === 0
          ? <p>Loading...</p>
          : varName.map((item, i)=>{
                return(
                    
                    <div key={i} className="col">
                        <div className="card">
                            <img src={item.image} className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">{item.name}</h5>
                                <p className="card-text">{item.email}</p>
                            </div>
                        </div>
                    </div>
                    
                )
               
              })}
        </div>

      </div>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe" crossOrigin="anonymous"></script>
  </div> 
            </>
        )
    }


    
    
    export default (Robots) 
    