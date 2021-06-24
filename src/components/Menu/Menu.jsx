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
} from './style';
import { AppContext } from '../../contexts/app.context';

import 'rc-slider/assets/index.css';
import "react-color-palette/lib/css/styles.css";

export default function Menu() {
    const { state: { teaName, colors }, dispatch } = useContext(AppContext);
    const [color, setColor] = useColor("hex", "#121212"); /** Color picker */
    const [colorPaletteIndex, setColorPaletteIndex] = useState(null);

    return (
        <MenuContainer
            onMouseLeave={() => setColorPaletteIndex(null)}
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
            {colorPaletteIndex !== null && (
                <ColorPicker width={456} height={228} color={color} onChange={setColor} hideHEX hideRGB hideHSB dark />
            )}

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