---
title: Test-side
published: true
permalink: /test
author: ERL
---
<p align="right"><img src="logo.png" width="200"></p>

# {{ page.title }}
{% include footer.html %}

<ul>
  {% for pages in site.test %}
    <li>
      <h2>{{ pages.name }}</h2>
      <p>{{ pages.author }}</p>
      <p>{{ pages.url }}</p>
    </li>
  {% endfor %}
</ul>

