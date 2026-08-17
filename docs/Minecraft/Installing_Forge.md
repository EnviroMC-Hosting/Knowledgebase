---
sidebar_position: 2
title: How to install Forge
---

# How to install forge on your Minecraft Server
Forge is a type of minecraft server that allows wide compatibility with various modpacks. When your server is running forge, you generally can't run plugins or mods from other SKUs such as fabric.
There are two ways to install forge on your minecraft server, this guide will go through both.

<br />

**We Advise creating a backup before installing forge as you are likely to overrite previous installations and may make mistakes that can cause issues**

# Note about updating Forge
Like most other versions of minecraft, you can move between subbuilds (eg between 1.20.1 47.2.3 and 1.20.1 47.2.0) freely but between versions (eg 1.20.1 and 1.20.2), you can only move up. Once you upgrade forge, you can no longer move back down.

With that in mind, installing a new version of forge will update forge automatically for you. Eg, if you have Forge 1.19.2 installed and then install Forge 1.20.4, this will update your server to 1.20.4 automatically.

<br />

# Method 1: Installing with EnviroMC's version installer

![](https://github.com/EnviroMC-Docs/Knowledgebase/blob/main/static/img/installing-forge-p1.png?raw=true)
Head over to your server on EnviroMC's panel and click on the "Versions" tab. From there, select "Forge" and pick the Minecraft version you're after from the list - the number of builds available for each version is shown next to it.

<br />

![](https://github.com/EnviroMC-Docs/Knowledgebase/blob/main/static/img/installing-forge-p2.png?raw=true)
Pick the build you want from the dropdown (the latest recommended build is selected by default), then decide on the two toggles:

- **Wipe Server Files** - leave this **off** if you're updating an existing server. Forge will simply be installed over the top of your current files, meaning **your world, configs and mods folder are all preserved** and your server is upgraded in place. This is the correct option whenever you're moving *up* a Forge version. Only turn this on if you want a completely clean slate - it deletes everything on your server first and cannot be undone.
- **Accept EULA** - toggle this on to pre-accept Minecraft's EULA so your server can boot straight away. If you leave it off, you'll be prompted to accept it on first boot instead (see the next step).

Hit **Install**; this will take around 30 seconds to a minute.

<br />

![](https://github.com/EnviroMC-Docs/Knowledgebase/blob/main/static/img/installing-forge-p3.png?raw=true)
Once the install has finished, head back to the **Console** tab and hit **Start**. If you didn't tick "Accept EULA" during the install, an **Accept Minecraft® EULA** pop up will appear over the console - click **I ACCEPT** and your server will carry on booting. You'll then see Forge load its mod files, generate the world, and finally print `Done (33.835s)! For help, type "help"`, at which point your server is fully up and running the version of Forge you just installed.

<br />
<br />

# Method 2: Manually installing Forge

![](https://github.com/EnviroMC-Docs/Knowledgebase/blob/main/static/img/installing-forge-p4.png?raw=true)
If you're wanting to use a version of forge that isn't available through the installer above, you'll need to install it manually this way. First, head to [Forge's website](https://files.minecraftforge.net/net/minecraftforge/forge/) and pick your Minecraft version from the list on the left. You'll be given a **Download Latest** and a **Download Recommended** option - unless you specifically need the newest build, "Recommended" is the safer choice.

It is crucial that you download the **Installer** version (the box labelled "Installer"), not the Mdk.

<br />

![](https://github.com/EnviroMC-Docs/Knowledgebase/blob/main/static/img/installing-forge-p5.png?raw=true)
Head to the **Files** tab on your server, make sure the server is stopped, and hit **Upload** (or simply drag and drop the file straight onto the panel) to upload the installer jar you just downloaded.

<br />

![](https://github.com/EnviroMC-Docs/Knowledgebase/blob/main/static/img/installing-forge-p6.png?raw=true)
Once uploaded, head to the **Startup** tab, tick **Custom Startup**, and set your startup command to run this jar with `--installServer` appended on the end - this tells the server that it's an installer jar rather than a server jar. For example:

`java -Xms128M -Xmx8192M -Dterminal.jline=false -Dterminal.ansi=true -jar forge-1.20.1-47.4.22-installer.jar --installServer`

Make sure to use the exact name of the jar file you've just uploaded (it's case sensitive) and to set `-Xmx` to match however much memory your server has.

Now boot your server from the **Console** tab. It will run the installer, download everything it needs and then stop - this is expected.

<br />

![](https://github.com/EnviroMC-Docs/Knowledgebase/blob/main/static/img/installing-forge-p7.png?raw=true)
Once that's finished, head back to **Files** and you'll see Forge has generated everything it needs - a `libraries` folder, a `mods` folder, `config`, and either a `run.sh` file or a Forge server jar. You can safely delete the installer jar you uploaded earlier at this point.

<br />

Finally, return to **Startup** and point your startup command at whatever the installer produced:

- If a **`.sh` file** was created (typical for 1.17+), set your startup command to `./run.sh`, adjusting the name if the file is called something else.
- If a **jar file** was created instead (typical for versions older than 1.16.5), run the Forge jar conventionally, eg `java -Xms128M -Xmx8192M -Dterminal.jline=false -Dterminal.ansi=true -jar forge-1.16.5-36.2.39.jar`. It is crucial that you don't run the vanilla Minecraft file (usually called something like `minecraft_server.jar`) as this will generate a vanilla world and cause you issues - the Forge jar is the physically much smaller of the two.

Start your server one final time and accept the EULA pop up if prompted. Your server is now running Forge!

<br />

Common issues:
Some of the most common issues users may face may include an incorrect java version. You can head to startup > docker image to change your java version. You will typically want to use java 11 for anything pre 1.16.5, java 16 for anything later than that but before forge 1.18.2 and java 21 for anything newer than that. This is only a rough guide.
If you experience a `Permission Denied` error when running a `.sh` file, please see our [Exit Code 126: Permission Denied](https://docs.enviromc.host/Minecraft/Exit%20Codes%20&%20Common%20Crashes/Exit_Code_126-Permission_Denied_Error) guide.
