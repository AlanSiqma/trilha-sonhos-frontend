export interface User {

  id: string;
  user: string;
  urlPhoto: string;
  dreams: Dreams[];

}
export interface Dreams {

  id: string;
  description: string;
  private: boolean;

}

