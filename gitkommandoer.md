
## inital commit

git init 
git commit -m "inital" 
git branch -m master
git remote add origing url-til-git-repo 
git push -u -origin master

## add local dev 

git checkout -b dev 

## legge til filer i dev, commit og push 

touch hiof.js 
commit -ma dev
push --set-upstream origin dev 


