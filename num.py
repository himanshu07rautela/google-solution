# 1. c = a^3 + b^3
a = 2
b = 3
c = a**3 + b**3
print(c)

# 2. c = (a + b)(a^2 - ab + b^2)  
a = 1
b = 2
c = (a + b)*(a**2 - a*b + b**2)
print(c)

# 3. c = (2a^4 + (4b^2-6))%5
a = 2
b = 3 
c = (2*a**4 + (4*b**2-6))%5
print(c)

# 4. c = (3/a^2 - 3b//5) - 6
a = 2
b = 5
c = (3/a**2 - 3*b//5) - 6
print(c)

# 5. d = a^2+b^2+c^2-2ab-2ac+2bc
a = 3
b = 4
c = 5
d = a**2 + b**2 + c**2 - 2*a*b - 2*a*c + 2*b*c
print(d)
