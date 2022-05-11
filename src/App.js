import React from 'react';
import Sidebar from './components/Sidebar'

function App() {
  return (
    <div className="app">
      <div className="container">
        <div className="row">

          <div className="col-lg-3">
              <Sidebar />
          </div>

          <div className="col-lg-9">
            <div className="app__content">
              content
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;
