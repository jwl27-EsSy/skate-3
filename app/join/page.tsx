'use client';



export default function Join() {
    return (
        <main>
            <div className="hero">
                <div className="hero-content-centered">
                    <h1 className="hero-main-text" style={{ fontSize: '5rem', marginBottom: '10px' }}>NO SIGN UP</h1>
                    <h1 className="hero-main-text" style={{ fontSize: '5rem', marginBottom: '10px' }}>NO MONEY</h1>
                    <div className="yellow-stripe-container" style={{ transform: 'rotate(2deg)', margin: '30px 0' }}>
                        <h2 className="yellow-stripe-text" style={{ fontSize: '3rem' }}>JUST SHOW UP</h2>
                    </div>
                    <p style={{
                        fontFamily: 'Oswald, sans-serif',
                        fontSize: '2.5rem',
                        color: '#fff',
                        textTransform: 'uppercase',
                        letterSpacing: '0.1em',
                        marginTop: '20px',
                        textShadow: '2px 2px 4px rgba(0,0,0,0.8)'
                    }}>
                        RED SQUARE <span style={{ color: '#ffb700' }}>///</span> FRIDAYS 3-5 PM
                    </p>
                </div>
            </div>

            <div style={{ padding: '0', borderTop: '5px solid #ffb700', position: 'relative' }}>
                <div style={{
                    width: '100%',
                    height: '500px',
                    filter: 'grayscale(100%) contrast(1.2) brightness(0.8)', // Grunge vibe
                    transition: 'filter 0.3s ease'
                }}
                    onMouseEnter={(e) => e.currentTarget.style.filter = 'none'} // Reveal color on hover
                    onMouseLeave={(e) => e.currentTarget.style.filter = 'grayscale(100%) contrast(1.2) brightness(0.8)'}
                >
                    <iframe
                        width="100%"
                        height="100%"
                        frameBorder="0"
                        scrolling="no"
                        marginHeight={0}
                        marginWidth={0}
                        src="https://maps.google.com/maps?q=4063+Spokane+Ln,+Seattle,+WA+98105&t=k&z=19&ie=UTF8&iwloc=&output=embed"
                        style={{ display: 'block' }}
                    ></iframe>
                </div>

                <div style={{
                    position: 'absolute',
                    top: '0',
                    left: '0',
                    background: '#ffb700',
                    color: '#000',
                    padding: '10px 30px',
                    fontFamily: 'Oswald, sans-serif',
                    fontSize: '1.5rem',
                    fontWeight: 'bold',
                    textTransform: 'uppercase',
                    zIndex: 10,
                    transform: 'skew(-15deg) translate(-10px, -10px)',
                    boxShadow: '5px 5px 0px rgba(0,0,0,0.5)'
                }}>
                    LOCATION
                </div>
            </div>
        </main>
    );
}
