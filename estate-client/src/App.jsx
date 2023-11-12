
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { About, Home, Login, Profile, Registration } from "./pages"

export default function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/sign-in" element={<Login />} />
                <Route path="/sign-up" element={<Registration />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </BrowserRouter>
    )

}