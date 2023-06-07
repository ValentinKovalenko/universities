import Header from "./components/Header/header";
import {Routes, Route} from 'react-router-dom';
import Universities from "./pages/Universities/Universities";
import Home from "./pages/Home/Home";
import WordUniversities from "./pages/WordUniversities/WordUniversities";

function App() {
    return (
        <div className='h-screen'>
            <Header/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/universities/' element={<WordUniversities/>}/>
                <Route path='/universities/:name' element={<Universities/>}/>
            </Routes>
        </div>
    );
}

export default App;
