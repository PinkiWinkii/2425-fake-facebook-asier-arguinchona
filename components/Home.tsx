import React from "react";
import { Text } from "react-native";
import styled from "styled-components/native";
import MainSeparator from "./MainSeparator";
import ToolBar from "./ToolBar";
import Users from "./Users";
import Story from "./Story";

const View = styled.View`
    flex: 1;
`

const Home = () => {
    return(
        <View>
            <ToolBar></ToolBar>
            <MainSeparator></MainSeparator>
            <Users></Users>
            <MainSeparator></MainSeparator>
            <Story></Story>
            <MainSeparator></MainSeparator>
        </View>
    )
}

export default Home;