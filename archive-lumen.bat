@ECHO ON

del lumen-lesstif.zip
cd lumen-lesstif

git archive --format=zip master -o ..\lumen-lesstif.zip
