import styled from 'styled-components'

export const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: #F5FCFF;
`;

export const RoundedIcon = styled.Image`
    width: 80px;
    height: 80px;
    border-radius: 50px;
    padding: 5px;
    background-color: #ffffff;
    margin-bottom: -48px;
    z-index: 9;
`

export const Input = styled.TextInput`
    width: 85%;
    padding: 20px;
    background-color: #ffffff;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
`

export const Button = styled.TouchableOpacity`
    width: 85%;
    height: 50px;
    align-items: center;
    justify-content: center;
    background-color: #33FF99;  
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
    margin-bottom: 64px;
`;
