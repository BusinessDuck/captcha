:loop
taskkill /f /im chrome.exe /t
timeout /t 3
start chrome.exe --args --allow-file-access-from-files --ignore-certificate-errors --disable-application-cache -–media-cache-size=1 -–disk-cache-size=1 -- "%1"
timeout /t 300
taskkill /f /im chrome.exe /t
timeout /t 3
goto loop
