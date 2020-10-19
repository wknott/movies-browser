import styled from "styled-components";

export const NoResultsContainer = styled.div`
width: 100%;
margin-top: 40px;
display: flex;
justify-content: center;
align-items: center;
@media(max-width:${({theme})=>theme.breakpoint.mobileMax}px)
{
    margin-top:24px;
}
`;

export const NoResultsImg = styled.img`
    width: 668px;
`;
