---
sidebar_position: 40
title: How to Install and Update Minecraft Bedrock
---

We *highly* advise taking a backup (under the "Backups" tab on the panel) before updating or installing any new files. Mistakes are not uncommon and things can go wrong.

<br />

# Method 1: Installing via the Egg Changer

The quickest way to get a blank, ready-to-go Bedrock server is to switch your server's egg. This is the best option if you don't already have a server you want to keep, since it wipes the server as part of the switch.

![](https://github.com/EnviroMC-Docs/Knowledgebase/blob/main/static/img/Installing-updating-bedrock-p1.png?raw=true)
Head to **Settings** on your server and find the **Change Egg** panel. Select **Vanilla Bedrock** from the dropdown and hit **Apply**. Note, doing this will erase whatever is currently on your server, so make sure to download a copy of your files or take a backup first if you care about them.

<br />

Once the egg has finished switching, head to **Startup** to double check things - the egg will pre-fill the startup command as `./bedrock_server` for you along with variables like the Bedrock version, server name, gamemode and difficulty. You can leave the version variable as `latest` to always install the newest release, or pin it to a specific version (e.g. `1.21.50.7`) if you need to. Boot your server as normal from here.

<br />
<br />

# Method 2: Installing manually

There are a few ways to install vanilla Minecraft Bedrock on your server; this method walks through installing it manually by downloading the official server software yourself. This can be done on most hosting companies, as well as local instances, and is the method you'll want if your server is currently running something else and you don't want to use the Egg Changer.

<br />

Creating a fresh installation or updating an existing one is quite straightforward and the steps are effectively identical - see the "Updating" section further down for the one difference. It is incredibly important to make sure your server has been powered down before uploading or overwriting any files.

<br />

![](https://github.com/EnviroMC-Docs/Knowledgebase/blob/main/static/img/Installing-updating-bedrock-p2.png?raw=true)
Head to https://www.minecraft.net/en-us/download/server/bedrock and select the **Ubuntu (Linux)** build if you're running on a server host, including EnviroMC. If you're running a server locally on Windows, choose the Windows option instead. Tick the licence agreement checkbox and hit Download.

<br />

Head to the **Files** tab on your server and upload the zip file you just downloaded. Once it's uploaded, click the three dots next to it and choose "Unarchive" to extract it - this will populate your server with `bedrock_server`, the `worlds`, `behavior_packs` and `resource_packs` folders, and all the other files a Bedrock server needs.

<br />

![](https://github.com/EnviroMC-Docs/Knowledgebase/blob/main/static/img/Installing-updating-bedrock-p3.png?raw=true)
Head to **Startup** and set your startup command to `./bedrock_server` - this is what runs the newly installed server software. If you're doing this locally on Windows instead, you can just double left-click the `bedrock_server.exe` file.

<br />

Your server should now boot up! It's not entirely uncommon for some users to experience a permission denied error at this stage - if that happens, our [Exit Code 126: Permission Denied](https://docs.enviromc.host/Minecraft/Exit%20Codes%20&%20Common%20Crashes/Exit_Code_126-Permission_Denied_Error) guide walks through the fix.

<br />
<br />

# Updating an existing Bedrock install

Updating is almost identical to a fresh install, whichever method you used originally:

- **Via the Egg Changer / Versions installer:** simply change the `BEDROCK VERSION` startup variable under **Startup** to the version you want (or leave it as `latest`) and restart your server - the egg will fetch and install the new version for you automatically.
- **Manually:** download the newer Ubuntu build from minecraft.net as above and upload/extract it over your existing files the same way you did for the initial install.

If you followed either method correctly, your `worlds` folder will **not** be overwritten, so your existing world carries over to the new version. As always, take a backup first in case anything goes wrong - world corruption from a bad update, while rare, is not unheard of.

<br />

<br />

# Common issues

By far the most common issue when installing Bedrock manually is a **permission denied** error when the server tries to run `bedrock_server`. This happens because the binary is uploaded without the Linux "execute" permission set. Our [Exit Code 126: Permission Denied](https://docs.enviromc.host/Minecraft/Exit%20Codes%20&%20Common%20Crashes/Exit_Code_126-Permission_Denied_Error) guide walks through exactly how to fix this in a couple of clicks.

<br />

If you are an EnviroMC customer and continue to experience issues, please feel free to contact our support via Discord or a web ticket.
