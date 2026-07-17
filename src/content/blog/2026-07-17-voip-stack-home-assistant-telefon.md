---
title: "VoIP Stack: Home Assistant wird zum Telefonsystem"
excerpt: "Home Assistant 2026.7 bringt einen VoIP Stack — HA als SIP-Registrar, ESPHome-Geräte als Telefone, Assist per Anruf erreichbar. Was der Stack kann und wo es hakt."
pubDate: 2026-07-17
readMinutes: 6
address: "1/1/8"
sources: "community.home-assistant.io · home-assistant.io · esphome.io"
image: "/images/post-voip-stack.svg"
imageAlt: "Home Assistant VoIP Stack — SIP-Telefonzentrale mit verbundenen ESPHome-Endgeräten und Handy als externer Anruf"
---

# VoIP Stack: Home Assistant wird zum Telefonsystem

Home Assistant war schon immer ein bisschen mehr als nur eine Smart-Home-Zentrale. Musik abspielen, Kameras überwachen, Benachrichtigungen schicken — das alles gehört dazu. Mit dem Release 2026.7 kommt aber etwas, das die meisten nicht auf der Rechnung hatten: ein vollständiger VoIP Stack. Home Assistant wird zum SIP-Registrar, zum Call-Router, zur RTP-Bridge. ESPHome-Geräte werden zu echten Telefonen. Und die Assist-Sprachsteuerung ist plötzlich per Anruf erreichbar — von jedem Telefon aus, das SIP spricht.

Das ist mehr als ein neues Add-on. Smart Home und Telefonanlage wachsen zusammen, lokal, ohne Cloud.

## Was der VoIP Stack 2026.7 tatsächlich kann

Die [Release Notes zu 2026.7](https://www.home-assistant.io/blog/2026/07/) sprechen von einem vollwertigen SIP/VoIP-System. Das bedeutet konkret:

- **SIP-Softphone:** Home Assistant kann ausgehende Anrufe tätigen und entgegennehmen.
- **Call-Router:** Eingehende Anrufe lassen sich basierend auf Regeln weiterleiten — an ESPHome-Geräte, an externe Nummern, an die Assist-Pipeline.
- **RTP-Bridge:** Audiostreams werden zwischen Endpunkten vermittelt.
- **Lokaler SIP-Registrar:** Endgeräte registrieren sich direkt an Home Assistant, kein externer SIP-Server nötig.

Dazu kommt, dass ESPHome-Geräte jetzt echte SIP-, SDP- und RTP-Endpoints sind. Ein ESP32 mit Mikrofon und Lautsprecher ist nicht mehr nur ein Sprachassistent am Waschbecken, sondern ein vollwertiges Telefon.

Die Version 2026.7.1 zieht mit Ring Groups, Konferenzfunktionen und Assist als Telefondestination nach. Letzteres ist der Teil, der die Community gerade am meisten beschäftigt.

## Türklingel, die das Handy anruft — und Assist, das schimpft

Die Szenarien, die sich auftun, sind nicht abstrakt. Eine Türklingel mit ESPHome kann statt eines Pieptons das Handy anrufen. Wer unterwegs ist, spricht mit dem Besucher über die Kamera-Intercom. Wer zu Hause ist, nimmt den Anruf am ESP-Tablet im Flur entgegen.

Die Assist-Pipeline als Telefondestination funktioniert in beide Richtungen: per ESP-Gerät, per Softphone am PC, oder per externem Anruf. Und weil String-Destinationen unterstützt werden, muss niemand Nummern merken — Assist lässt sich per Namen anrufen.

Im [HA-Forum Thread zum VoIP Stack](https://community.home-assistant.io/t/1016178) zeigt sich die Community begeistert, mit einer Prise Realismus. @meconiotech beschreibt, was passiert, wenn die Assist-Pipeline per Telefon erreichbar ist:

> "My friends are currently hammering my VoIP Stack because they find it hilarious to call my phone number and talk to the assistant, since it swears at them and tells them to fuck off."

Das ist keine Pressemitteilung. Das ist das, was passiert, wenn echte Leute eine Funktion in die echte Welt lassen. Die Assist-Pipeline antwortet auf Anrufe, und die Antworten hängen davon ab, was man ihr beigebracht hat.

## ESPHome als Telefon-Endpoint

Der Teil, der technisch am meisten Potenzial hat, ist die Verbindung mit ESPHome. Ein ESP32-C3 mit einem INMP441-Mikrofon und einem MAX98357A-Verstärker kostet zusammen unter zehn Euro. Mit dem neuen VoIP-Stack ist das ein funktionsfähiges SIP-Telefon.

Wer die [ESPHome-Entwicklung](/blog/esphome-yaml-gui) verfolgt hat, weiss, dass die Plattform sich in einem Umbruch befindet — der Device Builder spaltet die Community zwischen GUI und YAML. Der VoIP-Stack ist aber ein Feature, das beide Lager eint: SIP-Funktionalität ist im ESPHome-Framework verankert, unabhängig davon, wie die Konfiguration geschrieben wird.

Die praktischen Anwendungen gehen über Türklingeln hinaus:

- **Intercom zwischen Räumen:** Ein ESP-Tablet in der Küche, eins im Büro, beide als SIP-Endpoints registriert. Gegensprechen ohne Cloud, ohne App.
- **Assist überall:** Wer eine Assistent-Pipeline per Telefon erreichen will, kann das jetzt tun — mit echtem Audio über SIP statt nur Web-Interface.
- **Haustelefon:** HA als lokale Nebenstellenanlage, die Anrufe an ESP-Geräte oder externe Nummern weiterleitet.

## Wo es hakt — und warum Cloud-Unabhängigkeit so wichtig ist

Ein VoIP-Stack, der komplett lokal läuft, ist ein Statement. Wer [SmartThings und die API-Kostenpflichtigkeits-Debatte](/blog/smartthings-api-kostenpflichtig) verfolgt hat, weiss, wie schnell Cloud-Abhängigkeit zur Falle wird. Samsung zieht die API hinter eine Paywall, und Nutzer stehen vor verschlossenen Türen. Ein lokaler VoIP-Stack hat dieses Problem nicht. SIP ist ein offener Standard, RTP ist ein offener Standard, und Home Assistant läuft auf Hardware, die man selbst kontrolliert.

Aber lokal heisst nicht automatisch einfach. SIP kennt NAT-Probleme, Firewall-Regeln müssen stimmen, Codecs müssen passen. Wer noch nie mit VoIP zu tun hatte, wird einen Nachmittag mit Debugging verbringen, bevor der erste Anruf durchgeht. Das ist kein Bug im Stack, sondern die Realität von Telefonie-Protokollen.

Der Stack ist neu. Die 2026.7.0-Version deckt die Kernfunktionen ab, und 2026.7.1 bringt Ring Groups und Konferenzen. Wer auf Stabilität wartet, macht mit .1 oder .2 keinen Fehler — eine Lektion, die nicht nur beim [HA 2026.7 Release](/blog/smart-home-sommer-2026) gilt, sondern bei jedem monatlichen Update.

## Fazit: Smart Home und Telefonie verschmelzen

Der VoIP-Stack ist einer der Features, die im ersten Moment dezent wirken, aber das Einsatzgebiet von Home Assistant spürbar erweitern. Sprachsteuerung per Telefon, Intercom über ESPHome, Türklingel mit Handy-Anruf — das sind keine Nischenfunktionen für Bastler, sondern konkrete Anwendungsfälle, die vorher eine separate Telefonanlage oder Cloud-Dienste brauchten.

Die Frage ist nicht, ob der Stack kommt. Er ist da. Die Frage ist, wie schnell die Community ihn in echte Projekte umsetzt. Der Forum-Thread hat noch keine hundert Beiträge, aber er wächst. Und wenn @meconiotechs Freunde schon jetzt "hammering" betreiben, weil es Spass macht, mit einem Assist zu telefonieren, dann ist das ein besserer Stresstest als jeder Release-Note-Post.

Wer ESPHome-Geräte mit Mikrofon und Lautsprecher herumliegen hat, sollte die SIP-Konfiguration mal ansehen. Der Stack ist lokal, offen, und kostet nichts ausser Zeit. Mehr kann man von einem neuen Feature kaum verlangen.