:loop
taskkill /f /im chrome.exe /t
timeout /t 3
start chrome.exe --args --disable-session-crashed-bubble --incognito --allow-file-access-from-files --disable-application-cache --media-cache-size=1 --disk-cache-size=1 --user-data-dir=ChromeUserData/ https://faucet.raiblockscommunity.net/form.php https://faucet.raiblockscommunity.net/form.php https://faucet.raiblockscommunity.net/form.php https://faucet.raiblockscommunity.net/form.php
timeout /t 300
taskkill /f /im chrome.exe /t
timeout /t 3
goto loop
