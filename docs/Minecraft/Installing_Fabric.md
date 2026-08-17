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
Pick the Fabric loader build you want from the dropdown (the latest stable build is selected by default - alpha/beta builds aren't available from this installer, so if you need one of those you'll want to follow the manual method below instead). You'll then see two toggles:

- **Wipe Server Files** - leave this **off** to perform a clean upgrade. Fabric will be installed over the top of your existing files, meaning **your world, configs and mods folder all carry over** and your server is simply upgraded to the new version of Fabric in place. This is what you want whenever you're updating an existing server. Only turn it on if you want a totally fresh server - it deletes everything first and cannot be undone.
- **Accept EULA** - toggle this on to pre-accept Minecraft's EULA. If you leave it off, you'll be asked to accept it on first boot instead.

Hit **Install** and give it a few seconds to finish.

<br />

![](https://github.com/EnviroMC-Docs/Knowledgebase/blob/main/static/img/installing-fabric-p3.png?raw=true)
Now head to the **Console** tab and press **Start**. If you didn't tick "Accept EULA" during the install, the **Accept Minecraft® EULA** pop up will appear - click **I ACCEPT** and the server will continue booting. You'll see Fabric Loader load its mods, generate the world, and finish with `Done (10.611s)! For help, type "help"` - at which point your server is fully up and running Fabric.

<br />
<br />

# Method 2: Manually installing Fabric

If you're wanting to use a specific Fabric loader or installer version that isn't available above, this relatively straightforward, manual process is advisable.

![](https://github.com/EnviroMC-Docs/Knowledgebase/blob/main/static/img/installing-fabric-p4.png?raw=true)
Head over to [FabricMC's website](https://fabricmc.net/use/server/) (this link is reachable by visiting the main FabricMC site and then selecting Download > Minecraft Server). Select the Minecraft version, Fabric Loader version and Installer version you need, then hit **Executable Server (.jar)** to download it. Take note of the **Launch command** shown further down that page - you'll need it in a moment.

<br />

![](https://github.com/EnviroMC-Docs/Knowledgebase/blob/main/static/img/installing-fabric-p5.png?raw=true)
Make sure your server is stopped, then head to the **Files** tab and hit **Upload** (or drag and drop the file straight onto the panel) to upload the jar you just downloaded. If you're replacing an older install, delete any previous Fabric launcher jar from the root directory first so the two don't conflict.

<br />

![](https://github.com/EnviroMC-Docs/Knowledgebase/blob/main/static/img/installing-fabric-p6.png?raw=true)
Head to the **Startup** tab, tick **Custom Startup**, and paste in the launch command FabricMC gave you on their download page, for example:

`java -Xmx8G -jar fabric-server-mc.26.2-loader.0.19.3-launcher.1.1.2.jar nogui`

Make sure the jar filename exactly matches the file you uploaded, and adjust the `-Xmx` value to reflect how much memory your server has - eg. a server with 8GB of RAM should use `-Xmx8G` rather than `-Xmx2G`.

If you're an EnviroMC customer and you're having any issues modifying your startup parameters, please reach out to us via a support ticket.

<br />

Finally, head back to the **Console** tab and hit **Start**, accepting the EULA pop up if prompted. Your server will now boot up running your newly installed version of Fabric!

<br />

Common issues:
Some of the most common issues users may face may include an incorrect java version. You can head to startup > docker image to change your java version. You will typically want to use java 11 for anything pre 1.16.5, java 16 for anything later than that but before fabric 1.18.2 and java 21 for anything newer than that. This is only a rough guide.
