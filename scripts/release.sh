#!/bin/bash
set -ex

npm run build
cd ./dist
LATEST_RELEASE_VERSION=$(npm info @apto/tslint-config-apto version | egrep "^[0-9]*\.[0-9]*\.[0-9]*$")

echo "Found latest version: $LATEST_RELEASE_VERSION"

# get last number in "1.2.3" (3 in this case) and increment it
NEXT_PATCH_VERSION=$((${LATEST_RELEASE_VERSION##*.} + 1))
# get everything before last . (1.2 in this case)
MAIN_MINOR_VERSION="${LATEST_RELEASE_VERSION%.*}"
# combine newly incremented version with original MAIN_MINOR VERSION (1.2.4 in this case)
NEW_FULL_VERSION="$MAIN_MINOR_VERSION.$NEXT_PATCH_VERSION"

DIST_TAR="apto-ionic-lib-$NEW_FULL_VERSION.tgz"
npm version "$NEW_FULL_VERSION"
npm pack
# current bug in npm@5 when trying to publish a .tgz
# install npm@4 and use it to publish to npm
# can be removed after https://github.com/npm/npm/issues/16723 is fixed
npm install npm@4
node_modules/.bin/npm publish $DIST_TAR --verbose

echo "Published assets to release $NEW_FULL_VERSION"
