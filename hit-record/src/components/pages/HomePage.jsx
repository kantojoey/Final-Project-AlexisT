import AlbumShelf from "../common/AlbumShelf";
import VinylRecord from "../../images/VinylRecord.png"
import AlbumCard from "../common/AlbumCard";

const HomePage = () => {
    return (
        <main>
            <h1 style={{textDecoration:"underline"}}><strong>My Favorites at a glance</strong></h1>
            <AlbumShelf>
                <AlbumCard>
                    <img src = {VinylRecord} className="placeholder"></img>
                </AlbumCard>
                <AlbumCard>
                    <img src = {VinylRecord} className="placeholder"></img>
                </AlbumCard>
                <AlbumCard>
                    <img src = {VinylRecord} className="placeholder"></img>
                </AlbumCard>
                <AlbumCard>
                    <img src = {VinylRecord} className="placeholder"></img>
                </AlbumCard>
            </AlbumShelf>
            <h2 style={{textDecoration:"underline"}}>Recently Listened →</h2>
            <AlbumShelf>
                <AlbumCard>
                    <img src = {VinylRecord} className="placeholder"></img>
                </AlbumCard>
                <AlbumCard>
                    <img src = {VinylRecord} className="placeholder"></img>
                </AlbumCard>
                <AlbumCard>
                    <img src = {VinylRecord} className="placeholder"></img>
                </AlbumCard>
                <AlbumCard>
                    <img src = {VinylRecord} className="placeholder"></img>
                </AlbumCard>
                <AlbumCard>
                    <img src = {VinylRecord} className="placeholder"></img>
                </AlbumCard>
                <AlbumCard>
                    <img src = {VinylRecord} className="placeholder"></img>
                </AlbumCard>
                <AlbumCard>
                    <img src = {VinylRecord} className="placeholder"></img>
                </AlbumCard>
                <AlbumCard>
                    <img src = {VinylRecord} className="placeholder"></img>
                </AlbumCard>
            </AlbumShelf>
        </main>
    );
};

export default HomePage;
