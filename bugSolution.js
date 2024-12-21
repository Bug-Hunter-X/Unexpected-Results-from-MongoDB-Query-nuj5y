```javascript
const query = {
  name: 'John Doe',
  age: { $gte: 30 }
};

db.collection('users').find(query).toArray((err, users) => {
  if (err) throw err;
  console.log(users);
});
```