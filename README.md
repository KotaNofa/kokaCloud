My custom designed stack serves ~30k HTTPS requests a month as well as other services such as game server hosting, content delivery, and more. All images seen here originate from my content delivery systen. This repository is meant to be snapshot into the cloud infrastructure that I use personally as well as for deploying my projects, ***it only contains directories and HTML/CSS for the site I host.***
  
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
 - Content Delivery (eg. https://cdn.boubas.net/assets/kokathing_4k.png)
 - Game server hosting (Minecraft)
 - Personal cloud storage (private)
 - VPN hosting (private)

Without being too verbose, the overall architecure is set up like this:

<img src="https://cdn.boubas.net/github/architecture.png" width="400">

My intent while creating it was to leave as few entry points for vulnerabilities as possible. Some of these security choices include:
 - A bare minimum amount of open ports for public services.
 - A tunneled VPN for admin configuration.
 - All traffic is routed and proxied with Cloudflare.
 - Prohibiting traffic through the origin IP without a hostname.  
 
 The implentations of these design goals have led to a consistently quiet, and controlled security experience.
 
 <img src="https://cdn.boubas.net/github/cloudflarestats.png" width="400">

