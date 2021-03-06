import React from 'react';

export default function Cup({ colors }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="280" height="100%" viewBox="0 0 133.2 188.9" preserveAspectRatio="xMidYMid meet" style={{ transform: 'scale(0.9)' }}>
            <g id="background">
                <path fill={colors ? colors[0] : 'gray'} d="M19.5,50c1.4-7.1,4.4-13.9,8.8-19.7c2.9-3.8,6.3-7.2,10.2-10.1c8.2-5.9,17.9-9.1,28.1-9.1c10.3,0,20,3.2,28.2,9.2c3.9,2.8,7.3,6.2,10.2,10.1c4.4,5.9,7.3,12.6,8.7,19.7L19.5,50z" />
                <path fill={colors ? colors[0] : 'gray'} d="M41.4,182.9c-4,0-7.6-2.2-9.6-5.7c-0.7-1.2-1.1-2.6-1.3-4l-12-108.6l-7.6,0c-2.8,0-5.1-2.3-5.1-5.1c0-0.2,0-0.4,0-0.6c0.3-2.6,2.5-4.5,5.1-4.5H14l105.1,0.2h3.1c2.8,0,5.1,2.3,5.1,5.1c0,0.2,0,0.4,0,0.6c-0.3,2.6-2.5,4.5-5,4.5h-7.6l-12.4,108.6c-0.2,1.9-1,3.8-2.1,5.3c-2.1,2.8-5.3,4.4-8.7,4.4L41.4,182.9z" />
            </g>

            <g id="border">
                <path fill="none" stroke={colors ? colors[1] : 'gray'} strokeWidth="2.1561" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" d="M119.2,49.7L14,49.5c0.9-10.2,4.7-19.6,10.5-27.4c3.2-4.2,7-7.9,11.2-11.1c8.7-6.3,19.4-10,30.9-10c11.5,0,22.2,3.8,30.9,10.1c4.3,3.1,8,6.9,11.2,11.1C114.6,30.1,118.3,39.5,119.2,49.7z" />
                <path fill="none" stroke={colors ? colors[1] : 'gray'} strokeWidth="2.1561" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" d="M132.1,59.6c0,0.4,0,0.8-0.1,1.2c-0.6,4.9-4.8,8.7-9.8,8.7h-3.4l-11.9,104.4c-0.3,2.9-1.4,5.5-3,7.6c-2.9,3.9-7.5,6.3-12.6,6.3l-50-0.1c-5.9,0-11.1-3.3-13.7-8.2c-1-1.8-1.6-3.7-1.8-5.8L14.3,69.3l-3.4,0c-5.4,0-9.8-4.4-9.8-9.9c0-0.4,0-0.8,0.1-1.2c0.6-4.9,4.7-8.7,9.8-8.7H14l105.2,0.2h3.1C127.7,49.7,132.1,54.2,132.1,59.6z" />
                <path fill="none" stroke={colors ? colors[1] : 'gray'} strokeWidth="2.1561" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" d="M73.5,1.6c4.4,0.6,6.7,1.7,6.7,3.1c0,2-6.1,3.5-13.5,3.5c-7.5,0-13.5-1.6-13.5-3.6c0-1.6,3.6-2.9,9.2-3.3" />
            </g>

            <g id="smile">
                <g>
                    <path fill="#303030" d="M75.4,32.7H57.8c-1.1,0-1.9,1-1.7,2c0.9,4.9,5.3,8.6,10.5,8.6c5.2,0,9.5-3.7,10.5-8.6C77.2,33.7,76.4,32.7,75.4,32.7z" />
                    <path fill="#FFFFFF" d="M75.4,32.7H57.8c-1.1,0-1.9,1-1.7,2c0.1,0.5,0.2,1,0.4,1.4h20.2c0.2-0.5,0.3-0.9,0.4-1.4C77.2,33.7,76.4,32.7,75.4,32.7z" />
                    <path fill="red" d="M72.4,41.6c-1.5-1.5-3.5-2.4-5.8-2.4c-2.3,0-4.3,0.9-5.8,2.4c1.7,1.1,3.7,1.7,5.8,1.7S70.7,42.7,72.4,41.6z" />
                    <path fill="#303030" d="M50.5,31.3c-0.5,0-0.9-0.4-0.9-0.9c0-1.9-1.5-3.4-3.4-3.4c-1.9,0-3.4,1.5-3.4,3.4c0,0.5-0.4,0.9-0.9,0.9c-0.5,0-0.9-0.4-0.9-0.9c0-2.8,2.3-5.1,5.1-5.1c2.8,0,5.1,2.3,5.1,5.1C51.3,30.9,50.9,31.3,50.5,31.3z" />
                    <path fill="#303030" d="M91.2,31.3c-0.5,0-0.9-0.4-0.9-0.9c0-1.9-1.5-3.4-3.4-3.4c-1.9,0-3.4,1.5-3.4,3.4c0,0.5-0.4,0.9-0.9,0.9c-0.5,0-0.9-0.4-0.9-0.9c0-2.8,2.3-5.1,5.1-5.1c2.8,0,5.1,2.3,5.1,5.1C92.1,30.9,91.7,31.3,91.2,31.3z" />
                    <path fill="red" d="M50.7,35.9c0-0.7-2-1.3-4.5-1.3s-4.5,0.6-4.5,1.3c0,0.7,2,1.3,4.5,1.3S50.7,36.7,50.7,35.9z" />
                    <path fill="red" d="M91.4,35.9c0-0.7-2-1.3-4.5-1.3c-2.5,0-4.5,0.6-4.5,1.3c0,0.7,2,1.3,4.5,1.3C89.4,37.2,91.4,36.7,91.4,35.9z" />
                </g>
            </g>
        </svg>
    );
}