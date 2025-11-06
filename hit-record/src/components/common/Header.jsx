import VinylRecord from "../../images/VinylRecord.png"
const Header = () => {
    return (
        <>
            <header style={{
                textAlign: "center", background: "orange", padding: "15px"
            }}>
                <div className="header-content">
                    <h1 className = "header-text">Hit Record</h1>
                    <img src={VinylRecord} className="header-image"></img>
                </div>
            </header>

        </>
    );
};

export default Header;
