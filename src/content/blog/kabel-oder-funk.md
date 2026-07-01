---
title: "Kabel oder Funk? Warum die Wahl des Systems über Jahrzehnte entscheidet"
excerpt: "Funklösungen sind schnell installiert, KNX braucht Planung. Was bei der Entscheidung selten mitgedacht wird: Standards altern unterschiedlich schnell."
pubDate: 2026-06-18
readMinutes: 7
address: "1/1/2"
sources: "ISO/IEC 14543-3 (KNX-Standard) · peaknx.com · technikkram.net · smartiva.info · turtleone.de"
image: "/images/post-knx-vs-funk.svg"
imageAlt: "Vergleich einer geordneten Bus-Topologie mit einem verstreuten Funknetz"
---

Bei der Frage "Smart Home ja oder nein" ist die eigentliche Grundsatzentscheidung oft schon gefallen. Die eigentliche Weichenstellung liegt woanders: verkabeltes Bussystem oder Funk? Beide Wege haben ihre Berechtigung — aber sie altern sehr unterschiedlich.

## Zwei fundamental verschiedene Ansätze

**Funkstandards** wie Zigbee, Z-Wave oder Homematic IP kommunizieren drahtlos. Der große Vorteil: Nachrüstung ohne Stemmarbeiten, Inbetriebnahme oft in Minuten, Einstiegskosten deutlich niedriger.

**KNX** ist dagegen ein kabelgebundenes Bussystem und international als ISO/IEC 14543-3 genormt. Alle Komponenten hängen an einer gemeinsamen, meist grünen Busleitung, die zusammen mit der Elektroinstallation verlegt wird. Das bedeutet: Wände müssen geöffnet werden — realistisch also nur beim Neubau oder bei einer Kernsanierung sinnvoll.

## Der Unterschied zeigt sich nicht am ersten Tag

Kurzfristig gewinnt Funk fast immer: schneller montiert, günstiger, kein Eingriff in die Bausubstanz. Der Unterschied zeigt sich erst über Jahre.

**Offener Standard vs. Herstellerökosystem.** KNX ist herstellerübergreifend genormt — Komponenten unterschiedlicher Hersteller sprechen dieselbe Sprache, unabhängig davon, wer sie gebaut hat. Bei vielen Funklösungen hängt die Langlebigkeit dagegen am Hersteller: Stellt er den Support ein oder schaltet er die Cloud ab, verliert die Installation an Funktion — unabhängig davon, wie gut die Hardware noch funktioniert.

**Physische Stabilität.** Eine Kabelverbindung hat keine Reichweitenprobleme, keine Interferenzen mit anderen Funkquellen im Haus und keine Batterie, die getauscht werden muss. Wer schon mal einen Funksensor gesucht hat, weil er "offline" war, kennt das Problem.

**Erweiterbarkeit ohne Bruch.** Ein KNX-System, das heute geplant wird, lässt sich in zehn oder zwanzig Jahren um neue Aktoren erweitern, ohne die bestehende Logik neu aufzubauen — der Bus bleibt derselbe. Bei Funkstandards ist ein Generationswechsel (etwa von Zigbee auf Thread/Matter) im schlimmsten Fall ein kompletter Systemwechsel.

## Was für Funk spricht

Das soll kein Plädoyer gegen Funklösungen sein — sie haben reale Vorteile, gerade im Bestandsbau. Wo keine Wände geöffnet werden können oder sollen, ist Funk oft die einzig praktikable Option. Auch punktuelle Nachrüstungen (ein einzelner Fensterkontakt, ein Thermostat) lohnen selten den Aufwand einer Busleitung.

Mit **Matter**, dem 2022 von Apple, Google, Amazon und der Connectivity Standards Alliance vorgestellten offenen Standard, entsteht zudem erstmals auch im Funkbereich eine herstellerübergreifende Basis — lokale Steuerung ohne Cloud-Zwang inklusive. Das schließt einen Teil der Lücke zu KNX, löst aber nicht die physikalischen Grenzen von Funk (Reichweite, Interferenzen, Batteriewartung).

## Die praktische Realität: beides zusammen

In der Praxis schließen sich beide Ansätze nicht aus. Viele gut geplante Installationen nutzen KNX als stabilen Backbone für alles, was dauerhaft verbaut wird — Beleuchtung, Beschattung, Heizungsaktoren — und ergänzen das gezielt um Funkkomponenten dort, wo Flexibilität wichtiger ist als maximale Zuverlässigkeit, etwa bei mobilen Sensoren. Eine zentrale Steuerung wie Home Assistant kann beide Welten zusammenführen.

## Fazit

Wer kurzfristig denkt oder im Bestand nachrüstet, ist mit Funk gut bedient. Wer neu baut oder saniert und die Installation für die nächsten zwei, drei Jahrzehnte auslegen will, sollte den höheren Planungsaufwand von KNX gegen die Unabhängigkeit von einzelnen Herstellern und Cloud-Diensten abwägen. Die Entscheidung trifft man im Zweifel nur einmal — die Wände öffnet man kein zweites Mal wegen eines vergessenen Kabels.
