import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
	define: {
		'process.env': {},
	},
	server: {
		host: '0.0.0.0',
		port: 443,
	},
	plugins: [react()],
});
