import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/sidebar/Sidebar";
import Dashboard from "./components/pages/Dashboard";
import Favorites from "./components/pages/Favorites";
import Header from "./components/header/Header.tsx";
import Footer from "./components/footer/Footer.tsx";

function App() {
    return (
        <Router>
                <div className={'flex h-screen bg-white dark:bg-black'}>
                    <Sidebar />
                    <div className="w-full h-full flex flex-col justify-between">
                        <Header />
                        <div className={'h-full dark:bg-black p-6 w-full'}>
                            <Routes>
                                <Route path="/" element={<Dashboard />} />
                                <Route path="/favorites" element={<Favorites />} />
                            </Routes>
                        </div>
                        <Footer />
                    </div>
                </div>
        </Router>
    );
}

export default App;
