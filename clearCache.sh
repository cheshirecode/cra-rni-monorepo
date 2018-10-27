#!/usr/bin/env sh
watchman watch-del-all
rm -rf "$TMPDIR/react-*" "$TMPDIR/metro*" "$TMPDIR/haste-*"