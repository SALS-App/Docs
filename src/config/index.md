---
sidebar: auto
lang: de-DE
---


 # Launcher Einstellungen
Der Launcher verfügt zum derzeitigen Stand (0.9.2) über eine ziemlich übersichtliche Einstellung Sektion. Falls Wünsche diesbezüglich vorhanden sind, gibt es die Möglichkeit ein Feature Request anzufragen unter "[Issues](https://github.com/SALS-APP/sals/issues)"

![](https://i.imgur.com/vk7Lj3D.png)

## ArmA Pfad
Dies ist der Order, in dem sich die ArmA Installation befindet. Diese Option ist vermutlich bei den meisten schon belegt, da ArmA an dem Standard-Ort Installiert wurde. Wenn das Feld leer ist, wählt einfach euren benutzerdefinierten Ordner aus.

## Launcher Download Speicherort
Hierhin werden alle Dateien gespeichert, die Der Launcher runterladen soll, also Mods. Diese können je nach Community größer oder kleiner seien. Die Gesamtgröße könnt ihr sehen, wenn ihr mit dem Runterladen beginnt.






# ArmA Parameter
Parameter, die für ArmA zur Verfügung stehen.

## Logos überspringen `Empfohlen`
Deaktiviert Intro Logos am start des Spiels ([Bohemia Interactive Wiki](https://community.bistudio.com/wiki/Arma_3_Startup_Parameters#Game_Loading_Speedup))

## Hyper-Threading `Empfohlen`
Aktiviert Hyper-Threading für alle CPU Kerne. ([Bohemia Interactive Wiki](https://community.bistudio.com/wiki/Arma_3_Startup_Parameters#Performance))

## Keinen Splash Screen `Empfohlen`
Entfernt den Splash Screen am Anfang des Spieles (Die Logos, etc.)

## Profil
Hier werden alle Profile, die auf dem Computer sind angezeigt. Das Ausgewählte Profil wird beim Start über den Launcher in ArmA ausgewählt.

## Erweitert
Zeigt die erweiterten Einstellungen an.






:::warning Warnung
Die folgenden Optionen sind nur von Leuten anzuwenden, die Wissen, was sie tun. Aber sonst, viel Spaß.
:::


# Erweitere ArmA Parameter

![](https://i.imgur.com/CqY3RFW.png)

## Keine Pause
Lässt das Spiel weiterlaufen, auch wenn es vom Benutzer aus nicht im Fokus ist. Hiermit läuft das Spiel auch weiter, wenn es zum Beispiel im Hintergrund ist.

## Keine Logs
Es werden keine logs in die RPT Datei gespeichert.

## Skript Errors anzeigen
Zeigt Skript Errors einer Mission im laufenden Spiel. Jedoch werden im Eden Editor Skript Errors IMMER angezeigt, dafür braucht man diese Option nicht.

## Windowed
Diese Option überschreibt die benutzerdefinierte Bildschirmeinstellung (In ArmA) und erzwingt, so lange diese Option an ist einen Spielstart im Fenstermodus. ([Bohemia Interactive Wiki](https://community.bistudio.com/wiki/Arma_3_Startup_Parameters#Display_Options))

# Erweiterte Launcher Einstellungen

## ArmA Auto-Start `Empfohlen`
Startet ArmA automatisch nach dem Updaten der Mods

## Automatisch mit Server verbinden `Empfohlen`
Verbindet nach dem Start von ArmA direkt auf den Server der Community (Der Server wird vom Technischen Administrator der Community gesetzten). Diese Funktion macht nur sinn, wenn ArmA Auto-Start aktiv ist.

# Weitere Optionen

## Cache Leeren
Leert den Internen ArmA Mod Cache des Launchers und startet den Launcher neu.

## Config löschen
Löscht die Config datei des Launcher und startet den Launcher neu.







# Experten Einstellungen
:::danger Warnung
Die folgenden Einstellungen sind nur von Leuten anzuwenden, die Wissen, was sie tun. Hierfür wird kein Support geleistet, wenn durch diese Optionen der Launcher instabil und oder Fehlerhaft läuft! Aber sonst, viel Spaß.
:::

### Download-Pfad Slug ändern

#### Unter Windows:
```%appdata%/sals-{community}/pData/config```
#### Unter Linux:
```/home/$username/.local/share/sals-{community}/pData/config```

---

mit vim oder Notepad++ öffnen (Oder irgendeinen Text Editor) und in der Datei den Value von "downloadPath" ändern
:::tip Wichtig
Der Slug ist IMMER das letzte Element des Pfades und sollte IMMER vorhanden sein! Ansonsten könnte SALS Ordner und Dateien löschen, die nicht zum Modset, bzw Community gehören.
:::



---
<tiny>"#Greenbarwatching" - Svensson 2k19</tiny>