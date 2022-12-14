---
title:
type: picture
outputs:
  - html
  - qrcode
  - iiif
aliases:
  - /k/6/2/3f/
iiifContext: http://iiif.io/api/image/2/context.json
resources:
- src: "front.jxl"
  name: front
  params:
    iiif: front/info.json
    hint: non-paged
- src: "back.jxl"
  name: back
  params:
    iiif: back/info.json
    hint: non-paged
- src: "cover.jxl"
  name: cover
  params:
    iiif: cover/info.json
    hint: non-paged
---
