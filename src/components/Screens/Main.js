import React from 'react';
import Drawer from 'react-native-drawer'
import Container from '../Container';
import AddTodo from '../AddTodo';
import Visibility from '../Visibility';
import ListTodo from '../ListTodo';
import MenuScreen from './Menu';
import TopBar from '../TopBar';

const Main = props =>  {
	let _drawer;

	const _onPress = () => _drawer.open();

	return (
		<Drawer
      type="overlay"
      content={<MenuScreen />}
      side='right'
      tapToClose={true}
      openDrawerOffset={0.3} // 20% gap on the right side of drawer
      panCloseMask={0.3}
      panOpenMask={0.1}
      closedDrawerOffset={-3}
      styles={drawerStyles}
			ref={el => _drawer = el}
      tweenHandler={(ratio) => ({
        main: { opacity:(2-ratio)/2 }
      })}
      >
				<Container>
					<TopBar onPress={_onPress} />
					<AddTodo />
					<Visibility />
					<ListTodo />
				</Container>
		</Drawer>
	);
}

const drawerStyles = {
  drawer: {},
  main: {
		paddingRight: 3
	},
}

export default Main;
