import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { route } from './router'

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
			retry: false,
			cacheTime: 1000 * 60 * 15
		}
	}
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<StrictMode>
		<QueryClientProvider client={queryClient}>
			<RouterProvider router={route} />
		</QueryClientProvider>
	</StrictMode>
);
