import React from "react";
import { View } from "react-native";
import styled from "styled-components/native";
import Avatar from "./Avatar";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import MainSeparator from "./MainSeparator";

const fakeUsers = require('../data/fakeUsers.tsx');



const Container = styled.View`
    flex: 1;
    margin-bottom: 2px;
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
    height: 2px;
    background: #f9f9f9;
`

const FooterMenu = styled.View`
    flex-direction: row;
    justify-content: space-between;
    pdading: 9px 0;
    top: 5px;
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

const Post = () => {
    return (
        <>
            {fakeUsers.map((user: any, index: any) => {    
               
                return(
                <Container key={index}>  
                    <Header>
                        <Row>
                            <Avatar source={user.source} online={user.online} story={false} checked={false}></Avatar>
                            <View style={{paddingLeft: 10}}>
                                <User>{user.name}</User>
                                <Row>
                                    <Time>{user.time}</Time>
                                    <MaterialCommunityIcons name='circle-small' size={12} color='#747476'></MaterialCommunityIcons>
                                    <MaterialCommunityIcons name='earth' size={10} color='#747476'></MaterialCommunityIcons>
                                </Row>
                            </View>
                        </Row>
                        <MaterialCommunityIcons name='dots-horizontal' size={20} color='#747476'></MaterialCommunityIcons>
                    </Header>

                    <PostContent>{user.postContent}</PostContent>
                    <Photo source={user.postImage}></Photo>

                    <Footer>
                        <FooterCount>
                            <Row>
                                <IconCount>
                                    <MaterialCommunityIcons name= 'thumb-up-outline' size={12} color='#FFFFFF'></MaterialCommunityIcons>
                                </IconCount>
                                <TextCount>{user.likes}</TextCount>
                            </Row>
                            <TextCount>{user.comments}</TextCount>
                        </FooterCount>
                        <Separator></Separator>
                        <FooterMenu>
                            <Button>
                                <Icon>
                                    <MaterialCommunityIcons name='thumb-up-outline' size={20} color='#424848'></MaterialCommunityIcons>
                                </Icon>
                                <Text>Me gusta</Text>
                            </Button>
                            <Button>
                                <Icon>
                                    <MaterialCommunityIcons name='comment-outline' size={20} color='#424040'></MaterialCommunityIcons>
                                </Icon>
                                <Text>Comentar</Text>
                            </Button>
                            <Button>
                                <Icon>
                                    <MaterialCommunityIcons name='share-outline' size={20} color='#424040'></MaterialCommunityIcons>
                                </Icon>
                                <Text>Compartir</Text>
                            </Button>
                        </FooterMenu>
                    </Footer>
                    <MainSeparator></MainSeparator>
                </Container>
                )
            })}
        </>
    )
}

export default Post;