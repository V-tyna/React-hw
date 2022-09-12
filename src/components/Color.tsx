import React from 'react';

type ColorProps = {
	title: string;
	color: string;
	rating: number;
};

const Color = (props: ColorProps) => {
	const { title, color, rating } = props;
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
		</div>
	);
};

export default Color;
