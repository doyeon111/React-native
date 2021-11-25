import axios from "axios";

const TMDB_KEY = "928b9262b283510a11bec725278283e4" //영화 사이트에서 나의 개인 api 키를 가져옴.

const makeRequest = (path, params) => axios.get(`https://api.themoviedb.org/3${path}`, {
    params: {
        ...params,
        api_key: TMDB_KEY
        }
    });

const getAnything = async(path, params = {}) => {
    try {
        const {
            data: {results},
            data
        } = await makeRequest(path, params);
        return [results || data, null];
    } catch(e) {
        return [null, e];
    }
};



export const movieApi = { // 영화 api를 아이디로 가져온다.
    nowPlaying: () => getAnything("/movie/now_playing"), 
    popular: () => getAnything("/movie/popular"),
    upcoming: () => getAnything("/movie/upcoming", {"region": "kr"}),
    search: query => getAnything("/search/movie", {query}),
    movie: id => getAnything(`/movie/${id}`),
    discover: () => getAnything("/discover/movie")
};

export const tvApi = { // tv api를 가져오는 방법
    today: () => getAnything("/tv/airing_today"),
    thisWeek: () => getAnything("/tv/on_the_air"),
    topRated: () => getAnything("/tv/top_rated"),
    popular: () => getAnything("/tv/popular"),
    search: query => getAnything("/search/tv", {query}),
    show: id => getAnything(`/tv/${id}`)
};

export const apiImage = path => `https://image.tmdb.org/t/p/w500${path}`
