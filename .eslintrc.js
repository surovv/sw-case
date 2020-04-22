module.exports = {
  parser: 'babel-eslint',
  extends: [
		'airbnb',
  ],
  rules: {
    'react/jsx-filename-extension': [2, { 'extensions': ['.js', '.jsx'] }],
    'import/prefer-default-export': 0,
    'react/sort-comp': 0,
  },
  env: {
    es2020: true,
    browser: true,
    jest: true,
  },
}
