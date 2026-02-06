import Image from 'next/image';

export default function Gallery() {
    const videos = [
        {
            id: 1,
            title: "SPRING SESSIONS 2024",
            description: "Best clips from spring term. Rails, stairs, and street spots.",
            image: "/images/kickflip.png"
        },
        {
            id: 2,
            title: "KICKFLIP MONTAGE",
            description: "Everyone's favorite trick. 50+ kickflips in 3 minutes.",
            image: "/images/grind.png"
        },
        {
            id: 3,
            title: "DOWNTOWN WATERLOO",
            description: "Hitting every spot in downtown. Security kicked us out twice.",
            image: "/images/bowl.png"
        },
        {
            id: 4,
            title: "BEGINNER SESSIONS",
            description: "New skaters learning the basics. Everyone starts somewhere.",
            image: "/images/kickflip.png"
        },
        {
            id: 5,
            title: "TORONTO TRIP",
            description: "Road trip to T.O. Christie Pits, Ashbridges, and street missions.",
            image: "/images/grind.png"
        },
        {
            id: 6,
            title: "NIGHT SESSIONS",
            description: "After dark skating. Empty parks, good vibes, sketchy lighting.",
            image: "/images/bowl.png"
        },
        {
            id: 7,
            title: "HALL OF MEAT",
            description: "The slams. The bails. The pain. Skateboarding hurts.",
            image: "/images/kickflip.png"
        },
        {
            id: 8,
            title: "BEST TRICK CONTEST",
            description: "Winner takes all. 10 tries to land your gnarliest trick.",
            image: "/images/grind.png"
        },
        {
            id: 9,
            title: "CAMPUS SPOTS",
            description: "Skating UW campus. Ledges, gaps, and dodging campus police.",
            image: "/images/bowl.png"
        }
    ];

    return (
        <main>
            <div className="hero">
                <div className="container">
                    <h1>GALLERY</h1>
                    <p>VIDEOS, CLIPS, AND CARNAGE</p>
                </div>
            </div>

            <div className="content-section">
                <div className="container">
                    <h2>VIDEO ARCHIVE</h2>
                    <p>
                        Every session filmed. Every trick documented. This is our video vault—clips from sessions,
                        contests, trips, and everything in between. New videos drop regularly, so check back often.
                    </p>
                </div>
            </div>

            <div className="gallery-grid">
                {videos.map((video) => (
                    <div key={video.id} className="gallery-item">
                        <div className="video-placeholder" style={{ position: 'relative' }}>
                            <Image
                                src={video.image}
                                alt={video.title}
                                fill
                                style={{ objectFit: 'cover' }}
                            />
                            <span style={{ position: 'absolute', zIndex: 1 }}>▶</span>
                        </div>
                        <h3>{video.title}</h3>
                        <p>{video.description}</p>
                    </div>
                ))}
            </div>

            <div className="red-line"></div>

            <div className="content-section">
                <div className="container">
                    <h2>RECENT CLIPS <a href="https://www.instagram.com/skateclubuw/?hl=en" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: '#ff0000' }}>(@skateclubuw)</a></h2>
                    <p style={{ marginBottom: '30px' }}>
                        Check out the latest from our Instagram. Tag us to get featured.
                    </p>
                    <div className="gallery-grid">
                        {[
                            { id: 1, img: "/images/kickflip.png", label: "KICKFLIP" },
                            { id: 2, img: "/images/grind.png", label: "GRIND" },
                            { id: 3, img: "/images/bowl.png", label: "BOWL" }
                        ].map((item) => (
                            <a
                                key={item.id}
                                href="https://www.instagram.com/skateclubuw/?hl=en"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="gallery-item"
                                style={{ display: 'block', textDecoration: 'none' }}
                            >
                                <div className="video-placeholder" style={{ aspectRatio: '1/1', background: '#333', position: 'relative' }}>
                                    <Image
                                        src={item.img}
                                        alt="Instagram Post"
                                        fill
                                        style={{ objectFit: 'cover' }}
                                    />
                                    <span style={{ position: 'absolute', zIndex: 1, fontSize: '2rem' }}>📷</span>
                                </div>
                                <h3>{item.label}</h3>
                                <p>View on Instagram ↗</p>
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            <div className="red-line"></div>

            <div className="content-section">
                <div className="container">
                    <h2>SUBMIT CLIPS</h2>
                    <p>
                        Got footage? Send it our way. Tag <span className="text-highlight">@uwskateclub</span> on Instagram
                        or DM us your clips. If it's good, we'll put it in the next video.
                    </p>
                    <p>
                        Film in landscape. Keep it raw. No filters, no slow-mo (unless it's a gnarly slam).
                        Just skateboarding.
                    </p>
                </div>
            </div>

            <div className="content-section">
                <div className="container">
                    <h2>PHOTOGRAPHERS & FILMERS</h2>
                    <p>
                        Shoutout to everyone behind the lens. You make this possible. If you shoot photos or film,
                        come session with us. We need more people documenting the scene.
                    </p>
                </div>
            </div>
        </main>
    );
}
