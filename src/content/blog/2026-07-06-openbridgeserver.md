---
title: "OpenBridgeServer KNX: Open-Source-Alternative zum Timberwolf"
excerpt: "OpenBridgeServer KNX ist die neue Open-Source-Alternative zum Timberwolf Server. Sechs Entwickler bauen OBS als Multiprotokoll-Server für KNX, MQTT und Co."
pubDate: 2026-07-06
readMinutes: 7
address: "1/2/1"
sources: "knx-user-forum.de · github.com/abeggled/openbridgeserver · open-bridge.io"
image: "/images/post-obs.svg"
imageAlt: "OpenBridgeServer KNX als zentraler Multiprotokoll-Server mit Adaptern"
---

# OpenBridgeServer KNX: Open-Source-Alternative zum Timberwolf

Der Timberwolf Server hat eine Lücke hinterlassen. Seine Weiterentwicklung war lange unklar, im KNX-User-Forum häuften sich die "Ja/Nein?"-Threads. Als Daniel, bekannt im Forum als @abeggled, die Fragezeichen genug hatte, fasste er einen Entschluss: einen Plan B haben zu wollen. Damit war die Idee des OpenBridgeServer geboren. OpenBridgeServer KNX positioniert sich als Open-Source-Alternative für alle, die professionelle KNX-Visualisierung ohne proprietäre Lock-in-Wünsche suchen.

Am 26. März 2026 startete er als One-Man-Show. Heute, gut drei Monate später, arbeiten sechs Entwickler daran. 33 Likes auf den Eröffnungsbeitrag im KNX-User-Forum. Das Projekt steht unter MIT-Lizenz auf GitHub. Und es positioniert sich explizit gegen Home Assistant, openHAB und IP-Symcon.

## Was OpenBridgeServer KNX anders macht

Der Kern von OpenBridgeServer KNX ist ein zentrales Objektmodell. Ein Objekt ist ein definierter, protokollunabhängiger Wert, beispielsweise "Temperatur Wohnzimmer", unabhängig davon, woher die Daten kommen und wohin sie fliessen. Jedes Objekt steht im internen MQTT-Broker zur Verfügung, sodass Drittsysteme ohne proprietäre Protokolle zugreifen können.

Die Schnittstellen zu den Protokollen, also KNX, MQTT, Modbus TCP, SNMP, sind sogenannte Adapter. Im Zentrum sitzt ein Dispatcher als Event-Bus, der über Verknüpfungen die Schnittstelle zwischen Adaptern und Objekten bildet. Verknüpfungen gibt es in mehreren Ausprägungen: lesen, schreiben oder beides. Umrechnungsformeln, Wertemapping und Filter liegen direkt auf Ebene der Verknüpfung.

Zusätzlich zu den Adaptern sind Zeitschaltuhren, eine Anwesenheitssimulation sowie Adapter für Home Assistant und ioBroker an Bord. Letzteres ist interessant: OBS positioniert sich zwar als Alternative zu HA und openHAB, hat aber gleichzeitig Adapter für beide an Bord. Die Idee: schnelllebige Cloudanbindungen aus dem bevorzugten Drittsystem anbinden, während OBS das zentrale Objektmodell übernimmt.

@abeggled schreibt im Forum:

> Ja, man könnte auch Home Assistant, openHAB oder IP-Symcon als Alternative in Betracht ziehen aber die Stärken des zentralen Objektmodells mit den einfachen protokollübergreifenden Anbindungen bietet aus unserer Perspektive keines der genannten Produkte.

## OpenBridgeServer als Timberwolf Server Alternative

Warum braucht es überhaupt eine Timberwolf Server Alternative? Timberwolf war jahrelang der de-facto-Standard für KNX-Visualisierung im professionellen Umfeld. Aber die Kommunikation rund um die Weiterentwicklung war spärlich geworden, und Nutzer fragten sich, ob sie auf ein System setzen können, dessen Zukunft ungewiss ist.

Hier setzt OpenBridgeServer an. Statt auf ein einzelnes kommerzielles Produkt zu vertrauen, baut OBS auf eine Open-Source-Architektur, die jeder einsehen und erweitern kann. Die MIT-Lizenz erlaubt es, den Code zu forkieren und anzupassen, falls das Hauptprojekt irgendwann eingeschlafen sollte. Das ist genau die Sicherheit, die Timberwolf-Nutzer vermisst haben.

Wer sich grundlegend mit der Wahl zwischen KNX und Funk-Protokollen beschäftigt, findet im Beitrag [Kabel oder Funk](/posts/kabel-oder-funk/) eine Entscheidungshilfe. OBS unterstützt beide Welten über seine Multiprotokoll-Architektur.

## KNX Multiprotokoll und KNX MQTT im Detail

Das zentrale Objektmodell von OBS löst ein Problem, das viele KNX-Installationen kennen: Datenfliessen zwischen Protokollen, aber die Verknüpfung ist oft hakelig. Ein Beispiel: Du willst eine Temperatur aus dem KNX-Bus in ein Modbus-basiertes Lüftungssystem einspeisen. Bisher brauchtest du dafür ein Skript oder einen separaten Middleware-Server. Mit OBS definierst du eine Verknüpfung, liest den Wert vom KNX-Adapter, wandelst ihn über eine Formel um und schreibst ihn an den Modbus-Adapter. Das Ganze in einer Oberfläche, ohne Code.

Besonders interessant ist die KNX-MQTT-Anbindung. Jedes Objekt im OBS steht automatisch über MQTT zur Verfügung. Das bedeutet: Ein externes System kann Temperaturen, Schaltzustände oder Zählerstände subscribieren, ohne direkt am KNX-Bus zu hängen. Für Home Assistant KNX-Integrationen ist das ein Segen: Statt die HA-KNX-Integration direkt am Bus zu betreiben, kann HA über MQTT mit OBS kommunizieren und bekommt saubere, vorverarbeitete Werte.

Wer auch eine [kontrollierte Wohnraumlüftung](/posts/kontrollierte-wohnraumlueftung/) betreibt, kann die Lüftungsdaten über Modbus an OBS anbinden und im zentralen Objektmodell mit den KNX-Sensordaten verknüpfen.

## Vom Plan B zum Community-Projekt

Eigentlich sollte OBS erst später an die Öffentlichkeit treten, wenn die neue Visualisierung fertig ist. Aber die Diskussionen im Forum um Edomi-Optimierungen und die Timberwolf-Zukunft haben das Team dazu bewogen, früher transparent zu informieren.

@abeggled dazu:

> Eigentlich war geplant, erst zu einem späteren Zeitpunkt, mit der Verfügbarkeit der neuen Visualisierung, an die Öffentlichkeit zu treten. Auf Grund der Threads rund um «Edomi Optimierungen» und «Timberwolf Server. Ja/Nein?» haben wir uns entschlossen, diesen Schritt vorzuziehen. Dazu gehört auch, was wir noch nicht oder noch nicht in «schön» können.

Die aktuelle Visualisierung entspricht dem Startmotto: Funktionalität zuerst, "schön" später. Eine komplett neue Visualisierung ist in Entwicklung. Das Juni-Release legte den Fokus auf Sicherheit und Mehrsprachigkeit. Im Juli kommen Performanceoptimierungen und ein neues Rechtemanagement, das OBS auch für vermietete Immobilien oder Gewerbeobjekte interessant macht.

## Docker, LXC und ein eigenes Betriebssystem

OBS steht als Docker-Image und als LXC-Template zur Verfügung. Wer Docker oder LXC-Container unter Proxmox nicht mag, kann auf das Schwesterprojekt OBOS zurückgreifen, das Open Bridge Operating System. Es ermöglicht eine einfache und sichere Installation auf AMD64- und ARM64-Hardware.

Die Docker-Installation ist in wenigen Minuten erledigt. Ein `docker-compose.yml` mit dem OBS-Image, ein paar Umgebungsvariablen für den KNX-Zugang, und der Server läuft. Wer Proxmox nutzt, kann das LXC-Template direkt als Container starten, ohne Docker als zusätzliche Schicht. Beide Varianten kommen ohne grafische Installation aus, was sie für Headless-Server attraktiv macht.

Das Projekt findet sich auf [GitHub unter github.com/abeggled/openbridgeserver](https://github.com/abeggled/openbridgeserver). Weitere Infos und eine Demo-Instanz gibt es unter [open-bridge.io](https://open-bridge.io).

## OpenBridgeServer KNX und Home Assistant kombinieren

Dass OBS gleichzeitig Adapter für Home Assistant bietet, ist kein Widerspruch, sondern eine pragmatische Entscheidung. HA ist gut darin, schnelllebige Cloud-Integrationen aufzunehmen, sei es für Wetterdaten, Presence-Detection über Smartphone-Apps oder Sprachassistenten-Anbindungen. OBS ist gut darin, ein zentrales, protokollunabhängiges Objektmodell bereitzustellen, in dem KNX-Werte sauber verwaltet werden. Beides zusammen ergibt mehr als jedes System für sich.

Die Kombination sieht in der Praxis so aus: OBS hängt am KNX-Bus, sammelt und verarbeitet alle Werte im zentralen Objektmodell und stellt sie über MQTT bereit. Home Assistant subscribed die relevanten Objekte und liefert die Cloud-Anbindungen, die Sprachsteuerung und die Dashboards. So profitiert man von der Robustheit von OBS für die KNX-Seite und der riesigen Integrationsvielfalt von HA für alles, was nicht am KNX-Bus hängt.

Wer parallel zu diesem Setup auch das [Smart Home Sommer 2026 Update](/posts/smart-home-sommer-2026/) von Home Assistant nutzt, bekommt ein rundes Gesamtsystem.

## Was das für die KNX-Welt bedeutet

Die KNX-Welt war lange zweigeteilt: kommerzielle Produkte wie Timberwolf, YOUVI und Edomi auf der einen Seite, Bastellösungen mit KNXD und Home Assistant auf der anderen. OpenBridgeServer KNX versucht die Mitte zu finden: professionelle Architektur, Open-Source-Lizenz, Multiprotokoll-Support.

Dass OBS gleichzeitig Adapter für Home Assistant bietet, ist kein Widerspruch, sondern eine pragmatische Entscheidung. HA ist gut darin, schnelllebige Cloud-Integrationen aufzunehmen. OBS ist gut darin, ein zentrales, protokollunabhängiges Objektmodell bereitzustellen. Beides zusammen ergibt mehr als jedes System für sich.

Die Frage ist, ob die KNX-Community das annimmt. 33 Likes auf den Eröffnungsbeitrag und 12 Seiten Diskussion in drei Wochen sind ein gutes Zeichen. Aber die Konkurrenz schläft nicht: PEAKnx hat YOUVI 5.1 in der Beta, mit neuer Fenster-Widget-Logik, Gast-Benutzertyp und erweiterter Icon-Sammlung. Die kommerzielle Seite macht genau das, was OBS noch nicht kann: eine fertige, hübsche Visualisierung.

Wer Lust hat, mitzubauen: das Projekt sucht Contributor auf [GitHub](https://github.com/abeggled/openbridgeserver). Und wer Lust hat, zuzuschauen: der [Thread im KNX-User-Forum](https://www.knx-user-forum.de/) ist es wert, verfolgt zu werden.