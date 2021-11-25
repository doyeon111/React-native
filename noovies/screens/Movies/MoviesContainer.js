import React, { useEffect, useState } from "react";
import { View, Text, Button } from 'react-native';
import { movieApi } from "../../api";
import MoivesPresenter from "./MoviesPresenter";

export default () => {
    const [movies, setMovies] = useState({ //영화 페이지 api 상세 설정
        loading: true,
        nowPlaying: [],
        nowPlayingError: null,
        popular: [],
        popularError: null,
        upcoming: [],
        upcomingError: null
    });
    const getData = async () => {
        const [nowPlaying, nowPlayingError] = await movieApi.nowPlaying(); // 현재 상영중인 영화
        const [popular, popularError] = await movieApi.popular(); // 가장 인기있는 영화
        const [upcoming, upcomingError] = await movieApi.upcoming(); // 곧 개봉할 영화
        setMovies({
            loading: false,
            nowPlaying, 
            popular, 
            upcoming, 
            nowPlayingError, 
            popularError, 
            upcomingError
        });
    };
    useEffect(() => {
        getData();
    }, []);
    
    return (
        <MoivesPresenter {...movies} />
    );
};
