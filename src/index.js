import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

class CSS extends React.Component {
  render() {
    return (
      <div>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/uikit@3.15.14/dist/css/uikit.min.css" />
      </div>
    );
  }
}
class Libs extends React.Component {
  render() {
    return (
      <div>
        <script src="https://cdn.jsdelivr.net/npm/uikit@3.15.14/dist/js/uikit.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/uikit@3.15.14/dist/js/uikit-icons.min.js"></script>
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    return (
      <div>
        <div class="uk-tile uk-tile-default">
          <div class="uk-grid-small uk-child-width-expand@s uk-text-center" uk-grid>
              <div>
                  <div class="uk-card uk-card-default uk-card-body">Item</div>
              </div>
              <div>
                  <div class="uk-card uk-card-default uk-card-body">Item</div>
              </div>
              <div>
                  <div class="uk-card uk-card-default uk-card-body">Item</div>
              </div>
          </div>
        </div>
      </div>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CSS />
    <header>
      <Header />
    </header>
    
    <main>

    </main>

    <footer>
      
    </footer>
    <Libs />
  </React.StrictMode>
);