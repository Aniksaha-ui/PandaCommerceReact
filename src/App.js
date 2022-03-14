import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/layout/Header";
import Home from "./components/Home";
import Footer from "./components/layout/Footer";
import Register from "./components/frontend/auth/Register";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Route path="/" component={Home} exact />
        <Route path="/register" component={Register} exact />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
