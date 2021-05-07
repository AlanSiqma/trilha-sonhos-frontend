import { Trilha } from "./Trilhadto";

export interface SonhoDto{
  Id: string,
  Sonho: string,
  DescricaoSonho: string,
  Trilhas:Trilha[],
  Status: string,
  Visibilidade: string,
  IdSonhador: string
}
