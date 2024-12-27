// eslint-config-import.mjs
import eslintPluginImport from 'eslint-plugin-import'

const importConfig = {
    files: ['**/*.js', '**/*.jsx', '**/*.ts', '**/*.tsx'], // 対象ファイル
    plugins: {
        import: eslintPluginImport,
    },
    rules: {
        'import/order': [
            'error',
            {
                groups: [
                    ['builtin', 'external'], // Node.jsモジュールと外部パッケージ
                    ['internal'], // 内部モジュール
                    ['parent', 'sibling'], // 親/兄弟モジュール
                    ['type'],
                    ['index'], // インデックスファイル
                ],
                'newlines-between': 'always', // グループ間に必ず空行を追加
                alphabetize: {
                    order: 'asc', // アルファベット順でソート
                    caseInsensitive: true, // 大文字小文字を区別しない
                },
                pathGroups: [
                    {
                        pattern: 'features/**',
                        group: 'internal',
                        position: 'before',
                    },
                    {
                        pattern: 'components/**',
                        group: 'internal',
                        position: 'before',
                    },
                    {
                        pattern: 'hooks/**',
                        group: 'internal',
                        position: 'before',
                    },
                    {
                        pattern: 'hooks/**',
                        group: 'internal',
                        position: 'before',
                    },
                    {
                        pattern: 'types/**',
                        group: 'type',
                        position: 'before',
                    },
                ],
            },
        ],
    },
}

export default importConfig
