---
title: Bogmærker
description: '- viden & inspiration'
permalink: /links
---
## Eksterne links
Samling af eksterne sider. 

{% for item in site.data.links %}

**[↗️ {{ item.name }}]({{ item.link }}){:target="_blank" rel="noopener"}**

{{ item.description }}

{% endfor %}
