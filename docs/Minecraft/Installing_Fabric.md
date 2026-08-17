---
sidebar_position: 3
title: How to install Fabric
---

# How to install fabric on your Minecraft Server
Fabric is a type of minecraft server that allows wide compatibility with various modpacks. When your server is running fabric, you generally can't run plugins or mods from other SKUs such as forge.
There are two ways to install fabric on your minecraft server, this guide will go through both.

<br />

**We Advise creating a backup before installing fabric as you are likely to overrite previous installations and may make mistakes that can cause issues**

# Note about updating Fabric
Like most other versions of minecraft, you can move between subbuilds (eg between 1.20.1 47.2.3 and 1.20.1 47.2.0) freely but between versions (eg 1.20.1 and 1.20.2), you can only move up. Once you upgrade fabric, you can no longer move back down.

With that in mind, installing a new version of fabric will update fabric automatically for you. Eg, if you have Fabric 1.19.2 installed and then install Fabric 1.20.4, this will update your server to 1.20.4 automatically.

<br />

# Method 1: Installing with EnviroMC's version installer

This process is near identical to the process we outlined in our article on [How to install Forge](https://docs.enviromc.host/Minecraft/Installing_Forge).

![](https://github.com/EnviroMC-Docs/Knowledgebase/blob/main/static/img/installing-fabric-p1.png?raw=true)
Head over to the **Versions** tab on your server, select **Fabric**, and pick the Minecraft version you're after from the list.

<br />

![](https://github.com/EnviroMC-Docs/Knowledgebase/blob/main/static/img/installing-fabric-p2.png?raw=true)
Pick the Fabric loader build you want from the dropdown (the latest stable build is selected by default - alpha/beta builds aren't available from this installer, so if you need one of those you'll want to follow the manual method below instead). Toggle **Accept EULA**, and optionally **Wipe Server Files** if you want a completely clean install - this deletes everything on your server first and cannot be undone, so only use it if you're happy to lose your existing files or have already backed up. Hit **Install** and you should be able to boot up your server with it now running your newly installed version of Fabric!

<br />
<br />

# Method 2: Manually installing Fabric

If you're wanting to use a specific Fabric loader or installer version that isn't available above, this relatively straightforward, manual process is advisable.

![](https://github.com/EnviroMC-Docs/Knowledgebase/blob/main/static/img/installing-fabric-p3.png?raw=true)
Head over to [FabricMC's website](https://fabricmc.net/use/server/) (this link is reachable by visiting the main FabricMC site and then selecting Download > Minecraft Server). Select the Minecraft version, Fabric Loader version and Installer version you need, then hit "Executable Server (.jar)" to download it.

<br />

You will then need to upload this newly downloaded jar file onto your server; this can be done under the "Files" tab of the panel.

<br />

From there, you will then need to copy the launch command FabricMC provides on their download page (as seen in the earlier image) onto your server under the `Startup` tab. Make sure to adjust your Xmx value to reflect however much memory your server has. Eg, if your server has 8GB of RAM, you would want your startup parameters to use `-Xmx8G` instead of `-Xmx2G`.

If you're an EnviroMC customer and you're having any issues modifying your startup parameters, please reach out to us via a support ticket.

<br />

You should then be able to boot up your server with it now running your newly installed version of Fabric!


Common issues:
Some of the most common issues users may face may include an incorrect java version. You can head to startup > docker image to change your java version. You will typically want to use java 11 for anything pre 1.16.5, java 16 for anything later than that but before fabric 1.18.2 and java 21 for anything newer than that. This is only a rough guide.
