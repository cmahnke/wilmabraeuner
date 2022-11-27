#!/usr/bin/env bash

echo "Set SKIP_IIIF to something to disable generation of IIIF derivates"
./scripts/iiif.sh

#NPM dependencies
echo "Calling theme scripts"
for SCRIPT in $PWD/themes/projektemacher-base/scripts/init/*.sh ; do
    echo "Running $SCRIPT"
    bash "$SCRIPT"
    ERR=$?
    if [ $ERR -ne 0 ] ; then
        echo "Execution of '$SCRIPT' failed!"
        exit $ERR
    fi
done

#./scripts/svgo.sh
yarn run svgo --config ./config/svgo.config.js -i "./Source Files/logo/Gemeinde Sylt Logo.svg" -o "./static/images/gemeinde-logo.svg" --multipass
yarn run svgo --config ./config/svgo.config.js -i "./Source Files/footer2.svg" -o "./static/images/footer2.svg" --multipass


# Favicons
SOURCE="./Source Files/logo/Gemeinde Sylt Logo.svg" OPTIONS="-transparent white static/images/favicon-128.png" ./themes/projektemacher-base/scripts/favicon.sh

if [ -d ./scripts/post-build ] ; then
    echo "Don't forget to run post build scripts after 'hugo'!"
fi

# Favicons
# See https://gist.github.com/pfig/1808188
#convert "Source Files/Favicon/Favicon.psd[1]" -background 'rgba(255, 255, 255, .0)' -resize 300x300 -gravity center -extent 300x300  static/images/favicon.png
#convert static/images/favicon.png -resize 256x256 static/images/favicon-256.png
#convert static/images/favicon.png -resize 128x128 static/images/favicon-128.png
#convert static/images/favicon-128.png -resize 16x16 static/images/favicon-16.png
#convert static/images/favicon-128.png -resize 32x32 static/images/favicon-32.png
#convert static/images/favicon-128.png -resize 64x64 static/images/favicon-64.png
#convert static/images/favicon-16.png static/images/favicon-32.png static/images/favicon-64.png static/images/favicon-128.png -colors 256 static/images/favicon.ico
