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

./scripts/svgo.sh

# Favicons
SOURCE="./Source Files/icons/favicon.svg" OPTIONS="-transparent white" ./themes/projektemacher-base/scripts/favicon.sh

if [ -d ./scripts/post-build ] ; then
    echo "Don't forget to run post build scripts after 'hugo'!"
fi
