---
title: DDU
description: '- en kombo af leg og læring på HTX'
published: yes
permalink: /om
---
Teknikfaget Digitalt Design og Udvikling - eller kort: _DDU_ - er et 3.g's A-fag på HTX.

## Om faget
I DDU arbejder man projektorienteret i længere forløb. Der er dermed mindre tavleundervining end i andre fag. Al projektarbejde foregår i grupper. Hvert forløb afsluttes med at der afleveres et produkt med tilhørende rapport. 

Det afsluttende eksamensprojekt er også gruppebaseret. Her får man 80 timer til at udvikle et færdigt produkt som afleveres med eksamensrapporten, hvorefter rapport og produkt forsvares til en mundtlig eksamen. Der gives en samlet karakter for rapport, produkt og mundtlig eksamination. 

[Læs mere om eksamen ↗️](sider/eksamen.md)

## Slotshaven

## Læreplan
Undervisningen følger Undervisningsministeriets læreplaner som kan findes her.

{% for item in site.data.links %}
  {% if item.source == "uvm" %}
    <section>
      <h2>{{ item.name }}</h2>
      <p>{{ item.description }}</p>
      <p><a href="{{ item.link }}" target="_blank" rel="noopener">PDF ↗️</a></p>
    </section>
  {% endif %}
{% endfor %}

Samme liste som skrevet i markdown:

{% for item in site.data.links %}
{% if item.source == "uvm" %}

### {{ item.name }}

{{ item.description }}

[PDF ↗️]({{ item.link }}){:target="_blank" rel="noopener"}

{% endif %}
{% endfor %}