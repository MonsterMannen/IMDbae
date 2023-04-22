NAME=IMDBae

chrome_zip:
	cd chrome && zip -r ../$(NAME)_chrome.zip *


firefox_zip:
	cd firefox && zip -r ../$(NAME)_firefox.zip *


edge_zip:
	cd chrome && zip -r ../$(NAME)_edge.zip *
