// ライブラリをインポート
import * as React from 'react'
import { render } from 'react-dom'

const Main = (<h1>Markdown Editor</h1>)

// React と HTML ファイルをつなぐ処理
render(Main, document.getElementById('app'))