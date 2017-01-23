import React from 'react';

import Container from '../Container';
import EditTodo from '../EditTodo';

const EditScreen = props =>  {
		return (
				<Container>
					<EditTodo {...props} />
				</Container>
		);
}

export default EditScreen;
