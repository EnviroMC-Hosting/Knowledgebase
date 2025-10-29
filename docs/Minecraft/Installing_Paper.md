---
sidebar_position: 4
title: How to install Paper
---

# How to Install or Update PaperMC on your Minecraft Server
This guide will work for more or less all hosting companies or deployments on linux based systems.
<br />

**We Advise creating a backup before making any changes as mistaken can happen and files can accidentally be overwritten**

# Notes about Updating versus Installing PaperMC
Broadly, PaperMC is a straight forward, out of the box server solution designed to replace, but still support, plugins build on the Bukkit/Spigot engine. The process for updating and creating a new installation is effectively identical as it's a drag and drop replacement. Paper will automatically update any world files when you update to a newer version. We highly advise against attempting to downgrade Paper as it can cause corruption; we will not assist users attempting to do this.
<br />

# Installing with EnviroMC's version installer:

This process is near identical to the process we outlined in our article on How to install [Forge](https://docs.enviromc.host/Minecraft/Installing_Forge) or [Fabric](https://docs.enviromc.host/Minecraft/Installing_Fabric). 
![](https://github.com/EnviroMC-Docs/Knowledgebase/blob/main/static/img/installing-paper-p1.png?raw=true)
Head to https://papermc.io/downloads/paper and select the prefered version you are after. Please note that experimental builds are not available via the panel's built in version installer and are inherently unstable; they should be used with great caution in production environments.

<br />

![](https://github.com/EnviroMC-Docs/Knowledgebase/blob/main/static/img/installing-paper-p2.png?raw=true)
Once you have installed the relevant Paper .jar file, upload it to your server.

<br />

![](https://github.com/EnviroMC-Docs/Knowledgebase/blob/main/static/img/installing-paper-p3.png?raw=true)
Change the startup parameters (under "startup" on the panel) to reflect the name of the newly uploaded jar file. In this case, that involved changing "server.jar" to "paper-1.21.8-60.jar". If you need to overwrite your startup parameters, `java -Xms128M -Xmx{Amount of RAM}G -Dterminal.jline=false -Dterminal.ansi=true -jar {jarfile.jar}` can be a good starting point, making sure to change the Xmx and jar values respectively.

Make sure your server has the correct java version. At the time of writing, for anything post 1.18.2, Java 21 is advised. Anything prior to 1.16.5 can be run on Java 8.

<br />

![](https://github.com/EnviroMC-Docs/Knowledgebase/blob/main/static/img/installing-paper-p4.png?raw=true)
Boot up your server and make sure to accept the EULA pop up if it's a fresh installation. This pop up can sometimes be obscured by advert/JS blockers. You will need to manually verify that the eula.txt file contains the line "eula=true" if that is the case.
