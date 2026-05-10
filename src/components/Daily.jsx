export default function Daily() {
  return (
    <section className="daily-feed">
      <div className="head-txt">
        <h2>Audtlist Daily</h2>
      </div>

      <div className="feed">
        <div className="left-feed">
          <img
            src="new-group-project\GroupProject-6-React\src\assets\0043841685_0.jpg"
            alt="Featured article cover"
          />
          <div className="left-feed-txt">
            <h2>
              <a href="#">Music Daily (Main) </a>
            </h2>
            <h3>5 April 2026</h3>
            <p>
              {" "}
              Many artists are now experimenting with unique styles and
              collaborating across cultures, creating music that connects people
              around the world. As technology evolves, the way we create and
              enjoy music keeps changing, making the industry more exciting than
              ever.{" "}
            </p>
          </div>
        </div>

        <div className="right-feed">
          <div className="pic">
            <img src="asset/0044010976_0.jpg" alt="Article image" />
            <h3> Music Daily1 (Title) </h3>
            <p>
              The global music scene continues to grow as new artists and fresh
              sounds gain popularity. Streaming platforms are helping listeners
              discover a wider variety of genres, from indie and pop to hip-hop
              and electronic music.
            </p>
          </div>
          <div className="pic">
            <img src="/asset/0044247710_0.jpg" alt="Article image" />
            <h3> Music Daily2 (Title) </h3>
            <p>
              The global music scene continues to grow as new artists and fresh
              sounds gain popularity. Streaming platforms are helping listeners
              discover a wider variety of genres, from indie and pop to hip-hop
              and electronic music.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
