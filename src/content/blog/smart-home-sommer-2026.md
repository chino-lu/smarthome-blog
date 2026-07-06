---
title: "Home Assistant 2026.7: Neue Trigger, Matter.js und Proxy"
excerpt: "Home Assistant 2026.7 bringt purpose-specific Trigger, Matter auf matter.js und die Proxy-Initiative. Erfahre hier, was sich ändert und wie du profitierst."
pubDate: 2026-07-06
readMinutes: 8
address: "1/1/5"
sources: "home-assistant.io/blog · openhomefoundation.org · github.com/home-assistant/core"
image: "/images/post-sommer-2026.svg"
imageAlt: "Home Assistant 2026.7 Release mit purpose-specific Triggern und Matter.js"
---

# Home Assistant 2026.7: Neue Trigger, Matter.js und Proxy

Home Assistant 2026.7 ist da und es ist eines der substantialsten Releases der letzten Monate. Drei Updates in sechs Wochen verändern, wie du dein Smart Home automatisierst, wie Matter Geräte verbindet und wie Integrationen mit dem Netzwerk umgehen. Ich habe mir die Änderungen im Detail angesehen und erkläre hier, was praktisch für dich bedeutet.

## Purpose-specific Trigger: Automatisierungen ohne Boilerplate

Das Herzstück des Home Assistant 2026.7 Releases sind die neuen purpose-specific Trigger und Conditions, die aus dem Labs-Stadium in den Standard gewandert sind. Das klingt technisch, ist aber eigentlich genau das Gegenteil von kompliziert.

Du fängst jetzt bei dem an, was dein Zuhause tun soll, nicht bei den Interna. Statt dich zu fragen, welche Entität, welcher State, welcher Trigger-Typ, sagst du einfach: "Wenn das Schlafzimmer unter 18°C fällt, heize an." Das ist der ganze Prozess. Keine Eigenheiten, die man auswendig lernen muss. Und weil Integrationen der Automatisierungs-Engine ihre eigenen Trigger und Conditions beibringen können, wird das mit der Zeit nur besser.

Was genau machen purpose-specific Trigger? Sie abstrahieren die technischen Details weg. Bisher musstest du wissen, dass ein Bewegungsmelder einen `state`-Trigger auf `on` auslöst, dass ein Thermometer einen `numeric_state`-Trigger braucht und dass eine Zeitschaltuhr über einen `time`-Trigger läuft. Mit den purpose-specific Triggern liefert jede Integration ihre eigenen, selbsterklärenden Trigger-Typen mit. Eine Heizkörperthermostat-Integration könnte einen Trigger namens "Raum wird zu kalt" anbieten, ein Türsensor einen namens "Tür wird geöffnet". Du wählst den Trigger, der zu deinem Vorhaben passt, und die Integration kümmert sich um den Rest.

Das gilt auch für Conditions. Statt `numeric_state` mit einem Wertebereich zu definieren, kannst du eine Condition wie "Niemand zu Hause" oder "Es ist Nacht" direkt auswählen, wenn die Integration sie mitbringt. Das macht Automatisierungen lesbarer und wartbarer, besonders wenn du nach drei Monaten versuchst, nachzuvollziehen, was du damals gebastelt hast.

Wer sich mit Smart Home Automatisierung beschäftigt, weiss, dass das bisher ein Nischen-Thema für Bastler war. Mit diesem Schritt rückt Home Assistant näher an die Bedienbarkeit kommerzieller Systeme, ohne die Flexibilität aufzugeben.

## Activity-Logbook: Aufräumen statt suchen

Das Logbook heisst jetzt "Activity" und wurde komplett neu aufgebaut. Eine aufgeräumte Timeline, gruppiert nach Tagen, in der gleichen Sprache wie der Rest von Home Assistant. Ich öffne es seit dem Update einfach so, um reinzuschauen.

Das alte Logbook war eine chronologische Liste aller State-Changes, die schnell unübersichtlich wurde. Wenn du herausfinden wolltest, wann das Licht im Schlafzimmer angegangen ist, musstest du durch hunderte Einträge scrollen. Das neue Activity-Logbook gruppiert Ereignisse nach Tagen und Tagen nach Gerät und Aktion. Du siehst auf einen Blick: Heute Morgen um 6:42 Uhr ging das Schlafzimmerlicht an, die Heizung startete um 7:00 Uhr, die Kaffeemaschine um 7:15 Uhr.

Dazu kommt eine bessere Filterung. Du kannst nach Entität, nach Bereich und nach Zeitraum filtern, ohne die Seite neu zu laden. Für jemanden, der regelmässig Automatisierungen debuggt, ist das ein echter Fortschritt.

## Update-All-Button und IR/RF-Panels

Zwei weitere Neuerungen in Home Assistant 2026.7 verdienen Erwähnung: der Update-All-Button und die neuen IR/RF-Panels.

Der Update-All-Button tut genau, was der Name sagt: Er aktualisiert alle verfügbaren Updates mit einem Klick. Bisher musstest du jedes Update einzeln bestätigen, was bei zehn oder mehr ausstehenden Updates mühsam war. Jetzt markierst du alle, klickst auf "Alle aktualisieren" und gehst einen Kaffee holen. Praktisch für alle, die mehrere Home Assistant-Instanzen oder viele Add-ons pflegen.

Die IR/RF-Panels sind neu für Nutzer, die Infrarot- oder Funkgeräte über Home Assistant steuern. Bisher waren diese Geräte über die Integrationen erreichbar, aber die Bedienung war verstreut. Die neuen Panels bündeln die Steuerung in einer zentralen Oberfläche. Du siehst alle IR- und RF-Geräte an einem Ort, kannst Makros definieren und Geräte gruppieren. Für jemanden mit einer Sammlung von IR-Fernbedienungen oder Funksteckdosen ist das eine spürbare Verbesserung.

Wer sich für [kontrollierte Wohnraumlüftung](/posts/kontrollierte-wohnraumlueftung/) interessiert, findet in den IR/RF-Panels auch eine praktische Möglichkeit, Lüftungsanlagen mit IR-Fernbedienung in Home Assistant einzubinden.

## ZHA-Zigbee-Management überarbeitet

Das ZHA-Zigbee-Management wurde in Home Assistant 2026.7 überarbeitet. ZHA, die integrierte Zigbee-Implementierung von Home Assistant, bekam ein neues Backup- und Restore-System für das Zigbee-Netzwerk. Bisher war das Backup ein manuelles, eher fummeliges Unterfangen. Jetzt kannst du das gesamte Netzwerk inklusive aller Geräte und Routen mit einem Klick sichern und auf einen neuen Coordinator wiederherstellen.

Dazu kommt ein überarbeitetes Geräte-Management. Die Geräte-Liste zeigt jetzt mehr Details pro Gerät: Signalstärke, letzte Kommunikation, Firmware-Version. Das hilft enorm bei der Fehlersuche, wenn ein Sensor plötzlich nicht mehr reagiert. Und der Pairing-Prozess wurde robuster: Geräte, die vorher nur nach mehreren Versuchen gepaart wurden, verbinden sich jetzt oft beim ersten Versuch.

Für grosse Zigbee-Netzwerke mit 50 oder mehr Geräten ist das ein willkommener Fortschritt. Wer noch entscheidet, ob KNX oder Funk das richtige Protokoll ist, findet im Beitrag [Kabel oder Funk](/posts/kabel-oder-funk/) eine Gegenüberstellung.

## Matter auf matter.js: Endlich stabil

Am 23. Juni kam das Matter-Upgrade, auf das viele gewartet haben. Die Open Home Foundation hat die Matter-Unterstützung auf matter.js umgebaut, eine Open-Source-TypeScript-Implementierung des Matter-Standards. Praktisch heisst das: weniger Bugs, schnellere Start- und Wiederherstellungszeiten, und eine neue Visualisierung für das Thread-Mesh-Netzwerk.

Mit dem Upgrade auf Matter 1.5.1 und Thread 1.4 über den aktualisierten OTBR ist Home Assistant jetzt aktuell, was Matter angeht. Das war vorher nicht selbstverständlich. Matter in Home Assistant war lange eher eine Baustelle als ein fertiges Feature. Die Python-basierte Implementierung hatte Performance-Probleme und warf regelmässig Fehler beim Verbinden mit Geräten.

Die neue matter.js-Implementierung läuft im Hintergrund als separater Prozess und kommuniziert über eine WebSocket-Verbindung mit Home Assistant. Das klingt wie ein Nachteil, ist aber ein Vorteil: Wenn der Matter-Stack abstürzt oder neu starten muss, nimmt er nicht den gesamten Home Assistant mit. Die Visualisierung des Thread-Mesh zeigt jetzt alle Knoten im Netzwerk, ihre Verbindungen und Signalstärken, was bei der Fehlersuche hilft.

Wer sich für das Zusammenspiel von Thread und anderen Smart-Home-Protokollen interessiert, sollte auch den Beitrag über [warum ein Smart Home nicht immer spart](/posts/warum-smart-home-nicht-immer-spart/) lesen, denn Thread-Geräte haben eigene Stromverbrauchsmuster.

## Proxy all the things: Kein Gerät mehr aussen vor

Die "Proxy all the things"-Initiative vom 18. Juni ist weniger spektakulär als die anderen Updates, aber für jemanden mit Geräten, die sich nicht ins lokale Netzwerk integrieren liessen, relevant. Das Ziel ist einfach: kein Gerät mehr, das aussen vor bleibt.

Hintergrund sind Geräte, die aus dem lokalen Netzwerk nicht direkt erreichbar sind, weil sie hinter einem NAT sitzen, in einem VLAN isoliert sind oder nur über einen Cloud-Service kommunizieren. Bisher blieb für solche Geräte oft nur die Cloud-Anbindung oder der Verzicht. Die Proxy-Initiative ermöglicht es Home Assistant, als Proxy für diese Geräte zu agieren und sie lokal einzubinden.

Ein Beispiel: Du hast eine Kamera in einem isolierten VLAN, das aus Sicherheitsgründen keinen direkten Zugriff vom Hauptnetz erlaubt. Bisher war die Integration in Home Assistant schwierig. Mit dem Proxy-Ansatz kann Home Assistant als Mittler agieren, ohne die Netzwerkisolation aufzuheben. Für Smart-Home-Nutzer, die [Sicherheit ernst nehmen](/posts/smart-home-sicherheit/), ist das ein wertvolles Feature.

## Was das für Smart Home 2026 bedeutet

Drei Updates in sechs Wochen. Die Automatisierungs-Engine ist intuitiver geworden, Matter hat ein solides Fundament, und der Proxy-Ansatz schliesst Lücken, die früher nervig waren. Smart Home 2026 fühlt sich weniger an wie eine Sammlung von Insellösungen und mehr wie ein System, das zusammenpasst.

Wer parallel zu Home Assistant auch KNX einsetzt, sollte sich ausserdem den [OpenBridgeServer](/posts/2026-07-06-openbridgeserver/) ansehen, eine Open-Source-Lösung, die als Brücke zwischen KNX und anderen Protokollen dient.

Die Entwicklung zeigt einen klaren Trend: Smart Home wird erwachsen. Statt Bastellösungen für Technikaffine entstehen Systeme, die normale Menschen bedienen können, ohne die Flexibilität zu verlieren, die Home Assistant von Anfang an ausgezeichnet hat. Der [Release-Post auf home-assistant.io](https://www.home-assistant.io/blog/2026/07/) hat alle Details im Originalwortlaut.