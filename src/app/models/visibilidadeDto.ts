export class VisibilidadeSonhoDto{
  Id: string;
  Visibilidade: string;

  tipoVisbibilidade = {
    Publica: "PUBLICA",
    Privada: "PRIVADA"
  }

  getVisibilidade(hash): string{
   
    return hash == this.tipoVisbibilidade.Publica ? "Publica" : "Privada";
  }

  ehPrivada(hash): boolean {
    return hash == "Privada";//this.tipoVisbibilidade.Privada;
  }
}
// export interface VisibilidadeSonhoDto{
//   Id: string,
//   Visibilidade: string
// }
