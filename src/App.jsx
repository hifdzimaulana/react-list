import Navbar from "./components/Navbar";

function App(props) {
  return (
    <div className="App">
      <Navbar />

      {/* Children page */}
      <div>{props.children}</div>
      {/*  */}
    </div>
  );
}

export default App;
