::@echo off
::关闭回显，不显示正在执行的批处理命令及执行的结果;

@echo on
::打开回显，显示正在执行的批处理命令及执行的结果;
git pull	
::同步远程仓库，不同步可能会无法推送更新；
git remote -v
git status
git add .
git status
git commit -m %1
:: %1指代输入的第二个参数，命令行以空格来分割参数
git status
git push origin master