import styled from 'styled-components';

const MenuContainer = styled.div`
    width: 22%;
    min-width: 250px;
    height: 100vh;
    background-color: red;
    padding: 30px 5px;
`;

const MenuTitle = styled.p`
    color: #FFF;
    font-size: 18;
    font-family: Arial;
    text-transform: uppercase;
    text-align: center;
    margin-bottom: 50px;
`;

const CategoryContainer = styled.div`
    display: flex;
    background-color: purple;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;
    margin-bottom: 10px;
`;

const CategoryTitle = styled.p`
    color: #FFF;
    font-size: 18;
    font-family: Arial;
    text-transform: uppercase;
`;

const CategoryTextInput = styled.input`
    width: 100px;
    height: 40px;
    background-color: #FFF;
`;

const MenuColorInput = styled.div`
    width: 30px;
    height: 30px;
    background-color: yellow;
`;

export {
    MenuContainer,
    MenuTitle,
    CategoryContainer,
    CategoryTitle,
    CategoryTextInput,
    MenuColorInput,
};