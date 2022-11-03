export const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

/**
 * La contraseña debe 8 caracteres como mínimo y almenos un número y una letra en mayúscula.
 */
export const passwordRegex =
  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
