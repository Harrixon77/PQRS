/**
 * @swagger
 * components:
 *   schemas:
 *
 *     Register:
 *       type: object
 *
 *       required:
 *         - names
 *         - correoInstitucional
 *         - sede
 *         - programa
 *         - password
 *         - role
 *
 *       properties:
 *
 *         names:
 *           type: string
 *           example: Juan David
 *
 *         correoInstitucional:
 *           type: string
 *           example: juan1234@itc.edu.co
 *
 *         sede:
 *           type: string
 *           example: Medellín
 *
 *         programa:
 *           type: string
 *           example: Ingeniería de Sistemas
 *
 *         password:
 *           type: string
 *           example: "123456"
 *
 *         role:
 *           type: string
 *           enum:
 *             - student
 *             - admin
 *             - support
 *           example: student
 *
 *
 *     Login:
 *       type: object
 *
 *       required:
 *         - correoInstitucional
 *         - password
 *
 *       properties:
 *
 *         correoInstitucional:
 *           type: string
 *           example: juan1234@itc.edu.co
 *
 *         password:
 *           type: string
 *           example: "123456"
 */