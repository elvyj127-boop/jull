/* global React */
const { useState, useEffect, useRef } = React;

// ====== Inline SVG glyphs ======
const Glyph = {
  search: (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1">
      <circle cx="7" cy="7" r="5"/><line x1="11" y1="11" x2="15" y2="15"/>
    </svg>
  ),
  heart: (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1">
      <path d="M8 14 L2 8 a3 3 0 0 1 6-3 a3 3 0 0 1 6 3 z"/>
    </svg>
  ),
  bag: (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1">
      <path d="M3 5 h10 l-1 9 H4 z"/><path d="M6 5 V3 a2 2 0 0 1 4 0 V5"/>
    </svg>
  ),
  arrow: (<span style={{display:'inline-block',transform:'translateY(-1px)'}}>→</span>),
  ring: (
    <svg viewBox="0 0 64 64" fill="none" stroke="#4A2F27" strokeWidth="0.8">
      <circle cx="32" cy="38" r="18"/><polygon points="32,8 26,20 32,28 38,20"/>
      <line x1="26" y1="20" x2="38" y2="20"/><line x1="32" y1="8" x2="32" y2="28"/>
    </svg>
  ),
  earring: (
    <svg viewBox="0 0 64 64" fill="none" stroke="#4A2F27" strokeWidth="0.8">
      <path d="M32 8 V22"/><circle cx="32" cy="22" r="2"/>
      <polygon points="32,28 24,40 32,52 40,40"/><line x1="24" y1="40" x2="40" y2="40"/>
    </svg>
  ),
  necklace: (
    <svg viewBox="0 0 64 64" fill="none" stroke="#4A2F27" strokeWidth="0.8">
      <path d="M10 14 Q32 36 54 14"/><polygon points="32,32 26,40 32,50 38,40"/>
      <line x1="26" y1="40" x2="38" y2="40"/>
    </svg>
  ),
  bracelet: (
    <svg viewBox="0 0 64 64" fill="none" stroke="#4A2F27" strokeWidth="0.8">
      <ellipse cx="32" cy="32" rx="22" ry="14"/><circle cx="32" cy="20" r="3"/>
      <circle cx="14" cy="32" r="2"/><circle cx="50" cy="32" r="2"/>
    </svg>
  ),
  diamondSm: (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="#D8B46A" strokeWidth="0.8">
      <polygon points="7,1 13,7 7,13 1,7"/><line x1="3" y1="7" x2="11" y2="7"/>
      <line x1="7" y1="3" x2="7" y2="11"/>
    </svg>
  ),
  leaf: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#D8B46A" strokeWidth="0.8">
      <path d="M4 20 Q12 4 20 20 Q12 16 4 20 z"/><line x1="4" y1="20" x2="20" y2="4"/>
    </svg>
  ),
  hammer: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#D8B46A" strokeWidth="0.8">
      <rect x="2" y="6" width="14" height="6"/><line x1="16" y1="9" x2="22" y2="3"/>
    </svg>
  ),
  cloth: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#D8B46A" strokeWidth="0.8">
      <path d="M3 4 Q12 8 21 4 V20 Q12 24 3 20 z"/>
    </svg>
  ),
};

// ====== Header ======
function Header() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(globalThis.scrollY > 40);
    globalThis.addEventListener('scroll', onScroll);
    return () => globalThis.removeEventListener('scroll', onScroll);
  }, []);
  const navItems = [
    { label: 'Jewellery', items: ['Rings', 'Earrings', 'Necklaces', 'Bracelets', 'All Jewellery'] },
    { label: 'Collections', items: ['The Signature Collection', 'The Heirloom Edit', 'Champagne Hours', 'The Bridal Capsule', 'The Keepsake Collection'] },
    { label: 'Bridal & Bespoke' },
    { label: 'Gifts' },
    { label: 'The Maison', items: ['Our Story', 'From Sketch to Heirloom', 'Craftsmanship', 'Materials & Provenance', 'Jewellery Care'] },
    { label: 'Journal' },
    { label: 'Book Appointment' },
  ];
  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="header__top">
        <nav className="header__nav">
          {navItems.slice(0,4).map(it => (
            <a key={it.label} className={it.items ? 'has-dropdown' : ''}>
              {it.label}
              {it.items && (
                <div className="dropdown">
                  {it.items.map(s => <a key={s}>{s}</a>)}
                </div>
              )}
            </a>
          ))}
        </nav>
        <a href="#" className="header__brand" style={{textAlign:'center',display:'flex',alignItems:'center',justifyContent:'center'}}>
          <img src="uploads/jull-wordmark-transparent.png" alt="Jull Fine Jewellery" className="wordmark-img"/>
        </a>
        <div style={{display:'flex',alignItems:'center',gap:36}}>
          <nav className="header__nav">
            {navItems.slice(4).map(it => (
              <a key={it.label} className={it.items ? 'has-dropdown' : ''}>
                {it.label}
                {it.items && (
                  <div className="dropdown">
                    {it.items.map(s => <a key={s}>{s}</a>)}
                  </div>
                )}
              </a>
            ))}
          </nav>
          <div className="header__icons">
            <button aria-label="Search">{Glyph.search}</button>
            <button aria-label="Wishlist">{Glyph.heart}</button>
            <button aria-label="Cart">{Glyph.bag}</button>
          </div>
        </div>
      </div>
    </header>
  );
}

// ====== Hero ======
function Hero() {
  return (
    <section className="hero" data-screen-label="01 Hero">
      <div className="hero__text">
        <span className="eyebrow">Spring Maison · MMXXVI</span>
        <h1 className="display">The new <em>heirloom.</em></h1>
        <p className="lede" style={{maxWidth:520}}>
          Fine jewellery shaped by sentiment, designed for modern women, and made to be remembered.
        </p>
        <div className="hero__cta">
          <button className="btn">Explore Jewellery <span className="arrow">→</span></button>
          <button className="btn btn--ghost">Book a Private Consultation</button>
        </div>
        <div style={{marginTop:48,display:'flex',alignItems:'center',gap:14,fontSize:10,letterSpacing:'0.32em',textTransform:'uppercase',color:'var(--mocha-soft)'}}>
          <span style={{width:24,height:1,background:'var(--champagne)'}}/>
          Free private consultations · Worldwide delivery
        </div>
      </div>
      <div className="hero__image">
        <img src="assets/hero-stone.png" alt="Step-cut moval champagne diamond" />
        <div className="hero__caption">The Signature Stone · 03.40 ct</div>
      </div>
    </section>
  );
}

// ====== Marquee ======
function Marquee() {
  const items = ['From Sketch to Heirloom','Designed With Intention','The Champagne Diamond','Modern Heritage','Kept Close','Private Consultations','Bespoke by Appointment'];
  const renderRow = () => items.map((t,i) => (
    <span key={i}>{t}<span className="dot">◆</span></span>
  ));
  return (
    <div className="marquee">
      <div className="marquee__track">
        <span>{renderRow()}</span>
        <span>{renderRow()}</span>
      </div>
    </div>
  );
}

// ====== Press Features ======
function PressFeatures() {
  const pubs = ['Maison Atelier','Objectif',"L'Écrin",'Bazaar & Co','Aurum Journal','Moda Nova'];
  const quotes = [
    { q: 'Quietly arresting. Jull treats jewellery as memory, not ornament.', src: 'Maison Atelier' },
    { q: 'A maison built on restraint — every piece feels considered, never decorative.', src: "L'Écrin" },
    { q: 'Champagne diamonds, late-afternoon light, and an atelier that believes in keeping rather than collecting.', src: 'Aurum Journal' },
  ];
  return (
    <section className="press" data-screen-label="01b Press">
      <div className="press__inner">
        <span className="eyebrow center press__eyebrow">Press · MMXXVI</span>
        <div className="press__pubs">
          {pubs.map((p,i) => (
            <React.Fragment key={p}>
              <span className="press__pub">{p}</span>
              {i < pubs.length - 1 && <span className="press__sep">·</span>}
            </React.Fragment>
          ))}
        </div>
        <div className="press__quotes">
          {quotes.map(({q, src}) => (
            <figure key={src} className="press__quote">
              <blockquote>"{q}"</blockquote>
              <figcaption>— {src.toUpperCase()}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

// ====== Tagline Moment ======
function TaglineMoment() {
  return (
    <section className="tagline-moment" data-screen-label="07b Tagline">
      <div className="tagline-moment__veil" aria-hidden="true"/>
      <div className="tagline-moment__inner">
        <h2 className="tagline-moment__title">Drawn from <em>the night.</em></h2>
        <p className="tagline-moment__sub">An atelier of considered jewellery, made for the women who keep what matters.</p>
      </div>
    </section>
  );
}

// ====== Signature Stone — Scroll-controlled diamond rotation ======
function SignatureStone() {
  const sectionRef = useRef(null);
  const imgRef = useRef(null);
  const frameRef = useRef(0);
  const rafRef = useRef(null);
  const LAST_FRAME = 71;

  const pad = (n) => String(n).padStart(3, '0');
  const frameSrc = (n) => `assets/diamond-frames/jull_diamond_rot_${pad(n)}.webp`;

  useEffect(() => {
    const prefersReduced = globalThis.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      if (imgRef.current) imgRef.current.src = frameSrc(18);
      return;
    }

    // Preload priority frames immediately
    [0, 12, 24, 36, 48, 60, 71].forEach(n => {
      const img = new Image(); img.src = frameSrc(n);
    });

    // Preload the rest on idle
    const loadRest = () => {
      const priority = new Set([0, 12, 24, 36, 48, 60, 71]);
      for (let i = 1; i <= LAST_FRAME; i++) {
        if (!priority.has(i)) { const img = new Image(); img.src = frameSrc(i); }
      }
    };
    'requestIdleCallback' in globalThis ? globalThis.requestIdleCallback(loadRest) : setTimeout(loadRest, 2000);

    const updateFrame = () => {
      if (!sectionRef.current || !imgRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const scrollable = sectionRef.current.offsetHeight - globalThis.innerHeight;
      if (scrollable <= 0) return;
      const progress = Math.max(0, Math.min(1, -rect.top / scrollable));
      const newFrame = Math.min(LAST_FRAME, Math.floor(progress * LAST_FRAME));
      if (newFrame !== frameRef.current) {
        frameRef.current = newFrame;
        imgRef.current.src = frameSrc(newFrame);
      }
    };

    const onScroll = () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(updateFrame);
    };

    globalThis.addEventListener('scroll', onScroll, { passive: true });
    updateFrame();
    return () => {
      globalThis.removeEventListener('scroll', onScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const callouts = [
    'Warm champagne centre stone',
    'Step-cut moval lab diamond',
    'Architectural facets',
    'Light from every angle',
  ];

  return (
    <section ref={sectionRef} className="stone-scroll" data-screen-label="02 Signature Stone">
      <div className="stone-scroll__sticky">
        <div className="stone-scroll__inner">
          <div className="stone-scroll__copy">
            <span className="eyebrow">The Signature Stone</span>
            <h2 className="display stone-scroll__headline">The architecture <em>of light.</em></h2>
            <p className="body stone-scroll__body">
              A warm champagne centre stone, cut as a step-cut moval lab diamond — luminous,
              architectural, and shaped to hold meaning from every angle.
            </p>
            <div className="stone-scroll__callouts">
              {callouts.map(c => (
                <div key={c} className="stone-scroll__callout">
                  <span className="stone-scroll__callout-line" aria-hidden="true"/>
                  <span className="stone-scroll__callout-text">{c}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="stone-scroll__diamond-wrap">
            <div className="stone-scroll__glow" aria-hidden="true"/>
            <img
              ref={imgRef}
              src="assets/diamond-frames/jull_diamond_rot_000.webp"
              alt="Rotating champagne step-cut moval lab diamond"
              className="stone-scroll__diamond"
              draggable="false"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

// ====== Sketch ======
function Sketch() {
  return (
    <section className="sketch-intro" data-screen-label="03 From Sketch to Heirloom">
      <div className="sketch-intro__head">
        <span className="eyebrow">From Sketch to Heirloom</span>
        <h2 className="display">The first line <em>of a future heirloom.</em></h2>
        <p className="lede">
          A closer look at the first Jull design — from hand-drawn notes to a piece
          shaped with sentiment.
        </p>
        <a className="link">Explore the First Piece <span>→</span></a>
      </div>
      <div className="sketch-intro__art">
        <img src="assets/design-board.png" alt="Jull atelier design board — the first piece"/>
      </div>
    </section>
  );
}

// ====== Design Board ======
function DesignBoard() {
  return (
    <section className="design-board" data-screen-label="04 Design Board">
      <div className="design-board__inner">
        <div className="design-board__copy">
          <h2>From Sketch <em>to Heirloom.</em></h2>
          <p className="design-board__sub">
            The first Jull Fine Jewellery design — a warm champagne step-cut moval
            lab diamond, set in 14KT yellow gold with delicate pavé side stones.
          </p>
          <p className="design-board__body">
            Designed as an heirloom from the very first sketch, this piece brings together
            a 2.00CT champagne step-cut moval centre stone, EF / VS round-cut side stones,
            and warm 14KT yellow gold. Refined, sentimental, and made to feel personal
            from the beginning.
          </p>
          <div className="design-board__specs">
            <div>
              <div className="design-board__spec-label">Centre Stone</div>
              <div className="design-board__spec-value">2.00 ct · Champagne</div>
            </div>
            <div>
              <div className="design-board__spec-label">Cut</div>
              <div className="design-board__spec-value">Step · Moval</div>
            </div>
            <div>
              <div className="design-board__spec-label">Side Stones</div>
              <div className="design-board__spec-value">0.40 tcw · EF / VS</div>
            </div>
            <div>
              <div className="design-board__spec-label">Metal</div>
              <div className="design-board__spec-value">14KT yellow gold</div>
            </div>
          </div>
          <a className="design-board__cta">Explore the First Piece <span className="arr">→</span></a>
        </div>
      </div>
    </section>
  );
}

// ====== First Piece ======
function FirstPiece() {
  return (
    <section className="first" data-screen-label="04 First Piece">
      <div className="first__grid">
        <div className="first__image">
          <img src="assets/first-piece.png" alt="The first Jull piece"/>
        </div>
        <div className="first__copy">
          <span className="eyebrow">The First Piece · No. 001</span>
          <h2 className="display">The beginning <em>of the Maison.</em></h2>
          <p className="body" style={{maxWidth:440}}>
            The first Jull design is more than a piece of jewellery — it is the starting point
            of a language: warm stones, considered settings, and details made to be kept close.
          </p>
          <p className="first__quote">
            "I wanted a stone that felt like late afternoon light — soft, golden, and a little rare.
            That stone became the beginning of Jull."
          </p>
          <span className="first__signature">Jull</span>
          <span className="first__signature-name label">Founder · Designer</span>
          <div style={{marginTop:36,display:'flex',gap:18,flexWrap:'wrap'}}>
            <button className="btn">View the Signature Piece <span className="arrow">→</span></button>
            <button className="btn btn--ghost">Read the Story</button>
          </div>
        </div>
      </div>
    </section>
  );
}

// ====== Collections ======
function Collections() {
  const cards = [
    { num: '01', name: 'The Signature Collection', desc: 'The founding language of Jull — warm stones, soft geometry, and settings that feel intimate from the first wear.', tone: 'cream' },
    { num: '02', name: 'The Heirloom Edit', desc: 'Pieces drawn to be passed on. Quiet forms, considered metals, and details made to grow more loved with time.', tone: 'wine' },
    { num: '03', name: 'Champagne Hours', desc: 'A study of the signature stone — luminous champagne diamonds set against polished gold and soft silhouettes.', tone: 'champagne' },
  ];
  return (
    <section className="collections" data-screen-label="05 Collections">
      <div className="collections__head">
        <div>
          <span className="eyebrow">The Collections</span>
          <h2 className="display" style={{marginTop:24}}>Jewellery as <em>chapters.</em></h2>
        </div>
        <p className="body">
          A series of intimate jewellery stories, each designed around sentiment, light,
          and modern heirloom form.
        </p>
      </div>
      <div className="grid-3" style={{maxWidth:1440,margin:'0 auto'}}>
        {cards.map(c => (
          <div key={c.num} className="collection-card">
            <div className="collection-card__image">
              <div className="ph" style={{
                background: c.tone==='wine' ? 'linear-gradient(160deg, #4B1412, #711F1B)'
                          : c.tone==='champagne' ? 'linear-gradient(160deg, #E8D4A8, #D8B46A)'
                          : 'linear-gradient(160deg, #FFF8EE, #B8A38F)',
                color: c.tone==='wine' ? '#D8B46A' : '#4A2F27'
              }}>
                <span style={{fontFamily:'var(--serif)',fontStyle:'italic',fontSize:64,letterSpacing:'-0.02em'}}>
                  {c.num}
                </span>
              </div>
              <div className="collection-card__num">{c.num}</div>
            </div>
            <div className="collection-card__body">
              <h3>{c.name}</h3>
              <p>{c.desc}</p>
              <span className="collection-card__cta">Explore <span>→</span></span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// ====== Categories ======
function Categories() {
  const cats = [
    { name: 'Rings', svg: Glyph.ring },
    { name: 'Earrings', svg: Glyph.earring },
    { name: 'Necklaces', svg: Glyph.necklace },
    { name: 'Bracelets', svg: Glyph.bracelet },
  ];
  return (
    <section className="cats" data-screen-label="06 Categories">
      <div className="cats__head">
        <div>
          <span className="eyebrow">Explore Jewellery</span>
          <h2 style={{marginTop:16}}>Categories</h2>
        </div>
        <a className="link">View all jewellery <span>→</span></a>
      </div>
      <div className="grid-4" style={{maxWidth:1440,margin:'0 auto'}}>
        {cats.map(c => (
          <div key={c.name} className="cat-card">
            <div className="cat-card__image">{c.svg}</div>
            <div className="cat-card__name">{c.name}<span className="arr">→</span></div>
          </div>
        ))}
      </div>
    </section>
  );
}

// ====== Featured products ======
function Icons() {
  const products = [
    { name: 'The Elara Ring', mat: '18ct Yellow Gold · Champagne Diamond', price: '$4,280' },
    { name: 'The Maeve Hoops', mat: '18ct Gold · Pavé Diamond', price: '$2,150' },
    { name: 'The Solenne Pendant', mat: '18ct Gold · Step-cut Stone', price: '$3,420' },
    { name: 'The Aurelia Bracelet', mat: '18ct Gold · Fine Pavé', price: '$5,680' },
    { name: 'The Celeste Studs', mat: '18ct Gold · Round Brilliant', price: '$1,690' },
    { name: 'The Isla Signet', mat: '18ct Gold · Engravable', price: '$2,940' },
    { name: 'The Noa Chain', mat: '18ct Gold · Hand-finished', price: '$1,820' },
    { name: 'The Amara Band', mat: '18ct Gold · Comfort fit', price: '$1,260' },
  ];
  return (
    <section className="icons-section" data-screen-label="07 Icons">
      <div className="cats__head">
        <div>
          <span className="eyebrow">Icons of Jull</span>
          <h2 className="display" style={{marginTop:20,fontSize:'clamp(36px,4vw,56px)'}}>Pieces, <em>kept close.</em></h2>
        </div>
        <a className="link">Shop all <span>→</span></a>
      </div>
      <div className="grid-4" style={{maxWidth:1440,margin:'0 auto'}}>
        {products.map(p => (
          <div key={p.name} className="product-card">
            <div className="product-card__image">
              <span className="ph-mark"><img src="uploads/jull-j-mark-transparent.png" alt=""/></span>
              <div className="product-card__wish">{Glyph.heart}</div>
              <div className="product-card__quick">Quick Add</div>
            </div>
            <div className="product-card__body">
              <div>
                <h3 className="product-card__name">{p.name}</h3>
                <span className="product-card__mat">{p.mat}</span>
              </div>
              <span className="product-card__price">{p.price}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// ====== Bridal ======
function Bridal() {
  return (
    <section className="bridal" data-screen-label="08 Bridal">
      <div className="bridal__image">
        <div className="bridal__placeholder">
          <img src="uploads/jull-monogram-transparent.png" alt="Jull monogram" className="bridal__monogram"/>
          <span>Bridal &amp; Bespoke Image</span>
          <span style={{color:'var(--taupe)'}}>1200 × 1500</span>
        </div>
      </div>
      <div className="bridal__copy">
        <span className="eyebrow light">Bridal · Bespoke · Redesign</span>
        <h2 className="display">Begin with a piece. <em>End with a legacy.</em></h2>
        <p className="body">
          From engagement pieces to sentimental redesigns, Jull offers private consultations
          for jewellery designed around your story — a quiet conversation, then a piece made
          to be kept for generations.
        </p>
        <div className="bridal__cta">
          <button className="btn" style={{background:'var(--champagne)',borderColor:'var(--champagne)',color:'var(--mocha)'}}>Bridal &amp; Bespoke <span className="arrow">→</span></button>
          <button className="btn btn--ivory-ghost">Book a Consultation</button>
        </div>
        <div style={{marginTop:56,display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:24,paddingTop:32,borderTop:'1px solid var(--hairline-light)'}}>
          {['Private showroom','By appointment only','Worldwide delivery'].map(t => (
            <div key={t} style={{fontSize:10,letterSpacing:'0.28em',textTransform:'uppercase',color:'var(--taupe-soft)'}}>
              <span style={{color:'var(--champagne)',marginRight:8}}>◆</span>{t}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ====== Gifts ======
function Gifts() {
  const gifts = [
    { num: '01', name: 'For\u00a0Her', tone: 'ivory' },
    { num: '02', name: 'Birthday\u00a0Gifts', tone: 'champagne' },
    { num: '03', name: 'Anniversary\u00a0Pieces', tone: 'wine' },
    { num: '04', name: 'Under\u00a0$250', tone: 'ivory' },
  ];
  return (
    <section className="gifts" data-screen-label="09 Gifts">
      <div className="gifts__head">
        <span className="eyebrow center">Gifts</span>
        <h2 className="display">Gifts <em>with meaning.</em></h2>
        <p className="body" style={{maxWidth:480,margin:'16px auto 0'}}>
          Considered jewellery for the moments you want to remember.
        </p>
      </div>
      <div className="grid-4" style={{maxWidth:1440,margin:'0 auto'}}>
        {gifts.map(g => (
          <div key={g.num} className="gift-card" data-tone={g.tone}>
            <div className="gift-card__bg"/>
            <div className="gift-card__inner">
              <div className="gift-card__num">— {g.num}</div>
              <div>
                <h3 className="gift-card__name">{g.name.split('\u00a0')[0]}<em>{g.name.split('\u00a0').slice(1).join(' ')}</em></h3>
                <span className="gift-card__cta">Discover <span className="arr">→</span></span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// ====== Materials ======
function Materials() {
  const m = [
    { num: '01', icon: Glyph.leaf, name: 'Fine Materials', desc: 'Ethically sourced champagne diamonds, recycled 18ct gold, and stones chosen for their quiet character.' },
    { num: '02', icon: Glyph.hammer, name: 'Crafted to Last', desc: 'Each piece is hand-finished by master jewellers — settings made to be worn every day, then passed on.' },
    { num: '03', icon: Glyph.cloth, name: 'Jewellery Care', desc: 'A small ritual of care. Soft cloths, gentle storage, and an at-home guide that arrives with every piece.' },
  ];
  return (
    <section className="materials" data-screen-label="10 Materials">
      <div className="materials__head">
        <div>
          <span className="eyebrow">Materials &amp; Provenance</span>
          <h2 className="display" style={{marginTop:20}}>Made <em>with intention.</em></h2>
        </div>
        <p className="body">
          A quiet focus on considered materials, enduring forms, and details designed to be kept.
        </p>
      </div>
      <div className="grid-3" style={{maxWidth:1440,margin:'0 auto'}}>
        {m.map(c => (
          <div key={c.num} className="material-card">
            <div className="material-card__num">— {c.num}</div>
            <div className="material-card__icon">{c.icon}</div>
            <h3>{c.name}</h3>
            <p>{c.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

// ====== Journal ======
function Journal() {
  const posts = [
    { cat: 'Maison Notes', date: 'May 2026', title: 'What makes a modern heirloom?', desc: 'On the quiet objects we keep, and why a piece of jewellery becomes a story before it becomes a possession.' },
    { cat: 'Sentiment', date: 'Apr 2026', title: 'Choosing jewellery with sentiment.', desc: 'A short guide to choosing pieces that feel personal — from the first wear to the years that follow.' },
    { cat: 'Atelier', date: 'Mar 2026', title: 'Caring for fine jewellery.', desc: 'Soft cloths, careful storage, and the small daily rituals that keep gold and stones at their best.' },
  ];
  return (
    <section className="journal" data-screen-label="11 Journal">
      <div className="journal__head">
        <div>
          <span className="eyebrow">Maison Diary</span>
          <h2 style={{marginTop:20}}>Notes from <em>the Maison.</em></h2>
        </div>
        <a className="link">All journal entries <span>→</span></a>
      </div>
      <div className="grid-3" style={{maxWidth:1440,margin:'0 auto'}}>
        {posts.map((p,i) => (
          <article key={i} className="journal-card">
            <div className="journal-card__image">[ Editorial · {p.cat} ]</div>
            <div className="journal-card__meta">
              <span>{p.cat}</span>
              <span className="dot">◆</span>
              <span>{p.date}</span>
            </div>
            <h3>{p.title}</h3>
            <p>{p.desc}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

// ====== Newsletter ======
function Newsletter() {
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);
  return (
    <section className="newsletter" data-screen-label="12 Newsletter">
      <div className="newsletter__inner">
        <span className="eyebrow light">The List</span>
        <h2>Join the <em>Jull list.</em></h2>
        <p className="body">
          Private previews, new collection notes, and quiet stories from the Maison —
          delivered no more than once a month.
        </p>
        {!sent ? (
          <form className="newsletter__form" onSubmit={(e)=>{e.preventDefault();setSent(true);}}>
            <input type="email" placeholder="YOUR EMAIL" value={email} onChange={e=>setEmail(e.target.value)} required/>
            <button type="submit">Join <span>→</span></button>
          </form>
        ) : (
          <div className="newsletter__sig">— welcomed.</div>
        )}
        <div className="newsletter__legal">By joining, you accept our quiet privacy policy.</div>
      </div>
    </section>
  );
}

// ====== Footer ======
function Footer() {
  const cols = [
    { h: 'Jewellery', items: ['Rings','Earrings','Necklaces','Bracelets','All Jewellery'] },
    { h: 'The Maison', items: ['Our Story','From Sketch to Heirloom','Craftsmanship','Materials & Provenance','Jewellery Care'] },
    { h: 'Services', items: ['Bridal & Bespoke','Book Appointment','Gifts','Journal','Contact'] },
    { h: 'Care', items: ['Shipping','Returns','Jewellery Care','Privacy Policy','Instagram'] },
  ];
  return (
    <footer className="footer" data-screen-label="13 Footer">
      <div className="footer__top">
        <div className="footer__brand">
          <img src="uploads/jull-wordmark-transparent.png" alt="Jull Fine Jewellery" className="wordmark-img wordmark-img--footer"/>
          <p className="footer__tag">Quiet beauty. Every detail. Designed to be loved, crafted to be passed on.</p>
        </div>
        {cols.map(c => (
          <div key={c.h} className="footer__col">
            <h4>{c.h}</h4>
            <ul>{c.items.map(i => <li key={i}><a>{i}</a></li>)}</ul>
          </div>
        ))}
      </div>
      <div className="footer__bottom">
        <div>© MMXXVI Jull Fine Jewellery · Melbourne</div>
        <div style={{display:'flex',gap:24}}>
          <a>Instagram</a><a>Pinterest</a><a>Email</a>
        </div>
      </div>
    </footer>
  );
}

// expose
Object.assign(globalThis, {
  Header, Hero, Marquee, SignatureStone, Sketch, DesignBoard, FirstPiece,
  Collections, Categories, Icons, Bridal, Gifts, Materials,
  PressFeatures, TaglineMoment, Journal, Newsletter, Footer
});
