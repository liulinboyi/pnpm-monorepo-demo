import typescript from 'rollup-plugin-typescript2';
import resolve from '@rollup/plugin-babel';
import replace from '@rollup/plugin-replace';
import generatePackageJson from 'rollup-plugin-generate-package-json';
import { resolvePkgPath } from './utils'

const tsConfig = { tsConfig: 'tsconfig.json' };

export default [
	{
		input: `${resolvePkgPath('package1', false)}/index.ts`,
		output: {
			file: `${resolvePkgPath('package1', true)}/index.js`,
			name: 'index.js',
			format: 'umd'
		},
		plugins: [
			typescript(tsConfig),
			replace({
				__DEV__: process.env.NODE_ENV !== 'production'
			}),
			resolve(),
			generatePackageJson({
				inputFolder: resolvePkgPath('package1', false),
				outputFolder: resolvePkgPath('package1', true),
				baseContents: ({ name, description, version }) => ({
					name,
					description,
					version,
					main: 'index.js'
				})
			})
		]
	},
	{
		input: `${resolvePkgPath('package2', false)}/index.ts`,
		output: {
			file: `${resolvePkgPath('package2', true)}/index.js`,
			name: 'index.js',
			format: 'umd'
		},
		plugins: [
			typescript(tsConfig),
			replace({
				__DEV__: process.env.NODE_ENV !== 'production'
			}),
			resolve(),
			generatePackageJson({
				inputFolder: resolvePkgPath('package2', false),
				outputFolder: resolvePkgPath('package2', true),
				baseContents: ({ name, description, version }) => ({
					name,
					description,
					version,
					main: 'index.js'
				})
			})
		]
	}
];
