import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
}

function Home() {
  return (
    <main style={{ padding: "1rem 0" }}>
      <h2>Home</h2>
    </main>
  );
}

function About() {
  return (
    <main style={{ padding: "1rem 0" }}>
      <h2>About</h2>
    </main>
  );
}
