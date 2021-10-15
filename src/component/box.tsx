import React from 'react';
import { DataColors } from '../../src/interface/index';
import './styles.scss';

const Box = (props: DataColors) => {
    const { hexcode, colorName } = props;
    return (
        <div>
            <div
                className="color-box"
                style={{
                    backgroundColor: hexcode,
                }}
            ></div>
            <div>{colorName}</div>
        </div>
    );
};

export default Box;
