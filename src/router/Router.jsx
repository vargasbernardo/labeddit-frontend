import {BrowserRouter, Route, Routes} from 'react-router-dom'
import HomePage from '../pages/HomePage/HomePage'
import SignUpPage from '../pages/SignUpPage/SignUpPage'



export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path='/signup' element={<SignUpPage/>} />
            </Routes>
        </BrowserRouter>
    )
}