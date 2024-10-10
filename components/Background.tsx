import React from "react";
import { ScrollView } from "react-native";
import styled from "styled-components/native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { ImageProps } from "react-native";
import ProfileAvatar from "./ProfileAvatar";
import Music from "./Music";

const backgroundImage = require('../assets/post4.jpg');

const Container = styled.View`
    width: 100%;
    height: 290px;
    background: white;
`

const ImageAndAvatarContainer = styled.View`
    width: 100%;
    align-items: center;
`
    

const BackgroundImage = styled.Image`
    width: 100%;
    height: 175px;
`

const ProfileAvatarContainer = styled.View`
    width: 100%;
    bottom: 110px;   
    align-items: center;
`

const Text = styled.Text`
    color: black;
    font-size: 22px;
    font-weight: 500;
    letter-spacing: -0.3px;
    top: 35px;
`

const Background = () => {
    return(
        <Container>
            <ImageAndAvatarContainer>
                <BackgroundImage source={backgroundImage}></BackgroundImage>
                <ProfileAvatarContainer>
                    <ProfileAvatar
                        source={require('../assets/8.jpg')}
                        checked={false}
                        story={true}
                        online={true}>
                    </ProfileAvatar>
                </ProfileAvatarContainer>
                <Text>Asier Arguinchona</Text>

            </ImageAndAvatarContainer>
        </Container>
    )
}

export default Background;