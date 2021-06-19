const estudiantes = require("./estudiantes");

const middlewareLogger = (req, res, next) => {
  const { method, path, query, body, params } = req;

  console.log(
    ` METHOD:${method} - PATH:${path} - BODY:${JSON.stringify(
      body
    )} - QUERY:${JSON.stringify(query)} - PARAMS:${JSON.stringify(params)}`
  );
  next();
};

const middlewareBodyEstudiantes = (req, res, next) => {
  if (!req.body.nombre || !req.body.pais || !req.body.edad) {
    res.status(400).json({ error: "nombre,pais, y edad son obligatorios" });
  } else {
    next();
  }
};

const middlewareExistePais = (req, res, next) => {
  const paisParam = req.params.pais;
  const paises = estudiantes.map((est) => est.pais);

  if (paises.includes(paisParam)) {
    next();
  } else {
    res.status(400);
    res.json({ error: `ningun estudiante es de ${paisParam} ` });
  }
};

const validarIdMiddleware = (req, res, next) => {
  const idParam = parseInt(req.params.id);
  if (isNaN(idParam)) {
    res.status(400).json({ error: `id debe ser un numero` });
  }

  const idsActuales = estudiantes.map((est) => est.id);

  if (idsActuales.includes(idParam)) {
    next();
  } else {
    res.status(400);
    res.json({ error: `ningun tiene id ${idParam} ` });
  }
};

module.exports = {
  middlewareBodyEstudiantes,
  middlewareExistePais,
  middlewareLogger,
  validarIdMiddleware,
};
