#!/usr/bin/env bash

#IMAGES=$(find 'Source Files' -name '*.svg')
#
#for IMAGE in $IMAGES
#do
#    IMAGE_PREFIX=$(basename $IMAGE .svg)
#    TMP_FILE=${IMAGE_PREFIX}.tmp
#
#    echo "Processing $IMAGE..."
#    yarn run svgo --config ./config/svgo.config.js -i "$IMAGE" -o "$TMP_FILE" --multipass
#    rm "$IMAGE"
#    mv "$TMP_FILE" "$IMAGE"
#
#done

yarn run svgo --config ./config/svgo.config.js -i "./Source Files/logo/Gemeinde Sylt Logo.svg" -o "./static/images/gemeinde-logo.svg" --multipass
yarn run svgo --config ./config/svgo.config.js -i "./Source Files/footer2.svg" -o "./static/images/footer2.svg" --multipass
yarn run svgo --config ./config/svgo.config.js -i "./Source Files/footer3.svg" -o "./static/images/footer3.svg" --multipass
yarn run svgo --config ./config/svgo.config.js -i "./Source Files/signature.svg" -o "./static/images/signature.svg" --multipass
yarn run svgo --config ./config/svgo.config.js -i "./Source Files/favicon.svg" -o "./static/images/favicon.svg" --multipass

# Content graphics
yarn run svgo --config ./config/svgo.config.js -i "./Source Files/tiles/Archiv.svg" -o "./content/archive/archive.svg" --multipass

yarn run svgo --config ./config/svgo.config.js -i "./Source Files/tiles/Dünen.svg" -o "./content/life/life.svg" --multipass

yarn run svgo --config ./config/svgo.config.js -i "./Source Files/tiles/Gras.svg" -o "./content/conservancy/conservancy.svg" --multipass

yarn run svgo --config ./config/svgo.config.js -i "./Source Files/tiles/Himmel-Meer.svg" -o "./content/art/art.svg" --multipass
