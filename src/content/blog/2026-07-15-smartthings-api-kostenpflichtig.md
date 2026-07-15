---
title: "SmartThings API wird kostenpflichtig: Wer lokal kontrolliert, gewinnt"
excerpt: "Samsung fordert 5$ im Monat für die SmartThings API. Home Assistant Nutzer sind wütend. Warum lokale Kontrolle mit KNX und Zigbee davor schützt."
pubDate: 2026-07-15
readMinutes: 6
address: "1/3/1"
sources: "community.home-assistant.io · community-smarthome.de · openhomefoundation.org"
image: "/images/post-smartthings-api.svg"
imageAlt: "SmartThings API wird kostenpflichtig — Cloud-Sperre mit Dollar-Zeichen vor lokalem Smart Home Setup"
---

# SmartThings API wird kostenpflichtig: Wer lokal kontrolliert, gewinnt

Samsung hat Anfang Juli 2026 angekündigt, dass der Zugriff auf die SmartThings API ab Oktober kostenpflichtig wird. Fünf Dollar im Monat für Funktionen, die bisher kostenlos waren. Im Home Assistant Forum explodiert der Thread "Smartthings must be destroyed": 60 Beiträge, fast 1000 Aufrufe, 80 Likes in wenigen Tagen. Die Leute begreifen gerade, was "Cloud-Abhängigkeit" wirklich bedeutet.

## Was Samsung da ankündigt

Die SmartThings API ist die Schnittstelle, über die Drittsysteme wie Home Assistant auf Samsung-Geräte zugreifen — Waschmaschinen, Trockner, Mikrowellen, Klimaanlagen. Bisher war das kostenlos. Ab Oktober soll das 5$ im Monat kosten. Das klingt nach wenig, aber es geht um das Prinzip: Funktionen, für die man beim Gerätekauf bereits bezahlt hat, werden hinter eine monatliche Schranke gezogen.

@Quixote eröffnet den [Thread im Home Assistant Forum](https://community.home-assistant.io/t/1015128) mit einem Post, der 80 Likes bekommen hat:

> "I just read the news about smartthings charging for API access starting in October and I'm fucking PISSED. I just recently bought a Samsung washer/dryer combo and an over the range microwave. One of the major factors in the decision of those purchases was the ability to use Home Assistant with them. There is no way in fucking HELL I'm paying 5 bucks a month for a few TTS notifications and controlling the range hood light."

Er hat extra Samsung-Geräte gekauft, weil sie mit Home Assistant funktionieren. Jetzt soll er dafür zahlen, eine Waschmaschine und ein Mikrowellenlicht lokal zu steuern. Das ist ein Geschäftsmodell, das auf dem schleichenden Entzug von Kontrolle basiert.

## "Enshitification" ist kein Buzzword, es ist ein Muster

@magicbeing bringt im selben Thread ein Wort ins Spiel, das die Smart-Home-Community in den letzten Monaten immer öfter verwendet:

> "It's not just existing cloud services but 'enshitification' by moving from ownership to subscription, centralised control and data collection, fleecing owners etc. People are too trusting of big business and until that changes they will exploit that."

Der Begriff stammt von Cory Doctorow und beschreibt genau das: ein Produkt wird günstig und attraktiv eingeführt, um Nutzer zu binden. Dann, wenn genug Menschen drin sind, verschlechtert sich das Angebot zugunsten des Herstellers. Cloud-APIs, die zuerst offen waren, werden geschlossen oder kostenpflichtig. Features verschwinden hinter Paywalls. Der Nutzer hat die Geräte schon gekauft, er kann jetzt nicht mehr einfach weg.

Samsung ist nicht das erste Unternehmen, das diesen Weg geht. Canon hat Kameras per Firmware-Update künstlich eingeschränkt. HP hat Drucker mit Region-Locks versehen. Das Muster ist immer dasselbe: erst locken, dann kassieren. Wer einmal in das Ökosystem investiert hat, zahlt oder leidet.

## Die bittere Realität: Samsung zurückgeben

@IOT7712 hat eine pragmatische Sicht, die im Forum viel Zustimmung bekommt:

> "A few returns, and they will be asking the question 'why' at the corporate level. Nobody wants returns when your business model relies in shoving boxes out the door as fast as possible. Money doesn't talk, it shouts!"

Seine Strategie: Samsung-Geräte zurückgeben. Wenn genug Leute das machen, spürt Samsung es am Umsatz. Ob das funktioniert ist eine andere Frage. @NathanCu ist pessimistisch:

> "Unfortunately the number of users who will consider themselves slighted will be barely a rounding error. I expect them to get away with it and lose a few clients in the process and they won't care much."

Er hat wahrscheinlich recht. Die Zahl der Menschen, die Home Assistant mit SmartThings-Geräten nutzen, ist eine Abrundungsfehler für Samsung. Das Unternehmen verkauft Millionen Waschmaschinen. Die paar hundert Smart-Home-Enthusiasten, die wegen der API-Kosten ihre Geräte zurückgeben, fallen nicht ins Gewicht. Genau das ist das Problem.

## KNX, Zigbee und ESPHome haben dieses Problem nicht

Wer sein Haus mit KNX, Zigbee oder ESPHome ausstattet, hat ein völlig anderes Problem: keins.

KNX kommuniziert über den Bus. Punkt. Kein Server in Korea entscheidet, ob das Licht angeht. Keine API, die monatlich abgerechnet wird. Die Gruppenadresse 1/1/5 schaltet das Licht im Flur, und das tut sie unabhängig davon, ob Samsung eine Preisliste aktualisiert oder nicht. Wer sich für [Kabel oder Funk](/posts/kabel-oder-funk/) entscheidet, hat diese Diskussion gar nicht erst.

Zigbee ist ähnlich. Ein Zigbee-Stick am Home Assistant Server, Geräte von IKEA, Philips, Aqara, alles läuft lokal über das Mesh. Kein Cloud-Account nötig. Selbst wenn ein Hersteller seine App einstellt, sprechen die Geräte weiterhin Zigbee und reagieren auf den Coordinator. Die [Sicherheit im Smart Home](/posts/smart-home-sicherheit/) beginnt nicht mit Firewalls, sondern mit dem Verzicht auf Cloud-Abhängigkeiten.

ESPHome ist der konsequenteste lokale Ansatz. Ein ESP32 wird geflasht, ein YAML geschrieben, und der Mikrocontroller macht was er soll. Kein Cloud, kein Account, keine API. Schon gar nicht eine, die plötzlich Geld kostet. Wer sich für [ESPHome YAML](/blog/esphome-yaml-gui) interessiert, betritt ein Ökosystem, in dem "Kostenpflichtig" nicht existiert.

## "Works with Home Assistant" als Gegenbewegung

Gleichzeitig wächst das "Works with Home Assistant"-Programm. Die Open Home Foundation hat im Juli bekanntgegeben, dass [IoTorero](https://home-assistant.io/blog) dem Programm beigetreten ist. Das Programm zertifiziert Hersteller, deren Geräte nativ und lokal mit Home Assistant kommunizieren, ohne Cloud, ohne API-Gebühren, ohne monatliche Rechnung.

Das ist kein Zufall. Es ist die Gegenbewegung zu dem, was Samsung gerade macht. Wo ein Hersteller die Schraube anzieht und cloudbasierte Kontrolle zur kostenpflichtigen Pflicht erklärt, baut die Open-Source-Community ein Gegenmodell auf: lokale Kontrolle als Standard, Herstellerzertifizierung als Qualitätssiegel, kein Lock-in.

Die [Matter-Update-Probleme mit IKEA Bilresa](/blog/2026-07-10-matter-update-bilresa-probleme) zeigen zwar, dass auch lokale Standards noch kinderkrank sein können. Aber das Problem dort ist technischer Natur — Updates bei batteriebetriebenen Geräten brechen ab. Das SmartThings-Problem ist struktureller Natur: ein Hersteller ändert bewusst die Bedingungen, um mehr Geld aus bestehenden Kunden zu pressen.

## Was man daraus lernt

Wer Home Assistant seit Jahren nutzt und nie ein Samsung-SmartThings-Gerät gekauft hat, wird es nach diesem Thread auch nicht tun. Die Logik ist einfach: Wer ein Gerät nur über die Cloud eines einzelnen Herstellers steuern kann, besitzt es nicht wirklich. Man mietet die Steuerung, und der Vermieter kann die Konditionen jederzeit ändern.

Wer baut ein Haus oder renoviert, sollte sich diese Frage stellen: Was passiert in fünf Jahren, wenn der Hersteller die API schließt, den Server abschaltet oder Geld verlangt? Bei KNX ist die Antwort: nichts, der Bus läuft weiter. Bei Zigbee: nichts, das Mesh existiert lokal. Bei ESPHome: nichts, der ESP32 macht was sein YAML sagt.

Bei SmartThings? Dann zahlst du 5$ im Monat. Oder du gibst die Geräte zurück und fängst von vorne an.

## Fazit: Local control is not a feature, it's ownership

Der [SmartThings-Thread im HA-Forum](https://community.home-assistant.io/t/1015128) ist mehr als ein Beschwerdethread. Er ist ein Lehrstück über die Architektur des Smart Homes. Die Frage ist nicht "Welche Funktionen hat das System?", sondern "Wer kontrolliert das System, wenn der Hersteller die Spielregeln ändert?"

SmartThings-Nutzer lernen gerade, dass Cloud-basierte Kontrolle ein Leihverhältnis ist. KNX-Nutzer haben das nie lernen müssen. Der Bus kümmert sich nicht um Preiserhöhungen.

Wer noch baut oder plant: lokale Protokolle wählen, Hersteller mit offenen Standards bevorzugen, und Cloud-Abhängigkeiten meiden. Das ist keine Paranoia, sondern die Lektion aus Juli 2026.