import json 

with open('USERS.json', 'r', encoding='utf-8') as f:
    users = json.load(f)
print(users)