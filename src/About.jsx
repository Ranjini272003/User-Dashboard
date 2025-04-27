import { useNavigate } from "react-router-dom";

const About = () => {
    const navigate = useNavigate();
    return (
        <div className="contain">
            <button onClick={() => navigate("info")}>Information</button>
            <button onClick={() => navigate("form")}>Form</button>
        </div>
    )
}

export default About