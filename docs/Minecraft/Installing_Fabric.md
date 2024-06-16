---
sidebar_position: 3
title: How to install Fabric
---

# How to install fabric on your Minecraft Server
Fabric is a type of minecraft server that allows wide compatibility with various modpacks. When your server is running fabric, you generally can't run plugins or mods from other SKUs such as fabric.
There are various ways to install fabric on your minecraft server, this guide will go through several different ways.

<br />

**We Advise creating a backup before installing fabric as you are likely to overrite previous installations and may make mistakes that can cause issues**

# Note about updating Fabric
Like most other versions of minecraft, you can move between subbuilds (eg between 1.20.1 47.2.3 and 1.20.1 47.2.0) freely but between versions (eg 1.20.1 and 1.20.2), you can only move up. Once you upgrade fabric, you can no longer move back down.

With that in mind, installing a new version of fabric will update fabric automatically for you. Eg, if you have Fabric 1.19.2 installed and then install Fabric 1.20.4, this will update your server to 1.20.4 automatically. 

<br />

# Installing with EnviroMC's version installer:

This process is near identical to the process we outlined in our article on `How to install Forge`. 
![](https://github.com/EnviroMC-Docs/Knowledgebase/blob/main/static/img/installing-fabric-p1.png?raw=true)

By heading to the Version installer, you can install any "Stable" version of Fabric, alpha/beta builds of Fabric are not available from this installer. It will typically use the latest stable Fabric loader and Installer version; at the time of writing, those are 0.15.9 and 1.0.1 respectively. If you want to use a different Fabric loader or Installer version, you will need to follow the other guide on manually installing Fabric.

<br />
<br />

# Manually installing Fabric
If you are wanting to use specific Fabric loader or Installation versions, this relatively straight forward manual process is adviseable.

First, head over to https://fabricmc.net/use/server/ (this link is reachable by visiting the main FabricMC site and then selecting Download > Minecraft Server)

![](https://github.com/EnviroMC-Docs/Knowledgebase/blob/main/static/img/installing-fabric-p2.png?raw=true)



<br />


<br />

Common issues:
Some of the most common issues users may face may include an incorrect java version. You can head to startup > docker image to change your java version. You will typically want to use java 11 for anything pre 1.16.5, java 16 for anything later than that but before fabric 1.18.2 and java 21 for anything newer than that. This is only a rough guide.
If you experience a `Permission Denied` error, please see our "Exit Code 126: Permission Denied" guide.