---
title: "Vorlage: Deckblatt eines Kalenders"
outputs:
  - html
  - qrcode
  - iiif-manifest
aliases:
  - /k/14/2/1f/
params:
  iiifContext: http://iiif.io/api/image/2/context.json
  itemType: picture
weight: 1
resources:
- src: "front.jxl"
  name: front
  params:
    iiif: front/info.json
    hint: non-paged
---
