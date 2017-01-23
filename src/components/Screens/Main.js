import React from 'react';
import Drawer from 'react-native-drawer'
import Wallpaper from '../Wallpaper';
import AddTodo from '../AddTodo';
import Visibility from '../Visibility';
import ListTodo from '../ListTodo';
import ControlPanel from '../ControlPanel';

const Main = props =>  {
		return (
			<Drawer
	      type="overlay"
	      content={<ControlPanel />}
	      side='right'
	      tapToClose={true}
	      openDrawerOffset={0.3} // 20% gap on the right side of drawer
	      panCloseMask={0.3}
	      panOpenMask={0.3}
	      closedDrawerOffset={-3}
	      styles={drawerStyles}
	      tweenHandler={(ratio) => ({
	        main: { opacity:(2-ratio)/2 }
	      })}
	      >
					<Wallpaper>
						<AddTodo />
						<Visibility />
						<ListTodo />
					</Wallpaper>
			</Drawer>
		);
}

const drawerStyles = {
  drawer: { shadowColor: '#000000', shadowOpacity: 0.8, shadowRadius: 3},
  main: {paddingRight: 3},
}

export default Main;
