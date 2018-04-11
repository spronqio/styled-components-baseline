#!/usr/bin/env sh

cd ../../../
git add packages/styled-components-baseline-examples/out/*
git commit -m "Added examples pages"
git subtree push --prefix packages/styled-components-baseline-examples/out origin gh-pages
cd -
