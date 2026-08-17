---
sidebar_position: 1
title: How to install a plugin
---

# How to install a plugin on Minecraft
Installing plugins on your Minecraft server is generally a very straightforward process.

As a prerequisite, you will need to be running server software that supports plugins. We'd typically recommend [PaperMC](https://docs.enviromc.host/Minecraft/Installing_Paper) as it's secure, stable and well maintained. Any plugin built for Bukkit or Spigot will also work on Paper, so we generally advise against running Bukkit or Spigot directly.

Forge, Fabric and other mod-supporting server jars do **not** support plugins - if you want to run plugins, your server needs to be running plugin-compatible software like Paper instead. "Hybrid" software such as Mohist that claims to support both mods and plugins on the same server is unstable, prone to corrupting worlds, and **not supported by EnviroMC** - we will not provide support for issues that occur on hybrid software and strongly advise against using it.

<br />

## How to install a Minecraft plugin
There are a variety of sites you can download plugins from. We highly advise sticking to legitimate sites like [Modrinth](https://modrinth.com), [SpigotMC](https://www.spigotmc.org) and [Hangar](https://hangar.papermc.io), which maintain a strict anti-piracy standard. Sites offering "cracked" or pirated plugins are frequently full of malware and can cause far more trouble than they're worth.

<br />

![](https://github.com/EnviroMC-Docs/Knowledgebase/blob/main/static/img/Installing-plugins-1.png?raw=true)
Once you've found a plugin you like - for example, [Milk](https://modrinth.com/plugin/milk) pictured above - check its supported platforms and Minecraft versions (usually shown as tags like Paper, Spigot, Bukkit). This typically only refers to the main version and not subversions of Minecraft (eg. if a plugin states it supports 1.21, it will almost always support 1.21.4 too).

Hit "Download" to save the jar file onto your PC.

<br />

![](https://github.com/EnviroMC-Docs/Knowledgebase/blob/main/static/img/Installing-plugins-2.png?raw=true)
Head to the **Files** tab on your server's panel. Assuming you've correctly installed Paper (or any other plugin-supporting software), a **plugins** folder should already exist in your root directory. If it isn't showing up, make sure you've booted your server up at least once first - this lets Paper generate its required files, including the plugins folder.

<br />

![](https://github.com/EnviroMC-Docs/Knowledgebase/blob/main/static/img/Installing-plugins-3.png?raw=true)
Click into the **plugins** folder, then hit **Upload** and select the jar file you just downloaded (or simply drag and drop it from your file explorer/Finder straight onto the panel). After a few seconds, the upload will finish.

We'd recommend safely stopping your server before uploading a new plugin, or restarting it afterwards, to ensure it loads correctly and to avoid any file integrity issues.

<br />

Once you've restarted your server, you should be able to type `pl` (short for plugins) into your console and the plugin will show up in the list - you're all done!

If you're an EnviroMC customer and run into any issues installing plugins, feel free to reach out to us via a support ticket.
