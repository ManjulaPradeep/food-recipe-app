import './App.css';
import Layout from './components/Layout/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import MealPage from './pages/MealPage';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Layout>
        <div className="App">
          <header className="App-header">
            {/* <switch> */}
              <Routes>
                <Route path='/' exact Component={Home}></Route>
                <Route path='/About' exact Component={About}></Route>
                <Route path='/Contact' exact Component={Contact}></Route>
                <Route path='/MealPage' exact Component={MealPage}></Route>

              </Routes>
            {/* </switch> */}
          </header>
        </div>
      </Layout>
    </Router>
  );
}

export default App;
