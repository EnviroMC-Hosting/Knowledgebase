---
sidebar_position: 50
title: How to install a Modpack
---

# Installing Minecraft Modpacks

This guide is specific to EnviroMC but is generally applicable to most hosting companies and installations. If you're having any issues after this guide, please only contact us if you're an EnviroMC customer.

There are two ways to get a modpack onto your server: our built-in **Modpacks tab**, which installs directly from Modrinth or CurseForge in a couple of clicks, or the **traditional method** of downloading the pack yourself from a site like CurseForge or Modrinth and uploading it via the Files tab. Both are covered below. In this guide, we'll largely be using Forge-based packs as an example, but this guidance is generally applicable to Fabric and most common mod-supporting server software. Please note that Forge and Fabric mods are generally **not** cross compatible - installing a modpack using the incorrect server jar will throw various errors.

**We heavily advise users to take a backup of their server before installing a modpack as there is a high likelihood of files being overwritten/updated which is non-reversible.**

<br />

# Method 1: Installing via the Modpacks tab

This is the easiest method for most users and is the one we'd recommend by default. It searches Modrinth and CurseForge directly from the panel, so there's no need to leave the dashboard or manually upload anything.

![](https://github.com/EnviroMC-Docs/Knowledgebase/blob/main/static/img/installing-modpacks-p1.png?raw=true)
Head to the **Modpacks** tab on your server. Use the **Provider** dropdown to pick Modrinth, CurseForge, ATLauncher, Feed The Beast, Technic or Voids Wrath, then use the search box to find the pack you're after. In this example we've searched for "All the Mods 10" on the CurseForge provider.

<br />

Click the download icon next to the modpack you want. A confirmation window will pop up letting you choose the modpack version and, importantly, a **"Delete Files"** toggle.

- If this is a **fresh install** (or you're happy to lose everything currently on the server), turn this toggle on. It will wipe the server before installing so nothing from a previous install conflicts with the new pack.
- If you're **updating** an existing modpack install, leave it off - the installer will overwrite/update the modpack's own files while leaving the rest of your server (worlds, other config) alone. As always, take a backup first regardless.

Click **Install modpack** to confirm. Installation can take anywhere from thirty seconds to several minutes depending on the size of the pack, since the panel needs to download every mod file individually. Once it's finished, head to **Startup** to double check your startup parameters and Java version match what the modpack expects (the installer usually sets these automatically), then boot your server as normal and accept the EULA prompt if it's a fresh install.

<br />
<br />

# Method 2: Traditional download and upload

If your modpack isn't available through the Modpacks tab, or you'd simply rather do it manually, you can download the pack yourself and upload it like any other file.

![](https://github.com/EnviroMC-Docs/Knowledgebase/blob/main/static/img/installing-modpacks-p2.png?raw=true)
Head to a legitimate, well-known site such as [CurseForge](https://www.curseforge.com/minecraft) or [Modrinth](https://modrinth.com/modpacks) and find the modpack you're after - in this example we're using Create+ on Modrinth. Make sure to check the "Compatibility" panel for the Minecraft version and whether it needs Forge, Fabric or NeoForge, and download the **server pack** if one is offered (client packs include resource/texture-only files you don't need on a server).

<br />

Before uploading anything, safely stop your server and take a backup. If you're updating an existing modpack install, delete the old mod jars and config first so old and new files don't conflict; if this is a fresh install onto a server with pre-existing files, select everything under the `Files` tab and hit delete to start from a clean slate.

<br />

![](https://github.com/EnviroMC-Docs/Knowledgebase/blob/main/static/img/installing-modpacks-p3.png?raw=true)
Head to the **Files** tab and click **Upload**, then drag and drop (or browse to) the modpack zip/jar you just downloaded. Once it's uploaded, if it's a compressed archive (`.zip`), click the three dots next to it and choose "Unarchive" to extract it into your server's root directory.

<br />

Finally, head to **Startup** and make sure your startup parameters point at the correct jar or `.sh` file the modpack expects, and that your Docker image is set to the correct Java version for that Minecraft version. Boot your server and accept the EULA prompt if this is a fresh install.

<br />
<br />

If you have any issues with either method, please feel free to try the other or reach out to us if you're an EnviroMC customer, otherwise we'd advise contacting your hosting provider.
