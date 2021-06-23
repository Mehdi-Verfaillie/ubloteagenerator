import React, { useContext } from 'react';
import Cup from './Cup/Cup';
import Liquid from './Liquid/Liquid';
import Tapioca from './Tapioca/Tapioca';

import {
    MainContainer,
    SVGContainer,
    TeaTitle,
    OverviewContainer,
    OverviewElement,
} from './style';
import { AppContext } from '../../contexts/app.context';

export default function MatchaTea() {
    const { state: { teaName } } = useContext(AppContext);
    const svgResize = {
        defaultViewBox: '-40 -20 230 230',
        width: '200px',
    };

    return (
        <MainContainer>
            <SVGContainer
                viewBox="-10 0 300 110"
            >
                <Cup />
                <Liquid />
                <Tapioca />
            </SVGContainer>

            <TeaTitle>{teaName}</TeaTitle>

            <OverviewContainer>
                {[<Cup vb={svgResize} />, <Liquid vb={svgResize} />, <Tapioca vb={svgResize} />].map((item, index) => (
                    <OverviewElement key={index}>
                        {item}
                    </OverviewElement>
                ))}
            </OverviewContainer>
        </MainContainer>
    );
}