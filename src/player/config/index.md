---
sidebar: auto
lang: en-EN
---


# Launcher Settings

![](/images/en/launcher/settings_1_1_1.png)

## ArmA Path
The folder, where ArmA3 is installed. If the default installation destination is not changed and Steam has been detected, the Path is probably already filled. If the field is empty, you can just choose the folder, where ArmA3 is installed.

## Mod Download Path
In this folder, all Mod files from every Community is saved. Depending on the Community/Modset the size can vary.


# ArmA Parameters
Available parameters for Arma3

## No Intro `Recommended`
Disabled the intro when starting the game. ([Bohemia Interactive Wiki](https://community.bistudio.com/wiki/Arma_3_Startup_Parameters#Game_Loading_Speedup))

## Hyper-Threading `Recommended`
Activates Hyper Threading. Should generally be enabled, but on some Systems disabling this can give a FPS boost. ([Bohemia Interactive Wiki](https://community.bistudio.com/wiki/Arma_3_Startup_Parameters#Performance))

## No Splash Screen `Recommended`
Removed the Splash screen when starting the game.

## Profile
The ArmA Profile that should be selected, when starting the game.

## Advanced
Shows Advanced Options.


# Advanced ArmA Parameters

![](/images/en/launcher/settings_advanced_1_1_1.png)

## No Pause
The game is going to be still running, even when the game is not in focus. E.g. when the game is minimized. 

## No Logs
No logs are going to be written to the RPT File.

## Show Script Errors
Shows Scripts errors of a mission in game as popup. However, in the Eden Editor, Script errors are ALWAYS shown.

## Windowed
This option overwrites the user predefined screen options (In ArmA) and forces the game temporarily to start in Windowed Mode. ([Bohemia Interactive Wiki](https://community.bistudio.com/wiki/Arma_3_Startup_Parameters#Display_Options))


# Advanced Launcher Settings

## ArmA Auto-Start `Recommended`
Starts ArmA as soon as the download or update of the Modset has finished.

## Automatically Connect to Server `Recommended`
Connects to the Gameserver of the Community with the game start. (If a Server is set by the Community) This setting only works when "ArmA Auto-Start" is also active.

## Use Performance Modsets `Recommended`
If the Community provides a Performance version of a given Modset, SALS is going to choose this one, instead of the normal Modset.
In the "Change Modset" dialog are additional indicators whether a Modset has a Performance version.

## Use DLC Compatibility Mods `Recommended`
For Modsets with DLCs, e.g. S.O.G. or Global Mobilization, SALS is going to download Compatibility Mods for the given DLCs. That way you can use most of the Content in the DLC, like Weapons or Vehicles. If you already purchased a DLC, SALS is not going to download the Compatibility Mods for that.

## Community
Here you can change the current Community, or Add a new one. Communities can also be accessed via a URL, e.g.: `sals://community.1`

## Language
Here you can change the current Language of SALS. If you find mistakes, etc. you can report or improve it [here](https://github.com/SALS-APP/Translations).


# More Option

## Clear Cache
Clears the internal ArmA Mod and Image Cache of the Launcher and restarts it.

## Delete Config
Deleted the Config file and restarts the Launcher.


# Expert Settings
:::danger Warning
The following options should only be changed by experienced Players. Aka - Be sure what you are doing.
:::

### Change Download Path Slug

#### Under Windows:
```%appdata%/sals-{community}/pData/config```
#### Under Linux:
```/home/$username/.local/share/sals-{community}/pData/config```

---

With vim or Notepad++ open and change the value of "downloadPath".
:::tip Important
The Slug is ALWAYS the last element of the Path und should ALWAYS be present. Otherwise SALS could delete folders and or files, that don't belong to the Modset/Community.
:::
