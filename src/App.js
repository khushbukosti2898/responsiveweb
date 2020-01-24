import React from 'react';
import logo from './logo.svg';
import Header from './header.js'
import Footer from './footer.js'
import Content from './content.js'
function App() {
  return (
    <div className="App">
      <div className="Container">
        <Header />
        <Content />
        <Footer />
      </div>
    </div>
  );
}

export default App;
