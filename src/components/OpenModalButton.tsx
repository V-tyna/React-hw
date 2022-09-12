import React from 'react';

type OpenModalButtonProps = {
	onOpenForm: () => void
}
const OpenModalButton = (props: OpenModalButtonProps) => {
	const {onOpenForm} = props

	return <button onClick={onOpenForm}>Show Form Color</button>;
};

export default OpenModalButton;
