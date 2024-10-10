import React from "react";
import styled from "styled-components/native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const Container = styled.View`
    
    height: 80px;
    flex-direction: row;
    display: flex;
    justify-content: space-between;
    align-items: center; 
    padding: 0 10px; 
    top: 0px;
    background: white;
    border-top-width: 1px;
    border-top-color: gray;
    border-bottom-width: 1px;
    border-bottom-color: gray;
    background-color: white;
    border-radius: 8px;
`;

const MusicTextContainer = styled.View`
    flex-direction: column;
    margin-left: 15px; 
    flex: 1; 
`;

const MusicTitle = styled.Text`
    font-weight: bold; 
        color: gray;
`;

const MusicImage = styled.Image`
    width: 50px;
    height: 50px;
    border-radius: 7px;
`;

const MusicAuthor = styled.Text`
    color: gray;
`;

const Music = () => {
    return (
        <Container>
            <MusicImage source={require('../assets/12.jpg')} />
            <MusicTextContainer>
                <MusicTitle>Cancionaca</MusicTitle>
                <MusicAuthor>Martin Garrix + KDA</MusicAuthor>
            </MusicTextContainer>
            <MaterialCommunityIcons name="dots-horizontal" size={26} color="black"/>
        </Container>
    );
};

export default Music;
