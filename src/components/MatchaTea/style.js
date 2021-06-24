import styled from 'styled-components';

const MainContainer = styled.div`
    background-color: black;
    width: 100%;
    height: 100vh;
    margin: 0 auto
`;

const SVG = styled.svg.attrs({
    version: '1.1',
    xmlns: 'http://www.w3.org/2000/svg',
    xmlnsXlink: 'http://www.w3.org/1999/xlink',
})``;

const SVGContainer = styled(SVG)`
    height: 60%;
    width: 100%;
    transform: ${({ scale }) => `scale(${scale})`};
`;

const TeaTitle = styled.p`
    color: #FFF;
    font-size: 28px;
    font-family: 'Big Shoulders Stencil Display', cursive;
    text-align: center;
`;

const OverviewContainer = styled.div`
    display: flex;
    width: 100%;
    height: 35%;
    border-top: 10px solid  white;
    box-sizing: border-box;
`;

const OverviewElement = styled.div`
    width: 33.3333%;
    &:nth-child(2) {
        border-left:  10px solid  #09f;
        border-right:  10px solid #f0F;
    }
    display: flex;
    align-items: center;
    justify-content: center;
`;

export {
    MainContainer,
    SVGContainer,
    TeaTitle,
    OverviewContainer,
    OverviewElement,
};