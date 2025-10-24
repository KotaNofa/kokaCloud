This repository is a snapshot into my cloud infrastructure  
My custom designed stack serves ~30k HTTPS requests a month as well as other services such as game server hosting, content delivery, and more. All images will see here are hosted from my content delivery system.
  
I initially started this project in October of 2023 with the goal of creating a webzone for my online personality after taking many CCNA courses, but the project's scope expanded into full-stack development as I realized that HTML/CSS/JS develop was not a primary interest of mine.

This stack consists of:
 - A Ryzen Computer
 - Ubuntu Server Edition
 - Nginx Web Server
 - An Xfinity Gateway
 - Cloudflare Services

Where it (all at once) provides:
 - Multiple static websites (eg. https://boubas.net, https://koka.to)
 - Dynamic web hosting (eg. https://boubas.net/dynmap/)
 - Game server hosting (Minecraft)
 - Personal cloud storage (private)
 - VPN hosting (private)

Without being too verbose, the overall architecure is set up like this:

<img src="https://cdn.boubas.net/github/architecture.png" width="400">

My intent while creating it was to leave as few entry points for vulnerabilities as possible. Some of these security choices include:
 - A bare minimum amount of open ports for public services.
 - A tunneled VPN for admin configuration.
 - All traffic is routed and proxied with Cloudflare. 
 
 The result, so far, has been a very safe experience with no security events even though bot and webcrawler traffic is *always* high.
 
 <img src="https://cdn.boubas.net/github/cf.png" width="400">

