---
sidebar_position: 5
title: How to Install and Update Minecraft Bedrock
---

We *highly* advise taking a backup (under the "backups" tab on the panel) before updating or installing any new files. Mistakes are not uncommon and things can go wrong. 


# How to install/update Vanilla bedrock on a Minecraft Server 
There are a few ways to install vanilla minecraft bedrock on your server, this guide will walk through manually installed minecraft bedrock manually. This can be done on most hosting companies, aswell as local instances.


<br />

To begin, head on over to https://www.minecraft.net/en-us/download/server/bedrock and download the relevant version. If you are running it on a server hosting company, including EnviroMC, you will want to use the Linux/Ubuntu image. If you are running it locally on windows, choose the windows option.

<br /> 

Creating a fresh installation or updating vanilla bedrock is quite straight forward and the steps are effectively identical. Head to your server and upload/drag and drop your newly downloaded zip file onto your server. It is incredibly important to make sure your server has been powered down before updating any files. If you are updating an existing installation, this guide (if followed correctly) will not overwrite the world file. 

![](https://github.com/EnviroMC-Docs/Knowledgebase/blob/main/static/img/Installing-updating-bedrock-p1.png?raw=true)
You will then need to de-compress the zip file; on EnviroMC, this is done by clicking the 3 dots next to the zip file > "unarchive". If you're doing this on windows, you will need to right click the zip > extract all.

<br /> 

![](https://github.com/EnviroMC-Docs/Knowledgebase/blob/main/static/img/Installing-updating-bedrock-p2.png?raw=true)
Once de-compressed, your files should look something like this. 

<br /> 

![](https://github.com/EnviroMC-Docs/Knowledgebase/blob/main/static/img/Installing-updating-bedrock-p3.png?raw=true)
On EnviroMC, and most other server hosts, you will need to then change your startup parameters to `./bedrock_server`; this will run the newly installed bedrock server software. If you are using windows, you can just double left-click the `bedrock_server` file. 


<br /> 
Your server should now boot up! It's not entirely uncommon, however, for some users to experience a permission denied error. Please read our "Exit Code 126: Permission Denied" guide for a fix.

If you are an EnviroMC customer and continue to experience issues, please feel free to contact our support via discord or a web ticket.
