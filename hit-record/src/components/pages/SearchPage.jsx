import AlbumCard from "../common/AlbumCard";
import VinylRecord from "../../images/VinylRecord.png"

const SearchPage = () => {
    return (
        <main>
            <h1>Search for an album:</h1>
            <div className="search-box">
                <input type="text" placeholder="Type album name here..." className="album-search"/>
                <button className="search-button">
                    🔍
                </button>
            </div>
            <h1>Search results...</h1>
            <div className="search-results">
                <AlbumCard>
                    <img src = {VinylRecord} className="placeholder"></img>
                </AlbumCard>
                <button className="add-album-button">
                    <span style={{textAlign:"center"}}>+</span>
                    <span style={{textAlign:"center"}}>Log Album</span>
                </button>
            </div>
        </main>
    );
};

export default SearchPage;
