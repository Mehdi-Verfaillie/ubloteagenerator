import React, { useContext, useState } from 'react';
import { ColorPicker, useColor } from "react-color-palette";
import Slider from 'rc-slider';

import {
    MenuContainer,
    MenuTitle,
    CategoryContainer,
    CategoryTitle,
    CategoryTextInput,
    MenuColorInput,
    ColorPickerContainer,
} from './style';
import { AppContext } from '../../contexts/app.context';

import 'rc-slider/assets/index.css';
import "react-color-palette/lib/css/styles.css";

export default function Menu() {
    const { state: { teaName, colors }, dispatch } = useContext(AppContext);
    const [colorPaletteIndex, setColorPaletteIndex] = useState(-1);
    const [color] = useColor("hex", colors[colorPaletteIndex !== -1 ? colorPaletteIndex : 0]); /** Color picker */

    return (
        <MenuContainer
            onMouseLeave={() => setColorPaletteIndex(-1)}
        >
            <MenuTitle>BUBBLE TEA GENERATOR</MenuTitle>

            <CategoryContainer>
                <CategoryTitle>NOM</CategoryTitle>
                <CategoryTextInput
                    placeholder="My super tea name"
                    value={teaName}
                    onChange={(e) => dispatch({ type: 'SET_TEA_NAME', value: e.target.value })}
                />
            </CategoryContainer>

            {['GOBELET', 'TEA', 'TAPIOCA'].map((element, index) => (
                <CategoryContainer
                    key={index}
                    onClick={() => setColorPaletteIndex(index)}
                >
                    <CategoryTitle>{element}</CategoryTitle>
                    <MenuColorInput colors={colors} index={index} />
                </CategoryContainer>
            ))}
            {colorPaletteIndex !== -1 && (
                <ColorPickerContainer>
                    <ColorPicker
                        width={456}
                        height={228}
                        onChange={(e) => [colors.splice(colorPaletteIndex, 1, e.hex), dispatch({ type: 'SET_COLORS', value: colors })]}
                        dark
                        color={color}
                    />
                </ColorPickerContainer>
            )}

            <CategoryContainer>
                <CategoryTitle>TAILLE</CategoryTitle>
                <Slider
                    defaultValue={10}
                    min={1}
                    max={10}
                    onChange={(e) => dispatch({ type: 'SET_SCALE', value: e })}
                    railStyle={''}
                    dotStyle={''}
                />
            </CategoryContainer>

        </MenuContainer>
    );
}