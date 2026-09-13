import Shell from '@/app/ui/Shell'
import Link from 'next/link'
import {modules,stats} from '@/app/lib/modules'
export default function Admin(){return <Shell title="Admin ERP"><div className="stats">{stats.map(([a,b])=><div className="stat" key={a}><strong>{b}</strong><span>{a}</span></div>)}</div><div className="card"><h2>Operations</h2><div className="table-wrap"><table><thead><tr><th>Module</th><th>Purpose</th><th>Action</th></tr></thead><tbody>{modules.map(m=><tr key={m.id}><td><strong>{m.name}</strong></td><td>{m.desc}</td><td><Link href={m.path}>Open</Link></td></tr>)}</tbody></table></div></div></Shell>}
