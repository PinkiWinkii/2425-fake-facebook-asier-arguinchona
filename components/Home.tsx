import React from "react";
import { Text } from "react-native";
import styled from "styled-components/native";
import MainSeparator from "./MainSeparator";
import ToolBar from "./ToolBar";
import Users from "./Users";
import Story from "./Story";
import Story2 from "./Story2";
import Post from "./Post";

const View = styled.ScrollView`
    flex: 1;
`

const Home = () => {
    return(
        <View>
            <ToolBar></ToolBar>
            <MainSeparator></MainSeparator>
            <Users></Users>
            <MainSeparator></MainSeparator>
            <Story2></Story2>
            <MainSeparator></MainSeparator>
            <Post></Post>
            
        </View>
    )
}

export default Home;