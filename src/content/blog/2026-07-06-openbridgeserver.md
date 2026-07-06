---
title: "OpenBridgeServer: Die Open-Source-Alternative zum Timberwolf Server"
excerpt: "Ein Entwickler aus Bern startet OBS als Plan B für den Timberwolf Server. Drei Monate später sind es sechs Entwickler. Der Seitenhieb gegen Home Assistant ist explizit."
pubDate: 2026-07-06
readMinutes: 6
address: "1/2/1"
sources: "knx-user-forum.de · github.com/abeggled/openbridgeserver · open-bridge.io"
image: "/images/post-obs.svg"
imageAlt: "Architekturdiagramm: OBS als zentraler Multiprotokoll-Server mit Adaptern für KNX, MQTT, Modbus und Home Assistant"
---

Der Timberwolf Server hat eine Lücke hinterlassen. Seine Weiterentwicklung war lange unklar, im KNX-User-Forum häuften sich die "Ja/Nein?"-Threads. Als Daniel, bekannt im Forum als @abeggled, die Fragezeichen genug hatte, fasste er einen Entschluss: einen Plan B haben zu wollen. Damit war die Idee des Open Bridge Server geboren.

Am 26. März 2026 startete er als One-Man-Show. Heute, gut drei Monate später, arbeiten sechs Entwickler daran. 33 Likes auf den Eröffnungsbeitrag im KNX-User-Forum. Das Projekt steht unter MIT-Lizenz auf GitHub. Und es positioniert sich explizit gegen Home Assistant, openHAB und IP-Symcon.

## Was der OBS anders macht

Der Kern des OBS ist ein zentrales Objektmodell. Ein Objekt ist ein definierter, protokollunabhängiger Wert – "Temperatur Wohnzimmer" zum Beispiel – unabhängig davon, woher die Daten kommen und wohin sie fliessen. Jedes Objekt steht im internen MQTT-Broker zur Verfügung, sodass Drittsysteme ohne proprietäre Protokolle zugreifen können.

Die Schnittstellen zu den Protokollen – KNX, MQTT, Modbus TCP, SNMP – sind sogenannte Adapter. Im Zentrum sitzt ein Dispatcher als Event-Bus, der über Verknüpfungen die Schnittstelle zwischen Adaptern und Objekten bildet. Verknüpfungen gibt es in mehreren Ausprägungen: lesen, schreiben oder beides. Umrechnungsformeln, Wertemapping und Filter liegen direkt auf Ebene der Verknüpfung.

Zusätzlich zu den Adaptern sind Zeitschaltuhren, eine Anwesenheitssimulation sowie Adapter für Home Assistant und ioBroker an Bord. Letzteres ist interessant: OBS positioniert sich zwar als Alternative zu HA und openHAB, hat aber gleichzeitig Adapter für beide an Bord. Die Idee: schnelllebige Cloudanbindungen aus dem bevorzugten Drittsystem anbinden, während OBS das zentrale Objektmodell übernimmt.

@abeggled schreibt im Forum:

> Ja, man könnte auch Home Assistant, openHAB oder IP-Symcon als Alternative in Betracht ziehen aber die Stärken des zentralen Objektmodells mit den einfachen protokollübergreifenden Anbindungen bietet aus unserer Perspektive keines der genannten Produkte.

## Vom Plan B zum Community-Projekt

Eigentlich sollte OBS erst später an die Öffentlichkeit treten, wenn die neue Visualisierung fertig ist. Aber die Diskussionen im Forum um Edomi-Optimierungen und die Timberwolf-Zukunft haben das Team dazu bewogen, früher transparent zu informieren.

@abeggled dazu:

> Eigentlich war geplant, erst zu einem späteren Zeitpunkt, mit der Verfügbarkeit der neuen Visualisierung, an die Öffentlichkeit zu treten. Auf Grund der Threads rund um «Edomi Optimierungen» und «Timberwolf Server. Ja/Nein?» haben wir uns entschlossen, diesen Schritt vorzuziehen. Dazu gehört auch, was wir noch nicht oder noch nicht in «schön» können.

Die aktuelle Visualisierung entspricht dem Startmotto: Funktionalität zuerst, "schön" später. Eine komplett neue Visualisierung ist in Entwicklung. Das Juni-Release legte den Fokus auf Sicherheit und Mehrsprachigkeit. Im Juli kommen Performanceoptimierungen und ein neues Rechtemanagement, das OBS auch für vermietete Immobilien oder Gewerbeobjekte interessant macht.

## Docker, LXC und ein eigenes Betriebssystem

OBS steht als Docker-Image und als LXC-Template zur Verfügung. Wer Docker oder LXC-Container unter Proxmox nicht mag, kann auf das Schwesterprojekt OBOS zurückgreifen – das Open Bridge Operating System. Es ermöglicht eine einfache und sichere Installation auf AMD64- und ARM64-Hardware.

Das Projekt findet sich auf GitHub unter github.com/abeggled/openbridgeserver. Weitere Infos und eine Demo-Instanz gibt es unter open-bridge.io.

## Was das für die KNX-Welt bedeutet

Die KNX-Welt war lange zweigeteilt: kommerzielle Produkte wie Timberwolf, YOUVI und Edomi auf der einen Seite, Bastellösungen mit KNXD und Home Assistant auf der anderen. OBS versucht die Mitte zu finden: professionelle Architektur, Open-Source-Lizenz, Multiprotokoll-Support.

Dass OBS gleichzeitig Adapter für Home Assistant bietet, ist kein Widerspruch, sondern eine pragmatische Entscheidung. HA ist gut darin, schnelllebige Cloud-Integrationen aufzunehmen. OBS ist gut darin, ein zentrales, protokollunabhängiges Objektmodell bereitzustellen. Beides zusammen ergibt mehr als jedes System für sich.

Die Frage ist, ob die KNX-Community das annimmt. 33 Likes auf den Eröffnungsbeitrag und 12 Seiten Diskussion in drei Wochen sind ein gutes Zeichen. Aber die Konkurrenz schläft nicht: PEAKnx hat YOUVI 5.1 in der Beta, mit neuer Fenster-Widget-Logik, Gast-Benutzertyp und erweiterter Icon-Sammlung. Die kommerzielle Seite macht genau das, was OBS noch nicht kann: eine fertige, hübsche Visualisierung.

Wer Lust hat, mitzubauen: das Projekt sucht Contributor. Und wer Lust hat, zuzuschauen: der Thread im KNX-User-Forum ist es wert, verfolgt zu werden.