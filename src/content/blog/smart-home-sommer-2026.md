---
title: "Smart Home im Sommer 2026: Drei Updates, die dein Zuhause verändern"
excerpt: "Home Assistant 2026.7 bringt natursprachliche Automatisierungen, Matter wird auf matter.js umgebaut und die Proxy-Initiative schließt Lücken. Drei Updates in sechs Wochen, die zeigen wohin Smart Home 2026 steuert."
pubDate: 2026-07-06
readMinutes: 4
address: "1/1/5"
sources: "home-assistant.io/blog · openhomefoundation.org · github.com/home-assistant/core"
image: "/images/post-sommer-2026.svg"
imageAlt: "Zeitleiste mit drei Meilensteinen: Automatisierungs-Engine, Matter.js und Proxy-Initiative"
---

Ich habe eine Weile auf dieses Release gewartet. Home Assistant 2026.7 bringt die neuen purpose-specific Trigger und Conditions aus dem Labs-Stadium in den Standard. Das klingt technisch, ist aber eigentlich genau das Gegenteil.

Du fängst jetzt bei dem an, was dein Zuhause tun soll, nicht bei den Interna. Statt dich zu fragen, welche Entität, welcher State, welcher Trigger-Typ, sagst du einfach: "Wenn das Schlafzimmer unter 18°C fällt, heize an." Das ist der ganze Prozess. Keine Eigenheiten, die man auswendig lernen muss. Und weil Integrationen dem Automatisierungs-Engine ihre eigenen Trigger und Conditions beibringen können, wird das mit der Zeit nur besser.

Das Logbook heisst jetzt "Activity" und wurde neu aufgebaut. Eine aufgeräumte Timeline, gruppiert nach Tagen, in der gleichen Sprache wie der Rest von Home Assistant. Ich öffne es seit dem Update einfach so, um reinzuschauen.

## Matter auf matter.js: Endlich stabil

Am 23. Juni kam das Matter-Upgrade, auf das viele gewartet haben. Das Open Home Foundation hat die Matter-Unterstützung auf matter.js umgebaut, eine Open-Source-TypeScript-Implementierung des Matter-Standards. Praktisch heisst das: weniger Bugs, schnellere Start- und Wiederherstellungszeiten, und eine neue Visualisierung für das Thread-Mesh-Netzwerk.

Mit dem Upgrade auf Matter 1.5.1 und Thread 1.4 über den aktualisierten OTBR ist Home Assistant jetzt aktuell, was Matter angeht. Das war vorher nicht selbstverständlich — Matter in Home Assistant war lange eher eine Baustelle als ein fertiges Feature.

## Proxy all the things

Die "Proxy all the things"-Initiative vom 18. Juni ist weniger spektakulär als die anderen beiden Updates, aber für jemanden mit Geräten, die sich nicht ins lokale Netzwerk integrieren liessen, relevant. Das Ziel ist einfach: kein Gerät mehr, das aussen vor bleibt.

## Was das zusammen bedeutet

Drei Updates in sechs Wochen. Die Automatisierungs-Engine ist intuitiver geworden, Matter hat ein solides Fundament, und der Proxy-Ansatz schliesst Lücken, die früher nervig waren. Smart Home 2026 fühlt sich weniger an wie eine Sammlung von Insellösungen und mehr wie ein System, das zusammenpasst.