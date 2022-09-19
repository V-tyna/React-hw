import React, {ChangeEvent, useContext} from 'react';
import {ColorsContext} from "../App";
import {ColorType} from "../models/color.model";

const Color = (props: ColorType) => {
	const { id, title, color, rating } = props;
	const context: any = useContext(ColorsContext);

	const changeRateHandler = (e: ChangeEvent<HTMLSelectElement>) => {
		context.changeRate(id, +e.target.value);
	}

	const deleteColorHandler = () => {
		context.deleteColor(id);
	}

	return (
		<div
			style={{
				display: 'flex',
				width: '100%',
				justifyContent: 'space-between',
			}}
		>
			<h2>{title}</h2>
			<div style={{ width: 80, backgroundColor: color, border: '1px solid black' }}></div>
			<h4>{rating}/5</h4>
			<form>
				<select value={rating} onChange={changeRateHandler}>
					<option value="1">1</option>
					<option value="2">2</option>
					<option value="3">3</option>
					<option value="4">4</option>
					<option value="5">5</option>
				</select>
			</form>
			<button onClick={deleteColorHandler}>Delete</button>
		</div>
	);
};

export default Color;
