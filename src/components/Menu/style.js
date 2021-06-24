import styled from 'styled-components';

const MenuContainer = styled.div`
    width: 22%;
    min-width: 250px;
    height: 100vh;
    padding: 0 5px;
    background-color: black;
`;

const MenuTitle = styled.p`
    color: #FFF;
    font-size: 28px;
    font-family: 'Big Shoulders Stencil Display', cursive;
    text-transform: uppercase;
    text-align: center;
    margin: 50px 0;
`;

const CategoryContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;
    margin-bottom: 10px;

    &:last-child {
        margin-top: 40px;
    }
`;

const CategoryTitle = styled.p`
    color: #FFF;
    font-size: 18;
    font-family: 'Indie Flower', cursive;
    text-transform: uppercase;
`;

const CategoryTextInput = styled.input`
    width: 140px;
    height: 30px;
    background-color: #FFF;
    border: 0;
    border-radius: 5px;
    font-family: 'Indie Flower', cursive;
`;

const MenuColorInput = styled.div`
    width: 30px;
    height: 30px;
    background-color: ${({ colors, index }) => colors[index]};
    cursor: pointer;
`;

const ColorPickerContainer = styled.div`
    position: absolute;
    right: 0;
    z-index: 1;
`;

const SliderContainer = styled.div`
    background: 'red';
    width: 60%;
`;

export {
    MenuContainer,
    MenuTitle,
    CategoryContainer,
    CategoryTitle,
    CategoryTextInput,
    MenuColorInput,
    ColorPickerContainer,
    SliderContainer,
};