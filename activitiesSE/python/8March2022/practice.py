x = [1, 2, [3, 4, 5], 6, 7] 
print (x[2])
print (x[2][1])

a = '123'
b = int(a)
print(a,b)

p = 'hello'
print(list(a))
print(set(a))
print(tuple(a))

names = ['Alice', 'Bob', 'Craig', 'Diana', 'Eric'] 
names.append("Sia")
print(names)
names.insert(1, "Nikki")
print(names)
names.remove("Bob")
print(names) 

# import datetime
# dt = datetime.datetime.strptime("2016-04-15T08:27:18-0500", "%Y-%m-%dT%H:%M:%S%z")
# print(dt)

# import dateutil.parser
# dte = dateutil.parser.parse("2016-04-15T08:27:18-0500")
# print(dte)

from datetime import datetime, timedelta
now = datetime.now()
then = datetime(2016, 5, 23)
delta = now-then
print(delta.days)
print(delta.seconds)

import datetime
today = datetime.date.today()
print('Today:', today)
yesterday = today - datetime.timedelta(days=1)
print('Yesterday:', yesterday)
tomorrow = today + datetime.timedelta(days=1)
print('Tomorrow:', tomorrow)
print('Time between tomorrow and yesterday:', tomorrow - yesterday)

from dateutil.parser import parse
dts = parse("Today is January 1, 2047 at 8:21:00AM", fuzzy=True) 
print(dts)

print({1, 2, 3, 4}.symmetric_difference({2, 3, 5}))

print({1, 2} >= {1, 2, 3})
print({1, 2} <= {1, 2, 3})

setA = {'a','b','b','c'}
print(setA)

import math 
import cmath
print(math.log(5))
print(math.log1p(5))
print(cmath.log10(100))

print(60 ^ 30)
print(60 & 30)
print(60 | 30)
print(60 >> 3)

aa = 0b001
aa &= 0b010
print(aa)

a, b, c, d = 2, 3, 5, 7
print(a ** (b + c))