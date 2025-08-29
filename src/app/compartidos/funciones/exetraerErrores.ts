export function extraerErrores(obj: any): string[] {
  const error = obj.error.errors;

  let mensajesDeError: string[] = [];

  for (let llave in error) {
    let campo = llave;
    const mensajesConCampos = error[llave].map((mensaje: string) => `${campo}: ${mensaje}`);
    mensajesDeError = mensajesDeError.concat(mensajesConCampos);
  }
  return mensajesDeError;

}

export function extraerErroresIdentity(obj: any): string[] {
  let mensajesDeError: string[] = [];

  for (let i = 0; i < obj.error.length; i++) {
    const elemento = obj.error[i];
    mensajesDeError.push(elemento.description);
  }
  return mensajesDeError;
}
