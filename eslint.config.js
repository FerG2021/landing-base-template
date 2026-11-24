import js from '@eslint/js';
import pluginVue from 'eslint-plugin-vue';
import globals from 'globals';
import prettierConfig from 'eslint-config-prettier';

export default [
    // 1. Archivos y carpetas a ignorar
    {
        ignores: ['dist/**', 'node_modules/**', '.git/**']
    },

    // 2. Reglas base recomendadas de JavaScript y Vue 3
    js.configs.recommended,
    ...pluginVue.configs['flat/essential'],

    // 3. Configuración del entorno y reglas personalizadas
    {
        files: ['**/*.{js,mjs,cjs,vue}'],
        languageOptions: {
            ecmaVersion: 'latest',
            sourceType: 'module',
            globals: {
                ...globals.browser,
                ...globals.node
            }
        },
        rules: {
            'vue/component-api-style': ['error', ['options']],
            'vue/multi-word-component-names': 'warn',
            'no-console': ['warn', { allow: ['warn', 'error'] }],
            'no-unused-vars': 'warn',
            semi: ['error', 'always']
        }
    },

    // Siempre va al final para desactivar reglas de formato que choquen con Prettier
    prettierConfig
];
