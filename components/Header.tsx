import React from "react";
import styled from "styled-components/native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";



const Container = styled.View`
    width: 100%;
    height: 56px;
    padding: 0 11px;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    background: white;
`

const Text = styled.Text`
    color: #3a86e9;
    font-size: 25px;
    font-weight: bold;
    letter-spacing: -0.3px;
`

const Row = styled.View`
    flex-direction: row;
`

const Button = styled.TouchableOpacity`
    width: 42px;
    height: 42px;
    border-radius: 21px;
    margin-left: 16px;
    background: #EEEEEE;
    align-items: center;
    justify-content: center;
`

const Header = () => {
    return (
        <Container>
            <Text>facebook</Text>
            <Row>
                <Button>
                    <MaterialCommunityIcons name='magnify' size={26} color={'black'}></MaterialCommunityIcons>
                </Button>
                <Button>
                    <MaterialCommunityIcons name='facebook-messenger' size={26} color={'black'}></MaterialCommunityIcons>
                </Button>
            </Row>
        </Container>
    )
}

export default Header;