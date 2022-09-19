import ReactDOM from 'react-dom/client';
import App from './App';
import { ColorProvider } from './hooks/useColor';
import './styles.css';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
	<ColorProvider>
		<App />
	</ColorProvider>
);
