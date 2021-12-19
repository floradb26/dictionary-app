import './App.css';
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
      <header className="App-header">
        <main>
        <Dictionary />
      </main>
      </header>
      <footer className="footer">Coded by Floriane Ramirez De Bruyne and is <a href="https://github.com/floradb26/dictionary-app" rel="noreferrer">open-sourced</a> and hosted on <a href="https://naughty-swanson-5a74d2.netlify.app/" rel="noreferrer">Netlify</a></footer>
      </div>
    </div>
  );
}

