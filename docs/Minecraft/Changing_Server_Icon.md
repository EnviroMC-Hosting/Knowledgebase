---
sidebar_position: 8
title: How to change a server icon (Java)
---

# How to change your Minecraft Java server icon

The server icon appears beside your server in Minecraft Java Edition's multiplayer list. On a standard Java server, it is loaded from `server-icon.png` in the server's root directory.

## Prepare the image

1. Crop your image to a square so it does not become stretched when resized.
2. Resize it to exactly **64x64 pixels**. Check the result at that size, since small text and fine details can be hard to read.
3. Export it as a **PNG** named **`server-icon.png`**, all lowercase. Renaming a JPEG to `.png` does not convert the image format.

You can use any image editor with PNG export. If you prefer a browser tool, [ServerBuddy's icon maker](https://serverbuddy.net/tools/minecraft-server-icon-maker) can crop the image and export a 64x64 PNG with the required filename.

## Upload the icon

1. Open your server in the [EnviroMC panel](https://panel.enviromc.com) and stop it from the **Console** tab.
2. Open **Files** and stay in the root directory, where `server.properties` is located. If you already have a `server-icon.png`, download a copy before replacing it.
3. Click **Upload** and select the prepared `server-icon.png`, or drag it onto the file manager. Place it beside `server.properties`, not inside `world` or `plugins`.
4. Return to **Console** and click **Start**. Once the server has started, refresh the multiplayer list in Minecraft Java Edition to check the icon.

## If the icon does not appear

- Check that the uploaded image is a real PNG and exactly 64x64 pixels. Re-export it if needed.
- Check the full filename in the panel. It must be `server-icon.png`, not `Server-Icon.png` or `server-icon.png.png`.
- Confirm that the file is in the root directory of the server whose address you added in Minecraft, then stop and start that server after replacing the file.
- If your network uses a proxy, or a plugin changes the server-list response, check that software's icon settings. It may supply its own icon instead of the one on the backend server.

If you are an EnviroMC customer and still need help, include any icon-related startup errors when opening a support ticket.
