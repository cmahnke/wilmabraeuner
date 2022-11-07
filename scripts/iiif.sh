#!/usr/bin/env bash

IMAGES=$(find content -maxdepth 4 -name '*.jpg' -o -name '*.jxl') ./themes/projektemacher-base/scripts/iiif.sh
