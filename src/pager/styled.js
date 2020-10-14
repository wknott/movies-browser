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
background-color:${({theme}) => theme.color.lightBlue};
padding: 8px 16px;
margin: 0 12px;
outline:none;
border:0;
border-radius: 5px;
&:hover{
    cursor:pointer;
}
&:disabled{
    background-color:${({theme}) => theme.color.grey};
    color: ${({theme}) => theme.color.black}
}
@media(max-width: ${({theme}) => theme.breakpoint.mobileMax}px){
    margin: 0 4px;
    padding: 8px 12px;
}
`;
export const PagerPrev = styled.img`
width:7px;
margin-right:8px;
@media(max-width: ${({theme}) => theme.breakpoint.mobileMax}px){
    margin: 0 4px;
}
`;
export const PagerNext = styled.img`
width:7px;
margin-left:8px;
@media(max-width: ${({theme}) => theme.breakpoint.mobileMax}px){
    margin: 0 4px;
}
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
@media(max-width: ${({theme}) => theme.breakpoint.mobileMax}px){
    margin: 0 4px;
}
`;

export const Bold = styled.b`
color:${({theme}) => theme.color.black};
`;
