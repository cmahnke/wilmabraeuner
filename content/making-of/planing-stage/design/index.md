---
title: 'Design'
date: 2022-11-02T18:30:07+02:00
layout: documentation
outputs:
  - html
  - qrcode
---

# Ideen zur Gestaltung

## Plakate

Hier sind die Texte zur Präsentation in der Ausstellung gemeint, keine "Werbeplakate" um auf die Ausstellung aufmerksam zu machen.

## Webseite

Eine Webseite ist für die Präsentation von Audioinhalten und zusätzlichen Texten notwendig. Da sie in der Ausstellung genutzt werden soll, muss sie auch für mobile Endgeräte optimiert sein.

Da die Themen die Blöcke der Ausstellung bilden, sollte sich das im Design niederschlagen, ein Vorbild kann das Theme [Twenty Twenty](https://github.com/themefisher/twenty-twenty-hugo) sein. Allerdings weniger eckig. Ebenfalls können darauf aufbauend abstrakte grafische Elemente erzeugt werden, die die verschiedenen Themenbereiche (s.u. "Farben") repräsentieren.

## Schriftarten

### Analyse
Für „Wilma Bräuner, die Leica, das Meer ... und ihr Insel-Expreß“ wurde [Helvetica](https://de.wikipedia.org/wiki/Helvetica_(Schriftart)) benutzt.
Für „Leuchtendes Sylt“ kommt [Melior](https://www.typografie.info/3/Schriften/fonts.html/melior-r618/) von [Hermann Zapf](https://de.wikipedia.org/wiki/Hermann_Zapf) zum Einsatz.

Mögliche Alternativen sind:
 * Zapf Elliptical 711 (Dies ist defacto die gleiche Schrift)
 * [Latino Regular](https://fonts.adobe.com/fonts/latino-urw)
 * Marseille (Serial)
 * Edison Book
 * ggf. [GFS Didot]|(https://fonts.google.com/specimen/GFS+Didot)
 * [weitere](https://www.fontshop.com/families/melior/similar)

Eine Kombination bider Schriften bietet sich an, da die Helvetica auf der [Akzidenz-Grotesk](https://de.wikipedia.org/wiki/Akzidenz-Grotesk) basiert und diese Kombinationen nicht ungewöhnlich sind. Weitere [Kombinationen](https://fontsinuse.com/typefaces/3357/melior).

Schmuckschriften (z.B. für „Sylt“) oder die auf den Umschlägen können (noch) nicht identifiziert werden, können aber auch als Vektorgrafik eingebettet werden. So kann das Wort "Sylt" im Fließtext eingebunden werden, die stört den Lesefluss, sorgt aber für eine individuelle Note.

{{< figure src="./das-braeuner-buch-sylt-fotos-einer-malerin.png" title="Schnappschuss Online-Antiquariat" caption="Umschlag von \"Das Bräuner-Buch Sylt - Fotos einer Malerin\", 60er" link="https://www.buchfreund.de/de/d/p/103491836/das-braeuner-buch-sylt-fotos-einer-malerin" target="_blank" >}}

### Beispiel Schmuckschrift

Als Beispiel dien der Schriftzug "Sylt" in zwei Varianten, die erste Variante ist dabei weniger geeignet, da die feinen Linien in kleineren Skalierungen nicht so gut zur Geltung kommen.

{{< figure src="./Sylt2.jpg" title="Scan" caption="Titelseite von \"Leuchtendes Sylt - Das Bräuner Farbfotobuch\", 1965" >}}

{{< figure src="./Sylt2.svg" title="Vektorgrafik" caption="Die Vektorgrafik müsste noch weiter geglättet werden." >}}

{{< figure src="./Sylt.jpg" title="Scan" caption="Buchdeckel von \"Sylt: Bildbuch einer Insel\", 1950er." >}}

{{< figure src="./Sylt.svg" title="Vektorgrafik" caption="Die Vektorgrafik müsste noch weiter geglättet werden." >}}

### Freie Alternativen

 * Für Helvetica: [Roboto](https://fonts.google.com/specimen/Roboto)
 * Für Melior: [Ledger](https://fonts.google.com/specimen/Ledger)

### Ersatzschriften
Da es ggf. nicht genug Schriftschnitte gibt, müssen weitere Schriften zu den Klassen oben (mit und ohne Serifen) Ersatzschriften gesucht werden

#### Serifenschrift
* [Cormorant Garamond](https://fonts.google.com/specimen/Cormorant+Garamond) oder [Cormorant](https://fonts.google.com/specimen/Cormorant/)
* [Noto Serif Display](https://fonts.google.com/noto/specimen/Noto+Serif+Display?query=Noto+Serif+Display)

### Dritte Schrift
Um den Bereich "Archiv" typografisch abzusetzen wird eine eigene Schrift gewählt, die an eine Schreibmaschine erinnert.
 * Schreibmaschine / Archiv: [Sono](https://fonts.google.com/specimen/Sono)

# Farben

Mehrere Farbschemata sind denkbar:
 * Text Schwarz und Hintergrund Weiß für Print und Web
 * Text Schwarz, Hintergrund Beige bzw. hellgelb als Verweis auf altes Papier (Postkaten, Akten, Buchumschläge)

Weitere Gestaltungselemente (wie Rahmen, Bänder etc) in Varianten von Hellgelb bis braun. Als Kontrast blau (Meer), diese können dann auch den Themenbereichen zugeordnet werden, siehe Beispiel unten.

Prinzipiell sollten die Farben so gewählt sein, dass sie auch als Themenfarben funktionieren können.

## Beispiel
{{< figure src="./Cover.jpg" title="Quelle der Farben" caption="Umschlag von \"Leuchtendes Sylt - Das Bräuner Farbfotobuch\", 1965" >}}

Es kann auch ein anderes Bild zur Extraktion eines Farbthemas herangezogen werden.

***Beispielfarben***
  * #F5E2C8 Buchdekel {{< color-sample color="#F5E2C8" text="Buchdeckel" print="True" >}}
  * #260101 (Schatten) {{< color-sample color="#260101" text="Schatten" print="True" >}}
  * #F7DBA7 (Düne) {{< color-sample color="#f7dba7" text="Düne" print="True" >}}
  * #5D8094 (Meer) {{< color-sample color="#5D8094" text="Meer" print="True" >}}
  * #BDE3F2 (Himmel) {{< color-sample color="#BDE3F2" text="Himmel" print="True" >}}
  * #7C8C3F (Gras) {{< color-sample color="#7C8C3F" text="Gras" print="True" >}}

***Themenbereiche:***
* (Einleitung): Wird umdefiniert zu "Archivarischer Kontext" {{< color-sample color="#F5E2C8" text="Buchdeckel" >}}
* Lebensstationen {{< color-sample color="#D9B26A" text="Düne" >}}
* Künstlerisches Werk (war Fotografie, Zeichnungen und Malerei {{< color-sample color="#BDE3F2" text="Himmel" >}} und {{< color-sample color="#5D8094" text="Meer" >}}) Neue Farbe {{< color-sample color="#8DB2C3" text="Gemischtes Blau" >}}
* Engagement gegen Atlantis und für den Naturschutz {{< color-sample color="#7C8C3F" text="Gras" >}}

# Kacheln für die Navigation
Kacheln dienen der einfach erkennbaren Navigation, die Farben der einfachen Wiedererkennung. Die hier gezeigte Ansicht ist für Smartphones, dort werden die Kacheln nacheinander angezeigt, auf dem Desktop in einem 2x2 Raster.

Weitere geplante Anpassungen:
* Die Ränder werden noch geschärft
* Die Schriftfarbe wird je nach Hintergrund gewählt, um den Kontrast zu erhöhen.

## Himmel und Meer
{{< figure src="./Himmel-Meer.svg" title="Künstlerisches Werk" class="nav-tile" >}}
* Basisfarbe {{< color-sample color="#8DB2C3" text="Gemischtes Blau" >}}
* Meer
  * Basisfarbe {{< color-sample color="#5d8094" text="Meer" >}}
  * Heller {{< color-sample color="#7999ab" text="10% heller" >}}
* Himmel
  * Basisfarbe {{< color-sample color="#bde3f2" text="Himmel" >}}
  * Heller {{< color-sample color="#e8f5fa" text="10% heller" >}}

## Dünen
{{< figure src="./Dünen.svg" title="Lebensstationen" class="nav-tile" >}}
* Basisfarbe {{< color-sample color="#f7dba7" text="Düne" >}}
* Dukler {{< color-sample color="#f3c878" text="10% dunkler" >}}

## Gras
{{< figure src="./Gras.svg" title="Naturschutz" class="nav-tile" >}}
* Basisfarbe  {{< color-sample color="#7C8C3F" text="Gras" >}}
* Heller {{< color-sample color="#9baf4f" text="10% heller" >}}

## Archiv
{{< figure src="./Archiv.svg" title="Archiv" class="nav-tile" >}}
* Basisfarbe {{< color-sample color="#F5E2C8" text="Buchdeckel" >}}
* Heller {{< color-sample color="#f9edde" text="5% heller" >}}
* Dunkler {{< color-sample color="#edcb9d" text="10% dunkler" >}}

# Werkzeuge
* [Schriftidenfikation](https://www.myfonts.com/pages/whatthefont)
* [Freie Schriften]( https://www.fontspace.com/)
* [Farbvarianten](http://scg.ar-ch.org/)
* [Extraktion von Farbthemen](https://color.adobe.com/de/create/image)
* [Farbmischer](https://meyerweb.com/eric/tools/color-blend/#:::hex)
* [Icons im Vektorformat](https://github.com/FortAwesome/Font-Awesome/tree/6.x/svgs/solid)
* [Blindtext Generator](https://www.loremipsum.de/)
* [Visueller Schriftvergleich](http://sadah.github.io/sada-samplecode/FontsCompare/)
* [Schriftvergleich basierend auf Merkmalen (mit Beispiel "Melior" und "Garamond")](hhttp://www.identifont.com/differences?first=Garamond&second=Melior&q=Go)
* [Schriften als NPM Pakete](https://fontsource.org/)

## Sonstiges

### QR Codes

Die QR Codes können auch gefärbt und in gewissen Grenzen sogar in der Form angepasst werden. [Hier](https://www.qrcode-monkey.com/) ein Generator, der verschieden Varianten erlaubt.
In der Mitte können auch Grafiken platziert werden, so z.B. ein Lautsprechersymbol für Tonspuren.

#### Icons

* Tondokument / Oral History {{< figure src="./icons/comment.svg" class="icon-preview" >}} oder {{< figure src="./icons/volume-high.svg" class="icon-preview" >}}
* Textdokument / Link / Webseite {{< figure src="./icons/file-lines.svg" class="icon-preview" >}} oder {{< figure src="./icons/book-open.svg" class="icon-preview" >}}
* Karte {{< figure src="./icons/map-location-dot.svg" class="icon-preview" >}}
* Bilddokument {{< figure src="./icons/image.svg" class="icon-preview" >}} oder {{< figure src="./icons/magnifying-glass.svg" class="icon-preview" >}}
* Allgemeiner Hinweis auf Smartphone Inhalte  {{< figure src="./icons/mobile.svg" class="icon-preview" >}}

[Quelle](https://fontawesome.com/icons/)
[SVG Dateien](https://github.com/FortAwesome/Font-Awesome/tree/6.x/svgs/solid)

### Identifikation der Schiftarten
* Ein Scan in einer hohen Auflösung (600dpi)
* Ein Webdienst: https://www.myfonts.com/pages/whatthefont
* Dann Beurteilung der Ergebnisse, an Hand des zeitlichen Kontexts, da die Ergebnisse aus dem Schritt davor viele Schriften liefert, die es damals gar nicht gab, oder eher ungebräuchlich waren. Dabei helfen Schriftmusterbücher.

# Rahmen

## Fotokarton
* RGB: rgb(189, 197, 201)
* HTML: #bdc5c9
* HSL: hsl(200, 10%, 76%)

## Archivpapier
* HTML: #fdf6c8

## Links
* [Errechnung einer Durchschittsfarbe](https://matkl.github.io/average-color/)
