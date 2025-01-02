---
sidebar_position: 2
title: How to install Forge
---

# How to install forge on your Minecraft Server
Forge is a type of minecraft server that allows wide compatibility with various modpacks. When your server is running forge, you generally can't run plugins or mods from other SKUs such as fabric.
There are various ways to install forge on your minecraft server, this guide will go through several different ways.

<br />

**We Advise creating a backup before installing forge as you are likely to overrite previous installations and may make mistakes that can cause issues**

# Note about updating Forge
Like most other versions of minecraft, you can move between subbuilds (eg between 1.20.1 47.2.3 and 1.20.1 47.2.0) freely but between versions (eg 1.20.1 and 1.20.2), you can only move up. Once you upgrade forge, you can no longer move back down.

With that in mind, installing a new version of forge will update forge automatically for you. Eg, if you have Forge 1.19.2 installed and then install Forge 1.20.4, this will update your server to 1.20.4 automatically. 

<br />

# Installing with EnviroMC's version installer:

![](https://github.com/EnviroMC-Docs/Knowledgebase/blob/main/static/img/installing-forge-p1.png?raw=true)
Head over to your server on EnviroMC's panel and click on the "Versions" tab. From there, select "Forge" from the dropdown option and then find the version you want and click "install". This will automatically pull the latest "recommended" version from forge's API; it will not pull any older or development builds.

<br />

![](https://github.com/EnviroMC-Docs/Knowledgebase/blob/main/static/img/installing-forge-p2.png?raw=true)
You will need to accept a pop up to confirm and then installation will take around 30 seconds to a minute. After that's done, head back over to the console and start your server. You will need to accept the EULA pop up and, after that, your server will be now be running the specified version of forge!

<br />
<br />

# Manually installing Forge
![](https://github.com/EnviroMC-Docs/Knowledgebase/blob/main/static/img/installing-forge-p3.png?raw=true)
If you're wanting to use a version of forge that isn't the latest "Recommended" (stable) build, you will need to install it manually this way. First, you will need to head to Forge's website and find the version of Forge you're after. https://files.minecraftforge.net/net/minecraftforge/forge/

It is crucial that you install the "installer" version. 

<br />

![](https://github.com/EnviroMC-Docs/Knowledgebase/blob/main/static/img/installing-forge-p4.png?raw=true)
You will then need to upload the newly downloaded installer jar to your server. It should look something like this.

<br />

![](https://github.com/EnviroMC-Docs/Knowledgebase/blob/main/static/img/installing-forge-p5.png?raw=true)
Once uploaded, you will need to adjust your startup parameters to run this jar with `--installServer` appended on the end; this will tell your server that this is an installer jar. Once you boot your server, all the relevant files will be installed for you. An example startup command might look a bit like `java -Xms128M -Xmx4096M -Dterminal.jline=false -Dterminal.ansi=true -jar forge-1.20.2-48.1.0-installer.jar --installServer`. It's important you use the name of the jar file you've just uploaded and follow the case sensitivity.

<br />

![](https://github.com/EnviroMC-Docs/Knowledgebase/blob/main/static/img/installing-forge-p6.png?raw=true)
Once you've booted up your server and given it a few minutes to install, your server files will now look something like this. You can delete the installer jar that you just ran. Take note of any newly created .jar or .sh files.

<br />
![](https://github.com/EnviroMC-Docs/Knowledgebase/blob/main/static/img/installing-forge-p7.png?raw=true)
You will now need to head back to your Startup tab. If you have a .sh file, you will want to run it by setting your startup parameters to `./run.sh` (you will need to adjust the name if the installed .sh file is called something else. 

If a Jar file is installed instead of a .sh file (this is typical for versions older than 1.16.5), you will want to run your server conventionally by running the forge jar. It is crucial that you dont run the vanilla minecraft file (which may be called something like minecraft_server.jar) as this will generate a vanilla world and cause you issues. An example set of startup parameters to run the forge jar (the physically much smaller jar file) might look like `java -Xms128M -Xmx4096M -Dterminal.jline=false -Dterminal.ansi=true -jar server.jar`.

<br />

Common issues:
Some of the most common issues users may face may include an incorrect java version. You can head to startup > docker image to change your java version. You will typically want to use java 11 for anything pre 1.16.5, java 16 for anything later than that but before forge 1.18.2 and java 21 for anything newer than that. This is only a rough guide.
If you experience a `Permission Denied` error, please see our "Exit Code 126: Permission Denied" guide.
