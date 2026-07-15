---
title: "ESPHome YAML vs GUI: Der Device Builder spaltet die Community"
excerpt: "ESPHome wechselt vom YAML-Editor zum GUI-first Device Builder. Power-User verlieren LAN-Exposure, Einsteiger jubeln. Was der Umbruch bedeutet — mit echten Foren-Zitaten."
pubDate: 2026-07-08
readMinutes: 6
address: "1/1/6"
sources: "community.home-assistant.io · community-smarthome.de · github.com/sokolsok/ESPConfig-Designer"
image: "/images/post-esphome-yaml-gui.svg"
imageAlt: "ESPHome YAML vs GUI: Code-Editor auf der linken Seite, grafischer Device Builder auf der rechten"
---

# ESPHome YAML vs GUI: Der Device Builder spaltet die Community

ESPHome hat ein Identitätsproblem. Seit der Umbenennung des ESPHome HA App zum ESPHome Device Builder läuft die Konfiguration nicht mehr über YAML-Dateien, sondern über eine grafische Oberfläche. Das klingt nach einem Upgrade. Für viele in der Community klingt es aber nach einem Bruch mit dem, was ESPHome gross gemacht hat.

## Was sich geändert hat

Bisher war ESPHome ein YAML-first-System. Du schreibst eine `.yaml`-Datei, definierst dort dein Board, deine Sensoren, deine Aktoren, compilierst, flashst — fertig. Wer einmal die Syntax verstanden hatte, konnte alles nachschlagen, kopieren, versionieren. Die YAML-Datei war die Quelle der Wahrheit. Du hattest sie im Git, konntest sie diff-en, reviewen, teilen.

Der neue Device Builder dreht das um. Die GUI ist jetzt der Standardweg. Du klickst Komponenten zusammen, konfigurierst sie über Formulare, und die YAML-Datei wird im Hintergrund generiert. Du kannst sie noch sehen und bearbeiten, aber der Workflow ist umgekehrt: GUI zuerst, YAML als Durchblick.

Dazu kam eine Entscheidung, die besonders Power-User getroffen hat: Die LAN-Exposure-Funktion wurde entfernt. Der Device Builder läuft nur noch über Ingress, also direkt durch die Home Assistant-Oberfläche. Wer ESPHome bisher über das lokale Netzwerk erreichbar gemacht hat — etwa um von einem anderen Rechner aus zuzugreifen oder ESPHome unabhängig von Home Assistant zu betreiben — hat diese Möglichkeit verloren.

## Die Reaktionen: Zwei Lager

Im [Home Assistant Forum](https://community.home-assistant.io/t/1014282) hat sich eine Diskussion mit 37 Antworten entwickelt, die zwei Lager zeigt.

@inventor7777 schreibt:

> I am growing to like the new ESPHome Device Builder. I wish the YAML editor could be larger, but tbh I haven't really explored the settings, so it may be there after all. However, one thing has really killed the excitement for me — the inability to expose it to LAN.

> I really get that same vibe. I was honestly pretty surprised at how it completely switched from YAML-first to GUI-first. I am wondering if they did that to try and ease the sheer amount of non-technical people trying to use it.

Das ist die Kernspannung. Die GUI hilft Einsteigern, die vor YAML zurückschrecken. Aber sie nimmt Power-Usern Features weg, die sie brauchten.

@busman trifft den Nerv mit einer Frage, die im Forum stehen sollte, eingerahmt:

> But it really make me wonder — is there someone "high up" that really hates YAML? You have to use YAML to ask for a feature request, but then they take it away in the actual tool?

Auf [community-smarthome.de](https://community-smarthome.de/t/11223) sieht es ähnlich aus. @Dr.Big erklärt dort die Perspektive der Einsteiger:

> Gerade für Einsteiger ist das oft eine riesige Hürde: Ein falsches Leerzeichen, eine falsche Einrückung...

Und @MarzyHA wartet lieber ab:

> Sieht interessant aus. Ich warte aber lieber auf den offiziellen Editor

## Warum die GUI kommt (und warum sie trotzdem weh tut)

Beide Seiten sind nachvollziehbar. ESPHome ist in den letzten zwei Jahren explosionsartig gewachsen. Das lag an den günstigen ESP32-Boards, am einfachen Flash-Prozess und an der YAML, die nach einer Lernkurve von vielleicht einer Stunde verständlich war. Aber diese Lernkurve existiert. Ein falsches Leerzeichen, eine falsche Einrückung — und die Datei kompiliert nicht. Für jemanden, der nur einen Temperatursensor bauen will, ist das frustrierend.

Die GUI löst das. Du klickst, wählst aus Dropdowns, siehst sofort, was fehlt. Kein Tippfehler, keine fehlende Einrückung. Das ist für Neuankömmlinge ein echter Fortschritt.

Das Problem ist, was dabei verloren geht. Die LAN-Exposure-Entfernung ist keine Nebensächlichkeit. Wer ESPHome auf einem separaten Server betreibt, wer mehrere Home Assistant-Instanzen pflegt, wer ESPHome unabhängig von HA nutzen will — der braucht den direkten Netzwerkzugang. Ingress ist nett für den Hausgebrauch, aber es koppelt ESPHome an HA auf eine Weise, die vorher optional war.

Und da ist die grundsätzlichere Frage: Was ist ESPHome eigentlich? Ist es ein Tool für Bastler, die YAML beherrschen wollen, oder ein Tool für jeden, der schnell ein Smart-Home-Gadget bauen will? Die Antwort des Device Builders ist klar: letzteres. Die Antwort eines Teils der Community ist: beides, bitte.

## Die Community baut ihre eigene Lösung

Wenn ein Tool eine Lücke lässt, kommt irgendwann jemand mit einer Lösung. [ESPConfig-Designer](https://github.com/sokolsok/ESPConfig-Designer) ist ein Community-Projekt, das genau die Lücke füllt, die der Device Builder aufreisst: ein visueller YAML-Editor, der standalone läuft, ohne Ingress, ohne HA-Abhängigkeit.

@Dr.Big auf community-smarthome.de beschreibt die Motivation:

> Man möchte einen coolen Sensor, ein E-Ink-Display oder ein kleines Smarthome-Gadget mit einem ESP32 oder ESP8266 bauen und landet sofort bei ESPHome. Eigentlich ein geniales System – wenn da nicht diese Sache mit den YAML-Konfigurationsdateien wäre.

@Dreckfresse sieht pragmatischen Nutzen:

> Nettes kleines Beispiel um eine feste IP zu hinterlegen ohne in der Doku von ESPHome nachzuschlagen

ESPConfig-Designer läuft als Docker-Container, hat eine klick-basierte Oberfläche für Standard-Komponenten und verlinkt direkt zur ESPHome-Dokumentation. Es ist kein vollständiger Ersatz für den YAML-Editor, aber es zeigt, dass der Bedarf da ist. Die Community baut, was das offizielle Tool nicht mehr bietet.

## Was bedeutet das für ESPHome als Plattform?

Der Wechsel von YAML-first zu GUI-first ist mehr als ein UI-Update. Er ist ein Statement darüber, für wen ESPHome gebaut wird. Wer die Entscheidung trifft, die GUI zum Standardweg zu machen und gleichzeitig die LAN-Exposure zu entfernen, sagt: Wir wollen Einsteiger, und wir wollen sie über Home Assistant. Power-User, die eigenständig arbeiten, sind nicht mehr die Zielgruppe.

Das ist verständlich aus Sicht der Projektverwaltung. ESPHome wächst, und Wachstum kommt von Einsteigern, nicht von YAML-Veteranen. Aber es ist auch ein Vertrauensverlust. Die Leute, die ESPHome gross gemacht haben, die Tutorials geschrieben haben, Bugs gemeldet haben, die ersten Integrationen gebaut haben — die kommen aus dem YAML-Lager. Ihnen das Gefühl zu geben, dass ihre Art der Nutzung nicht mehr gewollt ist, ist kurzfristig effizient und langfristig riskant.

@busmans Frage, ob jemand "high up" YAML hasst, ist halb im Scherz geschrieben. Aber sie trifft etwas. Es geht nicht um Hass auf YAML, es geht um eine Priorisierung: Wachstum über Macht. Das ist eine legitime Strategie. Aber sie gehört transparent kommuniziert, nicht als Upgrade verpackt, während Features stillschweigend verschwinden.

## Praktisch: Was sollst du tun?

Wenn du ESPHome schon nutzt und YAML kennst, ändert sich für dich im Moment wenig. Die YAML-Dateien funktionieren weiter, du kannst sie weiter von Hand bearbeiten. Der Device Builder generiert YAML, er ersetzt sie nicht. Was du verlierst, ist die LAN-Exposure und die Gewissheit, dass YAML der bevorzugte Weg bleibt.

Wenn du neu einsteigst, freu dich. Die GUI macht den Start spürbar einfacher. Du musst keine YAML-Syntax lernen, um einen Sensor ans Laufen zu bringen. Und wenn du später mehr willst, kannst du immer noch in die YAML-Datei schauen und lernen, was die GUI da produziert.

Wer sich für Smart Home Energieeffizienz interessiert, sollte auch den Beitrag über [warum ein Smart Home nicht immer spart](/posts/warum-smart-home-nicht-immer-spart/) lesen — ESPHome-Sensoren verbrauchen Strom, und die Bilanz hängt davon ab, was man mit den Daten macht.

Wer KNX und Home Assistant parallel betreibt und MQTT als Brücke nutzen will, findet im [OpenBridgeServer](/posts/2026-07-06-openbridgeserver/) eine Open-Source-Lösung. Und wer bei der Protokollwahl [Kabel oder Funk](/posts/kabel-oder-funk/) überlegt, sollte ESPHome-Boards als Funk-Endpunkte mitdenken.

## Offene Frage

Der Device Builder ist da. Die GUI kommt. Die Frage ist nicht, ob sie kommt, sondern ob ESPHome ein System für alle bleibt oder zwei Systeme werden: ein offizielles für Einsteiger und ein Community-gebautes für die, die mehr wollen. ESPConfig-Designer ist der erste Schritt in diese Richtung. Ob er ein Provisorium bleibt oder der Start einer Abspaltung, hängt davon ab, wie ernst die ESPHome-Entwickler die Sorgen der Power-User nehmen. Bis jetzt klingt es eher nach "geht schon, gewöhn dich dran". Wir werden sehen, ob das reicht.