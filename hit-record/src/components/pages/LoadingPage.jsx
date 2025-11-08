// import { useNavigate } from "react-router";
import VinylRecord from "../../images/VinylRecord.png"

const LoadingPage = () => {
    return (
        <main>
            <div className="loading-content">
                <h1>Hit Record</h1>
                <img src={VinylRecord} className="spin"></img>
                <button className="start-button">Start</button>
            </div>
        </main>
    );
};

export default LoadingPage;

{/* <button>button</button>
    const navigate = useNavigate();

    const handleGoToHome = () => {
        navigate('/home');
    }; */}
