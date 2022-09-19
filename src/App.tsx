import AddColor from './components/AddColor';
import ColorList from './components/ColorList';
import OpenModalButton from './components/OpenModalButton';
import { useColor } from './hooks/useColor';

import { useInput } from './hooks/useInput';
import { useToggle } from './hooks/useToggle';
import { ColorType } from './models/color.model';

const saveColors = (colors: ColorType[]) => {
	localStorage.setItem('colors', JSON.stringify(colors));
};

const createMinLengthRule = (minLength: number) => (value: string) =>
	value.length < minLength ? `Email should be larger than ${minLength} letters` : undefined;
const MoreThenFiveCharRule = createMinLengthRule(5);
const RULES = [MoreThenFiveCharRule];

function App() {
	const { colors } = useColor();
	const { isOn: isOpenForm, handleOff, handleOn } = useToggle(false);
	const { value, isValid, errorMessage, inputHandler: inputChangeHandler } = useInput('', RULES);

	const saveColorsHandler = () => {
		saveColors(colors);
	};

	return (
		<>
			<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
				<ColorList />
				{isOpenForm ? <AddColor onCloseForm={handleOff} /> : <OpenModalButton onOpenForm={handleOn} />}
				{colors.length && <button onClick={saveColorsHandler}>Save colors</button>}
			</div>
			<form>
				<label htmlFor='email'>Email: </label>
				<input
					onChange={inputChangeHandler}
					type='text'
					style={{ border: isValid ? '1px solid #ccc' : '1px solid red' }}
					value={value}
				/>
				{errorMessage && <p>{errorMessage}</p>}
			</form>
		</>
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
