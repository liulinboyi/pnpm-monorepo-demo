import { defineConfig } from 'vite';
import replace from '@rollup/plugin-replace';
import { resolvePkgPath } from '../rollup/utils';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		replace({
			__DEV__: true,
			preventAssignment: true
		})
	],
	resolve: {
		alias: [
			{
				find: 'package2',
				replacement: resolvePkgPath('package2')
			},
		]
	}
});
