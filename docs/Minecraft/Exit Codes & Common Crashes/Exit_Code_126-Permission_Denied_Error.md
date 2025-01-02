---
sidebar_position: 10
title: "Exit Code 126: Permission Denied"
---
<br />
This article is specific to EnviroMC but will generally apply to any hosts using Pterodactyl or Pelican Panel.

This is a common error for minecraft servers using shell (.sh) files to boot their servers; a common practice for Forge, Fabric and other modded versions of minecraft. 
It can be one of many frustrating hurdles but dont fret, here's how to fix it! 


![](https://github.com/EnviroMC-Docs/Knowledgebase/blob/main/static/img/Permission-Denied-p1.png?raw=true)

<br />

From here, you'll want to head to the file manager (under "Files" on the EnviroMC panel, it may be different on other hosts) and locate the .sh file you're trying to run. If you're not sure which file to click on, it should be viewable under "Startup".
Click the 3 dots next to the .sh file and then click "Permissions".
![](https://github.com/EnviroMC-Docs/Knowledgebase/blob/main/static/img/Permission-Denied-p2.png?raw=true)

<br />

You will be prompted with a box asking you for a three digit number. It will likely say something like 644*.
There are a few things you can change it to but we'd typically recommend changing it to 744.
![](https://github.com/EnviroMC-Docs/Knowledgebase/blob/main/static/img/Permission-Denied-p3.png?raw=true)


From there, you should now be able to boot up your server! If you're an EnviroMC customer and you're still having any issues, you can reach out to us above by clicking the "Discord" or "Create Web Ticket" buttons in the Navbar. If you're not an EnviroMC customer, we'd advise reaching out to your hosting company to help.


<br />
<br />

\* These numbers represent the linux permission formats. This error is often caused when a modpack developers compiles their modpacks on windows and then move it across to our systems, that are hosted on linux. This mismatch in permissions causes this error to be thrown. You can read about linux permissions here https://www.stationx.net/linux-file-permissions-cheat-sheet/
