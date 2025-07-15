---
title: Værktøjer
description: '- vi går ikke ned på tools'
---
{% for item in site.data.vaerktoejer %}
  <section>
    <h2>{{ item.name }}</h2>
    <p>{{ item.description }}</p>
    <p><a href="{{ item.link }}" target="_blank" rel="noopener">{{ item.link }} ↗️</a></p>
    <p><strong>Kategori:</strong> {{ item.category }}</p>
  </section>
{% endfor %}