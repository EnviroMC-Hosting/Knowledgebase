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