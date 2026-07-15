---
title: "Matter-Update-Probleme: IKEA Bilresa und die Update-Falle"
excerpt: "Matter-OTA-Updates bei batteriebetriebenen Geräten brechen ab. IKEA Bilresa-Nutzer suchen Workarounds — oder geben auf. Was wirklich hilft."
pubDate: 2026-07-10
readMinutes: 6
address: "1/1/7"
sources: "community-smarthome.de · community.home-assistant.io · openhomefoundation.org"
image: "/images/post-matter-bilresa.svg"
imageAlt: "Matter-OTA-Update bricht bei IKEA Bilresa Dualschalter ab — rot markierte Fortschrittsanzeige bei 10 Prozent"
---

# Matter-Update-Probleme: IKEA Bilresa und die Update-Falle

Matter sollte alles einfacher machen. Ein Standard, alle Hersteller, keine App-Hölle mehr. Die Realität bei batteriebetriebenen Geräten sieht anders aus. Im [community-smarthome.de Forum](https://community-smarthome.de/t/10869) hat sich ein Thread über IKEA Bilresa Dualschalter aufgetan, in dem Nutzer beschreiben, wie Matter-OTA-Updates immer wieder abbrechen. Manche haben ihre Geräte zurückgegeben. Wer den [HA 2026.7 Release](/blog/smart-home-sommer-2026) verfolgt hat, weiss, dass Matter.js gerade erst auf 1.5 aktualisiert wurde. Aber die Update-Praxis hinkt hinterher.

## Was passiert beim IKEA Bilresa Matter-Update

Der IKEA Bilresa ist ein batteriebetriebener Dualschalter, der Matter unterstützt. Soweit die Theorie. In der Praxis versuchen Nutzer, das Matter-OTA-Update über Home Assistant oder Apple Home auszuführen, und das Update bleibt hängen. Meistens bei 5 oder 10 Prozent. Dann bricht es ab.

@SmartHobbyt beschreibt im [community-smarthome.de Thread](https://community-smarthome.de/t/10869) den Moment, in dem er aufgab und eine bizarre Lösung fand:

> "Bei mir hat das Update immer beim Erreichen von 10 % abgebrochen. Das hat mich dann dazu gebracht alle 5 % auf einen Knopf zu drücken. Also bei 5, 10, 15, 20 usw. So lief dann das Update ohne Probleme durch."

Alle 5 Prozent einen Knopf drücken. Das ist kein Standard, das ist Bastelarbeit.

## "Kein Vertrauen mehr"

Die emotionale Seite ist mindestens so aufschlussreich wie die technische. @Jenaih schreibt im selben Thread:

> "bei mir bricht das Update in Home Assistant trotz Öfteren drückens eines Buttons immer ab. Einer (von insg. 5 Bilresas) hat das Update auf 1.9.15 (Über Apple Home) genommen. Die anderen nicht... Ich denke die werd ich alle zurückgeben….. Schade.. Hab da kein Vertrauen mehr.."

Fünf Geräte gekauft. Eins aktualisiert. Vier gehen zurück. So sieht Matter-Realität im Juli 2026 aus, nicht bei irgendeinem No-Name-Hersteller, sondern bei IKEA.

## Warum batteriebetriebene Geräte besonders betroffen sind

Das Problem ist nicht spezifisch für IKEA. Es liegt in der Natur von Matter-OTA-Updates bei batteriebetriebenen Geräten. Diese Geräte schlafen. Sie wachen nur auf, wenn ein Button gedrückt wird oder ein Sensor auslöst. Ein Update vorausgesetzt, das Gerät bleibt lange genug wach, um mehrere Megabyte Firmware herunterzuladen und zu flashen. Bei einem Dualschalter mit Knopfzelle ist das nicht gegeben.

Matter hat einen Mechanismus dafür: Das Gerät wacht periodisch auf, lädt ein Stück, geht wieder schlafen. Aber die Implementierung bei verschiedenen Controllern (Home Assistant, Apple Home, Google Home) unterscheidet sich. Und die Thread-Netzwerkverbindung kann abbrechen, wenn das Gerät zu lange schläft und der Router es aus der Routing-Tabelle wirft.

@speedyhb hat einen anderen Workaround gefunden, der weniger nervig, aber nicht weniger absurd ist:

> "bei mir hat es geholfen das Gerät näher an die Matter Antenne zu halten. Abstand war nur noch 1 m. Dann lief das Update beim 1. Versuch durch."

Ein Meter Abstand zum Thread Border Router. Bei einem Funk-Standard, der meshbasiert sein soll und Reichweiten von Dutzenden Metern verspricht.

## Matter.js 1.5 und das Problem dahinter

Ende Juni 2026 hat die Open Home Foundation [matter.js auf Version 1.5 aktualisiert](https://community.home-assistant.io/t/1014865). Das Update bringt Zertifizierung, neue Geräteklassen, und mit Version 1.6 soll NFC-Pairing kommen. Im [Home Assistant Forum](https://community.home-assistant.io/t/1014865) diskutieren Nutzer das Update.

Aber die grundlegende Architekturfrage, wie man OTA-Updates bei schlafenden, batteriebetriebenen Geräten zuverlässig ausführt, ist damit nicht gelöst. matter.js 1.5 verbessert die Zertifizierung und fügt Features hinzu. Es ändert aber nichts daran, dass ein batteriebetriebener Schalter, der alle paar Sekunden aufwacht, ein schwieriges Ziel für ein Firmware-Update bleibt.

Im Home Assistant Forum fragt @awoo eine Frage, die zeigt, wie komplex das Thema ist:

> "okay but how do i turn that off?"

Er spricht über Certificate Revocation bei der Commissioning-Phase. Das ist eine Schutzfunktion, die verhindert, dass Geräte mit ungültigen Zertifikaten im Netzwerk verbleiben. Aber für Nutzer, die einfach ein Update durchbekommen wollen, ist das eine weitere Hürde.

## Praktische Workarounds aus der Community

Wer seine IKEA Bilresa oder andere batteriebetriebene Matter-Geräte nicht zurückgeben will, hat drei Optionen. Die erste haben wir schon gehört: der 5-Prozent-Trick. Jedes Mal, wenn das Update bei 5, 10, 15 Prozent hängt, den Button auf dem Gerät drücken. Das weckt das Gerät auf, der Download geht weiter. @SmartHobbyt hat das erfolgreich durchgespielt. Es dauert, es ist nervig, aber es funktioniert.

Die zweite Option: näher an den Border Router. @speedyhb hatte Erfolg mit 1 Meter Abstand zum Thread Border Router. Das deutet auf ein Signalqualitätsproblem hin. Thread sollte meshbasiert sein, aber bei OTA-Updates scheint die Verbindung zu instabil, wenn das Gerät zu weit weg ist.

Die dritte: alternative Controller probieren. @Jenaih hatte mit einem von fünf Bilresas Erfolg über Apple Home, während Home Assistant dasselbe Update nicht durchbekam. Wenn einer nicht funktioniert, probier einen anderen. Das erinnert mich an die aktuellen [ESPHome Device Builder Diskussionen](/blog/esphome-yaml-gui) — auch dort sucht die Community nach Wegen, die die offizielle Lösung nicht bietet.

## Was man daraus lernt

Matter ist kein fertiges System. Es ist ein Standard, der in der Praxis immer noch rau ist, besonders bei batteriebetriebenen Geräten. Die Idee, Updates über das Thread-Netzwerk zu pushen, ist gut. Die Umsetzung bei Geräten, die schlafen und nur wenig Strom haben, ist das Problem.

Wer Home Assistant mit Matter-Geräten betreibt, sollte vor jedem Update die Geräte physisch in die Nähe des Border Routers legen und Zeit einplanen. Matter ist nicht "drücken und vergessen". Noch nicht.

Interessant ist auch die Reaktion von @dejitaru im [Home Assistant Thread zum Matter-Update](https://community.home-assistant.io/t/1014865):

> "Ohhhhh awesome! Once 1.6 is released NFC pairing will be so clutch!"

NFC-Pairing kommt mit matter.js 1.6. Das macht die Ersteinrichtung einfacher. Aber NFC-Pairing löst nicht das Update-Problem bei batteriebetriebenen Geräten. Das ist ein anderer Baustein.

## Fazit: Matter kann, aber noch nicht bei Batteriegeräten

Der [community-smarthome.de Thread](https://community-smarthome.de/t/10869) zeigt, wo Matter im Juli 2026 steht. Netzbetriebene Geräte aktualisieren problemlos. Batteriebetriebene sind ein Glücksspiel. IKEA hat mit dem Bilresa ein günstiges Matter-Gerät auf den Markt gebracht, aber die Update-Erfahrung ist so frustrierend, dass Nutzer ihre Geräte zurückgeben.

Die Empfehlung: Wer batteriebetriebene Matter-Geräte kauft, sollte mit Update-Problemen rechnen. Das Gerät nah an den Border Router legen, regelmäßig den Button drücken, und verschiedene Controller ausprobieren. Oder auf matter.js 1.6 warten, auch wenn NFC-Pairing primär die Einrichtung, nicht das Update, erleichtert.

Matter ist die Zukunft. Wir sind im Juli 2026 noch nicht da.