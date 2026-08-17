---
sidebar_position: 6
title: How to install a modpack
---

# How to install a modpack on your Minecraft Server

Modpacks are pre-built collections of mods, configs and (often) custom worlds. There are two ways to get one onto your EnviroMC server: using the built-in **Modpacks** installer, or downloading the pack's **server pack** yourself and uploading it manually.

<br />

**We strongly advise taking a backup (under the "Backups" tab) before installing a modpack.** Installing a modpack will overwrite files, and modpack updates in particular are a common cause of world corruption.

<br />
<br />

# Method 1: Installing via the Modpacks tab

This is by far the easiest method and is what we'd recommend for most users.

![](https://github.com/EnviroMC-Docs/Knowledgebase/blob/main/static/img/installing-modpacks-p1.png?raw=true)
Head to the **Modpacks** tab on your server, under the "Minecraft" section of the sidebar. You'll be shown a browsable, searchable list of modpacks, with a **Most recently installed modpack** panel at the top showing whatever you last installed on this server.

<br />

![](https://github.com/EnviroMC-Docs/Knowledgebase/blob/main/static/img/installing-modpacks-p2.png?raw=true)
Use the **Provider** dropdown in the top left to choose where you want to browse from. We support **ATLauncher**, **CurseForge**, **Feed The Beast**, **Modrinth**, **Technic** and **Voids Wrath** - so between them, essentially every mainstream modpack is available. You can also change the **Page Size** to show more results per page.

<br />

![](https://github.com/EnviroMC-Docs/Knowledgebase/blob/main/static/img/installing-modpacks-p3.png?raw=true)
Type the name of the pack you're after into the **Search Query** box. In this example we've selected the **CurseForge** provider and searched for "Better MC" to find **Better MC [FORGE] BMC4**. Once you've found it, click the **download icon** on the right hand side of its row.

<br />

![](https://github.com/EnviroMC-Docs/Knowledgebase/blob/main/static/img/installing-modpacks-p4.png?raw=true)
An **Install modpack** window will open. Use the **Modpack Version** dropdown to pick which version of the pack you want - the latest is selected by default, and it's generally best to stick with the newest release unless you're specifically matching a version your players already have installed.

There's also a **Delete Files** toggle. Leave this **off** if you're updating an existing modpack server and want to keep your world; turn it **on** for a completely clean install (this deletes everything on your server first and is irreversible). Note the warning shown here - modpack updates can cause world corruption, so take a backup first.

Hit **Install modpack**.

<br />

![](https://github.com/EnviroMC-Docs/Knowledgebase/blob/main/static/img/installing-modpacks-p5.png?raw=true)
You'll be shown a **Running Installer** screen while the panel downloads and unpacks the modpack for you. This can take several minutes for larger packs - BMC4 is close to a gigabyte of mods - so leave it be until it's finished. The installer also sets your startup command and picks the correct Java version for the pack automatically.

<br />

![](https://github.com/EnviroMC-Docs/Knowledgebase/blob/main/static/img/installing-modpacks-p6.png?raw=true)
Once the install has finished, head to the **Console** tab and hit **Start**. If prompted, click **I ACCEPT** on the **Accept Minecraft® EULA** pop up and the server will carry on booting.

Modded servers take considerably longer to boot than vanilla ones - as you can see above, the console fills with each mod loading in turn, and it's completely normal for a large pack to take several minutes (sometimes longer) on its first start while it builds its configs and generates the world. Once you see `Done (...)! For help, type "help"`, your modpack server is ready.

Big packs are also memory hungry. If your server crashes partway through mod loading, that's usually a sign it needs more RAM than it currently has assigned.

<br />
<br />

# Method 2: Downloading and uploading the server pack manually

If the pack you want isn't listed in the Modpacks tab, or you need a specific version that isn't offered, you can install it yourself. The key thing here is that you need the pack's **server pack**, not the normal client download - the client file won't run as a server.

![](https://github.com/EnviroMC-Docs/Knowledgebase/blob/main/static/img/installing-modpacks-p7.png?raw=true)
Head to the modpack's page on CurseForge - in this example, [Better MC [FORGE] BMC4](https://www.curseforge.com/minecraft/modpacks/better-mc-forge-bmc4). Click the **Files** tab to see every published version of the pack.

<br />

![](https://github.com/EnviroMC-Docs/Knowledgebase/blob/main/static/img/installing-modpacks-p8.png?raw=true)
Click on the file version you want to open its own page, then scroll down to the **Additional Files** tab. This is where the server pack lives - in this case `BMC4_ServerPack_v60.zip`. Click the **download button** on that row to download it.

If a pack has no server pack listed under Additional Files, the author hasn't published one, and you'll need to use the Modpacks tab method above instead.

<br />

![](https://github.com/EnviroMC-Docs/Knowledgebase/blob/main/static/img/installing-modpacks-p9.png?raw=true)
Make sure your server is stopped, then head to the **Files** tab on the panel and hit **Upload** (or drag and drop the zip straight onto the panel). Large server packs can take a while to upload.

Once uploaded, click the three dots next to the zip and choose **Unarchive** to extract it. Check whether the pack extracted into the root directory or into a subfolder - if everything landed in a subfolder, move the contents up into the root so that files like `mods`, `config` and the Forge/Fabric jar sit directly in `/home/container`. You can delete the zip once you're done.

<br />

![](https://github.com/EnviroMC-Docs/Knowledgebase/blob/main/static/img/installing-modpacks-p10.png?raw=true)
Head to **Startup** and point your startup command at whatever the pack provides. Most modern Forge packs ship a `run.sh` file, in which case set your startup command to `./run.sh`. Older packs will include a Forge jar to run directly instead - see our [How to install Forge](https://docs.enviromc.host/Minecraft/Installing_Forge) guide for more detail on both cases.

You'll also want to check **Startup** > **Docker Image** matches the Java version the pack expects - for 1.20.1 Forge packs like BMC4, Java 17 or 21 is typical.

<br />

Finally, head to the **Console** tab and hit **Start**, accepting the EULA pop up if prompted. Give it plenty of time on first boot.

<br />

### Common issues

- **Permission denied / Exit code 126** - a very common one when running a `.sh` file from an extracted pack. Our [Exit Code 126: Permission Denied](https://docs.enviromc.host/Minecraft/Exit%20Codes%20&%20Common%20Crashes/Exit_Code_126-Permission_Denied_Error) guide covers the fix.
- **Server runs out of memory** - large modpacks are memory hungry. If your server crashes during startup or while generating chunks, you may simply need more RAM.
- **Wrong Java version** - if the server exits immediately with a class version error, change your Docker Image under Startup.

If you're an EnviroMC customer and you're still having trouble getting a modpack running, please reach out to us via a support ticket and we'll be happy to help.
