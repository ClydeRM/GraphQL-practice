import React from "react";
import ReactDOM from "react-dom";
import { Container } from 'shards-react';

import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";

import "./index.css";

import Chat from 'chat/Chat';

const App = () => (
    <Container>
        <p>21342341</p>
        <h1>Chat!</h1>
        <Chat />
        <p>12342134123</p>
    </Container>
);

ReactDOM.render(<App />, document.getElementById("app"));
