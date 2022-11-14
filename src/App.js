import logo from './logo.svg';
function App() {
  return (
    <div className="bg-slate-800 text-slate-50 flex flex-col items-center justify-evenly h-screen">
        <img src={logo} className="h-96" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="text-cyan-500"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
    </div>
  );
}

export default App;
