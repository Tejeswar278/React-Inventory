import { useState } from 'react';
import "../App.css"

export const Inventory = () => {
	const [booksCount, setBooksCount] = useState(10);
	const [notebooksCount, setNotebooksCount] = useState(13);
	const [pensCount, setPensCount] = useState(40);
	const [inv, setInv] = useState({
		books: booksCount,
		notebooks: notebooksCount,
		pens: pensCount,
	});
	// Create add and remove functions here that changes the
	// state.
	const handleChange = (opt, val) => {
		if (opt === 'b' && booksCount >= 0) {
			setBooksCount(booksCount + val);
		} else if (opt === 'n' && notebooksCount >= 0) {
			setNotebooksCount(notebooksCount + val);
		} else if (opt === 'p' && pensCount >= 0) {
			setPensCount(pensCount + val);
		}
	};
	return (
		<div className='container'
			
		>
			<div className='items'>
				<div>Books: </div>
				<div>
				<button
					onClick={() => handleChange('b', 1)}
					className='circlularButton'
				>
					+
				</button>
				<button
					onClick={() => handleChange('b', -1)}
					className='circlularButton'
				>
					-
				</button>
				</div>
				<div>{booksCount < 0 ? setBooksCount(0) : booksCount}</div>
			</div>
			<div className='items'>
				<div>Notebooks: </div>
				<div>
				<button
					onClick={() => handleChange('n', 1)}
					className='circlularButton'
				>
					+
				</button>
				<button
					onClick={() => handleChange('n', -1)}
					className='circlularButton'
				>
					-
				</button>
				</div>
				<div>
					{notebooksCount < 0 ? setNotebooksCount(0) : notebooksCount}
				</div>
			</div>
			<div className='items'>
				<div>Pen: </div>
				<div>
				<button
					onClick={() => handleChange('p', 1)}
					className='circlularButton'
				>
					+
				</button>
				<button
					onClick={() => handleChange('p', -1)}
					className='circlularButton'
				>
					-
				</button>
				</div>
				<div>{pensCount < 0 ? setPensCount(0) : pensCount}</div>
			</div>
			<div>
				{/*calculate total and show it*/}
			total:{' '}
			{booksCount + notebooksCount + pensCount < 0
				? 0
				: booksCount + notebooksCount + pensCount}
			</div>
		</div>
	);
};
