#!/bin/sh

set -e

CTX_PATH="$(dirname $(realpath $0))"

$CTX_PATH/../themes/projektemacher-base/scripts/github/jxl-0.11.1.sh
$CTX_PATH/../themes/projektemacher-base/scripts/github/setup-dependencies.sh
$CTX_PATH/../themes/projektemacher-base/scripts/github/python-dependencies.sh
$CTX_PATH/../themes/projektemacher-base/scripts/github/docker-images.sh
$CTX_PATH/../themes/projektemacher-base/scripts/github/setup-inkscape.sh
$CTX_PATH/../themes/projektemacher-base/scripts/github/dart-sass.sh
