import React from 'react';
import Cup from './Cup/Cup';
import Liquid from './Liquid/Liquid';
import Tapioca from './Tapioca/Tapioca';

export default function MatchaTea() {
    return (
        <svg className="App" style={{ backgroundColor: 'indianred' }} xmlns="http://www.w3.org/2000/svg" width="500px" height="500px">
            <Cup />
            <Liquid />
            <Tapioca />
        </svg>
    );
}