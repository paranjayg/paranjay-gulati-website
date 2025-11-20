export default function Home() {
  return (
    <main className="container">
      <header className="identity">
        <h1 className="main-title">Erik Torenberg</h1>
        <h2 className="sub-title">Erik Torenberg</h2>
      </header>

      <section className="intro-section">
        <div className="intro-text">
          <p>
            I&apos;m a technology entrepreneur and investor. Presently I am a
            General Partner at a16z. Previously, I was the founder of Turpentine
            and was the chairman of On Deck, co-founder and general partner at
            Village Global, and first employee at Product Hunt. You can find me
            elsewhere on X, LinkedIn, and Substack.
          </p>
          <p>
            I&apos;m hiring for roles on my team—people who will work closely
            with me across my projects. Check out the JDs below:
          </p>
          <ul className="intro-list">
            <li>
              <a href="#" aria-label="Executive Assistant role description">
                Executive Assistant
              </a>
            </li>
          </ul>
        </div>
        <div className="intro-image">
          <div className="image-wrapper">
            <img
              src="https://images.unsplash.com/photo-1504198266285-165a04f2d219?auto=format&fit=crop&w=600&q=80"
              alt="The Art of Conversation painting placeholder"
            />
          </div>
          <p className="image-caption">
            &quot;The Art of Conversation&quot; by René Magritte
          </p>
        </div>
      </section>

      <section className="content-section">
        <div className="section-heading">
          <span>Investing</span>
        </div>
        <p className="investing-text">
          Pre-seed/seed investments include{" "}
          <strong>Scale AI</strong>, <strong>Pave</strong>,{" "}
          <strong>Applied Intuition</strong>, <strong>Zora</strong>,{" "}
          <strong>Rappi</strong>, <strong>Extend</strong>, <strong>Lattice</strong>,{" "}
          <strong>Royal</strong>, <strong>Multiverse</strong>,{" "}
          <strong>Crossbeam</strong>, <strong>Bitski</strong>,{" "}
          <strong>Addi</strong>, <strong>All Stripes</strong>,{" "}
          <strong>Alongside</strong>, <strong>Sardine</strong>,{" "}
          <strong>A Team</strong>, <strong>Enveda</strong>,{" "}
          <strong>Forethought</strong>, <strong>Nurx</strong>,{" "}
          <strong>Long-Term Stock Exchange</strong>, <strong>Carrot</strong>,{" "}
          <strong>Lit Protocol</strong>, <strong>Loyal</strong>,{" "}
          <strong>Secureframe</strong>, <strong>Settle</strong>,{" "}
          <strong>Sokowatch</strong>, <strong>Unit21</strong>,{" "}
          <strong>Primer</strong>, <strong>Spring Discovery</strong>,{" "}
          <strong>Overflow</strong>, <strong>Socket</strong>,{" "}
          <strong>Orchid</strong>, <strong>Kapwing</strong>,{" "}
          <strong>Tinycare</strong>, <strong>HumanFirst</strong>,{" "}
          <strong>Elemind</strong>, <strong>VeriSIM</strong>, <strong>Jam</strong>,{" "}
          <strong>VoiceOps</strong>, <strong>The.com</strong>,{" "}
          <strong>Omneky</strong>, <strong>Flexport</strong>,{" "}
          <strong>Figma</strong>, and many more.
        </p>
      </section>

      <section className="content-section">
        <div className="section-heading">
          <span>Writing</span>
        </div>
        <div className="writing-grid">
          <div className="writing-column">
            <h3>Startups</h3>
            <ul>
              <li>
                <a href="#">How to Find a Cofounder</a>
              </li>
              <li>
                <a href="#">Starting Things That Scale</a>
              </li>
              <li>
                <a href="#">What Great Founders Share</a>
              </li>
            </ul>
          </div>
          <div className="writing-column">
            <h3>Career</h3>
            <ul>
              <li>
                <a href="#">Build Personal Moats</a>
              </li>
              <li>
                <a href="#">How to Find an Edge</a>
              </li>
              <li>
                <a href="#">Ways to Work With Me</a>
              </li>
            </ul>
          </div>
          <div className="writing-column">
            <h3>Culture</h3>
            <ul>
              <li>
                <a href="#">The Hypocrisy of Elites</a>
              </li>
              <li>
                <a href="#">Conversation as Craft</a>
              </li>
              <li>
                <a href="#">Building Creative Networks</a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
