import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import store, { addPost } from './redux/store';

export let rerenderEntireTree = (props) => {
	ReactDOM.render(
		<React.StrictMode>
			<BrowserRouter>
				<App store={store} addPost={addPost} />
			</BrowserRouter>
		</React.StrictMode>,
		document.getElementById('root')
	);
}

rerenderEntireTree();