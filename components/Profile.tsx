import React from "react";
import { Text } from "react-native";
import styled from "styled-components/native";
import MainSeparator from "./MainSeparator";
import ToolBar from "./ToolBar";
import Background from "./Background";

const View = styled.ScrollView`
    flex: 1;
`

const Profile = () => {
    return(
        <View>
            <Background></Background>
            <MainSeparator/>
        </View>
    )
}

export default Profile;