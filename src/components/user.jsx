import React from 'react';
import Qualitie from './qualitie';
import BookMark from './bookmark';
const User = ({
	_id,
	name,
	qualities,
	profession,
	completedMeetings,
	rate,
	onDelete,
	status,
	onToggleBookMark,
}) => {
	return (
		<tr key={_id}>
			<td>{name}</td>
			<td>
				{qualities.map((qual, i) => (
					<Qualitie {...qual} key={i} />
				))}
			</td>
			<td>{profession.name}</td>
			<td>{completedMeetings}</td>
			<td>{rate} /5</td>
			<td>
				<BookMark
					status={status}
					onToggleBookMark={onToggleBookMark}
					id={_id}
				/>
			</td>
			<td>
				<button onClick={() => onDelete(_id)} className='btn btn-danger'>
					Удалить
				</button>
			</td>
		</tr>
	);
};

export default User;
