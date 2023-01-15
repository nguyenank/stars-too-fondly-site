import Image from "next/image";
export default function Constellation({ constellation }) {
    if (!constellation.player_name) {
        return (
            <div className="constellation">
                <h2>{constellation.constellation_full_name}</h2>
                <h2>-</h2>
            </div>
        );
    }
    // const game_string =
    //     constellation.home_name === "Dallas Stars"
    //         ? `Home vs ${constellation.away_name} (${constellation.home_final} - ${constellation.away_final})`
    //         : `Away vs ${constellation.home_name} (${constellation.away_final} - ${constellation.home_final})`;

    const game_string = `${constellation.away_name} ${constellation.away_final} - ${constellation.home_final} ${constellation.home_name}`;
    return (
        <div className="constellation">
            <h2>{constellation.constellation_full_name}</h2>
            <p>
                {constellation.player_name} · {game_string} ·{" "}
                {constellation.date}
            </p>
            <div className="side-by-side">
                <Image
                    src={`/${constellation.constellation}/stars.png`}
                    width={1800}
                    height={2117}
                    alt={`The ${constellation.constellation_full_name}, rendered in dots and lines.`}
                />
                <Image
                    src={`/${constellation.constellation}/shots.png`}
                    width={1800}
                    height={2117}
                    alt={`The ${constellation.constellation_full_name}, rendered in dots and lines.`}
                />
            </div>
        </div>
    );
}
