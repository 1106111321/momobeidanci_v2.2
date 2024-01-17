
@echo off
set /a i=0
:LoopStart
  echo loop %i%
  set /a i+=1

  rem git add *
  git commit -m "%date% %time%: Updated By test"
  git push
  rem exit

  if %i% leq 100 goto LoopStart


