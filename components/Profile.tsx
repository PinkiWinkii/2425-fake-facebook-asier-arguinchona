import React from "react";
import { Text } from "react-native";
import styled from "styled-components/native";
import MainSeparator from "./MainSeparator";
import ToolBar from "./ToolBar";
import Background from "./Background";
import Music from "./Music";
import ProfileOptions from "./ProfileOptions";
import ProfileSeparator from "./ProfileSeparator";
import StoryHighlights from "./StoryHighlights";
import Story from "./Story";
import ProfileStoryHighlights from "./ProfileStoryHighlights";

const View = styled.ScrollView`
    flex: 1;
`

const Profile = () => {
    return(
        <View>
            <Background></Background>
            <Music></Music>
            <ProfileOptions></ProfileOptions>
            <ProfileSeparator/>
            <StoryHighlights></StoryHighlights>
            <ProfileStoryHighlights></ProfileStoryHighlights>
        </View>
    )
}

export default Profile;