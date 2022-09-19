import React, { useEffect, useRef, useState } from 'react';
import useInput from './useInput';

type AddColorProps = {
	onAddColor: (title: string, color: string) => void;
};

const AddColor = (props: AddColorProps) => {
	const { onAddColor } = props;

	const [titleState, resetTitle] = useInput('');
	const [colorState, resetColor] = useInput('#ffffff');

	const handleSubmit = (e: React.MouseEvent) => {
		e.preventDefault();
		onAddColor(titleState.value, colorState.value);
		resetTitle();
		resetColor();
	};

	return (
		<form style={{ display: 'flex', flexDirection: 'column' }}>
			<input type='text' placeholder='Color name' value={titleState.value} onChange={titleState.onChange} />
			<input type='color' value={colorState.value} onChange={colorState.onChange} />
			<button onClick={handleSubmit}>Add Color</button>
		</form>
	);
};

export default AddColor;
