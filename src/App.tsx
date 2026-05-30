import type { ReactNode } from "react";
import heroPortrait from "./assets/me1.png";
import aboutPortrait from "./assets/me2.png";
import projectActualUnits from "./assets/actual_units.png";
import projectUleveling from "./assets/uleveling.png";
import projectUmbella from "./assets/umbrella_labs_logo.png";
import projectAniblossom from "./assets/aniblossom.png";
import githubIcon from "./assets/Portfolio (Community)/Github.svg";
import telegramIcon from "./assets/Portfolio (Community)/Telegram.svg";
import discordIcon from "./assets/Portfolio (Community)/Discord.svg";

type NavItem = {
    id: string;
    label: string;
};

type Project = {
    title: string;
    type?: string;
    tech: string[];
    description: string;
    bullets?: string[];
    live?: string;
    cached?: string;
    image?: string;
};

type SkillCard = {
    title: string;
    lines: string[];
};

type MiniProject = {
    title: string;
    description: string;
    tech: string;
};

const navItems: NavItem[] = [
    { id: "home", label: "home" },
    { id: "works", label: "works" },
    { id: "about", label: "about-me" },
    // { id: "donations", label: "donations" },
    { id: "contacts", label: "contacts" },
];

const projects: Project[] = [
    {
        title: "Umbrella Labs",
        type: "Development Agency",
        tech: [
            "JavaScript",
            "Node.js",
            "React.js",
            "React Native",
            "Browser Extensions",
            "Telegram Automation",
        ],
        description:
            "Freelance product development agency specializing in web, mobile, and automation solutions.",
        image: projectUmbella,
        live: "https://umbrella.com.uz",
    },
    {
        title: "Actual Units - Smart Video Resolution",
        type: "Browser Extension",
        tech: [
            "JavaScript",
            "Browser APIs",
            "HTML5 Video APIs",
            "YouTube Integration",
            "Extension APIs",
        ],
        description: "Smart video resolution automation for browser streaming.",
        image: projectActualUnits,
        live: "https://microsoftedge.microsoft.com/addons/detail/mkfafbgdmdcajeebplbojbhoegbpfcob",
    },
    {
        title: "Uleveling Telegram Bot",
        tech: ["Node.js", "Telegram Bot API", "PostgreSQL"],
        description:
            "Scalable Telegram bot for leveling, moderation, and onboarding.",
        image: projectUleveling,
        live: "https://t.me/ulevelingbot",
    },
    {
        title: "Umbrella Library",
        tech: ["React Native", "Expo", "Supabase", "PostgreSQL"],
        description: "Mobile web-novel platform for reading and writing.",
        image: projectUleveling,
        live: "https://umbrella-library.netlify.app/",
    },
    {
        title: "AniBlossom",
        tech: ["Node.js", "APIs", "Telegram Bot API"],
        description: "Telegram bot for anime discovery and streaming.",
        image: projectAniblossom,
        live: "https://t.me/AniBlossomBot",
    },
];

const skillCards: SkillCard[] = [
    {
        title: "Languages",
        lines: ["JavaScript", "TypeScript", "Java", "Python"],
    },
    { title: "Frontend", lines: ["React.js", "Vite", "HTML", "CSS"] },
    {
        title: "Backend",
        lines: ["Node.js", "Express.js", "REST API Development"],
    },
    { title: "Mobile & Desktop", lines: ["React Native", "Expo", "Tauri"] },
    {
        title: "Databases & Services",
        lines: ["PostgreSQL", "Supabase", "Firebase"],
    },
    {
        title: "Engineering",
        lines: [
            "Browser Extensions",
            "Telegram Bots",
            "API Integration",
            "Git & GitHub",
        ],
    },
];

const additionalProjects: MiniProject[] = [
    {
        title: "Golden Silk Finance Manager",
        description:
            "Android finance app for managing employee salaries, company income tracking, and operational financial analytics.",
        tech: "React Native, Expo, Firebase",
    },
    {
        title: "Manga World",
        description:
            "Mobile manga reader aggregating content from multiple online sources through API integration.",
        tech: "React Native, APIs",
    },
    {
        title: "Music Share",
        description:
            "Spotify-connected mobile app for personal liked-song workflows and offline-oriented listening access.",
        tech: "React Native, Spotify API",
    },
    {
        title: "Umbrella Dictionary Bot",
        description:
            "Telegram dictionary bot that returns word definitions and usage examples via API-powered responses.",
        tech: "Node.js, APIs",
    },
];

function BrandMark() {
    return (
        <div
            className="brand-mark"
            aria-hidden
        >
            <span />
            <span />
        </div>
    );
}

function HashTitle({ text, line = true }: { text: string; line?: boolean }) {
    return (
        <div className="hash-title">
            <h2>
                <span>#</span>
                {text}
            </h2>
            {line ? (
                <div
                    className="title-line"
                    aria-hidden
                />
            ) : null}
        </div>
    );
}

function GhostCard({
    children,
    className = "",
}: {
    children?: ReactNode;
    className?: string;
}) {
    return <div className={`ghost-card ${className}`.trim()}>{children}</div>;
}

export default function App() {
    return (
        <div
            className="site"
            id="home"
        >
            <aside
                className="social-rail"
                aria-label="social links"
            >
                <div className="rail-line" />
                <a
                    href="https://github.com/IBO-Umbrel"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="GitHub"
                >
                    <img
                        src={githubIcon}
                        alt=""
                        aria-hidden
                    />
                </a>
                <a
                    href="https://t.me/ibo_umbrella"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Telegram"
                >
                    <img
                        src={telegramIcon}
                        alt=""
                        aria-hidden
                    />
                </a>
                <a
                    href="https://discord.com/users/nonameraid"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Discord"
                >
                    <img
                        src={discordIcon}
                        alt=""
                        aria-hidden
                    />
                </a>
            </aside>

            <header className="main-header">
                <a
                    href="#home"
                    className="brand"
                >
                    <BrandMark />
                    Ibrohimjon
                </a>
                <nav>
                    {navItems.map((item, index) => (
                        <a
                            key={item.id}
                            href={`#${item.id}`}
                            className={index === 0 ? "active" : ""}
                        >
                            <span>#</span>
                            {item.label}
                        </a>
                    ))}
                    {/* <button className="lang" type="button" aria-label="Language switcher">
            EN
          </button> */}
                </nav>
            </header>

            <main className="container">
                <section className="hero-section">
                    <div className="hero-copy">
                        <h1>
                            Ibrohimjon is a <em>Full-Stack Developer</em>{" "}
                            and the <em>Founder</em> of <em><a href="https://umbrella.com.uz" target="_blank" rel="noreferrer">Umbrella Labs</a></em>.
                        </h1>
                        <p>
                            4 years building web, mobile, backend, browser
                            extension, and Telegram automation products with
                            strong focus on modern JavaScript architecture.
                        </p>
                        <a
                            className="btn btn-primary"
                            href="#contacts"
                        >
                            Contact me
                        </a>
                    </div>

                    <div className="hero-art">
                        <div
                            className="hero-decor hero-decor-frame"
                            aria-hidden
                        />
                        <div
                            className="hero-decor hero-decor-dots"
                            aria-hidden
                        />
                        <img
                            src={heroPortrait}
                            alt="Ibrohimjon portrait"
                        />
                        <BrandMark />
                        <div className="status-box">
                            <span />
                            <p>
                                Currently working as <strong>Freelancer</strong>
                            </p>
                        </div>
                    </div>
                </section>

                <section
                    className="quote"
                    aria-label="quote"
                >
                    <p>Fullstack Developer trying to have fun ☺️</p>
                    <small>- Ibrohimjon</small>
                </section>

                <section
                    id="works"
                    className="projects-section"
                >
                    <div className="section-head">
                        <HashTitle text="projects" />
                        <a
                            href="#works"
                            className="view-link"
                        >
                            Featured work
                        </a>
                    </div>
                    <div className="projects-grid">
                        {projects.map((project) => (
                            <article
                                key={project.title}
                                className="project-card"
                            >
                                {
                                    project.image ? (
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                        />
                                    ) : null
                                }
                                <p className="tech">{project.tech.join(" ")}</p>
                                <div className="project-content">
                                    <h3>{project.title}</h3>
                                    {project.type ? (
                                        <p>{project.type}</p>
                                    ) : null}
                                    <p>{project.description}</p>
                                    <div className="project-links">
                                        {project.live ? (
                                            <a
                                                href={project.live}
                                                className="btn btn-primary"
                                                target="_blank"
                                                rel="noreferrer"
                                            >
                                                Open
                                            </a>
                                        ) : null}
                                        {project.cached ? (
                                            <a
                                                href={project.cached}
                                                className="btn btn-secondary"
                                            >
                                                Cached &gt;=
                                            </a>
                                        ) : null}
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </section>

                <section
                    id="additional-projects"
                    className="skills-section"
                >
                    <div className="section-head">
                        <HashTitle text="additional-projects" />
                    </div>
                    <div className="projects-grid">
                        {additionalProjects.map((project) => (
                            <article
                                key={project.title}
                                className="project-card"
                            >
                                <div className="project-content">
                                    <h3>{project.title}</h3>
                                    <p>{project.description}</p>
                                    <p className="tech">{project.tech}</p>
                                </div>
                            </article>
                        ))}
                    </div>
                </section>

                <section
                    id="skills"
                    className="skills-section"
                >
                    <HashTitle
                        text="skills"
                        line={false}
                    />
                    <div className="skills-layout">
                        <div
                            className="decor-grid"
                            aria-hidden
                        >
                            <div className="dots dots-skills-main" />
                            <div className="dots dots-skills-side" />
                            <GhostCard className="ghost-card-main">
                                <BrandMark />
                            </GhostCard>
                            <GhostCard className="ghost-card-outline" />
                        </div>
                        <div className="skills-grid">
                            {skillCards.map((card) => (
                                <article
                                    key={card.title}
                                    className="skill-card"
                                >
                                    <h3>{card.title}</h3>
                                    {card.lines.map((line) => (
                                        <p key={line}>{line}</p>
                                    ))}
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                <section
                    id="about"
                    className="about-section"
                >
                    <HashTitle text="about-me" />
                    <div className="about-layout">
                        <div>
                            <p>
                                I&apos;m Ibrohimjon, a Software Engineering
                                student and product-oriented Full-Stack
                                Developer. I specialize in Node.js, Express.js,
                                React.js, React Native, and Expo.
                            </p>
                            <p>
                                My engineering focus includes backend API
                                architecture, performance optimization, browser
                                extension development, Telegram bot systems,
                                cross-platform mobile delivery, and rapid
                                independent execution.
                            </p>
                            <a
                                href="https://www.millatumidi.uz/schools/it/"
                                className="btn btn-primary"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Software Engineering Student
                            </a>
                        </div>
                        <div className="about-image-wrap">
                            <img
                                src={aboutPortrait}
                                alt="Ibrohimjon"
                            />
                        </div>
                    </div>
                </section>

                {/* <section id="donations" className="donations-section">
          <HashTitle text="donations" />
          <div className="donations-layout">
            <p>
              If my open work, bots, and tools help you, you can support future development through Patreon.
            </p>
            <a
              href="https://www.patreon.com/c/IBO_Umbrel"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Support on Patreon
            </a>
          </div>
        </section> */}

                <section
                    id="contacts"
                    className="contacts-section"
                >
                    <HashTitle text="contacts" />
                    <div className="contacts-layout">
                        <p>
                            I&apos;m open to product-focused opportunities in
                            Full-Stack, Backend, React, and React Native roles.
                            Let&apos;s build something scalable and useful.
                        </p>
                        <div className="message-box">
                            <h3>Message me here</h3>
                            <a href="tel:+998951309955">+998 95 130 99 55</a>
                            <a href="mailto:ibo.umbrella@gmail.com">
                                ibo.umbrella@gmail.com
                            </a>
                            <a
                                href="https://t.me/ibo_umbrella"
                                target="_blank"
                                rel="noreferrer"
                            >
                                t.me/ibo_umbrella
                            </a>
                            <a
                                href="https://github.com/IBO-Umbrel"
                                target="_blank"
                                rel="noreferrer"
                            >
                                github.com/IBO-Umbrel
                            </a>
                            <a
                                href="https://discord.com/users/nonameraid"
                                target="_blank"
                                rel="noreferrer"
                            >
                                discord.com/users/nonameraid (@nonameraid)
                            </a>
                        </div>
                    </div>
                </section>
            </main>

            <footer className="footer">
                <div className="footer-top">
                    <div>
                        <a
                            href="#home"
                            className="brand"
                        >
                            <BrandMark />
                            Ibrohimjon
                        </a>
                        <p>
                            Full-Stack Developer | Node.js Developer | React
                            Developer | React Native Developer
                        </p>
                    </div>
                    <div>
                        <h3>Media</h3>
                        <div className="footer-media-links">
                            <a
                                href="https://github.com/IBO-Umbrel"
                                target="_blank"
                                rel="noreferrer"
                                aria-label="GitHub"
                            >
                                <img
                                    src={githubIcon}
                                    alt=""
                                    aria-hidden
                                />
                            </a>
                            <a
                                href="https://t.me/ibo_umbrella"
                                target="_blank"
                                rel="noreferrer"
                                aria-label="Telegram"
                            >
                                <img
                                    src={telegramIcon}
                                    alt=""
                                    aria-hidden
                                />
                            </a>
                            <a
                                href="https://discord.com/users/nonameraid"
                                target="_blank"
                                rel="noreferrer"
                                aria-label="Discord"
                            >
                                <img
                                    src={discordIcon}
                                    alt=""
                                    aria-hidden
                                />
                            </a>
                        </div>
                    </div>
                </div>
                <small>© 2026 Ibrohimjon</small>
            </footer>
        </div>
    );
}
