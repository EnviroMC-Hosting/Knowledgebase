---
sidebar_position: 10
title: "Exit Code 126: Permission Denied"
---
<br />
This article is specific to EnviroMC but will generally apply to any hosts using Pterodactyl or Pelican Panel.

This is a common error for Minecraft servers using shell (`.sh`) files or standalone binaries (like `bedrock_server`) to boot their servers; a common practice for Forge, Fabric, other modded versions of Minecraft, and Bedrock. It can be one of many frustrating hurdles but don't fret, here's how to fix it!

![](https://github.com/EnviroMC-Docs/Knowledgebase/blob/main/static/img/Permission-Denied-p1.png?raw=true)
When this happens, your console will show something like the example above - an `Exit code: 126` followed by `Permission denied` right after the file tries to run, and the daemon marking the server as crashed.

<br />

From here, you'll want to head to the file manager (under "Files" on the EnviroMC panel, it may be different on other hosts) and locate the file you're trying to run - if you're not sure which file to click on, it should be viewable under "Startup". Click the three dots next to it and then click "Permissions".
![](https://github.com/EnviroMC-Docs/Knowledgebase/blob/main/static/img/Permission-Denied-p2.png?raw=true)

<br />

You will be prompted with a box asking you for a three digit number. It will likely say something like 644\*.
There are a few things you can change it to but we'd typically recommend changing it to 744.
![](https://github.com/EnviroMC-Docs/Knowledgebase/blob/main/static/img/Permission-Denied-p3.png?raw=true)

<br />

From there, you should now be able to boot up your server!
![](https://github.com/EnviroMC-Docs/Knowledgebase/blob/main/static/img/Permission-Denied-p4.png?raw=true)

If you're an EnviroMC customer and you're still having any issues, you can reach out to us above by clicking the "Discord" or "Create Web Ticket" buttons in the Navbar. If you're not an EnviroMC customer, we'd advise reaching out to your hosting company to help.


<br />
<br />

\* These numbers represent the linux permission formats. This error is often caused when a modpack developers compiles their modpacks on windows and then move it across to our systems, that are hosted on linux. This mismatch in permissions causes this error to be thrown. You can read about linux permissions here https://www.stationx.net/linux-file-permissions-cheat-sheet/
