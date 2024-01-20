
@echo off

rem https://www.python100.com/html/111789.html

set /a i=0
:LoopStart
  echo loop %i%
  set /a i+=1

  git commit -m "修改链接"
  git push origin "master"
  rem exit

  if %i% leq 1 goto LoopStart


