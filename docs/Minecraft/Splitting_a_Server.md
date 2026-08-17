---
sidebar_position: 7
title: How to split a server
---

# How to split a server
Server Splitter (currently in Beta) lets you carve one server instance into multiple, independently manageable subservers - handy for running a lobby, a survival world and a minigames server side by side without paying for and managing three completely separate services.

<br />

### How many splits do I get?
Premium plans include up to **4 splits** at no extra cost. Budget plans include **0** splits by default. If you need more than your plan includes, additional splits can be purchased for **$2.99/mo each**.

<br />

### Important: splits share one pool of resources
It's important to understand that splitting a server does **not** give you extra CPU, memory or disk - your instance has a fixed amount of each, and splitting simply lets you divide that fixed pool up between your master server and its subservers. Resources aren't duplicated or purchased separately per split; they're moved freely between the master server and its splits, and you can rebalance them at any time by editing a split's limits.

<br />
<br />

# Before: a single, unsplit server
![](https://github.com/EnviroMC-Docs/Knowledgebase/blob/main/static/img/splitting-a-server-p1.png?raw=true)
Here's a server with no splits. All of its resources - in this example 500% CPU, 11.5 GiB memory and 98.66 GiB disk - are assigned entirely to the one server. Head to the **Server Splitter (Beta)** tab in the sidebar (under the **Flex** section) to get started.

<br />
<br />

# Creating a split
![](https://github.com/EnviroMC-Docs/Knowledgebase/blob/main/static/img/splitting-a-server-p2.png?raw=true)
Click the **+** tile to open the "Create new Split" dialog. Give your split a name (eg. "lobby"), then set how much CPU, memory, disk, swap, databases, allocations and backups you'd like to allocate to it from your instance's total pool. The maximum values shown next to each field update dynamically based on how much you still have unassigned. You can also toggle **Sync Subusers** to automatically give your existing subusers access to the new split. Hit **Split Server** once you're happy.

This process typically only takes a few seconds, after which your new split will appear as its own server with its own address and port, manageable just like any other server on your account (its own Console, Files, Backups, Schedules, Databases, Startup, etc).

<br />
<br />

# After: master server with multiple subservers
![](https://github.com/EnviroMC-Docs/Knowledgebase/blob/main/static/img/splitting-a-server-p3.png?raw=true)
Here's the same server after creating two splits, "lobby" and "creative". Notice the resources have simply been redistributed between the master server and its subservers rather than duplicated - the master server ("test") now shows 300% CPU / 7.5 GiB / 78.66 GiB, while "lobby" and "creative" each hold 100% CPU / 2 GiB / 10 GiB, all adding back up to the instance's original totals shown at the top of the page. The panel shows "2 of 10 splits have been created on this server", reflecting how many of your available splits are currently in use.

<br />

You can click into any existing split at any time to adjust its resource allocation, rename it, sync subusers again, or delete it entirely (which returns its resources back to the pool for you to reassign).

<br />
<br />

# Your splits on the dashboard
![](https://github.com/EnviroMC-Docs/Knowledgebase/blob/main/static/img/splitting-a-server-p4.png?raw=true)
Once you've made your splits, they'll also show up on your main dashboard when you log in. The master server is listed at the top with a **2 SUBSERVERS** badge next to its name, and each split is shown indented underneath it with a **SUBSERVER** badge, making the relationship between them clear at a glance.

Each subserver has its own address and port and its own share of CPU, memory and disk, and clicking on any of them takes you straight into that server's own panel - with its own Console, Files, Backups, Schedules, Databases and Startup - exactly like a standalone server.

<br />

If you're an EnviroMC customer and need help planning out your splits or purchasing additional ones, feel free to reach out to us via a support ticket.
