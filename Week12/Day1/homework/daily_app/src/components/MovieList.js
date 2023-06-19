import { connect } from 'react-redux'
import { choseMovie } from "../redux/actions";

const MovieList = (props) => {

    return (
        <>
        {
            props.listOfMovies.map((item, i)=>{
                return(
                    <div key={i}>
                        <p>{item.title}</p>
                        <button onClick={()=> props.handleDetails(item)}>Details</button>
                    </div>
                )
              })
        }
        </>
    )
}

const mapStateToProps = (state) => {
    return {
      listOfMovies: state.listMovies,
    }
  }

const mapDispatchToProps = (dispatch) => {
    return {
        handleDetails : (m)=> {dispatch(choseMovie(m))},
    }
}

export default connect(mapStateToProps, mapDispatchToProps )(MovieList) 

