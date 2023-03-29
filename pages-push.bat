IF %1 =="" (
    set comment="GH-Pages Push"
) 
 (
    set comment=%1
)

git add dist -f
git commit -m %comment%
git subtree push --prefix dist origin gh-pages