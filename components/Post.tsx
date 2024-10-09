import React from "react";
import { View } from "react-native";
import styled from "styled-components/native";
import Avatar from "./Avatar";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import MainSeparator from "./MainSeparator";

const fakeUsers = require('../data/fakeUsers.tsx');

const Container = styled.View`
    flex: 1;
`

const Header = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    height: 50px;
    margin-top: 5px;
    padding: 0 10px;
`

const Row = styled.View`
    flex-direction: row;
    align-items: center;
`

const User = styled.Text`
    font-size: 12px;
    font-weight: bold;
    color: #222121;
`

const Time = styled.Text`
    font-size: 9px;
    color: #747476;
`

const PostContent = styled.Text`
    font-size: 12px;
    color: #222121;
    line-height: 16px;
    padding: 0 11px;
`

const Photo = styled.Image`
    margin-top: 9px;
    width: 100%;
    height: 300px;
`

const Footer = styled.View`
    padding: 0 11px;
`

const FooterCount = styled.View`
    flex-direction: row;
    justify-content: space-between;
    padding: 9px 0;
`

const IconCount = styled.View`
    background: #1878f3;
    width: 20px;
    height: 20px;
    border-radius: 10px;
    align-items: center;
    justify-content: center;
    margin-right: 6px;
`

const TextCount = styled.Text`
    font-size: 11px;
    color: #424040;
`

const Separator = styled.View`
    width: 100%;
    height: 10px;
    background: #f9f9f9;
`

const FooterMenu = styled.View`
    flex-direction: row;
    justify-content: space-between;
    pdading: 9px 0;
`

const Button = styled.TouchableOpacity`
    flex-direction: row;
`

const Icon = styled.View`
    margin-right: 6px;
`

const Text = styled.Text`
    font-size: 12px;
    color: #424040;
`