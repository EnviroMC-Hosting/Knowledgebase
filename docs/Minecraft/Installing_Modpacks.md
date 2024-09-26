---
sidebar_position: 4
title: How to install a Modpack
---
# How to install a Curseforge Modpack

Why have I been sent to this page?                                                                                     
As of writing this paragraph, we're currently working on the minecraft modpack installer tab on the panel to improve its ease of use and overall security. If you were directed here from the panel whilst trying to install a modpack the modpack installer is still under maintenence, you are advised to look at this guide as it will walk you through the steps that will still allow you to install a curseforge modpack on your server in just a couple of clicks!

# Installing Minecraft Modpacks
This guide is specific to EnviroMC but is generally applicable to most hosting companies and installations. If you're having any issues after this guide, please only contact us if you're an EnviroMC customer. 

There are three common ways to modpacks can be downloaded from sites like Curseforge (using Jar files, Shell files or Overrides) and there are a handful of ways they can be setup. In this guide, I will largely be using Forge as an example but this any guidance is generally applicable to Fabric and most common mod-supporting server softwares. Please note that Forge and Fabric mods are generally NOT cross compatible. Installing modpacks using the incorrect server jar will throw various errors. 

**We heavily advise users to take a backup of their server before installing a modpack as their is a high likelihood of files being overwritten/updated which is non reversible**

<br />

# Install via Curseforge Egg

We generally encourage new users to use this method as it's generally the most straight forward. It does, however, require the modpack to be on [Curseforge](https://www.curseforge.com/minecraft) to work. It is, at the time of writing, also a BETA feature so there may be a handful of issues with it - if you have any issues, don't hesitate to contact us with one of the buttons in the navbar! 

![](https://github.com/EnviroMC-Docs/Knowledgebase/blob/main/static/img/installing-modpacks-p1.png?raw=true)
Head over to the Egg Changer to change the installation image (egg) of your server to "CurseForge Installer". Note, doing this will erase whats already on your server so we highly advise downloading it to your own device or taking a backup beforehand if you care about the files already on your server.

<br />

![](https://github.com/EnviroMC-Docs/Knowledgebase/blob/main/static/img/installing-modpacks-p1.5.png?raw=true)
After the server has been switched to the CurseForge Installer Egg, it's important that you delete all existing files as they may merge or interfere with newly installed modpack files.
This can be done by heading to the `Files` tab on the panel, selecting everything and then pressing "Delete". You will need to press the confirmation pop-up to confirm deletion.


<br />


![](https://github.com/EnviroMC-Docs/Knowledgebase/blob/main/static/img/installing-modpacks-p2.png?raw=true)
If you're deleting large numbers of files, it can take a little while. Whilst that's processing, we'll head over to curseforge.com and find a modpack we're interested in. I'm going to use All The Mods 9 in this demonstration - it's a very popular modpack and safe to install, as is the vast majority of content on legitimate sites like Curseforge. 
Once you find a modpack you like, click on it and locate the "Project ID". Copy and paste that as we'll need this in just a moment.

<br />


![](https://github.com/EnviroMC-Docs/Knowledgebase/blob/main/static/img/installing-modpacks-p3.png?raw=true)
You'll now want to copy and paste this new token into the "Modpack Project ID" field and hit enter to save. 

<br />


![](https://github.com/EnviroMC-Docs/Knowledgebase/blob/main/static/img/installing-modpacks-p4.png?raw=true)
Head over to "Settings" and hit the re-install button. This will wipe your server and install the provided modpack ID after; it may take several minutes to complete.


<br />


If you have any issues with this, please feel free to try any of the other provided methods or reach out to us if you're an EnviroMC customer, otherwise we'd advise contacting your hosting provider. 
