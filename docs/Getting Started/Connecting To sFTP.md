---
sidebar_position: 1
title: Connecting to sFTP
---


### What is sFTP?
sFTP is an IP based protocol that allows you to connect to a remote server to upload and download files. It is a more secure evolution of FTP (File Transfer Protocol) that utilises encryption to more security transmit data.

### Why use sFTP
Secure File Transfer Protocol (sFTP) is a widely used standard for transferring data between cloud environments as it doesn't face the same limits as applications like browsers in regards to browser memory & session limits, network timeouts. Most sFTP tools have greater fault tolerances than web browser uploads as they can be more versitile and allow for continued transfers if a previous one is interupted. There is no upload size limit with FTP/sFTP protocols.

<br />
You can use any sFTP client but if you don't have one, here are a few good, free options:
- Cyberduck (Windows & Mac)
- Filezilla (Windows & Mac)
- WinSCP (Windows only)

It is crucial that you select the client version and not the server version. You will not be able to connect to an sFTP server without an sFTP client.

<br />

# How to connect to your server with sFTP
### The Quick Way (works with CyberDuck, WinSCP or any other sFTP client with URI/URL syntax support)
![](https://github.com/EnviroMC-Docs/Knowledgebase/blob/main/static/img/using-sftp-p1.png?raw=true)
Once you have WinSCP, or another compatible client, installed, you will need to head to "Settings" on your server's control panel and click the `Launch SFTP` button. You may recieve a permission popup on your browser, you will need to accept it. 


<br />

![](https://github.com/EnviroMC-Docs/Knowledgebase/blob/main/static/img/using-sftp-p2.png?raw=true)

You will then have a prompt asking you for a password. You will need to enter the password you use to login to your EnviroMC panel. This is your sFTP password. 

You will then be connected to your server via sFTP. You can see and browse through your server files side by side with your local PC files. You can view, upload, download. delete and modify files freely from here. 

<br />

### The Normal way (works with every sFTP client)

![](https://github.com/EnviroMC-Docs/Knowledgebase/blob/main/static/img/using-sftp-p3.png?raw=true)
If you are using a client that doesn't have fully URI/URL syntax support, you will have to manually enter your sFTP credentials. You will need to copy the "Server Address" and "Username" from the panel and into, depending on the client you're using, text input boxes called "Host"/"Address" and "Username" respectively. The password is the same one you use to log in to the panel. You can leave the port blank as it's already included in the server address. 

![](https://github.com/EnviroMC-Docs/Knowledgebase/blob/main/static/img/using-sftp-p4.png?raw=true)
You can then just hit connect and access all of your server's files! 

<br />

### Common Slip ups
Make sure you don't inadvertently enter the port twice. The connection will fail if you don't include the full address (including `sftp://` in the address), username and password.

Correct & Functional sFTP credentials examples:


Example 1:

Address: sftp://NA-01.enviromc.com:2022
Username: exampleuser
Password: examplepassword
Port: Leave blank


Example 2:


Address: sftp://NA-01.enviromc.com

Username: exampleuser

Password: examplepassword

Port: 2022


<br /> 
Common errors:
If you recieve an "Error:	Authentication failed.", check that you have entered your username and password correctly.
If you recieve an "Error: Permission Denied." or "Error code: 3", make sure your server isn't suspended and, if you're a subuser, make sure you have full sFTP permissions.



