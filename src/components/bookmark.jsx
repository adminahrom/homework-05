import React from 'react';

const BookMark = ({ onToggleBookMark, status, id }) => {
	return (
		<button
			className='btn btn-lg'
			onClick={() => {
				onToggleBookMark(id);
			}}
		>
			{<i className={status ? 'bi bi-bookmark-fill' : 'bi bi-bookmark'}></i>}
		</button>
	);
};

export default BookMark;
