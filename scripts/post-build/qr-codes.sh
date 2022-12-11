#!/usr/bin/env bash

python themes/projektemacher-base/scripts/generate-qr-codes.py -i "./Source Files/icons/" -b circle
python themes/projektemacher-base/scripts/generate-qr-codes.py -i "./Source Files/icons/" -b circle -u -o qrcode.pdf
