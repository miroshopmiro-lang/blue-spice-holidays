import urllib.request
import re
import json

url = 'https://www.google.com/search?q=blue+spice+holidays'
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'})

try:
    html = urllib.request.urlopen(req).read().decode('utf-8', errors='ignore')
    imgs = re.findall(r'https://lh\d+\.googleusercontent\.com/p/[A-Za-z0-9_-]+', html)
    unique_imgs = list(set(imgs))
    print(f"Found {len(unique_imgs)} Google Photo URLs:")
    for img in unique_imgs:
        print(img)
except Exception as e:
    print('Error:', e)
