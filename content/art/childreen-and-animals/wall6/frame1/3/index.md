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
weight: 3
tags:
  - content:bonus
  - content:backside
  - feature:imageEditing
related:
  isSourceFor: K6.2.4F
  isDerivedFrom: K6.2.2F
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
