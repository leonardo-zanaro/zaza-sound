import React, {useState} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/sidebar/Sidebar";
import Dashboard from "./components/pages/Dashboard";
import Favorites from "./components/pages/Favorites";
import Header from "./components/header/Header.tsx";
import Footer from "./components/footer/Footer.tsx";
import MusicPlayer from "./components/shared/MusicPlayer.tsx";

function App() {
    const [searchQuery, setSearchQuery] = useState<string>("");

    const handleSearch = (query: string) => {
        setSearchQuery(query);
    };

    return (
        <Router>
                <div className={'flex h-screen bg-white dark:bg-black'}>
                    <Sidebar />
                    <div className="w-full h-full flex flex-col justify-between">
                        <Header onSearch={handleSearch} />
                        <div className={'h-full bg-transparent p-6 w-full'}>
                            <Routes>
                                <Route path="/" element={<Dashboard searchQuery={searchQuery} />} />
                                <Route path="/favorites" element={<Favorites />} />
                            </Routes>
                        </div>
                        <Footer />
                    </div>
                    <MusicPlayer visible={true} />
                </div>
        </Router>
    );
}

export default App;
