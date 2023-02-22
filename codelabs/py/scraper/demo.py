import urllib.request

with urllib.request.urlopen("http://www.wandb.com") as fp:
    mybytes = fp.read()

mystr = mybytes.decode("utf8")
print(mystr[:5000])
