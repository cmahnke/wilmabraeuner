---
title:
type: picture
outputs:
  - html
  - qrcode
  - iiif-manifest
aliases:
  - /k/6/2/4f/
params:
  iiifContext: http://iiif.io/api/image/2/context.json
  related:
    isDerivedFrom: K6.2.3F
weight: 4
tags:
  - content:bonus
  - content:backside
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
---
