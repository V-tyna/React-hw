import React from 'react';
import { Color as ColorType } from '../App';
import Color from './Color';

type ColorListProps = {
	colors: ColorType[];
};

const ColorList = (props: ColorListProps) => {
	const { colors } = props;
	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				padding: 10,
				margin: 20,
				width: 400,
				border: 'solid 1px black',
			}}
		>
			{colors.map(({id, ...params}) => (
				<Color key={id} {...params} />
			))}
			{/* {colors.map((color) => (
				<Color key={color.id} color={color.color} title={color.title} rating={color.rating} id={color.id} />
			))} */}
		</div>
	);
};

export default ColorList;
