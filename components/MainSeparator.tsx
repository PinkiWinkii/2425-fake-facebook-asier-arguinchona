import React from "react";
import styled from "styled-components/native";

const Separator = styled.View`
    width: 100%;
    height: 10px;
    background: #BDBDBD;
    margin-top: 7px;
    border-top: 5px solid red;

`

const MainSeparator = () => {
    return (
        <Separator></Separator>
    )
}

export default MainSeparator;