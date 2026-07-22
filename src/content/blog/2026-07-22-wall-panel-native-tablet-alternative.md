---
title: "Wall-Panels jenseits des Tablets: Wenn Lovelace nicht reicht"
excerpt: "Tablet an der Wand wird warm, stürzt ab, bricht bei OS-Updates. Ein Proof-of-Concept für native Wall-Panels mit KNX IP zeigt, was jenseits von Lovelace möglich ist."
pubDate: 2026-07-22
readMinutes: 7
address: "1/3/2"
sources: "community.home-assistant.io · knx-user-forum.de"
image: "/images/post-wall-panel-native.svg"
imageAlt: "Natives Wall-Panel im Unterputzgehäuse mit KNX-IP-Anbindung als Alternative zum Tablet-Dashboard"
---

# Wall-Panels jenseits des Tablets: Wenn Lovelace nicht reicht

Ein Tablet an der Wand ist die schnellste Lösung für ein Smart-Home-Dashboard. Fire HD 10 für 80 Euro, Fully Kiosk Browser, Lovelace laden, fertig. Das funktioniert. Meistens. Bis das Tablet nach zwei Jahren warm läuft, der Browser abstürzt, oder ein OS-Update die Kiosk-App bricht. Im [Home Assistant Forum](https://community.home-assistant.io/t/1017660) hat ein Nutzer jetzt einen anderen Weg gezeigt: ein natives Wall-Panel, kein Browser, kein Tablet, mit direkter KNX-IP-Anbindung.

## Das Tablet-Problem ist nicht neu

@kirell beschreibt im Thread einen vertrauten Frust:

> "I use a Raspberry Pi 5 with Ubuntu and Vivaldi browser in kiosk mode. Unfortunately, the whole thing doesn't run anywhere near as smoothly as it does on a cheap smartphone. Lately, I'm getting frequent browser crashes with 'Memory full.'"

Das ist nicht der erste Thread dieser Art. Tablet-Dashboards haben einen Lebenszyklus: in den ersten Monaten läuft alles. Dann kommen die Probleme. Der Browser frisst RAM. Das Display brennt ein. Das OS-Update zerschießt die Kiosk-App. Und wenn das Tablet hinter einer UP-Dose sitzt, kommt die Wärme dazu.

@and313, der den Proof-of-Concept vorstellt, fasst zusammen, woran Tablets scheitern:

> "Tablets come with their own headaches: they depend on a separate HA instance, they get sluggish, wake slowly, need the odd double-tap, and OS/app updates tend to break things over time. High-end dedicated panels (Gira, Basalte) avoid that but are expensive and vendor-locked."

Tablets sind billig, aber wackelig. Professionelle Panels von Gira oder Basalte sind stabil, aber teuer und an ein Hersteller-Ökosystem gebunden. Dazwischen gibt es wenig. Bisher.

## Ein natives Panel mit GPU und KNX IP

Das Setup, das @and313 vorstellt, ist kein Tablet und kein Browser. Es ist ein industrielles 5-Zoll-Panel mit GPU-beschleunigter nativer UI. Die Protokoll-Liste liest sich wie ein KNX-Planer-Wunschzettel: MQTT, KNX IP, Modbus, SIP, BACnet, OPC-UA, RTSP. Sieben Protokolle, direkt auf dem Gerät, ohne Vermittlungsschicht.

Das Panel spricht direkt mit dem KNX-Bus. Kein Umweg über Home Assistant, keine zusätzliche Software-Ebene. KNX-Telegramme kommen am Panel an, werden verarbeitet, und die UI aktualisiert sich. Für KNX-Anwender, die bisher zwischen Gira-Tastsensoren und Tablet-Dashboards wählen mussten, ist das ein dritter Weg.

Die Architektur ist konsequent lokal. Keine Cloud, kein Account. Wer bereits einen [OpenBridgeServer](/blog/openbridgeserver) als offene Alternative zum Timberwolf betreibt, kennt das Prinzip: offene Protokolle statt Hersteller-Lock-in.

## Die Wärmefalle in der Wand

Die Argumentation von @and313 geht tiefer als "Tablets sind langsam". Er beschreibt ein physikalisches Problem, das jeder kennt, der schon mal ein Tablet in eine Unterputzdose bauen wollte:

> "To run a browser-based dashboard and stay genuinely responsive over years, you need enough compute that the device runs warm. Now try to put that behind a flush wall box (UP-Dose): thermally it's a problem."

Ein Raspberry Pi 5 in einer UP-Dose wird warm. Ein Tablet, das einen Browser mit Lovelace rendert, wird warm. Wärme in einem geschlossenen Raum hinter Gipskarton führt zu Drosselung, zu Abstürzen, zu reduzierter Lebensdauer. Das ist kein Software-Problem, das sich mit einem Update beheben lässt.

Ein natives Panel mit GPU-Beschleunigung braucht weniger Rechenleistung für dieselbe UI-Performance. Es durchläuft keinen Browser-Stack: kein DOM-Rendering, keine JavaScript-Engine. Die GPU zeichnet die Oberfläche direkt. Weniger Rechenaufwand, weniger Wärme. Für die Wandinstallation ist das der entscheidende Unterschied.

## "Why not use Lovelace?"

Die Gegenposition im Thread kommt von @vincen:

> "Makes it as painful to use than panels of proprietary home automation systems like Crestron, AMX... Why not use Lovelace?"

Berechtigte Frage. Lovelace ist mächtig, flexibel, und wer Home Assistant betreibt, hat es ohnehin. Warum eine native UI bauen, wenn Lovelace alles kann, was man braucht?

Der erste Grund ist Performance. Lovelace im Browser ist gut, solange das Dashboard klein ist und das Gerät schnell genug. Sobald das Dashboard wächst, mit Dutzende Karten, Echtzeitdaten und mehreren Tabs, wird der Browser zum Flaschenhals. @kirells "Memory full"-Abstürze sind das Symptom.

Der zweite Grund ist Unabhängigkeit. Ein natives Panel, das KNX IP spricht, funktioniert auch, wenn Home Assistant nicht läuft. Wenn der HA-Server neu startet oder ein [Matter-Update die Automatisierung bricht](/blog/matter-update-bilresa-probleme), läuft das Panel weiter. Es spricht direkt mit dem Bus. Das spricht nicht gegen Lovelace, sondern für eine Redundanzschicht, die weiterläuft, wenn HA mal nicht da ist.

## Wo der Haken ist

Ein Proof-of-Concept ist kein Produkt. @and313 zeigt, dass es geht, nicht dass es fertig ist. Ein industrielles 5-Zoll-Panel mit GPU und sieben Protokollen klingt nach einem Bastelprojekt für jemanden, der sich mit Embedded-Systems auskennt. Der normale HA-Nutzer, der ein Fire-Tablet an die Wand geschraubt hat, wird sich das nicht zutrauen.

Die Verfügbarkeit ist ein weiteres Fragezeichen. Das Panel ist ein Einzelstück, kein Produkt im Handel. Und die native UI muss programmiert werden. Lovelace zieht Daten aus HA automatisch. Eine native UI braucht jemanden, der Screens entwirft, KNX-Gruppenadressen mappt und Status-Updates implementiert.

Trotzdem zeigt der Thread, dass die Community an einem Punkt angekommen ist, an dem das Tablet-Dashboard nicht mehr die einzige Antwort ist. Die [ESPHome-Device-Builder-Debatte](/blog/esphome-yaml-gui) hat gezeigt, dass die Community bereit ist, neue Wege zu gehen, wenn die alten nicht mehr reichen. Das native Panel ist ein weiterer Beleg.

## Markt und Perspektive

Die etablierten Hersteller haben das Problem längst erkannt. Gira baut das X1, Basalte das Sentido, JUNG die LS 990 Touch. Native Panels mit KNX-Anbindung, die stabil laufen und teuer sind. Was fehlt, ist das offene Pendant: ein Panel, das so stabil ist wie ein Gira, so offen wie Home Assistant, und nicht an einen Hersteller gebunden.

Das Panel von @and313 ist nicht die Lösung. Es ist ein Beweis, dass die Lösung machbar ist. Wenn jemand die Hardware verfügbar macht und die UI-Entwicklung vereinfacht, entsteht eine echte Alternative zwischen 80-Euro-Tablet und 800-Euro-Gira. Bis dahin bleibt das Tablet an der Wand die schnellste Lösung. Und das native Panel die interessanteste.