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
    align-items: center;
`
const OuterBorder = styled.View`
    width: 99%;
    height: 99%;
    border-radius: 100px;
    border: 1px solid #FFFFFF;
    position: absolute;
`;

const InnerBorder = styled.View`
    width: 97%;
    height: 97%;
    border-radius: 100px;
    border: 3px solid #1777F2; 
    position: absolute;
    top: 2px; 
    left: 3pxpx; 
`;

const ProfileImageContainer = styled.View`
    width: 170px;
    height: 170px;
    position: relative;
    align-items: center;
`;

const ProfileImage = styled.Image<ProfileImageProps>`
    width: 100%;
    height: 100%;
    border-radius: 100px;
    border: 0;
    border-width: 7px;
    border-color: white;
`;


const UserActive = styled.View`
    position: absolute;
    top: 145px;
    right: -30px;
    width: 23px;
    height: 23px;
    border-radius: 20px;
    background: #10D24B;
    border: 2px solid #FFFFFF
`



// Define the props interface
interface ProfileAvatarProps {
    source: { uri: string };
    online: any;
    story: any;
    checked: any;
}

// Use the props interface in the component
const ProfileAvatar: React.FC<ProfileAvatarProps> = ({ source, online, story, checked }) => {
    return (
        <Container>
            <ProfileImageContainer>
                
                
                <ProfileImage source={source} story={story} checked={checked} />
                <InnerBorder />
            
            </ProfileImageContainer>
            {online && <UserActive></UserActive>}
        </Container>
    );
}


export default ProfileAvatar;