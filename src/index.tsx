// ライブラリをインポート
import * as React from 'react'
import { render } from 'react-dom'
import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'
import { Editor } from './pages/editor'

const GlobalStyle = createGlobalStyle`
body * {
  box-sizing: border-box;
}
`

const Main = (
<>
  <GlobalStyle />
  <Editor />
</>
)


// React と HTML ファイルをつなぐ処理
render(Main, document.getElementById('app'))