---
sidebar_position: 1
title: Connecting to sFTP
---


# What is sFTP?
sFTP is an IP based protocol that allows you to connect to a remote server to upload and download files. It is a more secure evolution of FTP (File Transfer Protocol) that utilises encryption.

In this guide, we will be utilising WinSCP as an example. Other popular clients include FileZilla and CyberDuck; owe advise using WinSCP as it is significantly easier to use when connecting to your EnviroMC server as you don't need to copy your credentials across. 

<br />

First, you will need to install WinSCP if you don't already have it. You can download it here https://winscp.net/eng/index.php - it is primarily built to be run on windows. 

<br />

![](https://github.com/EnviroMC-Docs/Knowledgebase/blob/main/static/img/using-sftp-p1.png?raw=true)
Once you have WinSCP installed, you will need to head to "Settings" on your server and click the `Launch SFTP` button. You may recieve a permission popup on your browser, you will need to accept it. 

![](https://github.com/EnviroMC-Docs/Knowledgebase/blob/main/static/img/using-sftp-p2.png?raw=true)
You will then have a prompt asking you for a password. You will need to enter the password you use to login to your EnviroMC panel. This is your sFTP password. 

You will then be connected to your server via sFTP. You can see and browse through your server files side by side with your local PC files. You can view, upload, download. delete and modify files freely from here. 