---
title: Pril Keitum
type: picture
outputs:
  - html
  - qrcode
  - iiif-manifest
aliases:
  - /k/7/2/5f/
params:
  iiifContext: http://iiif.io/api/image/2/context.json
weight: 5
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
