l =[]
open_file = open("commonwords.txt", "r")
for w in open_file:
    w = w.rstrip("\n")
    word = w
    l.append(word)
print(l)
