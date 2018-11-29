export interface Login {
  rows: [{
    id: number,
    email: string,
    password: string
  }];
  respuesta: string;
}