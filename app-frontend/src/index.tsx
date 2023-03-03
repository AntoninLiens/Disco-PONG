import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import { createAuth } from './context/AuthContext';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

const { authCtx, AuthProvider } = createAuth();
export const AuthContext = authCtx;

root.render(
	<BrowserRouter>
		<AuthProvider>
			<App />
		</AuthProvider>
	</BrowserRouter>
);