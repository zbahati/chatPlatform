import styled from "styled-components";

export const InputField = styled.input`
    outline: none;
    background: inherit;
    border: none;
    color: #fff;
    font-size: 16px;
    padding: 12px 8px;
    width: 100%;
    box-sizing: border-box;
`;

export const InputContainer = styled.div`
    width: 100%;
    background-color: #131313;
    border-radius: 8px;
`;


export const InputLabel = styled.label` 
    display: block;
    color: #8f8f8f;
    font-size: 14px;
    padding: 4px 8px;

`;

export const Button = styled.button `
    width: 100%;
    background-color: blue;
    outline: none;
    border: none;
    padding: 15px 0;
    color: #fff;
    font-size: 16px;
    border-radius: 8px;
`;

export const Page = styled.div `
height: 100vh;
`;

export const ConversationSideBarStyle = styled.aside`
    height: 100%;
    width: 350px;
    background: #1f1f1f;
    position: absolute;
    top: 0;
    left: 0;

    & header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: black;
        padding: 10px;
        & h1 {
        color: white;
        }
    }
`;

export const ConversationChannelPageStyle = styled.main`
    height: 100%;
    margin-left: 360px;
`;


export const DefaultConversationPageStyle = styled.div`
    height: 100%;
    margin-left: 350px;
`;


