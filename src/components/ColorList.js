/**
 * color-org/src/components/ColorList.js
 */

import React from "react";
import Color from "./Color";

const ColorList = function( {
        colors = [],
        onRemoveColor = f => f,
        onRateColor = f => f
    }) {
    return (
        <div className="color-list">
            { colors.map( color =>
                <Color
                    key={color.id}
                    {...color} 
                    onRemove={onRemoveColor}
                    onRate={onRateColor}
                /> ) }
        </div>
    );
}

export default ColorList;