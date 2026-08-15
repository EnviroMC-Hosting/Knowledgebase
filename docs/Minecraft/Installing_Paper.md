---
sidebar_position: 4
title: How to install Paper
---

# How to Install or Update PaperMC on your Minecraft Server
This guide will work for more or less all hosting companies or deployments on linux based systems.
<br />



### Notes about Updating versus Installing PaperMC
Broadly, PaperMC is a straight forward, out of the box server solution designed to replace, but still support, plugins built on the Bukkit/Spigot engine. The process for updating and creating a new installation is effectively identical as it's a drag and drop replacement. Paper will automatically update any world files when you update to a newer version. We highly advise against attempting to downgrade Paper as it can cause corruption; we will not assist users attempting to do this.
<br />

# Installing with EnviroMC's version installer:
**We Advise creating a backup before making any changes as mistaken can happen and files can accidentally be overwritten**

This process is near identical to the process we outlined in our article on How to install [Forge](https://docs.enviromc.host/Minecraft/Installing_Forge) or [Fabric](https://docs.enviromc.host/Minecraft/Installing_Fabric). 
![](https://github.com/EnviroMC-Docs/Knowledgebase/blob/main/static/img/installing-paper-p1.png?raw=true)
In the panel, open the **Minecraft** section of the left sidebar and click **Versions**. This shows a grid of every server software the panel supports, including Paper, Fabric, Forge and Vanilla. Click into **Paper**, then select the Minecraft version you are after. Please note that experimental or snapshot builds are not available via the panel's built in version installer and are inherently unstable; they should be used with great caution in production environments.

<br />

![](https://github.com/EnviroMC-Docs/Knowledgebase/blob/main/static/img/installing-paper-p2.png?raw=true)
Selecting a version opens an "Install Paper" modal. Pick the build you want from the dropdown (the latest is selected by default), then enable the **WIPE SERVER FILES** toggle if you'd like the panel to clear out any existing files before installing, and enable the **ACCEPT EULA** toggle to confirm you have read and accept the [Minecraft EULA](https://minecraft.net/eula). Once both toggles are enabled, click **Install**.

Make sure your server has the correct java version. At the time of writing, for anything post 1.18.2, Java 21 is advised. Anything prior to 1.16.5 can be run on Java 8.

<br />

![](https://github.com/EnviroMC-Docs/Knowledgebase/blob/main/static/img/installing-paper-p3.png?raw=true)
Once the installer finishes, head to the Console page and click **Start**. Since the EULA was already accepted in the install modal, no separate EULA pop up will appear on first boot; the console will run straight through world generation to "Done" and your server will be online.
