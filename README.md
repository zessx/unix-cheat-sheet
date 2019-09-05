Unix Cheat Sheet
================

What is UCS?
------------
UCS (Unix Cheat Sheet) is a quick way to find the unix command you're looking for, searching by its name, its purpose or by keywords.  
It has been thinked and provided as a helper, nothing more.

What is not UCS?
----------------
UCS is not a documentation.

How to create an UCS Chrome search engine?
------------------------------------------
1. Right click on Chrome Omnibox
2. Choose "Modify search engines"
3. Add a new search engine using `unix` and `https://work.smarchal.com/unix-cheat-sheet?s=%s` for keyword and URL
4. Open a new tab, and type `unix cd`!

Want to improve UCS?
--------------------
UCS is not finished, and will never be.  
Feel free to open [issues](https://github.com/zessx/unix-cheat-sheet/issues) if there are commands you would like to see added to UCS. Please provide these informations in your issue:

- the requested command [with specified parameters](#what-is-not-ucs)
- the description, at least in english
- eventual keywords

Development
--------------------
UCS use Vue CLI, therefore the following commands are available:  
```sh
yarn install
yarn serve
yarn build
yarn test
yarn lint
```
