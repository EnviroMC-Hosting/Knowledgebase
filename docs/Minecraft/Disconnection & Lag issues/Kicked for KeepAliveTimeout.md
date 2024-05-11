---
sidebar_position: 1
title: "{Player} Kicked for Keep Alive Timeout!"
---

# \{Player\} Kicked for Keep Alive Timeout!

This is a relatively common error and can happen for quite a few reasons. Some of these include:
- Connectivity issues from the player connecting. If the player's ISP is mishandling the traffic route or dropping packets, the server may decide it can't maintain the TCP connection and kick the player.
- Resource issues - this is particularly common with proxy software like bungeecord, velocity and other similiar options. If the proxy server doesn't have enough avaialble resources, it will beging dropping connections as it's unable to server them.  
- Issues in the actual jar files themselves, this is most common in SNAPSHOT (beta) versions of minecraft that are more prone to incorrectly handling packets.


<br />
<br />

# How do I fix this?
**Easiest General Solution:**
<br /> This is a relatively easy issue to fix. For a 90% of users, just telling the server to maintain connections for longer for timing out will work. This would involve adding something like `-Dpaper.playerconnection.keepalive=120` into your servers startup parameters. Your startup parameters may look something like this: <br />
`java -Xms128M -Xmx4096M -Dterminal.jline=false -Dterminal.ansi=true -Dpaper.playerconnection.keepalive=120 -jar server.jar`
<br /> You will need to adjust the memory fields if you copy these startup parameters to reflect your server's actual memory allocation.


If that doesn't fix your issue, here are a handful of fixes for the other common causes.

**If your server is running out of resources:**
<br /> In this instance, you would just need to up your resources. The best way to tell is if your server is frequently showing high CPU or Memory usage on the "Console" page of your EnviroMC panel (This may be located somewhere like a stats page for some other hosting companies.)
<br /> You can upgrade on EnviroMC by heading to https://client.enviromc.host > logging in > click the service in question > upgrade/downgrade

<br />

**If you're running a snapshot version:**
<br /> Snapshot versions are typically the first publically released versions of a new version. They are known to be buggy and highly advised against use in production; you can usually tell if you're running a snapshot build as the jar name make be called something like `paper-1.20.6-SNAPSHOT.jar` or, when you start your server up, it will specify a snapshot version is being used.
<br /> Updating to a stable build on the same subversion may resolve the issue if it was caused by the snapshot not properly handing packets. Some other jars, particularly experimental jars like Yatopia, Spongeforge, Mohist, etc may also have similiar issues which you should be aware of if you choose to use them.


