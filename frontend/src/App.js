import './App.css';
import Header from './components/Header';
import NoteListPage from './pages/NoteListPage';
import NotePage from './pages/NotePage';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  return (
    <Router>
      <div className='App'>
        <Header />
        <Routes>
          <Route path='/' exact Component={NoteListPage}/>
          <Route path='/note/:id' Component={NotePage}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
