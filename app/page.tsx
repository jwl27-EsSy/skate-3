export default function Home() {
  return (
    <main>
      <div className="hero">
        <div className="hero-content-centered">
          <h1 className="hero-main-text">EVERYONE IS</h1>
          <div className="yellow-stripe-container">
            <h2 className="yellow-stripe-text">WELCOME</h2>
          </div>
          <div className="hero-buttons">
            <button className="btn btn-secondary">VIEW STYLES</button>
            <button className="btn btn-primary">JOIN COMMUNITY</button>
          </div>
        </div>
      </div>

      <div className="latest-section">
        <div className="container latest-grid">
          <div className="latest-text-content">
            <h2>LATEST</h2>
            <p>
              <span className="highlight-span">
                <span className="text-highlight">UW SKATECLUB</span> is the heart of the Seattle collegiate scene.
                From Red Square to the Ave, and every rainy ledge in between. We don't hide from the weather; we embrace the gloom.
              </span>
            </p>
            <p>
              <span className="highlight-span">
                Whether you're dodging bricks on campus or hitting Jefferson Park, everyone's welcome.
                We're building a community that runs deep in the PNW.
              </span>
            </p>
            <button className="btn btn-primary" style={{ marginTop: '20px' }}>READ MORE</button>
          </div>
          <div className="latest-image-container">
            <div className="latest-image-placeholder"></div>
          </div>
        </div>
      </div>

      <div className="what-we-do-section">
        <div className="container">
          <h2 style={{ borderLeft: '5px solid #ffb700', paddingLeft: '15px', color: '#fff', fontFamily: 'Oswald, sans-serif', fontSize: '3rem', textTransform: 'uppercase' }}>WHAT WE DO</h2>

          <div className="grid-3-col" style={{ gridTemplateColumns: 'repeat(2, 1fr)' }}>
            <div className="feature-card">
              <div className="card-icon">🛹</div>
              <h3>WEEKLY SESSIONS</h3>
              <p>
                Every week we meet up. Red Square flatground, garage sessions when it pours,
                or hitting up Cal Anderson. Check our socials for the spot.
              </p>
            </div>

            <div className="feature-card">
              <div className="card-icon">📹</div>
              <h3>VIDEO PARTS</h3>
              <p>
                We film everything. Your tricks, your slams, your progression. End of term we drop
                full video parts. Get your clips in and make your mark on Seattle history.
              </p>
            </div>

            <div className="feature-card">
              <div className="card-icon">🚐</div>
              <h3>SKATE TRIPS</h3>
              <p>
                Vancouver, Portland, and seeking out hidden PNW gems. Van full of boards,
                rain gear, and good vibes.
              </p>
            </div>

            <div className="feature-card">
              <div className="card-icon">🏆</div>
              <h3>CONTESTS & JAMS</h3>
              <p>
                Best trick contests, game of SKATE, jam sessions. Prizes, bragging rights, and
                respect on the line. Come prove yourself.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="red-line"></div>

      <div className="content-section">
        <div className="container">
          <h2>JOIN THE CREW</h2>
          <p>
            Don't just sit there. Grab your board and come session with us. Follow <span className="text-highlight">@uwskateclub</span> on
            Instagram for updates, spots, and session times.
          </p>
          <p>
            All skill levels. All styles. Just bring the stoke and we'll see you out there.
          </p>
        </div>
      </div>
    </main>
  );
}
