import styled from 'styled-components'

export const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.type ? 
        ( props.type < 3 ? "#FF8888" : "#88FFAA" ) : 
        "#F5FCFF"
    };
`;

export const Label = styled.View`
    width: 360px;
    max-width: 90%;
    height: 75px;
    margin: 20px;
    align-items: center;
    justify-content: center;
    background-color: #ffffff;
    border-radius: 10px;
`;

export const ListItens = styled.View`
    width: 90%;
    max-width: 360px;
    height: 90px;
    margin: 10px auto;
    justify-content: center;
    background-color: #ffffff;
    border-radius: 10px;
    flex-direction: row;
`;


