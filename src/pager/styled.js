import styled from "styled-components"

export const PagerWrapper = styled.div`
display:flex;

align-items:center;
width:fit-content;
margin:0 auto;
margin-top:40px;
margin-bottom: 100px;
`;

export const PagerButton = styled.button`
display:flex;
flex-direction:row;
align-items:center;
justify-content:center;
padding: 8px 16px;
margin: 0 12px;
outline:none;
border:0;
border-radius: 5px;
background-color:${({theme}) => theme.color.grey};
&:hover{
    cursor:pointer;
}
`;
export const PagerPrev = styled.img`
width:7px;
margin-right:8px;
`;
export const PagerNext = styled.img`
width:7px;
margin-left:8px;
`;
export const PagerText = styled.p`
margin:0;
font-family: Poppins;
font-size: 14px;
line-height: 140%;
`;
export const PagerInfo = styled.p`
margin:0 24px;
font-family: Poppins;
color: ${({theme}) => theme.color.darkerGrey};
font-size: 16px;
line-height: 150%;
`;

export const Bold = styled.b`
color:${({theme}) => theme.color.black};
`;
