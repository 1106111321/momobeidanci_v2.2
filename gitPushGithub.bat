
@echo off

rem https://www.python100.com/html/111789.html

set /a i=0
:LoopStart
  echo loop %i%
  set /a i+=1

  rem git add *
  rem git commit -m "%date% %time%: Updated By test"
  git remote -v
  git push origin "master"
  rem exit

  if %i% leq 100 goto LoopStart


