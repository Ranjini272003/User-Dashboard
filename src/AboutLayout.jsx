import About from './About'
import { Outlet } from 'react-router-dom'

const AboutLayout = () => {
    return (
        <div>
            <About />
            <Outlet />
        </div>
    )
}

export default AboutLayout