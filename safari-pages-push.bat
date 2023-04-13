@echo off
IF %1=="" (
    echo No parameters have been provided.
    echo Setting comment to Gh-Pages Push
    git add dist -f
    git commit -m "Gh-Pages Push"
    echo Pushing to Github Pages ...
    git subtree push --prefix dist git@github.com:jamclean23/id-that-tree-safari.git gh-pages
    echo Done.
) ELSE (
    echo Setting comment to "%1"
    set "comment="%1""
    git add dist -f
    git commit -m %1
    echo Pushing to Github Pages ...
    git subtree push --prefix dist git@github.com:jamclean23/id-that-tree-safari.git gh-pages
    echo Done.
)
