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

![](https://github.com/EnviroMC-Docs/Knowledgebase/blob/main/static/img/installing-paper-p1.png?raw=true)
Head to the **Versions** tab on your server and select **Paper**. Pick the Minecraft version you're after from the list - the panel will show you how many builds are available for each version. Snapshot/experimental builds are hidden by default and, as with all snapshots, should be used with caution in production.

<br />

![](https://github.com/EnviroMC-Docs/Knowledgebase/blob/main/static/img/installing-paper-p2.png?raw=true)
Unlike Vanilla, Paper publishes multiple builds per Minecraft version (usually bugfixes/small patches), so you'll get an extra dropdown to pick a specific build - the latest is selected by default and is almost always what you want. You'll then see two toggles:

- **Wipe Server Files** - leave this **off** when you're updating. Paper will be installed over the top of your existing files, so **your world, plugins and configs are all kept** and your server is simply updated in place - Paper will migrate your world data to the new version on first boot. Only turn this on for a completely clean slate; it deletes everything first and cannot be undone.
- **Accept EULA** - toggle this on to pre-accept Minecraft's EULA, or leave it off and accept the pop up on first boot instead.

Hit **Install** and give it a few seconds.

<br />

![](https://github.com/EnviroMC-Docs/Knowledgebase/blob/main/static/img/installing-paper-p3.png?raw=true)
Once it's finished, head to the **Console** tab and hit **Start**. If you didn't tick "Accept EULA" during install, the **Accept Minecraft® EULA** pop up will appear - click **I ACCEPT** and the server will carry on booting. Paper will generate the world and finish with `Done (33.060s)! For help, type "help"`, at which point your server is up and running.

If you're moving to a brand new Minecraft version, it's worth checking under **Startup** > **Docker Image** that your Java version is still appropriate for the version you just installed.

<br />
<br />

# Method 2: Installing manually from PaperMC's website

![](https://github.com/EnviroMC-Docs/Knowledgebase/blob/main/static/img/installing-paper-p4.png?raw=true)
Head to [papermc.io/downloads/paper](https://papermc.io/downloads/paper). The big blue button gives you the latest build of the newest version - use the arrow next to it to pick a different Minecraft version or build. Click it to download the `.jar` file to your PC.

<br />

![](https://github.com/EnviroMC-Docs/Knowledgebase/blob/main/static/img/installing-paper-p5.png?raw=true)
Make sure your server is stopped, then head to the **Files** tab and hit **Upload** (or drag and drop the file straight onto the panel) to upload the jar. If you're updating an older server, delete any other `.jar` files in the root directory first so they don't conflict.

<br />

![](https://github.com/EnviroMC-Docs/Knowledgebase/blob/main/static/img/installing-paper-p6.png?raw=true)
Head to **Startup** and update the startup command so it points at the jar you just uploaded - for example changing `server.jar` to `paper-26.2-112.jar`. If you need to overwrite your startup parameters entirely, tick **Custom Startup** and use something like:

`java -Xms128M -Xmx{Amount of RAM}G -Dterminal.jline=false -Dterminal.ansi=true -jar {jarfile.jar}`

making sure to change the `Xmx` and jar values to match your server.

Make sure your server has the correct Java version too, under **Startup** > **Docker Image**. At the time of writing, for anything post 1.18.2, Java 21 is advised. Anything prior to 1.16.5 can be run on Java 8.

<br />

Finally, head back to the **Console** tab and hit **Start**. Accept the EULA pop up if it's a fresh installation - this pop up can sometimes be obscured by advert/JS blockers, in which case you'll need to manually verify that the `eula.txt` file contains the line `eula=true`.

<br />

Updating manually is exactly the same process - just upload the newer jar, update the startup command's filename if it's changed, and start the server again. Your world and plugins are untouched.
