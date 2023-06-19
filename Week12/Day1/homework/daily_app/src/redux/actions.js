export const choseMovie = (movie) => {
    return {
        type:'MOVIE_SELECTED',
        payload: movie
    }
}