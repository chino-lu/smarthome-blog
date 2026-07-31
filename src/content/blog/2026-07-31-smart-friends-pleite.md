---
title: "Schellenberg Smart Friends: Wenn der Cloud-Anbieter pleite geht"
excerpt: "Schellenberg Smart Friends ist tot. BBS Systemlösungen liquidiert, App verschwunden. Was Betroffene jetzt tun können und warum lokale Steuerung schützt."
pubDate: 2026-07-31
readMinutes: 6
address: "5/1/1"
sources: "community-smarthome.de · northdata.de · wikipedia.org"
image: "/images/post-smart-friends-pleite.svg"
imageAlt: "Smart Friends App verschwunden, Smart-Home-Box ohne Cloud-Verbindung, Schellenberg-Rollladen"
aiGenerated: true
---

# Schellenberg Smart Friends: Wenn der Cloud-Anbieter pleite geht

Die App ist aus dem Play Store verschwunden. Der iOS App Store zeigt nur noch eine Wolke, die bei Klick meldet: "Gibt es nicht mehr." Wer Schellenberg-Rollläden über Smart Friends steuert, sitzt seit November 2025 auf Hardware, die ohne Server nichts mehr kann. Der Betreiber, BBS Systemlösungen GmbH aus Leopoldshöhe, ist nicht nur insolvent. Die Firma ist liquidiert, das Inventar wird vom Amtsgericht versteigert.

Das ist kein Einzelfall. Aber diesmal ist der Schaden greifbar: Tausende Rollläden, Steinel-Bewegungsmelder, ABUS-Komponenten und Paulmann-Leuchten, die über die Smart-Friends-Plattform vernetzt waren, sind auf eine App angewiesen, die es nicht mehr gibt.

## Was passiert ist: BBS Systemlösungen und das Ende von Smart Friends

Die Firmendaten sind öffentlich auf [North Data](https://www.northdata.de/) einsehbar. BBS Systemlösungen GmbH, eingetragen am Amtsgericht Lemgo unter HRB 6843, mit Sitz in Leopoldshöhe und einem Stammkapital von 25.000 Euro. Gegenstand laut Handelsregister: Softwareentwicklung, Handel mit Hard- und Software, Internethandel. Die Wort-/Bildmarke "Smart Friends" wurde 2017 eingetragen.

Am 4. September 2025 bestellte das Amtsgericht Detmold (Aktenzeichen 10 IN 113/25) einen vorläufigen Insolvenzverwalter. Sieben Wochen später, am 28. Oktober 2025, wurde die Liquidation eingetragen. Das Amtsgericht setzte eine Versteigerung des Inventars an.

Im [Community Smart Home Forum](https://community-smarthome.com/t/naechste-pleite-smart-friends-system-ist-tot-schellenberg-rollaeden-und-co-nicht-mehr-steuern-mit-der-box/9044) brachte @Joerg88 die Nachricht am 21. November 2025 auf den Punkt: "Und da ist es schon wieder passiert! Der nächste Anbieter ist tot (BBS Systemlösungen) und die App Smartfriends ist schon aus dem Playstore verschwunden! Gerne genutzt für Rolläden der Firma Schellenberg, aber auch Partner wie Steinel Abus, Paulmann…"

@Buginithi ergänzte schroff: "BBS ist nicht nur insolvent. Die Firma wurde schon liquidiert." Und weiter: "Als Sicherungsmaßnahme wurde seitens des Amtsgericht auch schon eine Versteigerung des Inventar angesetzt."

Das Stammkapital von 25.000 Euro wirft die Frage auf, wie viel finanzielle Substanz überhaupt hinter einer Plattform stand, die für Tausende Nutzer die Smart-Home-Steuerung übernahm. Das Risiko einer GmbH ist auf das Stammkapital beschränkt. Wer seine Rollläden über eine solche Konstruktion steuert, trägt das volle Risiko, ohne es zu wissen.

## Smart Friends App verschwunden: Wenn der Entwickler-Account stirbt

Die App verschwindet nicht, weil Schellenberg etwas entscheidet. Sie verschwindet, weil der Entwickler-Account weg ist. @Buginithi erklärte das im Forum nüchtern: "Durch die Pleite, ist ja auch der Entwickler Account weg. Und ohne Account keine App."

Das ist der Mechanismus, der cloud-abhängige Smart-Home-Systeme so fragil macht. Die Hardware funktioniert noch. Die Rollläden fahren noch. Aber die Steuerung hängt an einem Account bei Google oder Apple, der an eine Firma gebunden ist, die nicht mehr existiert. Wer die App gelöscht hat, wie @Dane im Forum berichtete, bekommt sie nicht wieder zurück. "Finde sie dort leider nicht", schrieb er Ende Mai 2026, sechs Monate nach der Insolvenz. "Wenn ich da drauf klicke, heißt es die gibt es nicht mehr und ob ich sie löschen oder behalten möchte."

Wer die App noch installiert hat, kann sie behalten. Aber ein iOS-Update oder ein neuer Android-Versionssprung kann die App inkompatibel machen. Ohne Entwickler gibt es keine Updates. Irgendwann läuft sie nicht mehr.

## Cloud-Abhängigkeit im Smart Home: Ein wiederkehrendes Muster

BBS Systemlösungen ist nicht die erste Firma, die Smart-Home-Hardware hinterlässt, weil der Server abgeschaltet wird.

Insteon traf es im April 2022. Smartlabs, der Hersteller des proprietären Insteon-Systems, schaltete abrupt seine Server ab. Tausende Lichtschalter, Sensoren und Hub-Geräte wurden über Nacht unbrauchbar. Die Firma hatte seit den COVID-Lieferkettenproblemen nach einem Käufer gesucht. Der Verkauf scheiterte im März 2022. Im Juni 2022 kaufte eine Gruppe von Insteon-Nutzern die Firma und ihre Assets auf und brachte die Server im Oktober 2022 zurück. Die Nutzer hatten sechs Monate lang tote Hardware. Manche hatten sie schon ausgebaut und weggeworfen.

Revolv traf es 2016. Google hatte die Firma 2014 gekauft und die Server zwei Jahre später abgeschaltet. Die Revolv-Hub-Hardware wurde komplett unbrauchbar. Google bot den Kunden eine Rückerstattung an, was die Ausnahme blieb. In den meisten Fällen gibt es kein Geld zurück.

Nest traf es im Oktober 2025. Google beendete die Software-Unterstützung für die erste und zweite Generation des Nest Learning Thermostat. Smart-Funktionen wie Home/Away, Benachrichtigungen und der Kohlenmonoxid-Sensor fielen aus, weil sie auf die Verbindung zu Google-Servern angewiesen waren. Das Thermostat selbst funktioniert weiter als manueller Regler. Aber das, wofür man 249 Dollar gezahlt hat, war weg.

Die Hardware funktioniert in allen drei Fällen noch. Die Cloud, auf die sie angewiesen ist, nicht mehr. Wer für ein Gerät bezahlt hat, das ohne Server nichts kann, hat verloren.

## Was Betroffene jetzt tun können: Smart Friends Box in Home Assistant

Es gibt einen Ausweg, zumindest für einige. @Speedfreak92 schrieb im Forum: "Ich habe bereits herausgefunden, dass die SmartFriends-Box 2.0 in den Homeassistent integriert werden kann. Zwar nicht über ein offizielles Addon, aber es scheint bei den meisten zu laufen. Auch ohne den BBS-Server…"

@Dane hat es ausprobiert: "Habe die Box jetzt endlich mit Home Assistant verbunden bekommen, müsste aber ein paar alte Automation noch löschen. Und wenn auch selten, aber ab und zu verliert auch mehr ein oder andere Rollladen. Die Verbindung muss neu angelernt werden. Das wird schwierig."

Der Workaround funktioniert über MQTT. Wer Home Assistant betreibt, kann einen Mosquitto-Broker installieren und die Smart-Friends-Box 2.0 über ein Community-Add-on (GitHub: GimpArm/hassio-addons) einbinden. Das ist keine offizielle Lösung und es gibt keinen Support. Aber es ist besser als Rollläden, die sich nur noch manuell bedienen lassen.

Wer sich für den Weg über Home Assistant interessiert, findet im Beitrag zu [Akkuspeichern, die lokal steuerbar sind](/posts/2026-07-29-akkuspeicher-lokal-steuerbar/), wie lokale Steuerung ohne Cloud funktioniert. Der Beitrag über [SmartThings API wird kostenpflichtig](/posts/2026-07-15-smartthings-api-kostenpflichtig/) zeigt ein verwandtes Muster: Samsung hat angekündigt, für API-Zugriff Geld zu verlangen. Wer nicht lokal kontrolliert, zahlt oder verliert.

## Lokale Steuerung als Schutz: Was KNX und Home Assistant anders machen

Der Gegenvorschlag zu Cloud-abhängigen Systemen ist so alt wie das Problem selbst: lokale Steuerung. KNX als kabelgebundenes Bussystem funktioniert ohne Internet und ohne App-Store. Die Gruppenadressen laufen auf der Busleitung. Ein KNX-Rollladenaktor fährt hoch und runter, solange Strom fließt. Wer mehr zur Architektur von KNX vs. Funk wissen will, findet den Vergleich im Beitrag [KNX vs Funk: Welches Smart Home System wirklich überzeugt](/posts/kabel-oder-funk/).

Home Assistant geht einen anderen Weg. Es ist nicht cloud-frei per Design, aber es lässt sich so betreiben. Wer Home Assistant auf einem lokalen Server betreibt und seine Geräte über lokale Protokolle (KNX, Zigbee, Z-Wave, Thread) anbindet, hat keine Abhängigkeit von einem Drittanbieter, der pleitegehen kann. Die Steuerung läuft auf der eigenen Hardware.

Das schützt nicht vor allem. Ein Raspberry Pi kann kaputtgehen. Eine SD-Karte kann ausfallen. Aber diese Risiken sind beherrschbar: Ersatzhardware kostet 80 Euro, das Backup liegt auf dem NAS. Ein insolventer Cloud-Anbieter lässt sich nicht durch ein Backup lösen.

Wer tiefer in die Architektur lokaler Steuerung einsteigen will, findet im Beitrag zum [OpenBridgeServer](/posts/2026-07-06-openbridgeserver/) einen Open-Source-Ansatz, der KNX, MQTT und andere Protokolle zusammenführt. Und wer sich fragt, ob Smart Home überhaupt Energie spart, findet in [Smart Home Energie sparen: Wann es funktioniert und wann nicht](/posts/warum-smart-home-nicht-immer-spart/) die Antwort der Öko-Institut Studie.

## Fazit: Die Frage vor dem Kauf

@Dane brachte die Frustration im Forum auf den Punkt: "Verstehe Schellenberg nicht, das es nicht irgendwie einen Funkstick oder ähnliches gibt um es vielleicht in andere Systeme zu bekommen." @Latten-Jupp antwortete mit dem einzigen Weg, der bleibt: "Einen Funkstick gibt es doch, aber dafür braucht man einen Vertrag bei der Telekom und einen Speedport (Telekom) und dann die App 'Magenta Zuhause Pro' die natürlich 3,99€ pro Monat noch kostet! Bei Schellenberg selber scheint es nicht wirklich jemanden zu jucken!"

Drei Euro neunundneunzig im Monat für eine Steuerung, die vorher in der Smart-Friends-App inklusive war. Das ist kein Upgrade, sondern die Konsequenz aus einer Architektur, die ohne Server nicht funktioniert.

Was passiert, wenn der Server abgeschaltet wird? Bei KNX passiert nichts. Bei Home Assistant mit lokalen Protokollen passiert nichts. Bei Smart Friends, Insteon und Revolv wird die Hardware zu Schrott.

Wer das Risiko minimieren will, kauft Hardware, die ohne Cloud funktioniert. Oder er akzeptiert, dass er ein Abo-Modell kauft, bei dem der Anbieter die Kündigung einseitig durch Insolvenz erklären kann. BBS Systemlösungen hat es vorgemacht.