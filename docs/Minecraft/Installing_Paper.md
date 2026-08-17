---
sidebar_position: 4
title: How to install Paper
---

# How to Install or Update PaperMC on your Minecraft Server
This guide will work for more or less all hosting companies or deployments on linux based systems.
<br />

### Notes about Updating versus Installing PaperMC
Broadly, PaperMC is a straight forward, out of the box server solution designed to replace, but still support, plugins built on the Bukkit/Spigot engine. Updating works the same way as installing a fresh copy with either of the methods below, and Paper will automatically update any world files when you update to a newer version. We highly advise against attempting to downgrade Paper as it can cause corruption; we will not assist users attempting to do this.
<br />

**We advise creating a backup before making any changes, whichever method you use, as mistakes can happen and files can accidentally be overwritten.**

<br />

# Method 1: Installing with EnviroMC's version installer

This process is near identical to the process we outlined in our articles on how to install [Forge](https://docs.enviromc.host/Minecraft/Installing_Forge) or [Fabric](https://docs.enviromc.host/Minecraft/Installing_Fabric) via the version installer.

![](https://github.com/EnviroMC-Docs/Knowledgebase/blob/main/static/img/installing-paper-p2.png?raw=true)
Head to the **Versions** tab on your server and select **Paper**. Pick the Minecraft version you're after from the list - the panel will show you how many builds are available for each version. Snapshot/experimental builds are hidden by default and, as with all snapshots, should be used with caution in production.

<br />

![](https://github.com/EnviroMC-Docs/Knowledgebase/blob/main/static/img/installing-paper-p3.png?raw=true)
Unlike Vanilla, Paper publishes multiple builds per Minecraft version (usually bugfixes/small patches), so you'll get an extra dropdown to pick a specific build - the latest is selected by default and is almost always what you want. As before, toggle **Wipe Server Files** if you want a completely clean slate (this deletes everything first, so only use it if you're happy to lose your current files or have already backed up), and toggle **Accept EULA**. Hit **Install**.

<br />

Once it's finished, head to **Startup** to confirm your startup parameters and Java version are correct for the version you installed, then boot up your server and accept the EULA pop up if it's a fresh installation.

<br />
<br />

# Method 2: Installing manually from PaperMC's website

![](https://github.com/EnviroMC-Docs/Knowledgebase/blob/main/static/img/installing-paper-p1.png?raw=true)
Head to https://papermc.io/downloads/paper and use the dropdown next to the download button to pick the Minecraft version and build you want, then hit download to grab the jar.

<br />

Once you've downloaded the relevant Paper `.jar` file, upload it to your server via the **Files** tab. If you're updating an older server, delete any other `.jar` files in the root directory first so they don't conflict.

<br />

Head to **Startup** and change the startup command to reflect the name of the newly uploaded jar file - for example, changing `server.jar` to `paper-1.21.8-60.jar`. If you need to overwrite your startup parameters entirely, `java -Xms128M -Xmx{Amount of RAM}G -Dterminal.jline=false -Dterminal.ansi=true -jar {jarfile.jar}` is a good starting point, making sure to change the `Xmx` and jar values respectively.

Make sure your server has the correct Java version too. At the time of writing, for anything post 1.18.2, Java 21 is advised. Anything prior to 1.16.5 can be run on Java 8.

<br />

Boot up your server and make sure to accept the EULA pop up if it's a fresh installation. This pop up can sometimes be obscured by advert/JS blockers. You will need to manually verify that the `eula.txt` file contains the line `eula=true` if that is the case.
