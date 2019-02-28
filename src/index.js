import React from 'react'
import ReactDOM from 'react-dom'
import {SillyText, SeriousText} from './lib'

const App = () => (
    <div style={{ width: 640, margin: "15px auto" }}>
        <SillyText text="hello"/>
        <SeriousText text="hello"/>
    </div>
);


ReactDOM.render(<App/>, document.getElementById('root'))
