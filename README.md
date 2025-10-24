This repository is a snapshot into my web hosting journey that I started back in October of 2023.  
I initially started this website as a zone for my online personality after taking many CCNA courses, but now it is more-so a foray into full-stack web development as HTML/CSS/JS frontend develop was not a primary interest of mine.

This stack consists of:
 - A Ryzen Computer
 - Ubuntu Server Edition
 - Nginx Web Server
 - An Xfinity Gateway
 - Cloudflare Services

Where it (all at once) provides:
 - Multiple static websites (eg. boubas.net, koka.to)
 - Dynamic web hosting (eg. boubas.net/dynmap/)
 - Game server hosting (Minecraft)
 - Personal cloud storage (private)
 - VPN hosting (private)

Without being too verbose, the overall architecure is set up like this:

<img src="https://cdn.boubas.net/github/architecture.png" width="400">

An intent while creating it was to leave as few entry points for vulnerabilities as possible. Some of these security choices include:
 - A bare minimum amount of open ports for public services.
 - A tunneled VPN for admin configuration.
 - All traffic is routed and proxied with Cloudflare. 
 
 The result, so far, has been a very safe experience with no security events even though bot and webcrawler traffic is *always* high.
 
 <img src="https://cdn.boubas.net/github/cf.png" width="400">

