---
sidebar_position: 5
title: How to install Vanilla (java)
---

# How to Install or Update Vanilla (Java) on your Minecraft Server
This guide will work for more or less all hosting companies or deployments on linux based systems.
<br />



### Notes about Updating versus Installing Vanilla Minecraft
Vanilla minecraft is an out of the box server solution created by microsoft as the baseline, "original" minecraft experience; for most players we advise using PaperMC as a signicantly more performant, open source alternative. The process for updating or creating a new installation is effectively identical as it's a drag and drop replacement. Minecraft will automatically update any world files when you update to a newer version. We highly advise against attempting to downgrade your server as it can cause corruption; we will not assist users attempting to do this.
<br />

# Installing Vanilla Minecraft from Minecraft's website, Step by Step
**We Advise creating a backup before making any changes as mistaken can happen and files can accidentally be overwritten**

This process is near identical to the process we outlined in our article on [How to Install Paper](https://docs.enviromc.host/Minecraft/Installing_Paper), as are most minecraft server software installations.

<br />
![](https://github.com/EnviroMC-Docs/Knowledgebase/blob/main/static/img/installing-vanilla-p1.png?raw=true)
To begin, head to https://www.minecraft.net/en-us/download/server and select the prefered version you are after. Please note that experimental builds are not available via the panel's built in version installer and are inherently unstable; they should be used with great caution in production environments.

<br />

![](https://github.com/EnviroMC-Docs/Knowledgebase/blob/main/static/img/installing-vanilla-p2.png?raw=true)
Once you have installed the relevant .jar file, upload it to your server. If you are updating an older server, you will need to delete any other .jar files in the root directory (ie, immediatly after you click on "Files" in the navbar, before clicking on any folders) first.
We will then need to verify that your startup parameters are correct. Quite often, the startup parameters we provide you will work out of the box as they're pre-configured to run `server.jar`. If your server is able to boot up at this stage, you can ignore the next steps and enjoy your newly installed vanilla server!

<br />

![](https://github.com/EnviroMC-Docs/Knowledgebase/blob/main/static/img/installing-vanilla-p3.png?raw=true)
If your server doesn't already start and you've verified your .jar file has been correctly uploaded, you will need to check the docker image and startup parameters.

Change the startup parameters (under "startup" on the panel) to reflect the name of the newly uploaded jar file. In this case, that involved changing "server.jar" and using Java 21. If you need to overwrite your startup parameters, `java -Xms128M -Xmx{Amount of RAM}G -Dterminal.jline=false -Dterminal.ansi=true -jar {jarfile.jar}` can be a good starting point, making sure to change the Xmx and jar values respectively.

Make sure your server has the correct java version. At the time of writing, for anything post 1.18.2, Java 21 is advised. Anything prior to 1.16.5 can be run on Java 8.

<br />

![](https://github.com/EnviroMC-Docs/Knowledgebase/blob/main/static/img/installing-paper-p5.png?raw=true)
Boot up your server and make sure to accept the EULA pop up if it's a fresh installation. This pop up can sometimes be obscured by advert/JS blockers. You will need to manually verify that the eula.txt file contains the line "eula=true" if that is the case.

If you are an EnviroMC customer still experiencing issues with installing or updating your server, please feel free to reach out to us via a ticket for support.
