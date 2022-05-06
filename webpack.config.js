const path = require('path')

module.exports = {
  // 最初に読み込むファイル
  entry: './src/index.ts',
  module: {
    // webpack に対してビルド時に追加で行う処理を記述
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        // 除外するファイル(外部ライブラリ）は特にビルドする必要がないので除外
        exclude: /node_modules/,
      },
    ],
  },
  // モジュールとして解決するファイルの拡張子
  resolve: {
    extensions: ['.ts'],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    publicPath: 'dist/',
  }
}