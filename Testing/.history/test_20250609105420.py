

def hello(name):
    print("Hello " + name)

names = ["Bob", "Alice", "Eve"]

for name in map(hello,names):
    print(name)