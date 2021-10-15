import React, { useState } from 'react';
import { DataColors, PropsColors } from '../interface';
import Box from './box/box';
import './styles.scss';


const ColourInput: React.FunctionComponent<PropsColors> = ({ data }) => {
    const [search, setSearch] = useState<DataColors[] | null>([]);

    const filter = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const { value } = event.currentTarget;

        if (value === 'all') {
            setSearch([]);
        } else if (value !== 'all') {
            const getData = data.filter(
                (result: any) => result.category.toLowerCase() === value
            );
            setSearch(getData);
        }
    };

    const checked = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { checked } = event.target;

        if (search && search.length > 0 && !checked) {
            setSearch([]);
        } else if (search && search.length > 0 && checked) {
            const getData = (search && search.length > 0 ? search : data).filter(
                (result: any) => result.saturation <= 60
            );
            setSearch(getData);
        }
    };

    const reset = (event: React.MouseEvent<HTMLButtonElement>) => {
        setSearch([]);
    };
    const colors = (search && search.length > 0
        ? search
        : data
    ).map((result: any) => (
        <Box
            key={result.id}
            hexcode={result.hexcode}
            colorName={result.colorName}
            category={result.category}
        />
    ));

    return (
        <div className="container">
            <div>
                <form className="form">
                    <label className="label">Select color </label>
                    <select className="select" onChange={filter}>
                        <option value="all">All</option>
                        <option value="red">Red</option>
                        <option value="green">Green</option>
                        <option value="yellow">Yellow</option>
                        <option value="blue">Blue</option>
                        <option value="brown">Brown</option>
                        <option value="gray">Gray</option>
                        <option value="purple">Purple</option>
                        <option value="pink">Pink</option>
                    </select>
                    <input className="input" type="checkbox" onChange={checked} />
                    <label>Darker</label>
                    <button className="button" onClick={reset}>
                        Reset
          </button>
                </form>
            </div>
            <div className="colors-list">{colors}</div>
        </div>
    );
};

export default ColourInput;
