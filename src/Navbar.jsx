import { NavLink, useNavigate } from 'react-router-dom'
import { useTheme } from './ThemeContext'

const Navbar = () => {
    const navigate = useNavigate();
    const { theme, toggleTheme } = useTheme();
    return (
        <div className='whole'>

            <div className={`navbar ${theme}`}>
                <div className='first'>

                    <svg xmlns="http://www.w3.org/2000/svg" id="house" className='hom' fill="currentColor" viewBox="0 0 32 32">
                        <path d="M1.656 17.756 16 5.324l14.344 12.432a1.001 1.001 0 0 0 1.312-1.512l-15-13a1 1 0 0 0-1.31 0L10 7.876V6a2 2 0 0 0-4 0v5.342L.344 16.244a1.003 1.003 0 0 0-.1 1.412c.364.416.994.462 1.412.1zM12 22h8v10h6a2 2 0 0 0 2-2v-9.802c0-.6-.268-1.166-.732-1.546l-10-8.198a1.996 1.996 0 0 0-2.536 0l-10 8.198A1.993 1.993 0 0 0 4 20.198V30a2 2 0 0 0 2 2h6V22z"></path>
                    </svg>
                    <div className="logo"><h1>Rent <span className='up'>UP</span></h1></div>
                </div>
                <div className='second'>
                    <ul >
                        <NavLink to="/">
                            <li>Home</li>
                        </NavLink>
                        <NavLink to="/dashboard">
                            <li>Dashboard</li>
                        </NavLink>
                        <NavLink to="/about">
                            <li>About</li>
                        </NavLink>
                    </ul>
                </div>
                <div className='third'>
                    <button onClick={() => navigate("/login")} className="btn">Login</button>
                    <button onClick={toggleTheme} className='btntheme'>{theme === "light" ? "🌙" : "☀️"}</button>
                </div>
            </div>
        </div>
    )
}

export default Navbar