const data = {
    pt: {
        menuHome: "Início", menuPortfolio: "Portfólio", menuExperience: "Experiência",
        subtitle: "Editor de Vídeo e Motion Designer",
        summary: "Editor de vídeo e motion designer com mais de 13 anos de experiência em produção audiovisual. Atuação em agências, instituições de ensino e empresas de branding, entregando conteúdos institucionais, publicitários e educacionais para diversos formatos.",
        iaText: "✨ Atuação focada em evolução contínua, utilizando ferramentas de Inteligência Artificial para otimização de processos e fluxos de trabalho.",
        btnCv: "Baixar CV (PDF)", cvFile: "CURRICULO VINICIUS MORTARI PT-BR.pdf",
        portfolio: "Portfólio", btnAllVideos: "Ver todos os vídeos",
        experience: "Experiência", education: "Educação",
        languagesTitle: "Idiomas", langPt: "🇧🇷 Português (Fluente)", langEn: "🇺🇸 Inglês (Avançado)",
        course: "Bacharelado em Publicidade e Propaganda",
        experiences: [
            { role: "Audiovisual & Branding", company: "Ferrarezi Branding", logo: "frzi.png", period: "Jul 2024 - Atual", desc: "Desenvolvimento de conteúdos audiovisuais para branding e marketing digital. Criação de animações e vídeos institucionais alinhados à marca." },
            { role: "Editor de Vídeo Educacional", company: "Instituto do Sagrado Coração de Jesus", logo: "scg.jpg", period: "Nov 2021 - Jun 2024", desc: "Edição de vídeos educacionais para colégios da rede, produção de conteúdos institucionais religiosos e gerenciamento de livestreams." },
            { role: "Editor de Vídeo & Motion", company: "Esfera Produções", logo: "", period: "Set 2013 – Nov 2021", desc: "Edição de comerciais e vídeos institucionais, produções de animações explicativas, spots para rádio e áudios para espera telefônica." },
            { role: "Editor de Vídeo", company: "Interage Comunicação", logo: "", period: "Jan 2011 - Ago 2013", desc: "Edição do programa de TV local 'Roteiros'." }
        ]
    },
    en: {
        menuHome: "Home", menuPortfolio: "Portfolio", menuExperience: "Experience",
        subtitle: "Video Editor and Motion Designer",
        summary: "Video editor and motion designer with over 13 years of experience in audiovisual production. Experience working in agencies, educational institutions, and branding companies, delivering institutional, advertising, and educational content for multiple formats.",
        iaText: "✨ Focused on continuous evolution, leveraging Artificial Intelligence tools to optimize processes and post-production workflows.",
        btnCv: "Download CV (PDF)", cvFile: "CURRICULUM VINICIUS MORTARI EN-US.pdf",
        portfolio: "Portfolio", btnAllVideos: "View all videos",
        experience: "Experience", education: "Education",
        languagesTitle: "Languages", langPt: "🇧🇷 Portuguese (Fluent)", langEn: "🇺🇸 English (Advanced)",
        course: "Bachelor's Degree in Advertising",
        experiences: [
            { role: "Audiovisual & Branding", company: "Ferrarezi Branding", logo: "frzi.png", period: "Jul 2024 - Present", desc: "Developed audiovisual content for branding and digital marketing. Created animations and institutional videos aligned with brand identity." },
            { role: "Educational Video Editor", company: "Instituto do Sagrado Coração de Jesus", logo: "scg.jpg", period: "Nov 2021 - Jun 2024", desc: "Edited educational videos for school network. Produced institutional content with religious themes. Operation and management of livestreams." },
            { role: "Video Editor & Motion", company: "Esfera Produções", logo: "", period: "Sep 2013 – Nov 2021", desc: "Edited commercials and institutional videos. Produced explanatory animations and radio spots. Edited and finalized on-hold audio." },
            { role: "Video Editor", company: "Interage Comunicação", logo: "", period: "Jan 2011 - Aug 2013", desc: "Edited local TV program 'Roteiros'." }
        ]
    }
};

let currentLang = 'pt';
const htmlEl = document.documentElement;

function render() {
    const t = data[currentLang];
    document.getElementById('menu-home').textContent = t.menuHome;
    document.getElementById('menu-portfolio').textContent = t.menuPortfolio;
    document.getElementById('menu-experience').textContent = t.menuExperience;
    document.getElementById('hero-subtitle').textContent = t.subtitle;
    document.getElementById('hero-summary').textContent = t.summary;
    document.getElementById('hero-ia').textContent = t.iaText;
    
    const cvBtn = document.getElementById('cv-download');
    cvBtn.textContent = t.btnCv;
    cvBtn.setAttribute('href', t.cvFile);

    document.getElementById('title-portfolio').textContent = t.portfolio;
    if(document.getElementById('btn-all-videos')) document.getElementById('btn-all-videos').textContent = t.btnAllVideos;
    document.getElementById('title-experience').textContent = t.experience;
    document.getElementById('title-education').textContent = t.education;
    document.getElementById('edu-course').textContent = t.course;
    
    // Atualização dos Idiomas
    document.getElementById('title-languages').textContent = t.languagesTitle;
    document.getElementById('lang-pt').textContent = t.langPt;
    document.getElementById('lang-en').textContent = t.langEn;

    const expList = document.getElementById('experience-list');
    expList.innerHTML = t.experiences.map(exp => `
        <div class="timeline-item">
            <div class="exp-brand-header">
                ${exp.logo ? `<img src="${exp.logo}" class="company-logo" alt="${exp.company}">` : ''}
                <div class="exp-meta">
                    <h3>${exp.role}</h3>
                </div>
            </div>
            <div class="company-info">
                <span>${exp.company}</span>
                <span class="period">${exp.period}</span>
            </div>
            <p class="exp-desc">${exp.desc}</p>
        </div>
    `).join('');
}

// MENU MOBILE ACTIONS
const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');

menuToggle.addEventListener('click', (e) => {
    e.stopPropagation();
    menuToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
});

document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

document.addEventListener('click', (e) => {
    if (!navMenu.contains(e.target) && !menuToggle.contains(e.target)) {
        menuToggle.classList.remove('active');
        navMenu.classList.remove('active');
    }
});

// Idioma e Tema
document.getElementById('lang-toggle').addEventListener('click', () => {
    currentLang = currentLang === 'pt' ? 'en' : 'pt';
    document.getElementById('lang-toggle').textContent = currentLang === 'pt' ? 'EN' : 'PT';
    render();
});

document.getElementById('theme-toggle').addEventListener('click', () => {
    if (htmlEl.classList.contains('dark')) {
        htmlEl.classList.remove('dark');
        document.getElementById('theme-toggle').textContent = '🌙';
    } else {
        htmlEl.classList.add('dark');
        document.getElementById('theme-toggle').textContent = '☀️';
    }
});

// Scroll Reveal
const sections = document.querySelectorAll('.section-fade');
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

sections.forEach(section => observer.observe(section));

render();