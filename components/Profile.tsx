import React from "react";
import { Text } from "react-native";
import styled from "styled-components/native";
import MainSeparator from "./MainSeparator";
import ToolBar from "./ToolBar";
import Background from "./Background";
import Music from "./Music";

const View = styled.ScrollView`
    flex: 1;
`

const Profile = () => {
    return(
        <View>
            <Background></Background>
            <Music></Music>
            <MainSeparator/>
        </View>
    )
}

export default Profile;