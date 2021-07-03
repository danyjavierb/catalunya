const db = require("./config/db");

const getUsers = async () => {
  try {
    const users = await db.query(`SELECT * from usuarios`, {
      type: db.QueryTypes.SELECT,
    });
    console.log(users);
  } catch (error) {
    console.log(error.message);
  }
};

const getUserById = async (id) => {
  try {
    const user = await db.query(`SELECT * FROM usuarios WHERE id =:idParam`, {
      replacements: { idParam: id },
      type: db.QueryTypes.SELECT,
    });
    console.log(user);
  } catch (error) {
    console.log(error.message);
  }
};

const getUserByCorreoContrasena = async (correo, contrasena) => {
  try {
    const user = await db.query(
      `SELECT * FROM usuarios WHERE correo=:correoParam AND contrasena=:conParam`,
      {
        replacements: { correoParam: correo, conParam: contrasena },
        type: db.QueryTypes.SELECT,
      }
    );
    console.log(user);
  } catch (error) {
    console.log(error.message);
  }
};
getUserByCorreoContrasena("danyjavierb@gmail.com", "password123");
