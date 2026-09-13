const modules = [
  ['Membership', 'Apply for membership, manage member profiles and renewals.'],
  ['Digital ID + QR', 'Member identity experience with a future-ready QR verification flow.'],
  ['Vehicles & Documents', 'Keep vehicle details and compliance documents organized.'],
  ['Complaints & Welfare', 'Submit, track and manage member complaints and welfare requests.'],
  ['Government & Association', 'Organize representations, notices, events and association documents.'],
  ['Admin ERP', 'A centralized foundation for approvals, reports, notifications and operations.'],
]

export default function Home() {
  return (
    <main>
      <div className="topbar"><div className="container"><span>GTDOA • Gujarat Transport Drivers Owners Association</span><span>Drivers • Owners • Transport Community</span></div></div>
      <header className="header"><nav className="container nav"><a className="brand" href="/"><span className="logo">G</span><span>GTDOA</span></a><div className="navlinks"><a href="#about">About</a><a href="#services">Services</a><a href="#membership">Membership</a><a href="#contact">Contact</a></div></nav></header>
      <section className="hero"><div className="container"><div style={{maxWidth:900}}><div style={{fontWeight:700,letterSpacing:1,marginBottom:14}}>GUJARAT TRANSPORT DRIVERS OWNERS ASSOCIATION</div><h1>One digital platform for Gujarat’s transport community.</h1><p>GTDOA is being built as a modern association platform connecting members, transport owners, drivers and administration through membership, digital identity, documents, welfare, complaints and association services.</p><div className="actions"><a className="btn primary" href="#membership">Become a Member</a><a className="btn secondary" href="#services">Explore Services</a></div></div></div></section>
      <section className="section" id="about"><div className="container"><h2>Built for the transport community</h2><p className="muted">A clean foundation designed to grow into the complete GTDOA public website, member portal and administrative ERP.</p><div className="grid"><div className="card"><h3>Members First</h3><p className="muted">Simple access to membership, digital ID, documents and association support.</p></div><div className="card"><h3>Transparent Operations</h3><p className="muted">Structured workflows for applications, approvals, complaints, welfare and reports.</p></div><div className="card"><h3>Secure Foundation</h3><p className="muted">The application is structured so authentication, database security and role-based access can be added safely.</p></div></div></div></section>
      <section className="section" id="services" style={{background:'#eef3f9'}}><div className="container"><h2>GTDOA Services</h2><p className="muted">The initial application foundation covers the major modules planned for the platform.</p><div className="grid">{modules.map(([title,text])=><div className="card" key={title}><h3>{title}</h3><p className="muted">{text}</p></div>)}</div></div></section>
      <section className="section" id="membership"><div className="container"><div className="card"><h2>Membership is coming to the portal</h2><p className="muted">The next implementation stage will connect membership applications, member profiles, verification, digital ID and QR-based access.</p><div className="actions"><a className="btn" style={{background:'#0d2a52',color:'#fff'}} href="#contact">Contact GTDOA</a></div></div></div></section>
      <footer className="footer" id="contact"><div className="container"><h3>GTDOA</h3><p>Gujarat Transport Drivers Owners Association</p><p>Digital foundation • Membership • Welfare • Association Services</p><p style={{marginTop:25,fontSize:13}}>© {new Date().getFullYear()} GTDOA. All rights reserved.</p></div></footer>
    </main>
  )
}
