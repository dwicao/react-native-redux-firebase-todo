import React from 'react';

import Wallpaper from '../Wallpaper';
import AddTodo from '../AddTodo';
import Visibility from '../Visibility';
import ListTodo from '../ListTodo';

const Main = props =>  {
		return (
				<Wallpaper>
					<AddTodo />
					<Visibility  />
					<ListTodo  />
				</Wallpaper>
		);
}

export default Main;
