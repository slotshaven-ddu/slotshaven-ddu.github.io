---
title: Test-side
published: true
permalink: /test
author: ERL
---
<p align="right"><img src="logo.png" width="200"></p>

# {{ page.title }}
{% include footer.html %}

## Test af links

### HTML: Direkte link
Side i collection med "link"\
{% link _test/testside2.md %}

### HTML: liste
Loop gennem alle side i collection.\
<ul>
  {% for pages in site.test %}
    <li>
      <h2>{{ pages.title }}</h2>
      <p>{{ pages.author }}</p>
      <p>{% page.url %}</p>
    </li> 
  {% endfor %}
</ul>

### Markdown: direkte link
Direkte link til side med markdown\

[Link til side 2]({% link _test/testside2.md %})

### Markdown: liste
Markdown liste
{% for pages in site.test %}

- {{ pages.title }}
- {{ pages.author }}
- {% page.url %}
    
{% endfor %}