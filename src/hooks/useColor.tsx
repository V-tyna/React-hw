import { useState, createContext, PropsWithChildren, useContext } from 'react';
import { ColorType } from '../models/color.model';

type ColorContextValue = {
	colors: ColorType[];
	changeRate: (id: string, rate: number) => void;
	deleteColor: (id: string) => void;
	handleAddColor: (title: string, color: string) => void;
};

export const ColorsContext = createContext<ColorContextValue | null>(null);

const savedColors = localStorage.getItem('colors');
const initColors: ColorType[] = savedColors
	? JSON.parse(savedColors)
	: [
			{ id: '01', title: 'Green', color: '#1C6758', rating: 5 },
			{ id: '02', title: 'Red', color: '#C21010', rating: 3 },
			{ id: '03', title: 'White', color: '#ffffff', rating: 2 },
	  ];

export const ColorProvider = ({ children }: PropsWithChildren) => {
	const [colors, setColors] = useState(initColors);

	const changeRate = (id: string, rate: number) => {
		setColors((prev) => prev.map((color) => (color.id === id ? { ...color, rating: rate } : color)));
	};

	const deleteColor = (id: string) => {
		setColors((prev) => prev.filter((color) => color.id !== id));
	};

	const handleAddColor = (title: string, color: string) => {
		setColors((prevValue) => prevValue.concat({ id: Math.random().toString(), title, color, rating: 1 }));
	};

	return (
		<ColorsContext.Provider value={{ colors, changeRate, deleteColor, handleAddColor }}>
			{children}
		</ColorsContext.Provider>
	);
};

export const useColor = () => {
	const context = useContext(ColorsContext);

	if (!context) {
		throw new Error('useColorState must be used within a ColorProvider');
	}

	return context;
};
