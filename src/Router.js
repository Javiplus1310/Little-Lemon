import { Routes, Route } from "react-router-dom";
import Homepage from "./HomePage";
export default function Router() {
    return (
        <Routes>
            <Route path="/" element={<Homepage />}></Route>
            {/* <Route path="/about" element={<About />}></Route>
            <Route path="/menu" element={<Menu />}></Route>
            <Route path="/reservations" element={<Reservations />}></Route>
            <Route path="/order" element={<Order />}></Route>
            <Route path="/login" element={<Login />}></Route> */}
        </Routes>
    )
}