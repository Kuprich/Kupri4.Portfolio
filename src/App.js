import React from 'react';

function App() {
  return (
    <div className="app">
      <div className="container">
        <div className="row">

          <div className="col-3">
            <div className="app__sidebar">
              sidebar
            </div>
          </div>

          <div className="col-9">
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
