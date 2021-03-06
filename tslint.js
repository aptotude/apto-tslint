const path = require('path');

module.exports = {
    rulesDirectory: [
        path.join(path.dirname(require.resolve('tslint-eslint-rules')), 'dist/rules')
    ],
    rules: {
        "ban": [
            true,
            "eval",
            { "name": ["it", "only"], "message": "don't focus tests" },
            { "name": ["describe", "only"], "message": "don't focus tests" },
            { "name": ["fdescribe"], "message": "don't focus tests" },
            { "name": ["fit"], "message": "don't focus tests" }
        ],
        'no-namespace': [
            true,
            'allow-declarations'
        ],
        'object-literal-sort-keys': [
            false
        ],
        'ordered-imports': [
            false
        ],
        'no-angle-bracket-type-assertion': [
            false
        ],
        'no-empty': [
            false
        ],
        'arrow-parens': [
            false
        ],
        'max-classes-per-file': [
            false
        ],
        'quotemark': [
            true,
            'single'
        ],
        'trailing-comma': [
            true,
            {
                'multiline': 'never',
                'singleline': 'never'
            }
        ],
        'max-line-length': [
            true,
            140
        ],
        'no-console': [
            true,
            'debug',
            'info',
            'time',
            'timeEnd',
            'trace'
        ],
        'no-unused-expression' : [
            true,
            'allow-fast-null-checks'
        ],
        'whitespace': [
            true,
            'check-branch',
            'check-decl',
            'check-operator',
            'check-separator',
            'check-type'
        ],
        'variable-name': [
            true,
            'ban-keywords',
            'check-format',
            'allow-snake-case'
        ]
    },
    extends: [
        'tslint:recommended'
    ],
    jsRules: {},
    defaultSeverity: 'error'
};
