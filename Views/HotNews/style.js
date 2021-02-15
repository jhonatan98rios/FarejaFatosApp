import styled from 'styled-components'

export const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: #d0dddd;
`;

export const Card = styled.View`
    flex: 1;
    border: 1px solid #000;
    min-height: 200px;
    width: 100%;
    margin: 16px 0px;
    border-radius: 16px;
`;

export const CardImage = styled.View`
    background-color: #000;
    width: 100%;
    height: 80%;
    border-top-left-radius: 14px;
    border-top-right-radius: 14px;
`

export const TitleNews = styled.Text`
    text-align: center;
    padding: 8px;
`
