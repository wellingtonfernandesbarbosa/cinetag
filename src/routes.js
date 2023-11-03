import { BrowserRouter, Route, Routes } from "react-router-dom";
import Start from "pages/Start";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Start />}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;