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

## Vejledninger

**Markdown.**\
Tips og tricks til brugen markdown.\
[Markdown ↗️](../sider/markdown.md)

**Rapportdisposition.**\
Et tidligere dispositionsoplæg for eksamensrapporten af ERL.\
[Dispositionsoplæg ↗️](https://digitalteknik.slotshaven.it/wordpress/eksamensprojekt-disposition-for-rapporten)

