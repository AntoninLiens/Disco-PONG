import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

import App from './App';

const client = new ApolloClient({
	uri: 'http://127.0.0.1:1111',
	cache: new InMemoryCache(),
  });

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
	<ApolloProvider client={client}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</ApolloProvider>
);