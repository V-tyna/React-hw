import { useState } from 'react';

export const useToggle = (initValue: boolean) => {
	const [isOn, setIsOn] = useState(initValue);

	const handleOff = () => setIsOn(false);
	const handleOn = () => setIsOn(true);
	const handleToggle = () => setIsOn((prev) => !prev);

	return {
		isOn,
		handleToggle,
		handleOn,
		handleOff,
	};
};
