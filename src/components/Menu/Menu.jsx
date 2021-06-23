import React from 'react';
import {
    MenuContainer,
    MenuTitle,
    CategoryContainer,
    CategoryTitle,
    CategoryTextInput,
    MenuColorInput,
} from './style';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';


export default function Menu() {
    return (
        <MenuContainer>
            <MenuTitle>BUBBLE TEA GENERATOR</MenuTitle>

            <CategoryContainer>
                <CategoryTitle>NOM</CategoryTitle>
                <CategoryTextInput
                    placeholder="Hello"
                />
            </CategoryContainer>

            {['GOBELET', 'TEA', 'TAPIOCA'].map((element, index) => (
                <CategoryContainer key={index}>
                    <CategoryTitle>{element}</CategoryTitle>
                    <MenuColorInput />
                </CategoryContainer>
            ))}

            <CategoryContainer>
                <CategoryTitle>TAILLE</CategoryTitle>
                <Slider
                    defaultValue={0}
                    // value={0}
                    startPoint={0}
                    min={0}
                    max={10}
                    onChange={0}
                    railStyle={''}
                    dotStyle={''}
                />
            </CategoryContainer>

        </MenuContainer>
    );
}