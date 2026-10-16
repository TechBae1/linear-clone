import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronDown,
  Command,
  Layers3,
  ListTodo,
  MessageSquare,
  MoreHorizontal,
  Plus,
  Search,
  Sparkles,
  Zap,
} from "lucide-react";

const issues = [
  { id: "ENG-248", title: "Improve onboarding checklist", status: "In Progress", tone: "purple", avatar: "M" },
  { id: "ENG-246", title: "Add workspace switcher", status: "In Review", tone: "blue", avatar: "J" },
  { id: "ENG-241", title: "Polish empty states", status: "Todo", tone: "gray", avatar: "A" },
  { id: "ENG-238", title: "Fix keyboard navigation", status: "Done", tone: "green", avatar: "S" },
];

const capabilities = [
  {
    icon: ListTodo,
    title: "Plan with purpose",
    description: "Turn ambitious roadmaps into focused projects, clear priorities, and work your team can actually ship.",
    tag: "PROJECTS & ISSUES",
  },
  {
    icon: Layers3,
    title: "Move work forward",
    description: "Keep every project in motion with cycles, milestones, and a shared view of what matters next.",
    tag: "CYCLES & ROADMAPS",
  },
  {
    icon: Sparkles,
    title: "Make space for ideas",
    description: "Bring product context and execution together, so good ideas don't get lost between the two.",
    tag: "BUILT FOR PRODUCT TEAMS",
  },
];

function BrandMark({ className = "", id }: { className?: string; id: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      viewBox="0 0 100 100"
      fill="currentColor"
    >
      <defs>
        <clipPath id={id}>
          <circle cx="50" cy="50" r="50" />
        </clipPath>
      </defs>
      <circle cx="50" cy="50" r="50" />
      <g
        clipPath={`url(#${id})`}
        fill="none"
        stroke="var(--page)"
        strokeWidth="12"
      >
        <path d="M-8 12 42 62" />
        <path d="m12-8 76 76" />
        <path d="m58 38 50 50" />
      </g>
    </svg>
  );
}

function IssuePreview() {
  return (
    <div className="product-window">
      <div className="product-sidebar">
        <div className="product-workspace">
          <div className="workspace-avatar">S</div>
          <span>Studio North</span>
          <ChevronDown size={13} className="ml-auto text-[#8a8f98]" />
        </div>
        <div className="product-search"><Search size={13} /><span>Search</span><kbd>⌘ K</kbd></div>
        <div className="sidebar-link sidebar-link-active"><span className="sidebar-inbox-icon">✳</span> My issues <span className="sidebar-count">4</span></div>
        <div className="sidebar-link"><Layers3 size={14} /> Views</div>
        <div className="sidebar-link"><MessageSquare size={14} /> Inbox <span className="sidebar-unread" /></div>
        <div className="sidebar-label">WORKSPACE</div>
        <div className="sidebar-link"><span className="team-dot" /> Engineering <ChevronDown size={12} className="ml-auto" /></div>
        <div className="sidebar-link sidebar-nested"><span className="project-square" /> Website refresh</div>
        <div className="sidebar-link sidebar-nested"><span className="project-square project-square-blue" /> Mobile app</div>
        <div className="sidebar-link"><span className="team-dot team-dot-orange" /> Design</div>
        <div className="sidebar-label">YOUR TEAMS</div>
        <div className="sidebar-link"><span className="team-icon">E</span> Engineering</div>
        <div className="sidebar-link"><span className="team-icon team-icon-pink">D</span> Design</div>
      </div>

      <div className="product-main">
        <div className="product-topbar">
          <div className="breadcrumbs"><span>Engineering</span><span className="crumb-slash">/</span><span>My issues</span></div>
          <div className="product-top-actions"><button aria-label="More options"><MoreHorizontal size={16} /></button><button aria-label="Add issue"><Plus size={15} /></button></div>
        </div>
        <div className="issue-heading">
          <div><div className="issue-eyebrow">MONDAY, OCTOBER 12</div><h3>Good morning, Ada<span className="wave">✳</span></h3></div>
          <button className="new-issue-button"><Plus size={14} /> New issue</button>
        </div>
        <div className="issue-tabs"><span className="issue-tab-active">Assigned to me <b>4</b></span><span>Created by me</span><span>Subscribed</span></div>
        <div className="issue-list">
          {issues.map((issue) => (
            <div className="issue-row" key={issue.id}>
              <span className={`issue-status issue-status-${issue.tone}`}><span /></span>
              <span className="issue-key">{issue.id}</span>
              <span className="issue-title">{issue.title}</span>
              <span className={`issue-pill issue-pill-${issue.tone}`}>{issue.status}</span>
              <span className={`issue-avatar issue-avatar-${issue.avatar}`}>{issue.avatar}</span>
            </div>
          ))}
        </div>
        <div className="product-bottom-hint"><Command size={12} /> Press <kbd>K</kbd> to create an issue</div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#08090b] text-[#f7f8f8] selection:bg-violet-400/30 selection:text-white">
      <header className="site-header">
        <nav aria-label="Main navigation" className="nav-inner">
          <a href="#" className="brand" aria-label="Linear home">
            <BrandMark className="brand-mark" id="header-brand-mark" />
            <span>Linear</span>
          </a>
          <div className="desktop-nav">
            <a href="#product">Product</a>
            <a href="#features">Features</a>
            <a href="#workflow">Resources</a>
            <a href="#customers">Customers</a>
            <a href="#pricing">Pricing</a>
          </div>
          <div className="nav-actions">
            <a href="#get-started" className="login-link">Log in</a>
            <a href="#get-started" className="nav-cta">Sign up <ArrowRight size={13} /></a>
          </div>
          <details className="mobile-menu">
            <summary aria-label="Open navigation menu"><span /><span /></summary>
            <div className="mobile-menu-panel">
              <a href="#product">Product</a>
              <a href="#features">Features</a>
              <a href="#workflow">Resources</a>
              <a href="#customers">Customers</a>
              <a href="#pricing">Pricing</a>
              <a href="#get-started">Log in</a>
            </div>
          </details>
        </nav>
      </header>

      <section className="hero-section" id="product">
        <div className="hero-orb" />
        <div className="hero-copy">
          <a href="#features" className="announcement">
            <span className="announcement-spark"><Sparkles size={12} /></span>
            Introducing a calmer way to build
            <ArrowRight size={13} className="announcement-arrow" />
          </a>
          <h1>Build products<br />that <span>move you forward.</span></h1>
          <p className="hero-description">
            A thoughtfully designed tool for planning, building, and shipping
            great products. All your work, moving in the same direction.
          </p>
          <div className="hero-actions">
            <a href="#get-started" className="button-primary">Get started <ArrowRight size={15} /></a>
            <a href="#features" className="button-secondary">Explore the product <ArrowDown size={14} /></a>
          </div>
          <p className="hero-note"><Check size={13} /> Free for small teams <span>·</span> No credit card required</p>
        </div>
        <div className="product-preview-wrap">
          <div className="preview-glow" />
          <IssuePreview />
          <div className="preview-caption"><span className="preview-live-dot" /> Your team&apos;s work, in focus <span className="caption-divider">·</span> Designed for momentum</div>
        </div>
      </section>

      <section className="customer-strip" id="customers">
        <p>Helping ambitious teams do their best work</p>
        <div className="customer-logos" aria-label="Teams using Linear">
          <span className="customer-logo logo-vercel"><span>✳</span> NORTHSTAR</span>
          <span className="customer-logo logo-raycast"><span>◈</span> orbit</span>
          <span className="customer-logo logo-figma"><span className="figma-mark"><i /><i /><i /><i /><i /></span> daybreak</span>
          <span className="customer-logo logo-loom"><span>◉</span> studio</span>
          <span className="customer-logo logo-retro"><span>◒</span> fieldnotes</span>
        </div>
      </section>

      <section className="section-intro" id="features">
        <div className="section-kicker"><span /> EVERYTHING IN SYNC</div>
        <h2>Less busywork.<br /><span>More breakthroughs.</span></h2>
        <p>Product work is complicated enough. Bring your plans, projects, and people into one clear rhythm.</p>
      </section>

      <section className="capability-grid" aria-label="Product capabilities">
        {capabilities.map(({ icon: Icon, title, description, tag }, index) => (
          <article className={`capability-card capability-card-${index + 1}`} key={title}>
            <div className="capability-art">
              {index === 0 && <div className="mini-roadmap"><div><span className="roadmap-icon"><ListTodo size={13} /></span><span>Mobile experience</span><span className="roadmap-state">On track</span></div><div className="roadmap-progress"><i /></div><div className="roadmap-meta"><span>6 of 8 issues completed</span><span>75%</span></div></div>}
              {index === 1 && <div className="cycle-art"><div className="cycle-ring"><span><Zap size={17} /></span></div><div className="cycle-label cycle-label-one">Plan <i /></div><div className="cycle-label cycle-label-two">Build <i /></div><div className="cycle-label cycle-label-three">Ship <i /></div></div>}
              {index === 2 && <div className="idea-art"><div className="idea-card"><span className="idea-spark"><Sparkles size={14} /></span><span className="idea-title">A little more focus</span><span className="idea-line idea-line-wide" /><span className="idea-line" /><div className="idea-avatars"><i>M</i><i>J</i><i>A</i><span>+3</span></div></div><div className="idea-orbit idea-orbit-one" /><div className="idea-orbit idea-orbit-two" /></div>}
            </div>
            <div className="capability-copy">
              <span className="capability-tag"><Icon size={12} /> {tag}</span>
              <h3>{title}</h3>
              <p>{description}</p>
              <a href="#get-started">Explore {title.toLowerCase()} <ArrowRight size={13} /></a>
            </div>
          </article>
        ))}
      </section>

      <section className="workflow-section" id="workflow">
        <div className="workflow-copy">
          <div className="section-kicker"><span /> YOUR WORK, IN MOTION</div>
          <h2>A little more flow.<br /><span>A lot less friction.</span></h2>
          <p>From the first rough idea to the final detail, keep the whole team connected to what matters.</p>
          <a href="#get-started" className="text-link">See how it works <ArrowRight size={14} /></a>
        </div>
        <div className="workflow-visual">
          <div className="workflow-card workflow-card-back"><div className="workflow-card-top"><span className="workflow-icon workflow-icon-purple"><Layers3 size={13} /></span><span>Project update</span><MoreHorizontal size={15} /></div><div className="workflow-skeleton workflow-skeleton-long" /><div className="workflow-skeleton" /><div className="workflow-card-foot"><span className="workflow-avatar">M</span><span>Updated just now</span><span className="workflow-progress">On track</span></div></div>
          <div className="workflow-card workflow-card-front"><div className="workflow-card-top"><span className="workflow-icon workflow-icon-green"><Check size={13} /></span><span>Everything is moving</span></div><div className="workflow-check-row"><Check size={13} /><span>Design review complete</span><span>Done</span></div><div className="workflow-check-row"><Check size={13} /><span>Feedback collected</span><span>Done</span></div><div className="workflow-check-row workflow-pending"><span className="pending-ring" /><span>Ready to ship</span><span>Next up</span></div></div>
          <div className="workflow-spark"><Sparkles size={17} /></div>
        </div>
      </section>

      <section className="quote-section">
        <div className="quote-mark">“</div>
        <blockquote>Great tools should make hard things feel a little more <span>human.</span></blockquote>
        <div className="quote-attribution"><span className="quote-avatar">L</span><span><strong>Made for the people building what&apos;s next</strong><small>Thoughtful software. Considered by design.</small></span></div>
      </section>

      <section className="closing-cta" id="get-started">
        <div className="closing-orb" />
        <div className="section-kicker"><span /> FIND YOUR MOMENTUM</div>
        <h2>Make room for<br /><span>your best work.</span></h2>
        <p>Bring your team together around what matters.</p>
        <a href="#pricing" className="button-primary">Get started for free <ArrowRight size={15} /></a>
        <a href="#pricing" className="cta-footnote">See plans and pricing <ArrowUpRight size={12} /></a>
      </section>

      <footer className="site-footer" id="pricing">
        <div className="footer-top">
          <a href="#" className="brand footer-brand"><BrandMark className="brand-mark" id="footer-brand-mark" /><span>Linear</span></a>
          <p>Thoughtful tools for teams with things to build.</p>
          <a className="back-to-top" href="#" aria-label="Back to top"><ArrowUpRight size={15} /></a>
        </div>
        <div className="footer-links">
          <div><span>PRODUCT</span><a href="#features">Features</a><a href="#workflow">Workflows</a><a href="#pricing">Pricing</a></div>
          <div><span>COMPANY</span><a href="#customers">About</a><a href="#customers">Customers</a><a href="#workflow">Careers</a></div>
          <div><span>RESOURCES</span><a href="#workflow">Guides</a><a href="#workflow">Journal</a><a href="#workflow">Help center</a></div>
          <div><span>CONNECT</span><a href="#get-started">Contact</a><a href="#get-started">Sign in</a><a href="#get-started">Get started</a></div>
        </div>
        <div className="footer-bottom"><span>© 2025 Linear Clone. Made for teams that care.</span><div><a href="#pricing">Privacy</a><a href="#pricing">Terms</a><span className="footer-status"><i /> All systems normal</span></div></div>
      </footer>
    </main>
  );
}
