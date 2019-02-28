import React from 'react'
import ReactDOM from 'react-dom'
import {SillyText, SeriousText} from './lib'

const App = () => (
    <div style={{ width: 640, margin: "15px auto" }}>
        <h1>Hello React</h1>
        <SillyText>Hello</SillyText>
        <SeriousText>Hello</SeriousText>
    </div>
);


ReactDOM.render(<App/>, document.getElementById('root'))
