module.exports = {
	'env': {
		'browser': true,
		'es6': true
	},
	'extends': [
    'eslint:recommended',
    'plugin:react/recommended',
    'airbnb',
  ],
	'globals': {
		'Atomics': 'readonly',
		'SharedArrayBuffer': 'readonly'
	},
	'parserOptions': {
		'ecmaFeatures': {
			'jsx': true
		},
		'ecmaVersion': 2018,
		'sourceType': 'module'
	},
	'plugins': [
    'react',
    'import'
  ],
  'settings': {
    'import/resolver': {
        'webpack': {
            'config': 'webpack.config.js'
        }
    }
  },
	'rules': {
		'indent': ['error', 2],
    'linebreak-style': ['error', 'unix'],
    'max-len': ['error', {
      "code": 140,
      "tabWidth": 2,
    }],
    'no-shadow': "error",
    'no-console': "error",
    'no-debugger': "error",
    'no-unreachable': "error",
    'array-callback-return': "error",
    'dot-notation': "error",
    'eqeqeq': "error",
    'no-redeclare': "error",
    'no-unused-vars': "error",
    'block-spacing': "error",
    'camelcase': "error",
    'no-nested-ternary': "error",
    'no-trailing-spaces': "error",
    'arrow-parens': ["error", "as-needed"],
    // 'multiline-ternary': ["error", "always"],
    'comma-spacing': ["error", { "before": false, "after": true }],
    'max-depth': ["error", 4],
		'quotes': ['error', 'single'],
		'semi': ['error', 'always'],
    'space-return-throw-case': [0],
    'jsx-a11y/no-static-element-interactions': [0],
    'newline-per-chained-call': [2, { "ignoreChainWithDepth": 2 }],
    'react/jsx-max-props-per-line': [1, { "maximum": 2, "when": "always" }]
	}
};