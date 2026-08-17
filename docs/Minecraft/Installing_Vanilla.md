---
sidebar_position: 5
title: How to install Vanilla (java)
---

# How to Install or Update Vanilla (Java) on your Minecraft Server
This guide will work for more or less all hosting companies or deployments on linux based systems.
<br />

### Notes about Updating versus Installing Vanilla Minecraft
Vanilla minecraft is an out of the box server solution created by Microsoft as the baseline, "original" minecraft experience; for most players we advise using PaperMC as a significantly more performant, open source alternative. Updating works the same way as installing a fresh copy with either of the methods below, and Minecraft will automatically update any world files when you update to a newer version. We highly advise against attempting to downgrade your server as it can cause corruption; we will not assist users attempting to do this.
<br />

**We advise creating a backup before making any changes, whichever method you use, as mistakes can happen and files can accidentally be overwritten.**

<br />

# Method 1: Installing with EnviroMC's version installer

This is the fastest way to install or update Vanilla and is the method we'd recommend for most users.

![](https://github.com/EnviroMC-Docs/Knowledgebase/blob/main/static/img/installing-vanilla-p2.png?raw=true)
Head to the **Versions** tab on your server, select **Vanilla**, then find the version you want in the list and click on it. Please note that snapshot/experimental builds are hidden by default - click "Show Snapshot Versions" if you need one, though these are inherently unstable and should be used with caution in production environments.

<br />

![](https://github.com/EnviroMC-Docs/Knowledgebase/blob/main/static/img/installing-vanilla-p3.png?raw=true)
You'll be asked to confirm the install. If you want a completely clean install, turn on **Wipe Server Files** - note this deletes everything on your server first and cannot be undone, so only enable it if you're happy to lose your existing world/config, or if you've already taken a backup. You'll also need to toggle **Accept EULA** to confirm you've read and agree to Minecraft's EULA. Hit **Install**, which usually only takes a few seconds since it's just downloading a single jar file.

<br />

Once installed, head to **Startup** and check your startup command and Docker image are correct for the version you just installed - the installer doesn't always adjust these for you, especially if your server was previously running something else. Updating is exactly the same process: just pick the newer version from the Versions tab, leave "Wipe Server Files" off, and your existing world will carry over.

<br />
<br />

# Method 2: Installing manually from Minecraft's website

This process is near identical to the process we outlined in our article on [How to Install Paper](https://docs.enviromc.host/Minecraft/Installing_Paper), as are most Minecraft server software installations.

<br />

![](https://github.com/EnviroMC-Docs/Knowledgebase/blob/main/static/img/installing-vanilla-p1.png?raw=true)
Head to https://www.minecraft.net/en-us/download/server and download the `minecraft_server.jar` file for the version you're after.

<br />

Upload the jar file to your server via the **Files** tab. If you're updating an older server, delete any other `.jar` files in the root directory first (immediately after clicking "Files" in the navbar, before entering any folders) so they don't conflict.

<br />

![](https://github.com/EnviroMC-Docs/Knowledgebase/blob/main/static/img/installing-vanilla-p4.png?raw=true)
Head to **Startup**, tick **Custom Startup**, and set your startup command to match the jar you just uploaded and the amount of memory your server has. A good starting point is:
`java -Xms128M -Xmx{Amount of RAM}G -Dterminal.jline=false -Dterminal.ansi=true -jar {jarfile.jar}`
making sure to change the `Xmx` and jar filename to match your server. Updating this way is exactly the same - just upload the newer jar over the old one and update the startup command's filename if it's changed.

Make sure your server has the correct Java version too - under "Startup" > "Docker Image". At the time of writing, for anything post 1.18.2, Java 21 is advised. Anything prior to 1.16.5 can be run on Java 8.

<br />

Boot up your server and make sure to accept the EULA pop up if it's a fresh installation. This pop up can sometimes be obscured by advert/JS blockers. You will need to manually verify that the `eula.txt` file contains the line `eula=true` if that is the case.

<br />

If you are an EnviroMC customer still experiencing issues with installing or updating your server, please feel free to reach out to us via a ticket for support.
