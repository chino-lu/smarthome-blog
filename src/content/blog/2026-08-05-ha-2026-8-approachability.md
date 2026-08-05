---
title: "Home Assistant 2026.8: Vom Nerd-Tool zum Massenprodukt"
excerpt: "Home Assistant 2026.8 streicht :8123, Expert-Labels und Developer-Tools. Template-States überstehen Neustarts. Lohnt sich das Update? Jetzt lesen."
pubDate: 2026-08-05
readMinutes: 6
address: "1/1/8"
sources: "community.home-assistant.io · community-smarthome.de · rc.home-assistant.io"
image: "/images/post-ha-2026-8-approachability.svg"
imageAlt: "Home Assistant 2026.8: Port 8123 entfallen, Developer Tools zu Tools umbenannt, Template-States überleben den Neustart"
aiGenerated: true
---

# Home Assistant 2026.8: Vom Nerd-Tool zum Massenprodukt

Die Adresse `http://homeassistant.local:8123` war jahrelang die URL, die jeder Home Assistant Nutzer auswendig kannte. Der Port 8123, ans Ende gehängt wie ein obligatorischer Zungenbrecher. Mit Version 2026.8 verschwindet er, zumindest bei neuen HAOS-Installationen. Das ist keine kosmetische Änderung. Es ist Teil einer Strategie, die das gesamte Release durchzieht: Home Assistant soll zugänglicher werden. Approachability, im offiziellen Sprachgebrauch der Open Home Foundation.

@MissyQ, die die Beta-Woche im [Community-Forum](https://community.home-assistant.io/t/1019200) eröffnete, brachte es so auf den Punkt: "This release isn't filled with a bunch of big hitters similar to other releases during summer months, but it's doing one important thing we've talked about a lot this year - making Home Assistant more approachable."

Kein grosses Feature-Feuerwerk. Stattdessen eine Reihe von Änderungen, die einzeln klein wirken, zusammen aber eine Richtung zeigen. Die Frage dahinter: Ist Home Assistant ein Werkzeug für Bastler, oder will es in Wohnungen ankommen, in denen niemand YAML schreiben will?

## Port 8123 weg: Die saubere URL als Statement

Der Port `:8123` war nie ein technisches Problem. Er war ein psychologisches. Wer einer Bekannten die Adresse der eigenen Smart-Home-Instanz durchgibt, musste erklären, was diese Zahlen bedeuten. "Ja, das musst du dahintendran hängen." Das klingt nach einem System, das nicht für normale Menschen gebaut ist.

@MissyQ schrieb im [Beta-Thread](https://community.home-assistant.io/t/1019200/1): "I have always wondered why we have this random port at the end of the URL and I will be changing it as soon as I get my instance running in my new home."

Die Änderung betrifft nur brandneue HAOS-Installationen. Bestehende Setups behalten ihren Port, können ihn aber über die UI anpassen. Wer den Port ohnehin hinter einem Reverse Proxy auf 443 gelegt hat, merkt nichts. Für alle anderen ist es einer dieser kleinen Momente, in denen ein System erwachsen wird.

## "Expert" raus, "Tools" rein: Beschreiben statt ausschliessen

Zwei Umbenennungen fallen auf. Das Label "Advanced" und der Begriff "expert" verschwinden aus der Oberfläche. Stattdessen werden die Funktionen beschrieben, was sie tun, nicht wen sie voraussetzen. Und die "Developer Tools" heissen jetzt nur noch "Tools".

Das klingt marginal. Es ist es nicht. Wer ein System neu entdeckt, liest "Advanced" als Warnung: Hier geht es nicht weiter für dich. Die Funktion dahinter mag völlig harmlos sein, die eine Checkbox, die ein Token anzeigt. Das Label sagt: Du gehörst nicht dazu.

Die Umbenennung in "Tools" folgt derselben Logik. "Developer Tools" klingt nach einer Sektion für Leute, die Pull Requests schreiben. "Tools" klingt nach einem Werkzeugkasten, der jedem offensteht. Die Funktion ist dieselbe. Die Botschaft ändert sich.

Wer die ESPHome-Diskussion im Forum verfolgt hat, erkennt den gleichen Zug. Die Frage dort: Wieviel Konfiguration lässt sich aus der YAML-Datei in eine grafische Oberfläche verschieben, ohne die Macht zu verlieren? Der Beitrag zu [ESPHome ohne YAML](/posts/2026-07-08-esphome-yaml-gui/) zeigt, wohin das führt: zum visuellen Editor, der die gleiche Datei erzeugt, nur ohne Texteditor. Approachability ist kein einzelnes Release, sondern ein Zug, der seit Monaten läuft.

## Template-States überleben Neustarts: Ein technischer Meilenstein

Unter den kleineren Änderungen steckt eine, die die Community seit Jahren fordert: Template-Entities behalten ihre States nach einem Restart.

Bisher war es so: Wer eine Template-Sensor-Entität baute, etwa einen berechneten Wert aus zwei anderen Sensoren, bekam nach jedem Neustart von Home Assistant erstmal `unavailable`, bis das Template neu evaluierte. Bei komplexeren Templates mit Verzögerungen oder Zuständen, die sich über Zeit aufbauten, bedeutete das Datenlücken in der Historie und fehlerhafte Trigger nach jedem Reboot.

@HappyCadaver reagierte im [Beta-Thread](https://community.home-assistant.io/t/1019200/3) mit Verve: "Hallelujah, there is a template god! Thier name is Petro." Daraufhin korrigierte @petro selbst: "That's all @frenck! I did absolutely nothing for templates this release."

Das Detail sagt etwas über das Projekt. Die Änderung ist implementiert worden, nachdem die Community sie jahrelang angefragt hatte. Sie betrifft Nutzer, die tief in Templates arbeiten, also eher die Power-User-Fraktion. Und sie kommt in einem Release, das sich offiziell der Approachability widmet. Das bedeutet, dass die Entwickler an beiden Enden arbeiten: die Tür für Neue weiter aufstellen und gleichzeitig die Reibung für Bestandsnutzer abbauen.

Wer sich für die Architektur hinter solchen Berechnungen interessiert, findet im Beitrag zu [lokal steuerbaren Akkuspeichern](/posts/2026-07-29-akkuspeicher-lokal-steuerbar/) einen verwandten Punkt: Lokale Templates und Modbus-basierte Steuerung sind die Werkzeuge, mit denen Home Assistant ohne Cloud auskommt. Beides profitiert vom State-Restore.

## Entity-ID-Format: Systemweite Einstellung nach Community-Druck

Release 2026.6 hatte das Entity-ID-Format umgestellt und damit Protest ausgelöst. Die IDs enthielten plötzlich Area-Namen als Präfix, was bestehende Automatisierungen und Skripte brach. Ein [GitHub-Issue](https://github.com/home-assistant/core/issues/173125) sammelte die Beschwerden.

2026.8 reagiert darauf mit einer systemweiten Einstellung. Wer seine Entity-IDs im alten Format behalten will, kann das nun festlegen. Wer das neue Format bevorzugt, bekommt es. Die Entscheidung liegt beim Nutzer, nicht am Release-Zyklus.

Das ist die unspektakuläre Seite von Approachability: auf Feedback hören. Keine Breaking Changes als Dogma, sondern als gestaltbare Option. Wer schon einmal ein Update gefürchtet hat, weil drei Jahre gewachsene Automatisierungen kaputtgehen könnten, weiss, wie selten das in der Softwarewelt passiert.

## Neue Integrationen und Quality Scale: Breiter wird es

13 neue Core-Integrationen kommen mit 2026.8: Fuelprices.dk, Gatus, Google Health, Harbor Sleep, Harman Luxury Audio, Karakeep, LED Infrared, LiteLLM, llama.cpp, Lyngdorf, Midea LAN, NeoPool, ScorpionTrack. llama.cpp und LiteLLM bestätigen einen Trend: Lokale KI-Modelle landen im Smart Home, ohne Cloud. Wer die Debatte um [KI und MCP in Home Assistant](https://community-smarthome.de/t/11384) kennt, weiss, wie umstritten das ist. Die lokalen Integrationen geben den Datenschützern ein Argument: die Modelle laufen im eigenen Netz, nicht bei Anthropic.

10 Integrationen erreichten neue Quality-Scale-Level: 2 Platinum, 1 Gold, 5 Silver, 2 Bronze. Die Quality Scale ist Home Assistants Antwort auf den HACS-Wildwuchs. Wer den Beitrag zur [HACS-Sicherheit](/posts/2026-07-24-hacs-sicherheit/) gelesen hat, kennt die Frage: Wie viel Vertrauen verdient eine Custom-Integration, die niemand auditiert? Die Quality Scale ist die Gegenantwort: Core-Integrations werden geprüft, gestuft, und wer auf Platinum steht, hat eine klare Aussage gemacht.

Dazu kommen Verbesserungen bei bestehenden Integrationen. Shelly unterstützt Enhanced Security. SwitchBot bekommt neue Geräte. MQTT hat jetzt eine Infrared-Plattform. LG Infrared steuert Klimaanlagen, was im europäischen Hochsommer 2026 laut @MissyQ "MUCH needed right now in Europe and North America" ist.

## Der Wandel, der im Kleinen stattfindet

@bjoerg schrieb im deutschen [Community-Forum](https://community-smarthome.de/t/11388): "Beta 2026.8.0b3 läuft zu mindestens auf meinem Test-System ohne Probleme." Fünf Teilnehmer der Stabilitätsumfrage stimmten für stabil, null für Probleme. @widestone meldete eine Ausnahme: "Seit Update (b03…b05) hohe Prozessorlast. Alle Apps/Plugins aber CPU<1%. Sonst keine Probleme." Ein Einzelfall, aber einer, der zeigt, dass Approachability nicht heisst, dass jeder Bug verschwindet.

Das Spannende an 2026.8 ist nicht, was neu ist, sondern was weggelassen wird. Der Port. Das "Expert"-Label. Der Name "Developer". Ein Release, das weniger tut und dadurch mehr verändert. Die Frage, ob Home Assistant seine Nerdiness verliert, verkennt den Punkt. Nerdiness war nie der Wert. Der Wert war, dass das System mächtig ist. Mächtig und zugänglich schliessen sich nicht aus, und 2026.8 macht einen Schritt, beide gleichzeitig zu ernst zu nehmen.

Wer tiefer einsteigen will, findet im Beitrag zu [Wall-Panels jenseits des Tablets](/posts/2026-07-22-wall-panel-native-tablet-alternative/) die nächste Stufe der Frage: Wie sieht ein Interface aus, wenn es nicht für einen Browser-Tab, sondern für eine Wand gebaut wird? Die URL war das einfache Ende. Die Wand entscheidet, ob Approachability wirklich ankommt.