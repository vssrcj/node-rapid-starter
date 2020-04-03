module.exports = {
   extends: ['airbnb-typescript/base'],
   parserOptions: {
      project: './tsconfig.json',
   },
   "settings": {
     "import/resolver": {
       node: {        
         "extensions": [".js", ".jsx", ".ts", ".tsx"]
       },
       alias: {
         map: [
           ['@', './src'],
         ],
         "extensions": [".js", ".jsx", ".ts", ".tsx"]
       },
     }
   },
   rules: {
      "@typescript-eslint/indent": [
          "warn",
          3
      ],
      "class-methods-use-this": "off",
      'import/prefer-default-export': 'off',
      'indent': ['warn', 3, { "SwitchCase": 1 }],
      "linebreak-style": "off",
      'no-console': 'off',
      'max-classes-per-file': 'off'
   }
};
