import React, {useContext} from 'react';
import {ColorsContext} from '../App';
import Color from './Color';
import {ColorType} from "../models/color.model";

const ColorList = () => {
	//@ts-ignore
	const { colors } = useContext(ColorsContext);

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
			{colors.map(({ ...params}: ColorType) => (
				<Color key={params.id} {...params} />
			))}
		</div>
	);
};

export default ColorList;
