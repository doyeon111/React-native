import React from "react";
import styled from "styled-components/native";
import PropTypes from "prop-types";
import { apiImage } from "../../api";
import Poster from "../Poster";
import { TouchableOpacity } from "react-native";

//컨테이너 스타일 설정
const Container = styled.View`
    height: 100%;
    width: 100%;
`;

const BG = styled.Image`
    height: 100%;
    width: 100%;
    opacity: 0.4;
    position: absolute;
`;

const Content = styled.View`
    height: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
`;

//데이터 크기 설정
const Data = styled.View`
    width: 50%;
    align-items: flex-start;
`;

//타이틀 스타일 설정
const Title = styled.Text`
    color: white;
    font-weight: bold;
    font-size: 19px;
    margin-bottom: 10px;
`;

const Votes = styled.Text`
    color: rgb(220, 220, 220);
    margin-bottom: 7px;
    font-weight: 500;
    font-size: 12px;
`;

const Overview = styled.Text`
    color: rgb(220, 220, 220);
    font-size: 14px;
    font-weight: 500;
`;

const Button = styled.View`
    margin-top: 10px;
    background-color: #e74c3c;
    padding: 7px 10px;
    border-radius: 3px;
`;

const ButtonText = styled.Text`
    color: white;
`;

//슬라이드 설정
const Slide = ( {id, title, backgroundImage, votes, overview, poster }) => (
    <Container>
        <BG source={{uri:apiImage(backgroundImage)}} />
        <Content>
            //포스터 url 불러온 후 api로 이미지 가져오기.
            <Poster url={apiImage(poster)}/>
            <Data>
                <Title>{title.length > 40 ? `${title.slice(0, 30)}...` : title }</Title>
                <Votes>⭐ {votes} / 10</Votes>
                <Overview>{overview.slice(0, 110)}...</Overview>
                <TouchableOpacity>
                    <Button>
                        <ButtonText>View details</ButtonText> //버튼 클릭시 영화 상세 페이지로 이동 
                    </Button>
                </TouchableOpacity>
            </Data>
        </Content>
    </Container>
);

Slide.PropTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    backgroundImage: PropTypes.string.isRequired,
    votes: PropTypes.number.isRequired,
    overview: PropTypes.string.isRequired
};

export default Slide;
