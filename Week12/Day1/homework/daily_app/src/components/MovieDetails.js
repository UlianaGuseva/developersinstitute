import { connect } from 'react-redux'


const MovieDetails = (props) => {
console.log(props.oneDetails);
if (props.oneDetails !== null){
    return (
        <div>
            <p>Title: {props.oneDetails.title}</p>
            <p>Release Date: {props.oneDetails.releaseDate}</p>
            <p>Rating:{props.oneDetails.rating}</p>
        </div>
    )
}
else{
    return (
        <div> select movie</div>
    )
}
}

const mapStateToProps = (state) => {
    return {
      oneDetails: state.oneMovieDetails,
    }
  }

export default connect(mapStateToProps)(MovieDetails) 
