import React from "react";
import { ScrollView } from "react-native";
import styled from "styled-components/native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const Container = styled.View`
    width: 100%;
    height: 230px;
    flex-direction: row;
    alignt-items: center;
`

const UserCard = styled.View`
    margin-top: 20px;
    width: 110px;
    height: 200px;
    margin-right: 10px;
    position: relative;
`

const UserCardStory = styled.Image`
    width: 100%;
    height: 200px;
    border-radius: 10px;
`

const UserCardPlus = styled.View`
    width: 30px;
    height: 30px;
    border-radius: 15px;
    background: #3a86e9;
    align-items: center;
    position: absolute;
    top: 115px;
    left: 40px;
`

const UserCardFooter = styled.View`
    position: absolute;
    width: 100%;
    height: 35%;
    top: 130px;
    left: 0px;
    border: 1px solid #DDDDDD;
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
    background: #FFFFFF;
`

const Text = styled.Text`
    font-size: 12px;
    font-weight: bold;
    padding-top: 15px;
    text-align: center;
`

const Story = () => {
    return (
        <>
            <Container>
                <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                style={{paddingLeft: 10}}>
                    <UserCard>
                        <UserCardStory source={require('../assets/story.jpg')}></UserCardStory>
                        <UserCardFooter>
                            <Text>Crear una historia</Text>
                        </UserCardFooter>
                        <UserCardPlus>
                            <MaterialCommunityIcons name="plus" size={28} color="#FFFFFF"></MaterialCommunityIcons>
                        </UserCardPlus>
                    </UserCard>
                </ScrollView>
            </Container>
        </>
    )
}

export default Story;