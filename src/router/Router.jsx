import {BrowserRouter, Route, Routes} from 'react-router-dom'



export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<h1>Hello world</h1>} />
            </Routes>
        </BrowserRouter>
    )
}