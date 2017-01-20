import React from 'react';

import Wallpaper from '../Wallpaper';
import EditTodo from '../EditTodo';

const EditScreen = props =>  {
		return (
				<Wallpaper>
					<EditTodo {...props} />
				</Wallpaper>
		);
}

export default EditScreen;
