import { fixupConfigRules, fixupPluginRules } from '@eslint/compat'
import jsxA11Y from 'eslint-plugin-jsx-a11y'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import nextPlugin from '@next/eslint-plugin-next'
import globals from 'globals'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import js from '@eslint/js'
import { FlatCompat } from '@eslint/eslintrc'
import prettier from 'eslint-plugin-prettier'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
})

export default [
  {
    ignores: [
      '**/.next',
      '**/node_modules',
      '**/.vscode',
      '**/package-lock.json',
      '**/eslint.config.js',
      '**/dist',
      '**/pnpm-lock.yaml',
      '**/yarn.lock',
      '**/.temp',
    ],
  },
  js.configs.recommended,
  // 使用 flat config 格式的推荐规则集
  react.configs.flat.recommended,
  reactHooks.configs.flat.recommended,
  nextPlugin.configs.recommended,
  nextPlugin.configs['core-web-vitals'],
  ...fixupConfigRules(compat.extends('plugin:jsx-a11y/recommended')),
  ...fixupConfigRules(compat.extends('plugin:import/errors')),
  {
    files: ['**/*.{js,jsx,ts,tsx}'], // 明確指定要檢查的文件類型
    plugins: {
      // react, react-hooks, @next/next 已在eslint-plugin-next中設定
      'jsx-a11y': fixupPluginRules(jsxA11Y),
      prettier: fixupPluginRules(prettier),
    },

    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },

      ecmaVersion: 'latest',
      sourceType: 'module',

      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },

        createDefaultProgram: false,
      },
    },

    settings: {
      react: {
        version: 'detect',
      },

      'import/resolver': {
        alias: {
          map: [['@', '.']],
          extensions: [
            '.js',
            '.jsx',
            '.ts',
            '.tsx',
            '.css',
            '.module.css',
            '.scss',
            '.json',
          ],
        },
      },
    },

    rules: {
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
      'no-unused-vars': [
        'warn',
        {
          vars: 'all', // 檢查所有變數，包括未使用的導入
          args: 'after-used', // 只檢查使用後的參數
          ignoreRestSiblings: true, // 忽略 rest siblings
          varsIgnorePattern: '^_', // 忽略以 _ 開頭的變數
          argsIgnorePattern: '^_', // 忽略以 _ 開頭的參數
          caughtErrors: 'all', // 檢查未使用的 catch 錯誤
          caughtErrorsIgnorePattern: '^_', // 忽略以 _ 開頭的 catch 錯誤
        },
      ],
      'jsx-a11y/anchor-is-valid': 'off',
      'jsx-a11y/label-has-associated-control': 'off',
      'jsx-a11y/label-has-for': 'off',
      'prettier/prettier': 'warn',
      '@next/next/no-html-link-for-pages': 'error',
      '@next/next/no-img-element': 'warn',
    },
  },
]
