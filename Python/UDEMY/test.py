""" 
with open("fruits.txt") as myfile:
    content = myfile.read()
newText = for i in content if i < 90

print(newText)
"""

# with open('bear.txt', 'r') as f:
#     print(f.read()[:90])


def foo(char,path1):
    with open(path1, 'r') as myfile:
        data=myfile.read().replace('\n', ' ')
        result = data.split(' ').count(char)
        print(result)

foo("a","bear.txt")