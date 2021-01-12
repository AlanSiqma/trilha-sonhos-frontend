export class VisibilidadeSonhoDto{
  Id: string;
  Visibilidade: string;

  tipoVisbibilidade = {
    Publica: "5ff5d43d2228e8f54125e6bc",
    Privada: "5ff5d45f2228e8f54125e6bd"
  }

  getVisibilidade(hash): string{
    return hash == this.tipoVisbibilidade.Publica ? "Publica" : "Privada";
  }

  ehPrivada(hash): boolean {
    return hash == this.tipoVisbibilidade.Privada;
  }
}
// export interface VisibilidadeSonhoDto{
//   Id: string,
//   Visibilidade: string
// }
