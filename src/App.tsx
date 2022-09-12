import { useCallback, useEffect, useId, useMemo, useState } from 'react';
import AddColor from './components/AddColor';
import ColorList from './components/ColorList';
import OpenModalButton from './components/OpenModalButton';

export type Color = {
	id: string;
	title: string; // Red
	color: string; // #1C6758
	rating: number; //
};

const initColors: Color[] = [
	{ id: '01', title: 'Green', color: '#1C6758', rating: 5 },
	{ id: '02', title: 'Red', color: '#C21010', rating: 3 },
	{ id: '03', title: 'White', color: '#ffffff', rating: 2 },
];

function App() {
	// const [color, setColor] = useState('initColors');
	const [colors, setColors] = useState(initColors);
	const [isOpenForm, setIsOpenForm] = useState(false);

	const handleOpenForm = () => {
		setIsOpenForm(true);
	};

	// const log = () => {
	// 	console.log(color);
	// 	return { sakda: 'asd' };
	// };

	// const fn = useCallback(log, [color]);
	// const fn2 = useMemo( () => ({ sad: color }), [color]);

	const handleAddColor = (title: string, color: string) => {
		setColors((prevValue) => prevValue.concat({ id: Math.random().toString(), title, color, rating: 0 }));
		// setColor(color);
		setIsOpenForm(false);
	};

	return (
		<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
			<ColorList colors={colors} />
			{isOpenForm ? <AddColor onAddColor={handleAddColor} /> : <OpenModalButton onOpenForm={handleOpenForm} />}
		</div>
	);
}

export default App;
// useEffect useLayoutEffect useRef useState useMemo useCallback custom useInput
// ТЗ
// Приложение для отображение цветов
// возможность добавить цвет и вывести список
// удалить, оценить цвет дз, добавить сохранять colors в localStorage , (задача со звездочкой перенести состояние colors и функции для изменения colors в context и получать их при помощи кастомного хука useColors)
// useColor = () => useContext(ColorContext);
