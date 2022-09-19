import React from 'react';
import { useColor } from '../hooks/useColor';
import useInput from './useInput';

type AddColorProps = {
	onCloseForm: () => void;
};

const AddColor = ({ onCloseForm }: AddColorProps) => {
	const { handleAddColor } = useColor();
	const [titleState, resetTitle] = useInput('');
	const [colorState, resetColor] = useInput('#ffffff');

	const handleSubmit = (e: React.MouseEvent) => {
		e.preventDefault();

		handleAddColor(titleState.value, colorState.value);
		resetTitle();
		resetColor();
		onCloseForm();
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
