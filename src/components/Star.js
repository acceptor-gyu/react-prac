/**
 * Star.js => Star 컴포넌트 생성: 기본 값이 false인 <FaStar /> 반환
 */

import { FaStar } from "react-icons/fa";

const Star = ({ selected = false, onSelect = f => f}) => (
    <FaStar
        color={selected ? "red" : "grey"}
        onClick={onSelect}
    />
);

export default Star;