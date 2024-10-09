import React from "react";
import styled from "styled-components/native";

const Container = styled.View`
    width: 40px;
    height: 40px;
    position: relative;
`

const ProfileImage = styled.Image`
    width: 36px;
    height: 36px;
    border-radius: 20px;
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
}

// Use the props interface in the component
const Avatar: React.FC<AvatarProps> = ({ source, online}) => {
    return (
        <Container>
            <ProfileImage source={source} />
            {online && <UserActive></UserActive>}
        </Container>
    )
}

export default Avatar;