import React from "react";
import styled from "styled-components/native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";



const Container = styled.View`
    height: 50px; 
    flex-direction: row;
    display: flex;
    justify-content: space-between;
    align-items: center; 
    padding: 0 10px; 
    background: white;

`;

const OptionWrapper = styled.View`
    align-items: center; 
`;

const OptionBackground = styled.View`
    width: 43px;
    height: 43px;
    border-radius: 40px;
    background: #E0E0E0; 
    justify-content: center;
    align-items: center;
    margin-bottom: 5px; 
`;

const BoldText = styled.Text`
    font-size: 20px;
    color: black;
    font-weight: bold;
`;

const BlueNonboldText = styled.Text`
     font-size: 14px;
     color: #3399FF;
     font-weight: 200;
`

const StoryHighlights = () => {
    return (
        <Container>
            <BoldText>Story Highlights</BoldText>
            <BlueNonboldText>Add new</BlueNonboldText>
        </Container>
    );
};

export default StoryHighlights;
