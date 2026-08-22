#!/usr/bin/env bash

set -e -o pipefail

CTX_PATH="$(dirname $(realpath $0))"

$CTX_PATH/../themes/projektemacher-base/scripts/github/jxl-0.12.0.sh
$CTX_PATH/../themes/projektemacher-base/scripts/github/setup-dependencies.sh
$CTX_PATH/../themes/projektemacher-base/scripts/github/python-dependencies.sh
$CTX_PATH/../themes/projektemacher-base/scripts/github/docker-images.sh
$CTX_PATH/../themes/projektemacher-base/scripts/github/setup-inkscape.sh
$CTX_PATH/../themes/projektemacher-base/scripts/github/dart-sass.sh
