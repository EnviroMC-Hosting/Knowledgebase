---
sidebar_position: 1
title: How to Install and Setup a Hytale Server
---

# How to Install hytale on your game server

This guide is built for enviromc customers but will work for most providers using pterodactyl, pelican or any other type of web panel. 
All enviromc game servers come with the ability to play any game via our egg changer, including palworld.

<br / >

![](https://github.com/EnviroMC-Docs/Knowledgebase/blob/main/static/img/hytale-setup-p1.png?raw=true)
First, you will want to switch over your server over to Hytale. You can do this by heading to "settings" > "Change Egg" > Select Hytale

<br /> 

![](https://github.com/EnviroMC-Docs/Knowledgebase/blob/main/static/img/hytale-setup-p2.png?raw=true)
For new installations, it's generally advised to enable all 3 options as it will give you a blank, functional hytale server. We only advise using your own startup parameters or installation files if you know what you're doing.

<br /> 

![](https://github.com/EnviroMC-Docs/Knowledgebase/blob/main/static/img/hytale-setup-p3.png?raw=true)
If the installation was successful, you should have two files that look like this in the "Files" tab of the navbar.

<br /> 

![](https://github.com/EnviroMC-Docs/Knowledgebase/blob/main/static/img/hytale-setup-p4.png?raw=true)
You can then boot up your server. You will be prompted to authenticate that you own a valid copy of hytale - your server won't start unless you own a copy of Hytale.


![](https://github.com/EnviroMC-Docs/Knowledgebase/blob/main/static/img/hytale-setup-p4.2.png?raw=true)
Click on the link in the console and, if required, enter the authentication code provided in the Hytale console page. If you haven't already, you will need to create an account on Hytale and be logged in. 


You will then to click "approve" to authenticate that you are the server owner and that the server is linked to your Hytale account.

<br /> 

![](https://github.com/EnviroMC-Docs/Knowledgebase/blob/main/static/img/hytale-setup-p4.1.png?raw=true)
You may be prompted with another authentication screen like this occasionally, typically after updates or immediatly after installation. The process is similiar to the initial installation authentication process; 



<br />

<img src="https://github.com/EnviroMC-Docs/Knowledgebase/blob/main/static/img/hytale-setup-p5.png?raw=true" width="500" />
<img src="https://github.com/EnviroMC-Docs/Knowledgebase/blob/main/static/img/hytale-setup-p6.1.png?raw=true" width="500" />
<img src="https://github.com/EnviroMC-Docs/Knowledgebase/blob/main/static/img/hytale-setup-p6.2.png?raw=true" width="500" />

Now we've got the server running, you'll need to copy the server address from the console page. (Don't use 127.0.0.1:5520 - it's only an example).
Once you're in Hytale, click "servers" > "Add server" and then add the IP address that you just copied from your server's console page. You should then be able to double click the newly added server to join.









#### Common Errors:

At the time of writing, Hytale is still advertised as a "beta" release game; there will be bugs.

```[SessionServiceClient] Failed to request authorization grant: HTTP 403 - invalid token```
This error means there is some issue with authentication. We suggest restarting both your game client and the server, which can sometimes help. The issue may be with hytale's authentication servers; if restarting your server/client doesn't help, try waiting 30 minutes to see if the issue resolves on its own.