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
      resource: { db: "mongodb", collection: "" },
      actions: ["find", "insert", "update", "remove"]
    }
  ],
  roles: []
});

db.createUser({
  user: "mylocaluser",
  pwd: "mylocalpass",
  roles: [
    { role: "applicationUserRole", db: "mongodb" }
  ]
});

db.createUser({
  user: "mylocaluserrw",
  pwd: "mylocalpass",
  roles: [
    {
      role: "readWrite",
      db: "mongodb"
    }
  ]
});
