import React from "react";
import styled from "styled-components/native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const Container = styled.View`
    height: 100px; 
    flex-direction: row;
    display: flex;
    justify-content: space-between;
    align-items: center; 
    padding: 0 30px; 
    background: white;
    border-bottom-width: 1px;
    border-bottom-color: gray;
    border-radius: 8px;
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

const OptionText = styled.Text`
    font-size: 12px;
    color: #333;
`;

const ProfileOptions = () => {
    return (
        <Container>
            <OptionWrapper>
                <OptionBackground>
                    <MaterialCommunityIcons name="plus" size={24} color="#A9A9A9"></MaterialCommunityIcons>
                </OptionBackground>
                <OptionText>Add Story</OptionText>
            </OptionWrapper>
            <OptionWrapper>
                <OptionBackground>
                    <MaterialCommunityIcons name="format-list-bulleted" size={24} color="#A9A9A9"></MaterialCommunityIcons>
                </OptionBackground>
                <OptionText>Activity Log</OptionText>
            </OptionWrapper>
            <OptionWrapper>
                <OptionBackground>
                    <MaterialCommunityIcons name="pencil" size={24} color="#A9A9A9"></MaterialCommunityIcons>
                </OptionBackground>
                <OptionText>Edit Profile</OptionText>
            </OptionWrapper>
            <OptionWrapper>
                <OptionBackground>
                    <MaterialCommunityIcons name="dots-horizontal" size={24} color="#A9A9A9"></MaterialCommunityIcons>
                </OptionBackground>
                <OptionText>More</OptionText>
            </OptionWrapper>
        </Container>
    );
};

export default ProfileOptions;
