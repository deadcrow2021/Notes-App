import './App.css';
import Header from './components/Header';
import NoteListPage from './pages/NoteListPage';
import NotePage from './pages/NotePage';
import {
  HashRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  return (
    <Router>
      <div className='container dark'>
        <div className='app'>
          <Header />
          <Routes>
            <Route path='/' exact Component={NoteListPage}/>
            <Route path='/note/:id' Component={NotePage}/>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
