import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: #d0dddd;
`;

export const Card = styled.View`
    background-color: #d0dddd;
    flex: 1;
    border: 1px solid #000;
    min-height: 200px;
    width: 100%;
    margin: 16px 0px;
    border-radius: 16px;
    elevation: 10;
    shadow-offset: { 
        width: 10, 
        height: 10 
    };
    shadow-color: black;
    shadow-opacity: 0.5;
`;

export const CardImage = styled.Image`
    width: 100%;
    height: 70%;
    border-top-left-radius: 14px;
    border-top-right-radius: 14px;
`

export const TitleNews = styled.Text`
    text-align: center;
    padding: 8px;
`
