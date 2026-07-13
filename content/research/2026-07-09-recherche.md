# Recherche-Notizen — 09. Juli 2026

## Quellen-Übersicht

### 1. Home Assistant Blog (via blogwatcher-cli)
- **2026.7: Automations that speak your language** (01.07.2026) — Release mit neuem Automation-Editor, Area-basierte Trigger/Conditions, kein Breaking Change (außer climate/battery/lawn_mower)
- **Companion app: Changing support for Apple platforms** (07.07.2026) — iOS 15, watchOS 8, macOS 11 werden ab 2026.8.0 nicht mehr unterstützt
- **The Matter upgrade you've been waiting for** (23.06.2026) — matter.js 1.4→1.5 Update, Open Home Foundation übernimmt
- **Proxy all the things: no device left behind** (18.06.2026) — OHF Blog über Proxy-Lösungen
- **2026.6: Pick a card, any card** (03.06.2026) — Vorgänger-Release

### 2. community.home-assistant.io (Top Monthly + Latest)

#### Thread 1: 2026.7: Automations that speak your language
- **ID:** 1015764 | **210 Replies** | **5.978 Views** | **287 Likes**
- Heiß diskutiertes Release. Neue Automation-Sprache: purpose-specific triggers, area-basierte Targets.
- **Zitate:**
  - @lancer73: "Another brilliant release. I like the interface updates. Small problem on upgrade, an old ZHA quirks file (for Aqara H1) didn't pass muster anymore and preventing ZHA from starting."
  - @ericinvalpo: "Love the new changes to the flow of automations, but I still cannot connect Alexa Devices. This has been a problem for at least three weeks now."
  - @rgjertsen: "When will we get the Person purpose specific trigger back that was removed a few updates ago? I understand that it was not optimal, but I hoped it would be available until a better solution was ready instead of just removing it for months."
  - @frankenstein443: "After the Update to 2026.7 my log says the sql database is corrupt and goes into an reboot Loop. When i revert to 2026.4.3 it works perfectly.."
- **Winkel:** Das Release ist ein großer Schritt — aber die Realität zeigt, dass "no breaking changes" nicht ganz stimmt. ZHA-Probleme, Datenbank-Korruption, Alexa-Verbindungsprobleme.

#### Thread 2: 2026.7: No Breaking Changes!...except climate, battery, lawn_mower
- **ID:** 1015765 | **14 Replies** | **348 Views** | **20 Likes**
- Community ist GENERVERT über die "no breaking changes" Aussage bei gleichzeitigen Breaking Changes.
- **Zitate:**
  - @Justahobby: "Seriously, is this April Fool's Day? How can you say 'The nice thing is, nothing breaks. All your existing automations keep working, worry-free,' while also saying my automations will definitely break?"
  - @Edwin_D: "The purpose specific triggers were experimental up to this release. Those have the explicit mention that when you enable them, you need to take into account the fact that experimental features may still change."
  - @Justahobby: "If changes = breakage, don't claim it doesn't. Did you have an objection to holding HA to the slightest of standards?"
- **Winkel:** Spannender Konflikt — HA verspricht "no breaking changes" aber ändert experimental triggers. Community gespalten.

#### Thread 3: The Matter upgrade you've been waiting for
- **ID:** 1014865 | **40 Replies** | **2.292 Views** | **39 Likes**
- matter.js 1.5, zertifiziert, Open Home Foundation übernimmt. NFC-Pairing kommt mit 1.6.
- **Zitate:**
  - @breti: "Congratulations on this great achievement! Did the Matter.js server have to be recertified from scratch?"
  - @dejitaru: "Ohhhhh awesome! Once 1.6 is released NFC pairing will be so clutch!"
  - @awoo: "okay but how do i turn that off?" (bezüglich certificate revocation bei commissioning)
- **Winkel:** Matter-Update ist real — aber die Probleme liegen in den Details (Updates bei batteriebetriebenen Geräten).

#### Thread 4: ESPHome HA App — Enttäuschung in der Community
- **ID:** 1014282 | **37 Replies** | **890 Views** | **19 Likes**
- Der neue ESPHome Device Builder (früher ESPHome HA App) hat den LAN-Zugang entfernt. Nur noch via Ingress.
- **Zitate:**
  - @inventor7777: "one thing has really killed the excitement for me - the inability to expose it to LAN. I really liked my old setup, where I had a nice little ESPHome Server PWA in my Mac dock"
  - @busman: "is there someone 'high up' that really hates YAML? You have to use YAML to ask questions about your code"
  - @carlhye: "With the ESPHome Desktop App, you can link it to your existing dashboard, and keep everything hosted on your HA"
  - @inventor7777: "I was honestly pretty surprised at how it completely switched from YAML-first to GUI-first"
- **Winkel:** ESPHome geht den GUI-Weg, verliert dabei Power-User. Der Wechsel von YAML-first zu GUI-first spaltet die Community.

#### Thread 5: NeverDry — Smart irrigation (FAO-56 water balance)
- **ID:** 1013835 | **18 Replies** | **449 Views** | **16 Likes**
- Neue HACS-Integration für smarte Bewässerung mit echtem Bodenwasserdefizit-Modell.
- **Zitate:**
  - @drake69: "I've been running fixed-timer irrigation for years and kept overwatering in rainy weeks and underwatering during heatwaves. So I built NeverDry"
  - @drake69: "I don't trust these sensors, they measure just around the sensors, this is the main reason I calculated the evapotranspiration based on temperature, because it is zone-wise and not only the 1 square meter around the sensor."
  - @checking12: "I got myself a moisture sensor and did not use it yet for irrigation, would this be a good addition to your logic?"
- **Winkel:** Sommerthema! Smarte Gartenbewässerung wird ernst — nicht mehr "10 Minuten jeden Dienstag", sondern FAO-56 Bodenwasserbilanz.

### 3. community-smarthome.de (Latest)

#### Thread A: Reolink Integration nach Update 2026.7.1 wird nicht mehr geladen
- **ID:** 11243 | **6 Replies** | **49 Views** | **4 Likes**
- **Zitate:**
  - @Albi54: "nach dem Update auf Release 26.7.1 werden bei mir ezviz, Reolink und xiaomi_ble nicht mehr geladen!"
  - @GooglyEyz: "Direkt nach dem Update liefen Reolink und Roborock Integrationen bei mir auch nicht (cffi package Versionskonflikt). Nach einem kompletten Reboot (System Neustart) lief es dann wieder."
  - @Albi54: "Genau das habe ich nach dem 2ren Boot auch festgestellt"
- **Winkel:** Update-Probleme bei 2026.7.1 — cffi-Paketkonflikt, der nach Reboot verschwindet. Typisches "erst neu starten" Problem.

#### Thread B: Matter-Update bei batteriebetriebenen Geräten (IKEA Bilresa) bricht immer ab
- **ID:** 10869 | **29 Replies** | **416 Views** | **40 Likes**
- IKEA Bilresa Dualschalter: Matter-OTA-Updates brechen ständig ab. Workaround: alle 5% Button drücken.
- **Zitate:**
  - @SmartHobbyt: "Bei mir hat das Update immer beim Erreichen von 10 % abgebrochen. Das hat mich dann dazu gebracht alle 5 % auf einen Knopf zu drücken. Also bei 5, 10, 15, 20 usw. So lief dann das Update ohne Probleme durch."
  - @Jenaih: "bei mir bricht das Update in Home Assistant trotz Öfteren drückens eines Buttons immer ab. Einer (von insg. 5 Bilresas) hat das Update auf 1.9.15 (Über Apple Home) genommen. Die anderen nicht... Ich denke die werd ich alle zurückgeben….. Schade.. Hab da kein Vertrauen mehr.."
  - @speedyhb: "bei mir hat es geholfen das Gerät näher an die Matter Antenne zu holen. Abstand war nur noch 1 m. Dann lief das Update beim 1. Versuch durch."
- **Winkel:** Matter-Updates bei batteriebetriebenen Geräten sind ein echtes Problem. IKEA Bilresa als Fallbeispiel. Workarounds aus der Community.

#### Thread C: Smarte Gartenbewässerung für HA (Blueprint)
- **ID:** 10938 | **5 Replies** | **320 Views** | **18 Likes**
- Blueprint mit Solarüberschusssteuerung und Regen-Vorhersage.
- **Zitate:**
  - @jayjojayson: "Mir ging es vor allen Dingen um die Solarüberschusssteuerung. Jetzt kann ich bequem im gewünschten Zeitfenster und abhängig von der Solarvorhersage (und auch Regen) steuern."

#### Thread D: Langsames Laden vom Dashboard auf den Tablets
- **ID:** 11186 | **41 Replies** | **216 Views** | **30 Likes**
- Dashboard-Performance auf Tablets. Relevant für Performance-Cluster.

#### Thread E: BitCoin Mining mit PV Überschuss und Home Assistant
- **ID:** 10315 | **39 Replies** | **1.213 Views** | **63 Likes**
- Nischenthema, aber hohe Engagement-Zahlen.

### 4. knx-user-forum.de

- **ETS6 Sammelbestellung mit 40% Rabatt aktiv** — immer noch aktuell
- **Vallox Lüftungsgerät mit KNX Modul Vallofex** — neuester Thread im KNX EIB Forum
- **Gipskarton auf Ziegel geklebt – Welche Dosen? Wie bohren?** — KNX-Einsteiger Thema
- **YOUVI 5.1 Betatest** — PEAKnx startet Betatest für YOUVI 5.1 (03.07.2026)
- **KNX Stammtisch Dresden Q2** — lokale Community-Aktivität

### 5. Companion App Apple Platforms
- HA Companion App droppt iOS 15, watchOS 8, macOS 11 ab Version 2026.8.0
- Weniger als 1% der Nutzer betroffen
- Apple developer tools stoppen ab September Support für diese Versionen
- "At Home Assistant, we're committed to helping you use your devices for the long haul"

---

## Top 5 spannendste Themen (Tiefen-Auswertung)

### Thema 1: Home Assistant 2026.7 — "Automations that speak your language"
**Spannung:** Das größte Release des Jahres verspricht area-basierte Automations und eine neue natürliche Sprache für Trigger/Conditions. Aber die Realität zeigt Risse: ZHA-Quirks brechen, Datenbank-Korruption bei manchen, und die "no breaking changes" Aussage ist gelogen (climate, battery, lawn_mower triggers wurden umbenannt).
**Daten:** 5.978 Views, 287 Likes, 210 Replies im Release-Thread
**Winkel:** Was HA 2026.7 wirklich bringt — jenseits der Release Notes. Die neue Automation-Sprache ist ein Paradigmenwechsel, aber es gibt echte Probleme.
**SEO-Keywords:** home assistant 2026.7, home assistant automation, home assistant update probleme, home assistant area automation

### Thema 2: Matter-Updates bei batteriebetriebenen Geräten — IKEA Bilresa als Fallbeispiel
**Spannung:** Matter sollte Updates einfacher machen. Stattdessen brechen OTA-Updates bei batteriebetriebenen Geräten ständig ab. IKEA Bilresa als konkretes Beispiel. Workarounds wie "alle 5% Button drücken" und "näher an die Antenne" zeigen, wie weit man sich verbiegen muss.
**Daten:** 29 Replies, 416 Views, 40 Likes im community-smarthome.de Thread
**Zitate:** "Ich denke die werd ich alle zurückgeben….. Schade.. Hab da kein Vertrauen mehr.." — @Jenaih
**Winkel:** Matter ist die Zukunft — aber die Update-Realität bei batteriebetriebenen Geräten ist ein Albtraum. Praktische Workarounds aus der Community.
**SEO-Keywords:** matter update probleme, ikea bilresa matter, matter home assistant, matter thread update

### Thema 3: ESPHome Device Builder — GUI-first statt YAML-first
**Spannung:** Der neue ESPHome Device Builder (vormals ESPHome HA App) entfernt LAN-Zugang und geht GUI-first. Power-User fühlen sich im Stich gelassen. Die Frage: Hass HA YAML oder will man Anfänger abholen?
**Daten:** 37 Replies, 890 Views, 19 Likes
**Zitate:** "is there someone 'high up' that really hates YAML?" — @busman; "I was honestly pretty surprised at how it completely switched from YAML-first to GUI-first" — @inventor7777
**Winkel:** ESPHome macht den gleichen GUI-Weg wie HA — aber Power-User verlieren. Der Wechsel von YAML-first zu GUI-first und was das bedeutet.
**SEO-Keywords:** esphome device builder, esphome yaml, esphome gui, esphome home assistant app

### Thema 4: NeverDry & smarte Gartenbewässerung — Sommerthema
**Spannung:** Fest-Timer-Bewässerung ist out. NeverDry nutzt FAO-56 Bodenwasserbilanz mit Hargreaves-ET-Formel. Gleichzeitig gibt es community-smarthome.de Blueprint mit Solarüberschuss. Zwei Ansätze, beide open-source.
**Daten:** NeverDry 449 Views/16 Likes; Blueprint 320 Views/18 Likes
**Zitate:** "I don't trust these sensors, they measure just around the sensors" — @drake69; "Solarüberschusssteuerung mit Regen-Vorhersage" — @jayjojayson
**Winkel:** Smarte Gartenbewässerung 2026 — zwei Open-Source-Lösungen im Vergleich. NeverDry mit Wissenschaft, Blueprint mit Pragmatismus.
**SEO-Keywords:** home assistant gartenbewässerung, smart irrigation home assistant, home assistant solar überschuss, gartenbewässerung automatisieren

### Thema 5: HA Companion App droppt alte Apple-Plattformen
**Spannung:** HA war stolz auf lange Geräte-Lebensdauer-Unterstützung. Jetzt droppt die Companion App iOS 15, watchOS 8, macOS 11. Weniger als 1% betroffen, aber das Prinzip "use your devices for the long haul" wird aufgeweicht.
**Daten:** Apple developer tools stoppen Support ab September 2026
**Winkel:** HA verlässt alte Apple-Plattformen — was das für das "long haul"-Versprechen bedeutet. Eher kurzer News-Beitrag.
**SEO-Keywords:** home assistant companion app, home assistant ios, home assistant apple watch

---

## Zusammenfassung & Vorschläge

### Blogpost-Winkel (priorisiert):

1. **"Home Assistant 2026.7: Die Automations-Sprache, die wirklich spricht — oder doch nicht?"**
   - Winkel: Release-Review jenseits der Marketing-Sprache. Was funktioniert, was bricht.
   - Konflikt: "No breaking changes" vs. realität der umbenannten triggers
   - SEO-Keywords: home assistant 2026.7, home assistant automation, home assistant update
   - Interne Links: smart-home-sommer-2026, esphome-yaml-gui

2. **"Matter-Update-Albtraum: Warum IKEA Bilresa-Besitzer ihre Geräte zurückgeben"**
   - Winkel: Konkretes Problem-Story mit Community-Workarounds. Matter verspricht Einfachheit, liefert aber Update-Frust.
   - Hohe Emotionalität ("kein Vertrauen mehr")
   - SEO-Keywords: matter update probleme, ikea bilresa, matter home assistant, thread update
   - Interne Links: smart-home-sommer-2026

3. **"Smarte Gartenbewässerung mit Home Assistant: Zwei Wege, ein Ziel"**
   - Winkel: NeverDry (Wissenschaft) vs. community-smarthome.de Blueprint (Pragmatismus). Sommerthema.
   - SEO-Keywords: home assistant gartenbewässerung, smart irrigation home assistant, solar überschuss
   - Interne Links: smart-home-sommer-2026

### Alternative Winkel (für spätere Posts):
4. ESPHome Device Builder: YAML-first → GUI-first — was Power-User verlieren
5. HA Companion App: Apple-Plattform-Support wird eingeschränkt (Kurzpost)
6. HA 2026.7.1 Update-Probleme: cffi-Konflikt, Reolink-Integration bricht (Kurzpost)

### Verfügbare interne Links:
- `/blog/smart-home-sommer-2026` — Sommer-Smart-Home-Themen
- `/blog/esphome-yaml-gui` — ESPHome YAML vs GUI
- `/blog/openbridgeserver` — OpenBridgeServer Alternative
- `/blog/smart-home-sicherheit` — Sicherheit im Smart Home
- `/blog/kabel-oder-funk` — Kabel vs. Funk
- `/blog/kontrollierte-wohnraumlueftung` — Lüftung
- `/blog/warum-smart-home-nicht-immer-spart` — Energieeffizienz