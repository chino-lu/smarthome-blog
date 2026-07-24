---
title: "HACS Custom-Integrationen: Wenn 'vibe coded' zur Sicherheitslücke wird"
excerpt: "AI-generierte Custom-Integrations für Home Assistant werden zur Supply-Chain-Bedrohung. Zwei Foren-Threads zeigen, wie die Community das Risiko einschätzt. Jetzt lesen."
pubDate: 2026-07-24
readMinutes: 6
address: "1/3/3"
sources: "community.home-assistant.io · community-smarthome.de · github.com"
image: "/images/post-hacs-sicherheit.svg"
imageAlt: "Home Assistant Hub mit Custom-Integration als gefährdetem Knoten, Sperre-Symbol über HACS-Repository"
---

# HACS Custom-Integrationen: Wenn 'vibe coded' zur Sicherheitslücke wird

HACS ist für viele Home Assistant Nutzer der schnellste Weg zu mehr Funktionen. Eine Custom-Integration installieren, API-Token eingeben, fertig. Was vor zwei Jahren noch das Revier von Bastlern mit GitHub-Erfahrung war, ist heute ein Klick. Gleichzeitig hat sich das Risiko verschoben. Im [Home Assistant Forum](https://community.home-assistant.io/t/1015304) warnt ein Nutzer vor einer verdächtigen Trading212-Integration, die wenige Tage nach einer legitimen Version auftauchte, poliert, mit brandneuem GitHub-Account und nur einem öffentlichen Repo. Der Thread hat 20 Antworten in kurzer Zeit. Parallel dazu diskutiert [community-smarthome.de](https://community-smarthome.de/t/11302) auf Deutsch, wie hoch das Risiko aus unsauberem Code in Custom-Integrations wirklich ist. Zwei Foren, ein Thema, unterschiedliche Schlüsse.

## Der Trading212-Vorfall: poliert, anonym, gefährlich

@dougle03 eröffnet den Thread im englischsprachigen Forum mit einer Beobachtung, die unheimlich vertraut klingt, wenn man die XZ-Utils-Backdoor im Hinterkopf hat:

> "A few days later another appeared, fully polished and submitted to HACS and HA. The Github account is brand new, and there is only one public repo. If you are building or using custom integrations that require API tokens, especially for financial services, please be careful."

Eine Trading212-Integration. Finanz-API. API-Token. Der Repo sah aus wie ein ernsthaftes Projekt, nicht wie ein Skript-Kiddie-Versuch. Genau das macht es gefährlich. Die Integration verlangt Zugriffe auf sensible Daten, und der Autor ist niemand, dem man vertrauen kann. Ein brandneuer GitHub-Account mit einem einzigen Repo ist kein Beweis für böse Absicht. Aber es ist ein Muster, das in den letzten Monaten häufiger auftaucht, seit KI-Tools Code generieren können, der auf den ersten Blick professionell aussieht.

@NathanCu bringt die Dimension auf den Punkt, und er tut das ohne Umschweife:

> "Basically the same issue with all these 'new' just 'hook it up' Instant AI agents for HA. Supply chain attack attempts will continue to grow as more and more code is controlled by AI Dev. Once a bad guy has programmatic access to your HA, including by MCP in most cases, you're toast. I can exfil your api keys tokens etc."

Programmatischer Zugriff auf Home Assistant bedeutet Zugriff auf das gesamte System. API-Keys, Token, Sensordaten, Automatisierungslogik, im schlimmsten Fall Gerätesteuerung. Wer einmal drin ist, muss nicht einmal etwas kaputt machen. Daten exfiltrieren reicht.

## "Vibe coded" als neue Angriffsfläche

@IOT7712 beschreibt einen Angriffsvektor, der vor zwei Jahren noch aufwendig war und heute mit einem Prompt funktioniert:

> "Feed some popular code into a LLM, ask it to merge your malicious code and post a PR, and sit back and wait. Any wannabe script kiddie can do this."

Das ist keine theoretische Bedrohung. Die Werkzeuge sind frei verfügbar. Ein LLM nimmt eine beliebte Custom-Integration, fügt eine harmlos aussehende Funktion hinzu, die im Hintergrund Token nach außen sendet, und schreibt einen sauberen Pull-Request mit ordentlichem Commit-Text. Die Review-Last liegt bei Maintainer:innen, die in ihrer Freizeit arbeiten. Wer HACS nutzt, installiert Code von Menschen, die er nicht kennt, geprüft von Freiwilligen, die nicht für Security-Audits bezahlt werden.

Die Versuchung ist groß, das als Panikmache abzutun. Es ist keine. Die XZ-Utils-Backdoor hat gezeigt, dass Open-Source-Supply-Chain-Angriffe funktionieren und monatelang unentdeckt bleiben können. Der Unterschied: XZ war ein einzelner, hochprofessioneller Akteur über Jahre. Bei AI-generierten Integrationen sinkt die Einstiegshürde drastisch. Nicht jeder Versuch wird funktionieren. Aber die Anzahl der Versuche wird steigen.

## Die deutschsprachige Community: gelassen, aber nicht ignorant

Im [deutschsprachigen Thread](https://community-smarthome.de/t/11302) auf community-smarthome.de ist die Stimmung eine andere. @Schorsch fragt direkt nach dem Risiko aus unsauberem Code, nicht gezielten Angriffen, und erinnert sich an einen konkreten Fall:

> "Ich dachte vielmehr an 'unsauberen' Code, welcher vom Autor ungewollt Schaden anrichtet. Ich erinnere mich in dem Zusammenhang an eine Alexa-Integration, welche in entfernter Vergangenheit dazu geführt hat, dass mein Home Assistant ständig neu gestartet wurde."

Seine Definition von Schaden ist pragmatisch: "Wenn mein System nicht mehr richtig rund läuft, hat es einen Schaden." Das ist ein berechtigter Punkt. Nicht jede Gefahr ist ein gezielter Angriff. Manchmal ist es einfach schlechter Code, der in einer Endlosschleife Neustarts auslöst oder Ressourcen frisst.

@GronkelAlex vergleicht und relativiert:

> "Open Source Software ist IMMER mit einem gewissen Risiko behaftet, man denke nur an die berühmte XZ-Tools Backdoor. Die Wahrscheinlichkeit, dass jemand mittels eines exotischen Custom-Add-Ons ein paar Home-Assistant-Instanzen hacken möchte, halte ich eher für gering. Da hätte ich mehr Bedenken beim Einsatz von LAN/WLAN-angebundenen Geräten aus dem Baumarkt."

Er sieht das größere Risiko bei den Geräten selbst, nicht bei den Integrationen. Ein WLAN-Stecker aus dem Baumarkt, der ungefragt nach Hause telefoniert, ist in der Praxis gefährlicher als eine Custom-Integration, die vielleicht nie jemand installiert. @MarzyHA stimmt zu und ergänzt einen technischen Punkt: Die Integrationen seien in HA sehr begrenzt. "Im schlimmsten Fall frisst dann mal eine Integration viel Ressourcen."

Die Diskrepanz zwischen den beiden Foren ist interessant. Englischsprachig dominiert die Sorge vor gezielten Angriffen über AI-generierten Code. Deutschsprachig überwiegt die Sorge vor unsauberem Code und Baumarkt-Geräten. Beides ist real. Die Frage ist, wogegen man sich wappnet.

## Was sich tatsächlich schützen lässt

Die Integration-Sandbox in Home Assistant ist nicht luftdicht. Custom-Integrations können auf die WebSocket-API zugreifen, auf die Config-Dateien, auf persistente Daten. Wer API-Token für Finanzdienstleistungen in eine Integration eingibt, vertraut dem Autor mit sensiblen Zugangsdaten. Das gilt für polierte AI-Repos genauso wie für handgeschriebenen Code.

Wer HACS nutzt, sollte sich drei Gewohnheiten aneignen. Erstens: Repos prüfen vor der Installation. Wie alt ist der Account? Wie viele Repos? Gibt es Issues mit echten Diskussionen oder nur Bot-Aktivität? Ein Repo, das gestern erstellt wurde und sofort HACS-kompatibel ist, verdient Skepsis. Zweitens: API-Token niemals in Custom-Integrations eingeben, die nicht etabliert sind. Finanz-APIs, Cloud-Token, Zugangsdaten zu E-Mail- oder Messenger-Konten gehören nicht in ein HACS-Repo mit 12 Sternen. Drittens: Regelmäßig die installierten Integrationen audityieren. Was läuft noch? Was wird noch gepflegt? Was hat man vergessen zu entfernen?

Die prinzipiellere Frage ist, ob man für kritische Funktionen überhaupt Custom-Integrations braucht. [KNX kommuniziert über den Bus](/posts/kabel-oder-funk/), lokal, ohne Drittanbieter-Code. Die [Smart-Home-Sicherheit](/posts/smart-home-sicherheit/) beginnt nicht bei Firewalls, sondern bei der Architektur: lokale Protokolle statt Cloud-APIs, etablierte Integrations statt HACS-Repos für sensible Daten. Wer SmartThings-Geräte steuern will und [bemerkt, dass die API kostenpflichtig wird](/blog/smartthings-api-kostenpflichtig), erlebt gerade, was Abhängigkeit bedeutet. Dasselbe gilt für Custom-Code.

## Supply-Chain-Sicherheit als Community-Aufgabe

Die Last liegt nicht nur bei den Nutzer:innen. Die Home Assistant Community pflegt das HACS-Ökosystem in Freiwilligenarbeit. Review-Prozesse für Custom-Integrations gibt es, aber sie sind nicht mit einem App-Store-Check vergleichbar. Die Frage ist, ob die Community-Betreiber:innen von HACS Mechanismen einbauen, die mit der neuen Angriffsfläche umgehen können. Automatisierte Repo-Alter-Checks, Warnungen bei brandneuen Accounts, Pflicht-Audits für Integrationen, die Finanz- oder Sicherheits-APIs ansprechen. Keines davon ist trivial. Alle sind diskutierbar.

@IOT7712 stellt die grundsätzliche Frage, die im Thread fast untergeht:

> "Is home automation the correct platform for financial and security information to be stored? The current answer is a resounding NO."

Das ist die unbequeme Wahrheit hinter dem Thread. Home Assistant ist ein mächtiges Werkzeug für Gebäudeautomation. Es ist kein Tresor für Finanzdaten. Wer Trading212-Integrationen oder Banking-APIs in HA verbindet, bringt Daten in ein System, das für Sicherheit nicht primär gebaut ist. Die Smart-Home-Plattform steuert Licht, Heizung, Sensoren. Sie ist kein Finanzportal.

Die Debatte in beiden Foren zeigt: Die Community ist sich des Risikos bewusst, schätzt es aber unterschiedlich ein. Wer HACS für Lichtsteuerung und Sensoren nutzt, hat ein überschaubares Risiko. Wer API-Token für Finanzdienstleistungen in eine Integration mit unbekanntem Autor eingibt, spielt ein Spiel, bei dem der Einsatz das Vielfache des Gewinns ist. Der Unterschied zwischen "vibe coded" und "sorgfältig geprüft" entscheidet darüber, ob das Smart Home ein Werkzeug bleibt oder zur Sicherheitslücke wird.