/**
 * Star.js => Star 컴포넌트 생성: 기본 값이 false인 <FaStar /> 반환
 */

import { FaStar } from "react-icons/fa";

const Star = function( {
        selected = false,
        onSelect = f => f
    }) { 
        return (
            <FaStar
                color={selected ? "red" : "grey"}
                onClick={onSelect}
            />
        ); 
    };

export default Star;