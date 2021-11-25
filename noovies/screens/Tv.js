import React, { useEffect, useState } from "react";
import { View, Text } from 'react-native';
import { tvApi } from "../api";

export default () => {
        const [shows, setShows] = useState({ //tv api의 데이터 불러옴
            today: [],
            thisWeek: [],
            topRated: [],
            popular: [],
            todayError: null,
            thisWeekError: null,
            topRatedError: null,
            popularError: null
        });
    const getData = async() => {
        const [today, todayError] = await tvApi.today(); // 오늘의 인기 tv
        const [thisWeek, thisWeekError] = await tvApi.thisWeek(); //이번 주의 인기있는 tv
        const [topRated, topRatedError] = await tvApi.topRated(); //가장 인기있는 tv 
        const [popular, popularError] = await tvApi.popular(); //요즘 인기있는 tv
        setShows({
            today,
            thisWeek,
            topRated,
            popular,
            todayError,
            thisWeekError,
            topRatedError,
            popularError
        });

    }
    useEffect(() => {
        getData();
    }, []);
    return (
        <View>
            <Text>{shows.popular?.length}</Text>
        </View>
    );
};
