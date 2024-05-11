---
sidebar_position: 2
title: High Latency on Minecraft
---

# My latency is very high, how do I fix it?
Latency refers to the time it takes for a packet (a small bit of information) to travel from you (the client) to your minecraft server (the server) and back. Ranges below 200ms aren't abnormal depending on the your physical distance to wherever your server is hosted. If your server is reporting absurdly high latency in the >500ms range, there are a handful of steps that you can take to help.

<br />

**Finding the problem** 
<br /> Firstly, we need to find out what the cause of the latency is. We can do this by opening command prompt and typing `ping {IP}`. You can find your server's IP by heading to the "console" page on the panel; do **Not** include the port in the command. 
![](https://github.com/EnviroMC-Docs/Knowledgebase/blob/main/static/img/High-Latency-1.png?raw=true)

If your latency seems incredibly high, it would suggest that the issue lies somewhere between your and the physical machine hosting your server. This is usually quite uncommon but is usually a temporary issue if your local ISP is oversatured or has incorrectly set their routes. We would advise temporarily using a VPN to see if that fixes the issue. If you're still having issues after using a VPN, please reach out to us.

<br />
If your latency seems normal on command prompt but it's reporting signficantly higher in game, it would suggest that the issue is isolated to your game server itself as the traffic can reach our network without issue. 
<br /> **Here are a few common causes for this:**

**Snapshot Versions:**
<br /> Snapshot versions are notoriously unstable. We would highly advise updating to a stable build of your current version if one is offered as a fix may have been released that changes how network packets are handled - this will usually resolve the issue for 80-90% of users.

**Network Compression Threshold:**
<br /> This field is set in the server.properties file and is responsible for telling the server how much data it's allowed to send before it has to compress the data first (a trade off between network and processing power). We generally advise that you don't touch this unless you know what you're doing as making changes can make the issue worse if you're not careful. It should look something like this by default:
<br /> `network-compression-threshold=256`
<br /> If it isn't already on 256, we would generally advise setting it to 256.

**Outages:**
<br /> Please see https://status.enviromc.host for live information regarding outages. You can see which machine you're on by visiting the "Settings" tab on the panel. You would generally have to wait for us to resolve these types of issues; they are extremely uncommon.


**KeepAliveTimeout:**
<br /> If you are regularly being kicked whilst experiencing high latency, please see our other article regarding KeepAliveTimeout [here](https://docs.enviromc.host/Minecraft/Disconnection%20&%20Lag%20issues/Kicked%20for%20KeepAliveTimeout)

If you are still having issues with this and are an EnviroMC customer, please reach out to us in a ticket. If you are not an EnviroMC customer, we would advise that you reach out to your hosting provider.