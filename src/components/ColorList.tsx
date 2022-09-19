import Color from './Color';
import {ColorType} from "../models/color.model";
import { useColor } from '../hooks/useColor';

const ColorList = () => {
	const { colors } = useColor();

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
