/**
 * Googleのコーディングスタイルに準拠し、一部独自のlintルールを設定しています
 * @see https://github.com/google/eslint-config-google
 */
module.exports = {
  'env': {
    'browser': true,
    'es2021': true
  },
  'extends': [
    'plugin:vue/essential'
    // 'google'
  ],
  'parserOptions': {
    'ecmaVersion': 12,
    'sourceType': 'module'
  },
  'plugins': [
    'vue'
  ],
  'rules': {
    /**
     * アロー関数の引数は()を必須としない
     * @see https://eslint.org/docs/rules/arrow-parens
     */
    'arrow-parens': ['error', 'as-needed'],
    /**
     * 配列最終行のカンマを削除する
     * @see https://eslint.org/docs/rules/comma-dangle
     */
    'comma-dangle': ['error', 'never'],
    /**
     * インデントは半角スペース2個
     * @see https://eslint.org/docs/rules/indent
     */
    'indent': ['error', 2],
    /**
     * 一行の長さの制限はしない（SVGを埋め込むと一行2000文字などになってしまうため）
     * @see https://eslint.org/docs/rules/max-len
     */
    'max-len': ['off'],
    /**
     * windowに紐付けているモジュールはCapitalCaseを許容（例：window.Stripe...）
     * @see https://eslint.org/docs/rules/new-cap
     */
    'new-cap': ['error', { 'capIsNewExceptionPattern': '^window\..' }],
    /**
     * オブジェクトの{}内にスペースを開ける
     * @see https://eslint.org/docs/rules/object-curly-spacing
     */
    'object-curly-spacing': ['error', 'always'],
    /**
     * 関数の()前後にスペースを開ける
     * @see https://eslint.org/docs/rules/space-before-function-paren
     */
    'space-before-function-paren': ['error', 'always'],
    /**
     * 末尾のセミコロンを削除する
     * @see https://eslint.org/docs/rules/semi
     */
    'semi': ['error', 'never'],
    /**
     * htmlタグが2行に分離しないよう設定
     * @see https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/html-closing-bracket-newline.md
     */
    'vue/html-closing-bracket-newline': ['error', { 'multiline': 'never' }],
    /**
     * htmlのインデントがずれていたら自動補正
     * @see https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/html-indent.md
     */
    'vue/html-indent': ['error', 2]
  }
}