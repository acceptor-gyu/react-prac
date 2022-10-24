import React, {useState} from "react";

const AddColorForm2 = function({ onNewColor = f => f }){
	const [title, setTitle] = useState("");
	const [color, setColor] = useState("#000000");
	// 상태 변경 함수가 상태를 변경하면, 다시 렌더링이 일어남
	const submit = e => {
    e.preventDefault();
    onNewColor(title, color);
		setTitle("");
        setColor("");
	};
	return (
		<form onSubmit={submit}>
            <input
				value={title}
				onChange={event => (event.target.value)}
				type="text" placeholder="color title..." required />
            <input value={color}
				onChange={event => setColor(event.target.value)}
				type="color" required />
            <button>ADD</button>
        </form>
    );
}

export default AddColorForm2;