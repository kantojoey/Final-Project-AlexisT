import AlbumShelf from "../common/AlbumShelf";
import AlbumCard from "../common/AlbumCard";
import VinylRecord from "../../images/VinylRecord.png"

const ListeningLogPage = () => {
    return (
        <main>
            <h1><strong>My Listening Log</strong></h1>
            <section id="user-stats">
                <div className="stat">
                    <h2>[# of logged albums]</h2>
                </div>
                <div className="stat">
                    <h2>[avg rating]</h2>
                </div>
            </section>
            <AlbumShelf className="recently-listened">
                <AlbumCard>
                    <img src={VinylRecord} className="placeholder"></img>
                </AlbumCard>
                <AlbumCard>
                    <img src={VinylRecord} className="placeholder"></img>
                </AlbumCard>
                <AlbumCard>
                    <img src={VinylRecord} className="placeholder"></img>
                </AlbumCard>
                 <AlbumCard>
                    <img src={VinylRecord} className="placeholder"></img>
                </AlbumCard>
                 <AlbumCard>
                    <img src={VinylRecord} className="placeholder"></img>
                </AlbumCard>
            </AlbumShelf>
        </main>
    );
};

export default ListeningLogPage;
