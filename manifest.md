
make an extension with a database that does word replacement in the browsers for easy vocabulary injection

Possible future issues:
1. words can get double-replaced, such that ad->bd, then bd->cd, so it is impossible to get bd


TODO:

Task 1: Make an extension template
2: make it do word replacements
2.5: make it do an array of word replacements
3: give it a configuration file of word replacements
4. Make sure it can do utf-characters
5. Give it a snazzy logo
6. Upload to github
---- the done line ------------
8. give it resilient wordlists (json fucks up if wrongly edited)
6. make it color the replaced text
7. make it give a drop-down dialogue with the original text or a definition
9. give an override to revert to text
10. give it subset wordlists which can be toggled on or off
12. GLITCH: using "body" in a key will screw up the search results in startpage




Future capabilities:

Make it toggle on/off for websites
Make it toggle on/off for links
Give it a better config/replacement file system, as I am doing the shoddy "JSON as JS file" method
