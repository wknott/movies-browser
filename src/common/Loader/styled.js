import styled from "styled-components";

export const LoadingContainer = styled.div`
width: 100%;
margin-top: 120px;
display: flex;
justify-content: center;
align-items: center;
@media(max-width:${({theme})=>theme.breakpoint.mobileMax}px)
{
    margin-top:24px;
}
`;

export const LoadingImg = styled.img`
    width: 91px;
    height: 91px;
    transform: rotate(360deg);
    animation: rotate;
    animation-duration: 1.5s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    @keyframes rotate {
        from {
            transform: rotateZ(0);
        }
        to {
            transform: rotateZ(360deg);
        }
    }
`;