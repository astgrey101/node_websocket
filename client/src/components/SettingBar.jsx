import React from 'react';
import '../styles/toolbar.scss'
import toolState from "../store/toolState";

const SettingBar = () => {
    return (
        <div className='setting-bar'>
            <label htmlFor='line-width'>Line width</label>
            <input
                style={{ margin: '0 10px' }}
                id='line-width' type='number'
                defaultValue={1} min={1} max={50}
                onChange={e => toolState.setLineWidth(e.target.value)}
            />
            <label htmlFor='stroke-color'>Stroke color</label>
            <input
                id='stroke-color'
                onChange={e => toolState.setStrokeColor(e.target.value)}
                style={{marginLeft:10}}
                type="color"
            />
        </div>
    );
};

export default SettingBar;