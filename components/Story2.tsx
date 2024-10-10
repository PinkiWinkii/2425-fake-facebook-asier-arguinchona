import React from "react";
import { ScrollView } from "react-native";
import styled from "styled-components/native";
import Animated, { useSharedValue, useAnimatedStyle, interpolate } from "react-native-reanimated";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Avatar from "./Avatar";

const fakeStories = require('../data/fakeStories.tsx')

const Container = styled.View`
    width: 100%;
    height: 230px;
    flex-direction: row;
    align-items: center;
    background: white;
`;

const PersonalCard = styled(Animated.View)`
    width: 111px;
    height: 200px;
    margin-right: 10px;
    position: absolute;
    background: #FFFFFF;
    border-radius: 30px;
    z-index: 10;
    border: 1px solid #DDDDDD
`

const FakeCard = styled.View`
    width: 110px;
    height: 200px;
    margin-left: 10px;
    background: white;
    margin-right: 10px;
`

const PersonalCardStory = styled(Animated.Image)`
        width: 100%;
        height: 130px;
        border-radius: 10px;
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
        border-top-right-radius: 10px;
        position: absolute;
        top: 0px;
        left: 0px;
`

const PersonalCardIcon = styled(Animated.View)`
    width: 34px;
    height: 34px;
    border-radius: 17px;
    background: #3a86e9;
    border-width: 3px;
    border-color: #FFFFFF;
    align-items: center;
    position: absolute;
    top: 115px;
    left: 40px;
`

const UserCard = styled.View`
    bottom: 10px;
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

const Text = styled(Animated.Text)<TextProps>`
font-size: 14px;
font-weight: bold;
padding-top: ${(props => props.profile ? '155px' : '45px')};
text-align: center;
color: ${(props => props.profile ? '#000000' : '#FFFFFF')};
`

// Your functional component
const Story2 = () => {
  // Step 1: Define the shared value
  const scroll_x = useSharedValue(0);

  // Step 2: Define the animated style using shared value
  const animatedStylePersonalCard = useAnimatedStyle(() => {
    const cardTop = interpolate(scroll_x.value, [0, 100], [15, 80], 'clamp');
    const cardLeft = interpolate(scroll_x.value, [0, 100], [10, -50], 'clamp');
    const cardHeight = interpolate(scroll_x.value, [0, 100], [200, 50], 'clamp');
    const cardRadius = interpolate(scroll_x.value, [0, 100], [10, 40], 'clamp');
    const cardLeftRadius = interpolate(scroll_x.value, [0, 100], [10, 0], 'clamp');
    
    return {
      top: cardTop,
      left: cardLeft,
      height: cardHeight,
      borderRadius: cardRadius,
      borderTopLeftRadius: cardLeftRadius,
      borderBottomLeftRadius: cardLeftRadius,
      borderTopRightRadius: cardRadius,
      borderBottomRightRadius: cardRadius,
    };
  });

  const animatedStylePersonalCardStory = useAnimatedStyle(() => {
    const imageTop          = interpolate(scroll_x.value, [0, 100], [0, 0], 'clamp');
    const imageLeft         = interpolate(scroll_x.value, [0, 100], [0, 60], 'clamp');
    const imageWidth        = interpolate(scroll_x.value, [0, 100], [110, 40], 'clamp');
    const imageHeight       = interpolate(scroll_x.value, [0, 100], [130, 40], 'clamp');
    const imageMargin       = interpolate(scroll_x.value, [0, 100], [0, 6], 'clamp');
    const imageRadius       = interpolate(scroll_x.value, [0, 100], [10, 40], 'clamp');
    const imageBottomRadius = interpolate(scroll_x.value, [0, 100], [0, 40], 'clamp');
    const imageTopRadius = interpolate(scroll_x.value, [0, 100], [10, 40], 'clamp');
    
    console.log("scroll_x.value:", scroll_x.value);
    return {
      top: imageTop,
      left: imageLeft,
      width: imageWidth,
      height: imageHeight,
      marginRight: imageMargin,
      marginTop: imageMargin,
      borderRadius: imageRadius,
      borderTopLeftRadius: imageTopRadius,
      borderBottomLeftRadius: imageBottomRadius,
      borderTopRightRadius: imageTopRadius,
      borderBottomRightRadius: imageBottomRadius,  
    };
  });

  const animatedStyleText = useAnimatedStyle(() => {
    const textOpacity       = interpolate(scroll_x.value, [0, 10], [1, 0], 'clamp');
    const textScale         = interpolate(scroll_x.value, [0, 10], [1, 0], 'clamp');
    
    return {
        opacity: textOpacity,
        scale: textScale,
    };
  });

  const animatedStylePersonalCardIcon = useAnimatedStyle(() => {
    const iconScale         = interpolate(scroll_x.value, [0, 100], [1, 0.5], 'clamp');
    const iconTop           = interpolate(scroll_x.value, [0, 100], [115, 15], 'clamp');
    const iconLeft          = interpolate(scroll_x.value, [0, 100], [40, 80], 'clamp');
    return {
        transform: [{scale: iconScale}],
        top: iconTop,
        left: iconLeft,

    };
  });

  // Step 3: Link `scroll_x` with scroll event of ScrollView
  return (
    <>
      
        <Container>
        <PersonalCard style={animatedStylePersonalCard}>
                <PersonalCardStory 
                    source={require('../assets/story.jpg')} 
                    style={animatedStylePersonalCardStory}>
                </PersonalCardStory>
                        <Text 
                            style={animatedStyleText}
                            profile={true}>Crear una historia
                        </Text>
                <PersonalCardIcon style={animatedStylePersonalCardIcon}>
                    <MaterialCommunityIcons name="plus" size={28} color='#FFFFFF'></MaterialCommunityIcons>
                </PersonalCardIcon>
          </PersonalCard>
            <Animated.ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            onScroll={(event) => {
                scroll_x.value = event.nativeEvent.contentOffset.x;  // update shared value with scroll position
            }}
            scrollEventThrottle={16}
            >


        <FakeCard></FakeCard>
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
      </Animated.ScrollView>
      </Container>
    </>
  );
};

export default Story2;
