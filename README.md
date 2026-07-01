# SmartHome Blog — HomeIQ

Live: https://chino-lu.github.io/smarthome-blog/

Blogbeiträge rund um Smart Home, KNX und Gebäudeautomation — mit Fokus auf belastbare, quellenbasierte Aussagen statt Marketing-Versprechen.

Gebaut mit [Astro](https://astro.build), deployt automatisch via GitHub Actions auf GitHub Pages.

## Entwicklung

```bash
npm install
npm run dev       # lokaler Dev-Server
npm run build     # Production-Build nach ./dist
```

## Neuen Beitrag hinzufügen

Neue Markdown-Datei in `src/content/blog/` mit folgendem Frontmatter anlegen:

```yaml
---
title: "Titel des Beitrags"
excerpt: "Kurzbeschreibung für die Übersicht"
pubDate: 2026-01-01
readMinutes: 5
address: "1/1/2"   # KNX-Style Gruppenadresse, fortlaufend
sources: "Quellenangabe"
---
```

Der Beitrag erscheint automatisch auf der Startseite, sobald er nach `main` gepusht wird — der Actions-Workflow baut und deployt die Seite.

## Struktur

- `src/content/blog/` — Markdown-Quelltexte der Beiträge
- `src/layouts/BaseLayout.astro` — gemeinsames Layout (Nav, Footer, Fonts)
- `src/pages/index.astro` — Blog-Startseite
- `src/pages/posts/[id]/index.astro` — Beitragsseite (dynamische Route)
- `src/styles/global.css` — Design-System (Farben, Typografie, KNX-Adress-Motiv)
