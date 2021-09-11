---
sidebar: auto
lang: de-DE
---


# Launcher Einstellungen
Der Launcher hat in der aktuellen Version (1.1.1) noch nicht über seinen vollen Umfang an möglichen Einstellung. Falls Wünsche diesbezüglich vorhanden sind, gibt es die Möglichkeit eines Feature Requests unter "[Issues](https://github.com/SALS-APP/sals/issues)"

![](/images/de/launcher/settings_1_1_1.png)

## ArmA Pfad
Dies ist der Order, in dem sich die ArmA Installation befindet. Wurde der Installationsort von ArmA nicht in Steam geändert, wird dieser Pfad automatisch eingefügt. Wenn das Feld leer ist, wählt einfach euren benutzerdefinierten Ordner aus.

## Launcher Download Speicherort
Hier werden alle Dateien gespeichert, welche der Launcher herunterladen soll. Diese können, je nach Community, größer oder kleiner seien. Die Gesamtgröße wird angezeigt, wenn ihr mit dem Runterladen beginnt.


# ArmA Parameter
Parameter, die für ArmA zur Verfügung stehen.

## Logos überspringen `Empfohlen`
Deaktiviert die Intro Logos am start des Spiels ([Bohemia Interactive Wiki](https://community.bistudio.com/wiki/Arma_3_Startup_Parameters#Game_Loading_Speedup))

## Hyper-Threading `Empfohlen`
Aktiviert Hyper-Threading für alle CPU Kerne. ([Bohemia Interactive Wiki](https://community.bistudio.com/wiki/Arma_3_Startup_Parameters#Performance))

## Keinen Splash Screen `Empfohlen`
Entfernt den Splash Screen am Anfang des Spieles (Die Logos, etc.)

## Profil
Hier werden alle ArmA-Profile, die auf dem Computer sind angezeigt. Das ausgewählte Profil wird beim Start über den Launcher in ArmA ausgewählt.

## Erweitert
Zeigt die erweiterten Einstellungen an.


# Erweitere ArmA Parameter

![](/images/de/launcher/settings_advanced_1_1_1.png)

## Keine Pause
Lässt das Spiel weiterlaufen, auch wenn es beim Benutzer nicht im Fokus ist. Hiermit läuft das Spiel auch weiter, wenn es zum Beispiel im Hintergrund ist.

## Keine Logs
Es werden keine logs in die RPT Datei gespeichert.

## Skript Errors anzeigen
Zeigt Skript Errors einer Mission im laufenden Spiel. Jedoch werden im Eden Editor Skript Errors IMMER angezeigt, dafür ist diese Option überflüssig.

## Windowed
Diese Option überschreibt die benutzerdefinierte Bildschirmeinstellung (In ArmA) und erzwingt, so lange diese Option an ist, einen Spielstart im Fenstermodus. ([Bohemia Interactive Wiki](https://community.bistudio.com/wiki/Arma_3_Startup_Parameters#Display_Options))


# Erweiterte Launcher Einstellungen

## ArmA Auto-Start `Empfohlen`
Startet ArmA automatisch nach dem herunterladen des Modsets oder Updates.

## Automatisch mit Server verbinden `Empfohlen`
Verbindet nach dem Start von ArmA direkt auf den Server der Community (Der Server wird vom Technischen Administrator der Community gesetzten). Diese Option funktioniert nur, wenn ArmA Auto-Start aktiv ist.

## Performance Modsets benutzen `Empfohlen`
Wenn es von der Community eine Performance version des Modsets bereit gestellt wurde, wird dieses anstatt des normalen verwendet.
Im "Modset ändern" dialog wird zusätzlich ein Indikator angezeigt, ob das jeweilige Modset eine Performance version hat.

## DLC Kompatibilität Mods benutzen `Empfohlen`
Für Modsets mit DLC's, wie S.O.G. oder Global Mobilization werden, insofern von der Community bereit gestellt, werden
Kompatibilitäts Mods mit heruntergeladen. So kann man auf den DLC Karten spielen, auch wenn man das DLC nicht gekauft hat.
Wenn man ein DLC schon gekauft hat, wird für dieses natürlich nichts extra runtergeladen.

## Sprache
Hier kann man die Sprache von SALS ändern. Falls man Fehler findet, und dieses Melden oder verbessern möchte, kann man dies [hier](https://github.com/SALS-APP/Translations) machen.

## Community
Hier kann man die derzeitige Community ändern, oder eine neue Hinzufügen. Communities kann man auch über Links auswählen, wie z.B. `sals://community.1`


# Weitere Optionen

## Cache Leeren
Leert den Internen ArmA Mod Cache des Launchers und startet den Launcher neu.

## Config löschen
Löscht die Konfigurationsdatei des Launcher und startet den Launcher neu.


# Experten Einstellungen
:::danger Warnung
Die folgenden Optionen sollten nur von erfahrenen Nutzern verändert werden. Bei Fehlern welche durch das Verändern dieser Optionen auftreten, wird kein Support geleistet.
:::

### Download-Pfad Slug ändern

#### Unter Windows:
```%appdata%/sals-{community}/pData/config```
#### Unter Linux:
```/home/$username/.local/share/sals-{community}/pData/config```

---

mit vim oder Notepad++ öffnen und in der Datei den Value von "downloadPath" ändern
:::tip Wichtig
Der Slug ist IMMER das letzte Element des Pfades und sollte IMMER vorhanden sein! Ansonsten könnte SALS Ordner und Dateien löschen, die nicht zum Modset, bzw Community gehören.
:::



---
"#Greenbarwatching" - Svensson 2k19
