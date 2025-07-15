---
title: Værktøjer
description: '- vi går ikke ned på tools'
---
{% for item in site.data.vaerktoejer %}
  <h2>{{ item.name }}</h2>
  <p>item.description</p>
  <p><a href="{{ item.link }}" /> {{ item.link }} </a></p>
  <p>Kategori: {{ item.category }}</p>
{% endfor %}
