#!/usr/bin/env bash

IMAGES=$(find content -name '*.svg')

for IMAGE in $IMAGES
do
    IMAGE_PREFIX=$(basename $IMAGE .svg)
    TMP_FILE=${IMAGE_PREFIX}.tmp

    echo "Processing $IMAGE..."
    yarn run svgo --config ./config/svgo.config.js -i "$IMAGE" -o "$TMP_FILE" --multipass
    rm "$IMAGE"
    mv "$TMP_FILE" "$IMAGE"

done
