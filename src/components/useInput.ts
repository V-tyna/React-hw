import React, { useState } from 'react';

type InputResult = [
	{value: string, onChange: (e: React.ChangeEvent<HTMLInputElement>) => void},
	() => void,
]
const useInput = (initialValue: string): InputResult => {
	const [value, setValue] = useState(initialValue);

	const onChange = (e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value);
  const resetValue = () => setValue(initialValue)

	return [{ value, onChange }, resetValue ];
};

export default useInput;
