/* global React */
const { useState, useEffect } = React;

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
        <a href="#" style={{textAlign:'center'}}>
          <div className="wordmark">Jull</div>
          <div className="wordmark__sub">Fine Jewellery</div>
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
            <button type="button" aria-label="Search">{Glyph.search}</button>
            <button type="button" aria-label="Wishlist">{Glyph.heart}</button>
            <button type="button" aria-label="Cart">{Glyph.bag}</button>
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
          <button type="button" className="btn">Explore Jewellery <span className="arrow">→</span></button>
          <button type="button" className="btn btn--ghost">Book a Private Consultation</button>
        </div>
        <div style={{marginTop:48,display:'flex',alignItems:'center',gap:14,fontSize:10,letterSpacing:'0.32em',textTransform:'uppercase',color:'var(--mocha-soft)'}}>
          <span style={{width:24,height:1,background:'var(--champagne)'}}/>
          Free private consultations · Worldwide delivery
        </div>
      </div>
      <div className="hero__image">
        <img src={globalThis.__resources.heroStone} alt="Step-cut moval champagne diamond" />
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

// ====== Signature Stone ======
function SignatureStone() {
  return (
    <section className="stone" data-screen-label="02 Signature Stone">
      <div className="stone__grid">
        <div className="stone__image">
          <img src={globalThis.__resources.heroStone} alt="Champagne diamond"/>
          <div className="stone__annot a1"><span>Step-cut facets</span></div>
          <div className="stone__annot a2"><span>Moval silhouette</span></div>
          <div className="stone__annot a3"><span>Champagne hue</span></div>
        </div>
        <div className="stone__copy">
          <span className="eyebrow">The Signature Stone</span>
          <h2 className="display" style={{marginTop:24}}>A champagne light, <em>cut with intention.</em></h2>
          <p className="body">
            Inspired by the warmth and geometry of a step-cut moval champagne diamond, Jull begins with
            a stone that feels intimate, luminous, and quietly rare — the centre of every piece we draw.
          </p>
          <a className="link">Discover the Stone <span>→</span></a>
          <div className="stone__specs">
            <div><div className="spec__label">Cut</div><div className="spec__value">Step · Moval</div></div>
            <div><div className="spec__label">Hue</div><div className="spec__value">Champagne</div></div>
            <div><div className="spec__label">Provenance</div><div className="spec__value">Ethically sourced</div></div>
            <div><div className="spec__label">Setting</div><div className="spec__value">Atelier-set</div></div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ====== Sketch ======
function Sketch() {
  const steps = [
    { num: '01', name: 'A Sketch' },
    { num: '02', name: 'A Stone' },
    { num: '03', name: 'A Setting' },
    { num: '04', name: 'An Heirloom' },
  ];
  return (
    <section className="sketch" data-screen-label="03 Sketch">
      <div className="sketch__grid">
        <div className="sketch__copy">
          <span className="eyebrow light">From Sketch to Heirloom</span>
          <h2 className="display" style={{marginTop:24}}>Every piece begins <em>as a feeling.</em></h2>
          <p className="body">
            Drawn, refined, and shaped into form, each Jull piece starts with intention —
            a line on paper, a chosen stone, a setting designed to hold meaning.
          </p>
          <a className="link light">Inside the Atelier <span>→</span></a>
          <div className="sketch__steps">
            {steps.map(s => (
              <div key={s.num} className="sketch__step">
                <span className="num">{s.num}</span>
                <span className="name">{s.name}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="sketch__image">
          <img src={globalThis.__resources.sketchAtelier} alt="Jull sketch sheet"/>
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
          <img src={globalThis.__resources.firstPiece} alt="The first Jull piece"/>
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
            <button type="button" className="btn">View the Signature Piece <span className="arrow">→</span></button>
            <button type="button" className="btn btn--ghost">Read the Story</button>
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
              <span className="ph-mark">J</span>
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
          <span style={{fontFamily:'var(--script)',fontSize:120,color:'var(--champagne)',lineHeight:1}}>J</span>
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
          <button type="button" className="btn" style={{background:'var(--champagne)',borderColor:'var(--champagne)',color:'var(--mocha)'}}>Bridal &amp; Bespoke <span className="arrow">→</span></button>
          <button type="button" className="btn btn--ivory-ghost">Book a Consultation</button>
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
          <div className="wordmark">Jull</div>
          <div className="wordmark__sub">Fine Jewellery</div>
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
  Header, Hero, Marquee, SignatureStone, Sketch, FirstPiece,
  Collections, Categories, Icons, Bridal, Gifts, Materials,
  Journal, Newsletter, Footer
});
