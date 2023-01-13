call npm run build
cd dist
git init
git remote add build https://github.com/Team-Team/vinhack-debugger-build.git
git add .
git commit -m "build" 
git push --force build master



