import { Component  } from 'react';
import { ThemeContext } from './main';

export default class ClassContextComponent extends Component {
	getStyles(isDark) {
		return {
			margin: '2rem',
			padding: '2rem',
			backgroundColor: isDark ? '#333' : '#ccc',
			color: isDark ? '#ccc' : '#333',
		}
	}

	render() {
		return (
			<ThemeContext.Consumer>
				{
					(isDark) => <div style={this.getStyles(isDark)}>Function Theme</div>
				}
			</ThemeContext.Consumer>
		)
		
	}
}
