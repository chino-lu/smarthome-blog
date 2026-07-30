---
title: "Akkuspeicher lokal steuerbar: Welche Systeme wirklich ohne Cloud funktionieren"
excerpt: "Akkuspeicher lokal steuerbar mit Home Assistant: Victron, E3DC, Kostal und Zendure im Community-Test. Was Hersteller versprechen und was in der Praxis stimmt. Jetzt lesen."
pubDate: 2026-07-29
readMinutes: 7
address: "1/4/1"
sources: "community-smarthome.de · community.home-assistant.io · github.com"
image: "/images/post-akkuspeicher-lokal.svg"
imageAlt: "Akkuspeicher lokal steuerbar: Heimspeicher mit Modbus TCP und REST-Anbindung an Home Assistant, Cloud durchgestrichen"
aiGenerated: true
---

# Akkuspeicher lokal steuerbar: Welche Systeme wirklich ohne Cloud funktionieren

Ein Heimspeicher soll zehn Jahre laufen. Das ist die gängige Lebensdauer-Erwartung, wenn jemand 5.000 bis 15.000 Euro in eine Batterie fürs Eigenheim investiert. In zehn Jahren ändern sich Cloud-Dienste, APIs, Firmenpolitik und manchmal ganze Geschäftsmodelle. Wer sich vor der Kaufentscheidung nur eine Frage stellt, die eigentlich zwei ist, spart sich später böse Überraschungen: Lässt sich der Speicher lokal steuern? Und wenn ja, wie genau? Die Community auf [community-smarthome.de](https://community-smarthome.de/t/11168) hat das in einem 38-Antworten-Thread durchgekämpft, System für System, mit konkreten Erfahrungen statt Herstellerwerbung.

## "Was passiert, wenn ich dem Speicher das Internet wegnehme?"

@Alkly, der den Thread initiiert hat, stellt die Frage so direkt, wie sie gemeint ist. Er war auf der Intersolar-Messe und hat Herstellern von Balkonkraftwerk-Speichern, großen Heimspeichern und Wechselrichtern genau diese Frage gestellt:

> "Auf der Messe sagen viele natürlich erstmal: 'Ja, lokal steuerbar', aber mich interessiert jetzt, ob das auch bei euch in der Praxis stimmt, weil ein Speicher ja kein 2-Jahre-Spielzeug ist, sondern idealerweise 5, 10 oder mehr Jahre laufen soll."

Der Unterschied zwischen Messe-Antwort und Praxis ist genau der Punkt, an dem dieser Thread spannend wird. "Lokal steuerbar" ist ein Marketing-Begriff, der je nach Hersteller völlig unterschiedlich ausgelegt wird. Für den einen bedeutet es: Die Grundfunktion läuft offline. Für den anderen: Jede Einstellung lässt sich ohne Internetzugriff ändern. Für wieder einen anderen heisst es lediglich: Die App funktioniert auch im WLAN. Die Community hat das ausdifferenziert.

## Victron: Der klare Lokal-Sieger

@mafe68 beschreibt das Victron-Ökosystem als das, was viele Nutzer eigentlich suchen:

> "Kann komplett Autark betrieben werden. Braucht keinen Internetzugang. Update kannst du per USB od. SD Karte machen wenn kein Internet vorhanden ist. Die komplette Config geht local. HA Einbindung geht Lokal auch wenn HA kein NET Anbindung hat."

Komplett offline, Updates per USB, Home Assistant spricht direkt mit dem System, kein Cloud-Konto nötig. Victron nutzt Modbus TCP als offenes Protokoll. Wer sich für [KNX als lokales Protokoll](/posts/kabel-oder-funk/) entscheidet, kennt das Argument: Offene Standards statt Hersteller-Gefängnis.

## E3DC: Solide via Modbus TCP

@Nicknol liefert eine ähnliche Einschätzung für E3DC-Systeme:

> "Modbus TCP: lokal steuerbar. Nulleinspeisung gibt es als Begriff nicht, doch wird die Priorisierung lokal vorgenommen. 'Notstrom' auch lokal. Betrieb unter HA ohne Internet möglich."

E3DC spricht Modbus TCP, und das reicht für die meisten Home Assistant Anwendungen. Die Priorisierung, also die Entscheidung, ob der Speicherstrom ans Netz einspeist oder selbst verbraucht, läuft lokal. Der Notstrombetrieb funktioniert offline. Die HA-Einbindung braucht kein Internet. Das ist kein lückenloses "alles lokal", aber für die Kernfunktionen stimmt das Versprechen.

## Kostal Plenticore + Pylontech: Lokal, aber mit Aufwand

Komplizierter wird es bei Kostal. @MartyBr beschreibt eine Lösung, die funktioniert, aber nicht ohne Eigenleistung:

> "Über Modbus habe ich die Ladeleistung bei dem gewünschten SOC auf 0 gesetzt. Das habe ich mit 5 Skripten und einigen Automatisierungen inkl. der Steuerung über modbus realisieren können. Das war aber ein großer Aufwand."

Lokal steuerbar, ja. Aber "lokal steuerbar" heisst hier: fünf Skripte, mehrere Automatisierungen, Modbus-Register manuell setzen. Das ist kein Plug-and-play. Wer das bauen will, kann es bauen. Wer das kaufen will, ist hier falsch. Diese Erfahrung ist typisch für viele Systeme: Die lokale Schnittstelle existiert, aber sie ist nicht für Endnutzer gedacht, sondern für Integratoren mit Modbus-Kenntnissen.

## Zendure SF800pro: REST-basiert, aber lückenhaft

@schreibsi zeigt einen anderen Weg, nämlich direkt über REST:

> "Normale HA Zendure Integration installiert und auf ZenSDK gestellt. Kommunikation läuft direkt über Lan-IP /REST. Steuerung über eigenes Python-Skript, welches die 4 günstigsten Stunden nach Epex-Spot zum Laden verwendet."

REST über LAN-IP ist ein lokaler Ansatz, der ohne Cloud auskommt. Aber das Python-Skript deutet auf das gleiche Problem wie bei Kostal: Die Integration in Home Assistant ist möglich, erfordert aber eigene Arbeit. Und @Alkly selbst entwickelt eine HA-App für Zendure, was darauf hindeutet, dass die offizielle Integration noch lückenhaft ist.

## EcoFlow PowerOcean 2: Cloud-API als Gegenbeispiel

Dass nicht jeder Hersteller lokale Steuerung anbietet, zeigt das EcoFlow PowerOcean 2 Beispiel. Eine neue [Custom-Integration für Home Assistant](https://github.com/jensfr1/ha-ecoflow-ocean2) von @jens78 nutzt die EcoFlow OpenAPI, und diese API ist cloudbasiert. Wer den PowerOcean 2 in Home Assistant einbinden will, braucht Internet. Die Kommunikation läuft über EcoFlows Server, nicht über das lokale Netzwerk.

Das ist kein Vorwurf an den Entwickler, der die Integration baut. Es ist die Realität des Geräts: Ohne Cloud kein HA-Zugriff. Wer den SmartThings-Thread kennt, in dem Samsung [kostenpflichtige API-Zugänge](/blog/2026-07-15-smartthings-api-kostenpflichtig) durchsetzt, weiss, wo das enden kann. Heute kostenlos, morgen mit Gebühr, übermorgen abgeschaltet. EcoFlow hat die API-Strategie nicht von vornherein offen dokumentiert. Wer ein System mit zehnjähriger Lebensdauer kauft und nur über eine Cloud-API anbinden kann, verlässt sich auf die fortlaufende Grosszügigkeit des Herstellers.

Erste Nutzer melden bereits Bugs. @Killeen schreibt im [Thread auf community-smarthome.de](https://community-smarthome.de/t/11352), dass die Netzleistung konstant 10 kW anzeigt und die Netzeinspeisung bei 0 bleibt. Der Entwickler bittet um MQTT-Rohdaten zur Fehleranalyse. Das ist normal für eine junge Integration, zeigt aber, dass Cloud-basierte Anbindungen nicht nur abhängig, sondern auch fehleranfälliger sind, weil der Nutzer nicht direkt auf die Rohdaten zugreifen kann.

## "Lokal steuerbar" ist nicht gleich "lokal steuerbar"

Der Thread auf community-smarthome.de liefert eine grobe Taxonomie, die sich direkt als Kaufcheckliste verwenden lässt:

**Vollständig lokal, keine Cloud nötig, Updates offline:** Victron. Die Konfiguration läuft über das lokale Netzwerk oder USB, Home Assistant spricht direkt mit dem System.

**Lokal für Kernfunktionen, aber mit Einschränkungen:** E3DC über Modbus TCP. Priorisierung und Notstrom laufen offline, aber nicht jeder Parameter ist ohne Internet erreichbar.

**Lokal möglich, aber eigenes Skripting nötig:** Kostal Plenticore mit Pylontech. Die Modbus-Schnittstelle existiert, aber es braucht fünf Skripte und Automatisierungen, um das gewünschte Verhalten zu erreichen.

**REST-basiert, aber Integration in Arbeit:** Zendure SF800pro. Die Kommunikation läuft über LAN-IP, aber die HA-Integration ist noch nicht ausgereift.

**Nur über Cloud-API:** EcoFlow PowerOcean 2. Kein lokaler Zugriff ohne Internet, Abhängigkeit vom Hersteller.

Wer diese Liste vor dem Kauf durchgeht, weiss was auf ihn zukommt. Wer [Smart Home Energie sparen](/blog/warum-smart-home-nicht-immer-spart) will, sollte sicherstellen, dass der Speicher sich in das eigene System integriert, ohne dass der Hersteller dazwischenfunken kann.

## Warum die Frage überhaupt wichtig ist

Ein Speicher ist eine langfristige Investition. Die Hardware hält zehn Jahre. Die Software und die Cloud-Dienste, die dazugehören, sind davon unabhängig. EcoFlow könnte die API-Strategie ändern, die Server abschalten, ein Update pushen, das die lokale REST-Schnittstelle schliesst. Samsung hat im Juli 2026 bewiesen, dass Hersteller willkürlich die Spielregeln ändern, wenn es ihnen passt. Wer sich an den [SmartThings-Thread](https://community.home-assistant.io/t/1015128) erinnert, weiss, wie schnell aus "kostenlos" "5 Dollar im Monat" wird.

Bei einem Stromspeicher ist die Konsequenz gravierender als bei einer Waschmaschine. Eine Waschmaschine kann man zurückgeben. Ein fest installierter Heimspeicher nicht. Wenn der Hersteller die API schliesst, bleibt ein teurer Batterie-Block, der seine Kernfunktion noch erfüllt, aber sich nicht mehr sinnvoll in das Smart Home integrieren lässt.

## Die Lehre aus dem Thread

Die Community hat die Frage "Was passiert, wenn ich dem Speicher das Internet wegnehme?" mit konkreten Antworten geliefert, die Hersteller so nie geben würden. Victron ist der klare Sieger für alle, die Lokalität ernst meinen. E3DC ist solide, Kostal braucht Modbus-Kenntnisse, Zendure ist ein Baustellen-Projekt, und EcoFlow ist das Beispiel für Cloud-Abhängigkeit in Reinform.

Wer sich heute für einen Speicher entscheidet, sollte vor der Unterschrift drei Fragen stellen: Welches Protokoll spricht das System lokal? Brauche ich für die Integration Internet? Und was passiert, wenn der Hersteller die API in fünf Jahren ändert? Wenn der Verkäufer die erste Frage nicht beantworten kann, ist das schon eine Antwort.