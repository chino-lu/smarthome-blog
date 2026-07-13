---
title: "Chatkontrolle: Welche Messenger noch sicher sind"
excerpt: "Die EU hat die Chatkontrolle verlängert. Welche Messenger E2E-Verschlüsselung haben und welche nicht – eine Übersicht mit Konsequenzen für private Kommunikation."
pubDate: 2026-07-13
readMinutes: 8
address: "3/0/0"
sources: "golem.de · netzpolitik.org · digitalcourage.de"
image: "/images/post-chatkontrolle.svg"
imageAlt: "Smartphone mit verschlüsselten Nachrichtendiagrammen"
---

Am 9. Juli 2026 hat das EU-Parlament etwas beschlossen, das die Mehrheit der Abgeordneten eigentlich ablehnte. Die Ausnahmeregelung, die Messengerdienste vom Datenschutz befreit, wurde verlängert. 314 Stimmen stimmten dagegen. 360 wären nötig gewesen, um den Text endgültig zu begraben. So gilt er als angenommen.

Konstantin Macher von der Digitalen Gesellschaft nennt das einen "schlechten Tag für die europäische Demokratie". Elina Eickstädt vom Chaos Computer Club spricht von einem "herben Rückschlag im Kampf gegen anlasslose Massenüberwachung". Erik Marquardt, Grünen-Abgeordneter im bürgerfreiheitlichen Ausschuss, sagt: "Das ist ein schwarzer Tag für Bürgerrechte und den Kinderschutz im Netz."

Was passiert ist, ist nicht kompliziert. Parlamentspräsidentin Roberta Metsola (EVP) hat Ende Juni den EU-Rat dazu gebracht, seinen bereits abgelehnten Vorschlag erneut ans Parlament zu senden. In einer chaotischen Abstimmung reichte die relative Mehrheit der Gegner nicht aus, um die absolute Mehrheit zu erreichen, die nötig gewesen wäre. Der Text wandert jetzt zurück an den Rat, der ihn binnen drei Monaten annehmen muss.

## Was die Chatkontrolle bedeutet

Die ePrivacy-Richtlinie von 2002 schützt die Vertraulichkeit privater Kommunikation. Eine Ausnahmeregelung erlaubt es Online-Diensten seit 2021, die Inhalte ihrer Nutzer freiwillig zu scannen, um Material zu finden, das sexuellen Kindesmissbrauch darstellt. Diese Ausnahme war im April 2026 ausgelaufen. Big Tech, allen voran Google, Meta und Microsoft, scannte trotzdem weiter, ohne Rechtsgrundlage. Jetzt wurde die Ausnahme wieder verlängert.

Das Problem: Die Regelung erlaubt anlassloses Scannen. Jede Nachricht, jedes Bild, jede Datei, die unverschlüsselt über die Server eines Anbieters läuft, kann automatisch durchsucht werden. Nicht weil jemand etwas getan hat, sondern weil alle es könnten.

Davon ausgenommen sind Ende-zu-Ende-verschlüsselte (E2EE) Nachrichten. Deren Inhalt zu scannen ist technisch nicht möglich, ohne den passenden Schlüssel zu kennen. Das ist der entscheidende Punkt für alle, die private Kommunikation ernst nehmen.

## Welche Messenger E2E haben — und welche nicht

Die gute Nachricht: Die meisten etablierten Messenger haben E2E standardmäßig aktiviert. Signal, WhatsApp, Threema, iMessage (zwischen Apple-Geräten und bei RCS-Nachrichten, nicht bei SMS und MMS) und Wire verschlüsseln Nachrichten durchgehend. Auch Session, Wickr und Element bzw. Matrix gelten als sicher. Der Facebook Messenger hat E2E mittlerweile zum Standard gemacht.

Die schlechte Nachricht: Bei einigen populären Diensten sieht es anders aus.

**Telegram** verschlüsselt nur explizit als "geheim" eröffnete Chats Ende-zu-Ende. Standardmäßig werden Chats mit dem hauseigenen Protokoll MTProto versehen und auf Servern des Unternehmens gespeichert, etwa in den USA, Singapur oder den Niederlanden. Wer Telegram nutzt und keine geheimen Chats startet, kommuniziert im Klartext mit dem Server.

**Google Messages** verschlüsselt nur RCS-Nachrichten Ende-zu-Ende. SMS und MMS, die auf der Infrastruktur der Mobilfunknetzbetreiber basieren, sind unverschlüsselt.

**Instagram** schaltete am 8. Mai 2026 die E2E für Direktnachrichten wieder ab. Meta kann theoretisch Einblick in Nachrichtenverläufe nehmen.

**X (Twitter)** spricht bei privaten Chatnachrichten von E2E-Verschlüsselung. Da die privaten Schlüssel aber auf den Servern des Unternehmens gespeichert werden, ist diese Angabe, milde gesagt, fragwürdig. Es ist Transportverschlüsselung, keine Ende-zu-Ende-Verschlüsselung.

Spezielle Messenger wie Briar oder Bitchat brauchen gar keine Internetverbindung und verschlüsseln ebenfalls Ende-zu-Ende. Mastodon soll bis Ende 2027 E2E für Privatnachrichten erhalten. Bei Bluesky sind bislang keine Pläne für E2E bekannt. Beide Dienste erlauben aber, Instanzen auf eigenen Servern zu betreiben, was zumindest die Kontrolle über die Daten behält.

## Client-Side-Scanning: Der nächste Angriff

Die verpflichtende Chatkontrolle, die als "Chatkontrolle 2.0" bekannt ist, verhandelt die EU seit über drei Jahren. Der Kommissionsentwurf vom Mai 2022 war über 130 Seiten lang und sah vor, dass Anbieter verschlüsselte Kommunikation umgehen müssen. Eine Technik namens Client-Side-Scanning (CSS) sollte das ermöglichen: Eine Software auf dem Smartphone, PC oder Notebook scannt Nachrichten, bevor sie verschlüsselt und versendet werden.

Jedes Endgerät würde damit zum Teil einer Überwachungsinfrastruktur.

Das Internet Architecture Board, das über die Standards des Internets wacht, hat sich im Dezember 2023 mit einem vernichtenden Urteil zu CSS geäußert. Apple hat sein eigenes Programm zum automatischen Scannen von iCloud-Bildern eingestellt mit der Begründung, es sei "praktisch unmöglich", automatische Scans mit Privatsphäre und Sicherheit zu vereinen. Klaus Landefeld, Vorstand des IT-Branchenverbandes eco, nennt die Pläne "total unausgegoren und technisch nicht tragfähig".

Die Verhandlungen stecken fest. Das Parlament lehnt die anlasslose Überwachung ab und will Scannen nur bei begründetem Verdacht mit richterlichem Beschluss. Der Rat will freiwilliges Scannen erlauben. Die Kommission will verpflichtendes Scannen nach Anordnung. "Nothing is agreed until everything is agreed" gilt im Trilog.

Unter dem Deckmantel "rechtmäßiger Zugang" bereitet die EU-Kommission mit "Protect EU" außerdem einen weiteren Angriff auf Verschlüsselung vor. Europäische Digitalorganisationen machen mit der "Kuss für Verschlüsselung"-Kampagne dagegen mobil.

## Was Fehlalarme anrichten

Die Bundesdatenschutzbeauftragte warnt: "Eine anlasslose Massenüberwachung aller Bürger:innen wäre in einem Rechtsstaat beispiellos." Die Datenschutzkonferenz fordert die EU-Gesetzgeber auf, die Chatkontrolle "endgültig abzusagen".

Ein Beispiel, das zeigt warum: Ein Vater schickte eine E-Mail an den Arzt seines Sohnes. Die Mail enthielt ein Foto des Genitalbereichs des erkrankten Kindes. Auf den Google-Servern schlug ein Erkennungsmechanismus an. Ein falscher Verdacht. Die Polizei ermittelte gegen den Vater. Sein Google-Account samt aller Daten wurde gelöscht.

Das BKA meldet laut netzpolitik.org außerdem Fälle, in denen automatisierte Systeme Kinderpornografie meldeten, die keine war. Die Qualität der Erkennungssoftware ist nicht ausreichend. Zentrale technische Fragen sind ungeklärt.

## Was man tun kann

Wer private Kommunikation ernst nimmt, sollte E2E-Messenger nutzen. Signal ist Open Source und hat E2E standardmäßig. Threema benötigt keine Telefonnummer und hostet in der Schweiz. WhatsApp hat E2E standardmäßig, gehört aber zu Meta. Element bzw. Matrix lässt sich selbst hosten und bietet maximale Kontrolle.

Bei Telegram sollten "Geheime Chats" aktiv genutzt werden. Sensible Inhalte gehören nicht über Instagram DMs, X DMs oder SMS. Wer Mastodon nutzt, kann eine eigene Instanz betreiben, um die Kontrolle über die Daten zu behalten.

Die Ausnahmeregelung gilt jetzt weiter. Die Trilog-Verhandlungen zur Chatkontrolle 2.0 gehen in die entscheidende Phase. Wer mitreden will, kann Petitionen unterschreiben (Chatkontrolle STOPPEN!), Abgeordnete kontaktieren oder Organisationen wie Digitalcourage, EDRi oder den CCC unterstützen. 80 NGOs weltweit haben bereits vor den EU-Plänen gewarnt.

Die Technik ist auf unserer Seite. Ende-zu-Ende-Verschlüsselung funktioniert. Die Frage ist, ob die Politik es dabei belässt.