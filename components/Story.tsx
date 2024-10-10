    import React from "react";
    import { ScrollView } from "react-native";
    import styled from "styled-components/native";
    import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
    import { ImageProps } from "react-native";
    import Avatar from "./Avatar";


    const fakeStories = require('../data/fakeStories.tsx')

    const Container = styled.View`
        
        width: 100%;
        height: 230px;
        flex-direction: row;
        alignt-items: center;
        background: white;
    `
    const FakeCard = styled.View`
        width: 110px;
        height: 200px;
        margin-left: 10px;
        background: white;
    `

    const PersonalCard = styled.View`
        width: 110px;
        height: 200px;
        margin-right: 10px;
        position: absolute;
        background: #FFFFFF;
        border-radius: 10px;
        z-index: 10;
        border: 1px solid #DDDDDD
    `

    const PersonalCardStory = styled.Image`
        width: 100%;
        height: 130px;
        border-radius: 10px;
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
        position: absolute;
        top: 0px;
        left: 0px;
    `

    const PersonalCardIcon = styled.View`
        width: 34px;
        height: 34px;
        border-radius: 17px;
        background: #3a86e9;
        border-width: 3px;
        border-color: #FFFFFF;
        align-items: center;
        position: absolute;
        top: 115px;
        left: 40px;`

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

    // Step 1: Define the props interface
    interface UserCardFooterProps{
        profile?: any;
    }


    const UserCardFooter = styled.View<UserCardFooterProps>`
        position: absolute;
        width: 100%;
        height: 35%;
        top: 130px;
        left: 0px;
        border: ${(props => props.profile ? '1px solid #DDDDDD' : 0)};
        border-bottom-right-radius: 10px;
        border-bottom-left-radius: 10px;
        background: ${(props => props.profile ? '#FFFFFF' : 'rgba(255, 255, 255, 0)')}; /* Corrected */
    `


    const UserOnCard = styled.View`
        position: absolute;
        top: 8px;
        left: 8px;
        background: #FFFFFF;
        border-radius: 20px;
        width: 40px;
        height: 40px;
        align-items: center;
        justify-content: center;
    `

    interface TextProps{
        profile: any;
    }

    const Text = styled.Text<TextProps>`
        font-size: 14px;
        font-weight: bold;
        padding-top: ${(props => props.profile ? '15px' : '45px')};
        text-align: center;
        color: ${(props => props.profile ? '#000000' : '#FFFFFF')};
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
                            <UserCardFooter profile={true}>
                                <Text profile={true}>Crear una historia</Text>
                            </UserCardFooter>
                            <UserCardPlus>
                                <MaterialCommunityIcons name="plus" size={28} color="#FFFFFF"></MaterialCommunityIcons>
                            </UserCardPlus>
                        </UserCard>
                        {fakeStories.map((story: any, index: any) => {
                            return(
                                <UserCard key={index.toString()}>
                                    <UserCardStory source={story.source}></UserCardStory>
                                    <UserCardFooter profile={false}>
                                        <Text profile={false}>{story.name}</Text>
                                    </UserCardFooter>
                                        <UserOnCard>
                                            
                                            <Avatar
                                                source={story.user}
                                                checked={story.checked}
                                                story={true}
                                                online={story.online}>
                                            </Avatar>

                                        </UserOnCard>
                        
                                </UserCard>
                            )
                        })}
                    </ScrollView>
                </Container>
            </>
        )
    }

    export default Story;