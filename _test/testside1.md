---
layout: default
title: Test-side
published: true
permalink: /test
author: ERL
---
<p align="right"><img src="assets/images/logo.png" width="200"></p>

# {{ page.title }}

## Test af links

### HTML: liste
Loop gennem alle sider i collection.\
<ul>
  {% for htmlpage in site.test %}
    <li>
      <h2>{{ htmlpage.title }}</h2>
      <p>{{ htmlpage.author }}</p>
      <p><a href="{{ htmlpage.url | relative_url }}">{{ htmlpage.title }}</a></p>
    </li> 
  {% endfor %}
</ul>

### Markdown: direkte link
Direkte link til side med markdown\

[Link til side 2]({% link _test/testside2.md %})

### Markdown: liste
Markdown liste
{% for mdpage in site.test %}

- {{ mdpage.title }}
- {{ mdpage.author }}
- [Link]({{ mdpage.url | relative_url }})

    
{% endfor %}

## Liquid
Når man indsætter liquid, skal det **IKKE** indrykkes.
Indrykket liquid betyder at markdown fortolker det som **KODE**

Således: 
{% for item in site.data.links %}
{% if item.source == "uvm" %}
  <section>
    <h2>{{ item.name }}</h2>
    <p>{{ item.description }}</p>
    <p><a href="{{ item.url }}" target="_blank" rel="noopener">PDF ↗️</a></p>
  </section>
{% endif %}
{% endfor %}

Samme liste skrevet i markdown:

{% for item in site.data.links %}
{% if item.source == "uvm" %}

### {{ item.name }}

{{ item.description }}

[PDF ↗️]({{ item.url }}){:target="_blank" rel="noopener"}

{% endif %}
{% endfor %}