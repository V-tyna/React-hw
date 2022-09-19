import {ChangeEvent, createContext, useCallback, useEffect, useId, useMemo, useState} from 'react';
import AddColor from './components/AddColor';
import ColorList from './components/ColorList';
import OpenModalButton from './components/OpenModalButton';
import {useColor} from "./hooks/useColor";
import {ColorType} from "./models/color.model";
import {useInput} from "./hooks/useInput";

const savedColors = localStorage.getItem('colors');
const initColors: ColorType[] = savedColors ? JSON.parse(savedColors) : [
	{ id: '01', title: 'Green', color: '#1C6758', rating: 5 },
	{ id: '02', title: 'Red', color: '#C21010', rating: 3 },
	{ id: '03', title: 'White', color: '#ffffff', rating: 2 },
];

export const ColorsContext: any = createContext(null);

function App(props: any) {
	const [isOpenForm, setIsOpenForm] = useState(false);
	const colorsObject = useColor(initColors, setIsOpenForm);
	const {value, isValid, errorMessage, inputHandler} = useInput('', [value => value.length < 5 ? 'Email should be larger than 5 letters' : undefined])

	const handleOpenForm = () => {
		setIsOpenForm(true);
	}

	const inputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
		inputHandler(e);
	}

	return (
		<ColorsContext.Provider value={colorsObject}> {props.children}
		<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
			<ColorList />
			{isOpenForm ? <AddColor onAddColor={colorsObject.handleAddColor} /> : <OpenModalButton onOpenForm={handleOpenForm} />}
			{ colorsObject.colors ? <button onClick={colorsObject.saveColorsHandler}>Save colors</button> : null }
		</div>
			<form>
				<label htmlFor="email">Email: </label>
				<input onChange={inputChangeHandler} type="text" style={{border: isValid ? "1px solid #ccc" : "1px solid red"}} value={value}/>
				{errorMessage ? <p>{errorMessage}</p> : null}
			</form>
		</ColorsContext.Provider>
	);
}
export default App;
// useEffect useLayoutEffect useRef useState useMemo useCallback custom useInput
// ТЗ
// Приложение для отображение цветов
// возможность добавить цвет и вывести список
// TODO удалить +, оценить цвет дз +, добавить сохранять colors в localStorage +,
// (задача со звездочкой перенести состояние colors и функции для изменения colors в context
// и получать их при помощи кастомного хука useColors)
// useColor = () => useContext(ColorContext);
