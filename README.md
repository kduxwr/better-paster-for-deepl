# better-paster-for-deepl
 
## Generate icon
     
```bash
 python3 scripts/generate_icon.py
```

## Debug
     
```bash
open -na "Google Chrome" --args  --disable-gpu --disable-software-rasterizer --load-extension=$PWD/src --user-data-dir=$(mktemp -d -t chrome_profile)
```

```
chrome://extensions/
```
    
## Zip

```bash
zip -r src.zip src
```
