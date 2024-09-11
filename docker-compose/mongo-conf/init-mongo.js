// db.createUser({
//     user: process.env.MONGO_USER,
//     pwd: process.env.MONGO_PASSWORD,
//     roles: [
//       {
//         role: "readWrite",
//         db: process.env.MONGO_INITDB_DATABASE
//       }
//     ]
//   });
db.createRole({
  role: "applicationUserRole",
  privileges: [
    {
      resource: { db: "todoapp", collection: "" },
      actions: ["find", "insert", "update", "remove"]
    }
  ],
  roles: []
});

db.createUser({
  user: "todoappuser",
  pwd: "todoapppass",
  roles: [
    { role: "applicationUserRole", db: "todoapp" }
  ]
});

db.createUser({
  user: "myuser",
  pwd: "mypassword",
  roles: [
    {
      role: "readWrite",
      db: "mydatabase"
    }
  ]
});
