import { useState, useEffect} from "react";

function App() {
    const [theme, setTheme] = useState<string>();

    useEffect(() => {
        if(window.matchMedia('(prefers-color-scheme: dark)').matches) {
            setTheme("dark");
        }
        else {
            setTheme("light");
        }
    }, []);

    useEffect(() => {
        if(theme === "dark")
        {
            document.documentElement.classList.add("dark");
        }
        else
        {
            document.documentElement.classList.remove("dark");
        }
    }, [theme]);

    const handleThemeSwitch = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    }

  return (
      <div className={'h-screen bg-white dark:bg-black'}>
          <button className={'bg-blue-600 p-4'} onClick={handleThemeSwitch}>
            Dark mode
          </button>
      </div>
  )
}

export default App
