import { useEffect, useRef, useState } from 'react'
import { FaFacebookF, FaGithub, FaInstagram, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa'
import { FaCss3Alt, FaDatabase, FaFileCode, FaFigma, FaJsSquare, FaPython, FaReact } from 'react-icons/fa'
import { SiFirebase } from 'react-icons/si'
import './App.css'
import './Motion.css'

const skills = ['Figma', 'React', 'JavaScript', 'Python', 'HTML & CSS', 'MySQL', 'Firebase', 'Analisis Sistem', 'Prototyping']
const skillIcons = { 'Figma': FaFigma, 'React': FaReact, 'JavaScript': FaJsSquare, 'Python': FaPython, 'HTML & CSS': FaCss3Alt, 'MySQL': FaDatabase, 'Firebase': SiFirebase, 'Analisis Sistem': FaFileCode, 'Prototyping': FaFigma }

const projects = [
  { id: '01', title: 'Alinea Laundry', type: 'Produk digital + UI/UX', description: 'Pengalaman digital yang membantu pelanggan menemukan layanan laundry, memilih kebutuhan, dan memantau proses dengan lebih mudah.', art: 'art-archive', image: '/alinea-laundry.jpg', action: 'Lihat studi kasus' },
  { id: '02', title: 'Honea', type: 'Aplikasi penjualan', description: 'Aplikasi penjualan nanas madu yang membantu pelanggan menemukan produk, memilih pesanan, dan berbelanja dengan mudah.', art: 'art-social', image: '/honea.jpg', action: 'Lihat studi kasus' },
]

const timeline = {
  'Alinea Laundry': {
    title: 'Alinea Laundry / Ringkasan dampak',
    description: 'Menyederhanakan proses pemesanan laundry agar pelanggan dapat memilih layanan, melihat status cucian, dan mendapatkan informasi dengan cepat.',
    tags: ['Pesan lebih mudah', 'Status transparan', 'Layanan terarah'],
    next: ['Tambahkan pelacakan kurir.', 'Buat pengingat pesanan selesai.', 'Uji coba dengan pelanggan sekitar.'],
    steps: [['Riset kebutuhan', 'Memahami kebiasaan pelanggan saat memilih layanan laundry.'], ['Rancang alur layanan', 'Menyusun alur pemesanan, status, dan informasi harga.'], ['Prototipe interaktif', 'Menguji pengalaman digital melalui wireframe dan prototype.']],
  },
  Honea: {
    title: 'Honea / Ringkasan dampak',
    description: 'Membuat proses penjualan nanas madu terasa lebih mudah, dari memilih produk hingga menyelesaikan pesanan.',
    tags: ['Katalog jelas', 'Pesan lebih mudah', 'Produk terarah'],
    next: ['Tambahkan pelacakan pengiriman.', 'Buat paket langganan mingguan.', 'Tambahkan ulasan dari pelanggan.'],
    steps: [['Pahami kebutuhan', 'Memahami cara pelanggan memilih nanas madu dan menentukan jumlah pesanan.'], ['Rancang katalog', 'Menyusun informasi produk, harga, dan pilihan pesanan agar mudah dipahami.'], ['Validasi alur beli', 'Menguji proses belanja dari katalog sampai konfirmasi pesanan.']],
  },
}

const hobbies = [
  { title: 'My Family', description: 'Keluarga adalah tempat saya menemukan dukungan, kehangatan, dan semangat untuk terus berkembang.', art: 'hobby-drawing', image: '/family.jpg', symbol: '✦' },
  { title: 'Musik & playlist', description: 'Musik membantu saya menemukan ritme saat merancang sesuatu.', art: 'hobby-music', image: '/beatles.jpg', symbol: '♫' },
  { title: 'Jalan-jalan', description: 'Mengamati tempat dan orang baru selalu memberi sudut pandang baru.', art: 'hobby-trip', symbol: '↗' },
]

const education = [
  { period: '2021 - 2024', school: 'SMAN 12 Bekasi', description: 'Menyelesaikan pendidikan menengah dan mulai membangun ketertarikan pada teknologi serta dunia digital.' },
  { period: '2024 - Sekarang', school: 'Universitas Negeri Semarang', description: 'Menempuh pendidikan tinggi sambil mengembangkan kemampuan analisis sistem, UI/UX, dan pengembangan web.' },
]

function App() {
  const [activeProject, setActiveProject] = useState(projects[0])
  const [selectedProject, setSelectedProject] = useState(null)
  const [isLight, setIsLight] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const playerRef = useRef(null)
  const activeTimeline = timeline[activeProject.title]

  useEffect(() => {
    const sections = document.querySelectorAll('.page-content .stack-panel, .page-content .section-block, .page-content .contact-banner')
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        entry.target.classList.toggle('is-visible', entry.intersectionRatio > 0)
      })
    }, { threshold: [0, 0.05], rootMargin: '0px' })

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  const toggleMusic = () => {
    const command = isPlaying ? 'pauseVideo' : 'playVideo'
    playerRef.current?.contentWindow.postMessage(JSON.stringify({ event: 'command', func: command, args: [] }), '*')
    setIsPlaying(!isPlaying)
  }

  return (
    <div className={isLight ? 'site light-mode' : 'site'}>
      <div className="ambient ambient-one" /><div className="ambient ambient-two" />
      <header className="topbar shell"><a className="brand" href="#top"><span>MR</span><b>Mecca Robbani</b></a><nav className={menuOpen ? 'nav-links open' : 'nav-links'}><a href="#proyek" onClick={() => setMenuOpen(false)}>Proyek</a><a href="#proses" onClick={() => setMenuOpen(false)}>Proses</a><a href="#tentang" onClick={() => setMenuOpen(false)}>Tentang</a><a href="#kontak" onClick={() => setMenuOpen(false)}>Kontak</a><button className="theme-button" type="button" onClick={() => setIsLight(!isLight)}>{isLight ? 'Gelap' : 'Terang'} <i /></button></nav><button className="menu-button" type="button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Buka menu"><span /><span /></button></header>

      <div className="saturn-background" aria-hidden="true"><svg className="saturn-illustration" viewBox="0 0 520 340" role="presentation"><defs><radialGradient id="saturnGlow" cx="34%" cy="22%" r="78%"><stop offset="0" stopColor="#fff5d5" /><stop offset=".16" stopColor="#dfb9ad" /><stop offset=".48" stopColor="#a87991" /><stop offset=".78" stopColor="#513b5d" /><stop offset="1" stopColor="#171324" /></radialGradient><linearGradient id="saturnBands" x1="0" y1="0" x2="0" y2="1"><stop stopColor="#f7d9c1" stopOpacity=".62" /><stop offset=".2" stopColor="#8f6889" stopOpacity=".46" /><stop offset=".35" stopColor="#ebc1bd" stopOpacity=".55" /><stop offset=".53" stopColor="#604565" stopOpacity=".5" /><stop offset=".7" stopColor="#d5a4ac" stopOpacity=".48" /><stop offset=".86" stopColor="#76516f" stopOpacity=".55" /><stop offset="1" stopColor="#c790a0" stopOpacity=".38" /></linearGradient><linearGradient id="ringMaterial" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#5c4d69" /><stop offset=".18" stopColor="#d8c7d3" /><stop offset=".32" stopColor="#7c6683" /><stop offset=".44" stopColor="#ead9d2" /><stop offset=".55" stopColor="#64536f" /><stop offset=".72" stopColor="#d2bdca" /><stop offset="1" stopColor="#403652" /></linearGradient><filter id="saturnTexture"><feTurbulence type="fractalNoise" baseFrequency=".025 .18" numOctaves="3" seed="7" /><feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 .8 0 0 0 0 0 .28 0" /></filter><filter id="saturnShadow"><feGaussianBlur stdDeviation="7" /></filter><mask id="planetMask"><circle cx="260" cy="170" r="69" fill="white" /></mask></defs><g className="ring-back"><ellipse cx="260" cy="170" rx="214" ry="62" fill="none" stroke="#332b42" strokeWidth="18" /><ellipse cx="260" cy="170" rx="214" ry="62" fill="none" stroke="url(#ringMaterial)" strokeWidth="11" strokeDasharray="2 4" /><ellipse cx="260" cy="170" rx="157" ry="43" fill="none" stroke="#171323" strokeWidth="8" /></g><ellipse className="saturn-shadow" cx="246" cy="238" rx="78" ry="18" fill="#000" opacity=".46" filter="url(#saturnShadow)" /><g mask="url(#planetMask)"><circle cx="260" cy="170" r="69" fill="url(#saturnGlow)" /><rect x="190" y="99" width="140" height="142" fill="url(#saturnBands)" opacity=".8" /><rect x="190" y="99" width="140" height="142" filter="url(#saturnTexture)" opacity=".42" /><ellipse cx="237" cy="130" rx="30" ry="16" fill="#fff1d8" opacity=".2" /><ellipse cx="284" cy="200" rx="48" ry="22" fill="#171323" opacity=".38" /></g><circle cx="260" cy="170" r="69" fill="none" stroke="#f7d8cf" strokeOpacity=".35" strokeWidth="2" /><g className="ring-front"><path d="M45 170 C104 217 185 232 260 232 C335 232 416 217 475 170" fill="none" stroke="#4b3c56" strokeWidth="20" /><path d="M45 170 C104 217 185 232 260 232 C335 232 416 217 475 170" fill="none" stroke="url(#ringMaterial)" strokeWidth="11" strokeDasharray="3 3" /><path d="M103 189 C154 215 207 221 260 221 C313 221 366 215 417 189" fill="none" stroke="#181324" strokeWidth="7" /></g></svg></div>
      <main id="top" className="shell page-content">
        <section className="profile-hero"><div className="profile-intro"><p className="terminal-line" /><h1>Halo Saya<br /><em>Mecca Robbani Arianto</em></h1><p className="profile-role">Mahasiswa Sistem Informasi yang sedang membangun pengalaman digital yang berguna, jelas, dan terasa manusiawi.</p><div className="social-links" aria-label="Media sosial"><a href="https://www.instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram" title="Instagram"><FaInstagram aria-hidden="true" /></a><a href="https://wa.me" target="_blank" rel="noreferrer" aria-label="WhatsApp" title="WhatsApp"><FaWhatsapp aria-hidden="true" /></a><a href="https://github.com" target="_blank" rel="noreferrer" aria-label="GitHub" title="GitHub"><FaGithub aria-hidden="true" /></a><a href="https://www.linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn" title="LinkedIn"><FaLinkedinIn aria-hidden="true" /></a><a href="https://www.facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook" title="Facebook"><FaFacebookF aria-hidden="true" /></a></div><div className="quick-links"><a href="#proyek">Lihat proyek <span>↓</span></a><a href="#kontak">Ajak kolaborasi <span>↗</span></a></div></div><div className="profile-card"><div className="profile-photo"><img src="/profile.jpg" alt="Mecca Robbani Arianto" /><span className="photo-mark">●</span></div><div className="profile-card-footer"><span>Mecca Robbani Arianto</span><span>Bekasi, Indonesia</span></div></div></section>

        <section className="stack-panel" data-reveal><div className="section-kicker"><span>01</span><span>Alat yang saya gunakan</span></div><div className="skill-list">{skills.map((skill, index) => { const Icon = skillIcons[skill]; return <span key={skill} style={{ '--i': index }}><Icon aria-hidden="true" />{skill}</span> })}</div><div className="now-playing"><div className="equalizer"><i /><i /><i /><i /><i /></div><div><small>Sedang menemani saya</small><strong>Snooze - SZA</strong></div><button type="button" aria-label={isPlaying ? 'Jeda musik' : 'Putar musik'} onClick={toggleMusic}>{isPlaying ? '❚❚' : '▶'}</button><iframe ref={playerRef} className="music-player" title="Snooze oleh SZA" src="https://www.youtube.com/embed/Sv5yCzPCkv8?enablejsapi=1&playsinline=1" allow="autoplay; encrypted-media" /></div></section>

        <section className="section-block" id="proyek"><div className="section-title"><span className="section-number">02</span><div><p>Proyek pilihan</p><h2>Hal yang sudah<br /><em>saya bangun.</em></h2></div></div><div className="project-list">{projects.map((project) => <article className="project-card" key={project.id} onClick={() => setSelectedProject(project)} tabIndex="0" onKeyDown={(event) => event.key === 'Enter' && setSelectedProject(project)}><div className={`project-art ${project.art}${project.image ? ' project-photo' : ''}`}>{project.image ? <img src={project.image} alt={project.title} /> : <strong>{project.title.slice(0, 1)}</strong>}<span className="project-id">{project.id}</span><span className="project-symbol">{project.id === '01' ? '⌁' : project.id === '02' ? '✦' : '↗'}</span></div><div className="project-copy"><div><h3>{project.title}</h3><p>{project.description}</p></div><div className="project-meta"><span>{project.type}</span><b>{project.action} ↗</b></div></div></article>)}</div></section>

        <section className="section-block timeline-section" id="proses"><div className="section-title"><span className="section-number">03</span><div><p>Proses membangun</p><h2>Dari ide menjadi<br /><em>sesuatu yang nyata.</em></h2></div></div><div className="timeline-tabs">{projects.map((project) => <button type="button" className={activeProject.title === project.title ? 'active' : ''} key={project.id} onClick={() => setActiveProject(project)}>{project.title}</button>)}</div><article className="timeline-feature"><div className="timeline-summary"><span className="mini-label">{activeProject.id} / {activeProject.type}</span><h3>{activeTimeline.title}</h3><p>{activeTimeline.description}</p><div className="impact-tags">{activeTimeline.tags.map((tag) => <span key={tag}>{tag}</span>)}</div><div className="next-list"><small>Yang ingin saya kembangkan berikutnya</small><ul>{activeTimeline.next.map((item) => <li key={item}>{item}</li>)}</ul></div></div><div className="timeline-steps">{activeTimeline.steps.map((step, index) => <div className="timeline-step" key={step[0]}><span>0{index + 1}</span><div><h4>{step[0]}</h4><p>{step[1]}</p></div></div>)}</div></article></section>

        <section className="section-block education-section" id="pendidikan"><div className="section-title"><span className="section-number">04</span><div><p>Riwayat pendidikan</p><h2>Perjalanan<br /><em>belajar saya.</em></h2></div></div><div className="education-list">{education.map((item) => <article className="education-item" key={item.school}><span className="education-period">{item.period}</span><div><h3>{item.school}</h3><p>{item.description}</p></div></article>)}</div></section>

        <section className="section-block about-block" id="tentang"><div className="section-title"><span className="section-number">05</span><div><p>Di luar layar</p><h2>Hal-hal kecil yang<br /><em>membuat saya hidup.</em></h2></div></div><div className="hobby-grid">{hobbies.map((hobby) => <article className="hobby-card" key={hobby.title}><div className={`hobby-art ${hobby.art}${hobby.image ? ' hobby-photo' : ''}`}>{hobby.image ? <img src={hobby.image} alt={hobby.title} /> : <strong>{hobby.symbol}</strong>}</div><h3>{hobby.title}</h3><p>{hobby.description}</p></article>)}</div></section>

        <section className="contact-banner" id="kontak"><div><span className="section-number">06</span><p className="mini-label">Mari terhubung</p><h2>Punya ide yang<br /><em>ingin diwujudkan?</em></h2></div><div className="contact-actions"><p>Saya terbuka untuk proyek kecil, kolaborasi, atau obrolan tentang dunia digital.</p><a className="primary-action" href="mailto:mecca@example.com">Kirim email <span>↗</span></a><a className="secondary-action" href="https://github.com" target="_blank" rel="noreferrer">GitHub ↗</a></div></section>
      </main>

      <footer className="footer shell"><div><a href="https://www.instagram.com" target="_blank" rel="noreferrer">Instagram</a><a href="https://www.linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a><a href="https://github.com" target="_blank" rel="noreferrer">GitHub</a></div><button type="button" onClick={() => window.print()}><span>$</span> ./unduh_cv.sh</button><small>© 2025 Mecca Robbani Arianto</small></footer>
      {selectedProject && <div className="modal-backdrop" onClick={() => setSelectedProject(null)}><div className="project-modal" onClick={(event) => event.stopPropagation()}><button type="button" className="modal-close" onClick={() => setSelectedProject(null)} aria-label="Tutup detail proyek">×</button><div className={`project-art ${selectedProject.art}${selectedProject.image ? ' project-photo' : ''}`}>{selectedProject.image ? <img src={selectedProject.image} alt={selectedProject.title} /> : <strong>{selectedProject.title.slice(0, 1)}</strong>}</div><span className="mini-label">{selectedProject.type}</span><h2>{selectedProject.title}</h2><p>{selectedProject.description}</p><a className="primary-action" href="#kontak" onClick={() => setSelectedProject(null)}>Bicarakan proyek ini ↗</a></div></div>}
    </div>
  )
}

export default App