import React from "react";
import styled from "styled-components/native";

const Container = styled.View`
    width: 40px;
    height: 40px;
    position: relative;
`

const ProfileImage = styled.Image`
    width: 40px;
    height: 40px;
    border-radius: 20px;
`

// Define the props interface
interface AvatarProps {
    source: { uri: string }; // Assuming the source is an object with a uri key
}

// Use the props interface in the component
const Avatar: React.FC<AvatarProps> = ({ source }) => {
    return (
        <Container>
            <ProfileImage source={source} />
        </Container>
    )
}

export default Avatar;