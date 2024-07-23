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
  