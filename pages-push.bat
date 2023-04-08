@echo off
IF "%1"=="" (
    echo No parameters have been provided.
    set "default=GH-Pages push"
    echo Setting comment to %default%
    git add dist -f
    git commit -m "%default%"
    echo Pushing to Github Pages ...
    git subtree push --prefix dist origin gh-pages
    echo Done.
) ELSE (
    echo Setting comment to %1
    git add dist -f
    git commit -m "%1"
    echo Pushing to Github Pages ...
    git subtree push --prefix dist origin gh-pages
    echo Done.
)
