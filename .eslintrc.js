module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
    'import',
    'jsdoc'
  ],
  extends: [
    'airbnb-base',
    'airbnb-typescript/base',
    'plugin:@typescript-eslint/recommended',
    'plugin:jsdoc/recommended'
  ],
  parserOptions: {
      project: './tsconfig.json',
  },
  rules: {
    'no-console': 0,
    'no-plusplus': ["error", { "allowForLoopAfterthoughts": true }],
    'linebreak-style': 0,
    'jsdoc/require-jsdoc': [
      'error', 
      {
        'contexts': [
          'MethodDefinition:not([accessibility="private"],[kind="get"],[kind="set"])',
        ],
        'require': {
          'ClassDeclaration': false,
          'MethodDefinition': false
        },
      }
    ],
    'jsdoc/require-param-type': 0,
    'jsdoc/require-returns-type': 0,
    'jsdoc/no-types': [
      'warn',
      {
        'contexts': ['any']
      } 
    ],
    'camelcase': 'off',
    '@typescript-eslint/triple-slash-reference': 0,
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/no-inferrable-types': 0,
    '@typescript-eslint/naming-convention': [
      'error',
      {
        'selector': 'default',
        'format': ['camelCase']
      },
      {
        'selector': 'variable',
        'format': ['camelCase', 'UPPER_CASE']
      },
      {
        'selector': 'classProperty',
        'format': ['camelCase', 'UPPER_CASE']
      },
      {
        'selector': 'parameter',
        'format': ['camelCase'],
        'leadingUnderscore': 'allow'
      },
      {
        'selector': 'memberLike',
        'modifiers': ['private'],
        'format': ['camelCase']
      },
      {
        'selector': 'typeLike',
        'format': ['PascalCase']
      }
    ],
  }
};
