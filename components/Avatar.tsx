import React from "react";
import styled from "styled-components/native";
import { ImageProps } from 'react-native'


// Step 1: Define the props interface
interface ProfileImageProps extends ImageProps {
    checked?: boolean; // Optional: Add the checked prop
    story: any;
}

const Container = styled.View`
    width: 40px;
    height: 40px;
    position: relative;
`

const ProfileImage = styled.Image<ProfileImageProps>`
    width: 40px;
    height: 40px;
    border-radius: 20px;
    border-color: ${(props => props.checked ? '#FFFFFF' : '#1777F2')};
    border-width: ${(props => props.story ? '3px' : 0)}
`

const UserActive = styled.View`
    position: absolute;
    bottom: -2px;
    right: -2px;
    width: 15px;
    height: 15px;
    border-radius: 8px;
    background: #10D24B;
    border: 2px solid #FFFFFF
`


// Define the props interface
interface AvatarProps {
    source: { uri: string };
    online: any;
    story: any;
    checked: any;
}

// Use the props interface in the component
const Avatar: React.FC<AvatarProps> = ({ source, online, story, checked}) => {
    return (
        <Container>
            <ProfileImage source={source} story={story} checked={checked}/>
            {online && <UserActive></UserActive>}
        </Container>
    )
}

export default Avatar;