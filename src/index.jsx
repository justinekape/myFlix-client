// import React from 'react';
// import ReactDOM from 'react-dom';
// import Container from 'react-bootstrap/Container';
// import { MainView } from './components/main-view/main-view';

import { createRoot } from 'react-dom/client';
import { MainView } from './components/main-view/main-view';
import Container from 'react-bootstrap/Container';

// import statement to indicate that you need to bundle './index.scss'
import './index.scss';



// main component (will eventually use all the others)
const App = () => {
  return (
    <Container>
      <MainView />
    </Container>
  );
};

// finds the root of your app
const container = document.querySelector("#root");
const root = createRoot(container);

// tells React to render your app in the root DOM element
root.render(<App />);