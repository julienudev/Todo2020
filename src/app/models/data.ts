// export interface Data {
//   utilisateur: string;
//   password: string;
//   todoListes: string[];

// }

export class Data {
  utilisateur: string;
  password: string;
  todoListes: {
    Liste: Liste[];
  };

  constructor(utilisateur: string, password: string, Liste: Liste[]) {
    this.utilisateur = utilisateur;
    this.password = password;
    this.todoListes.Liste = Liste;
  }
}

export class Liste {
  name: string;
  TodoItems: string[];
}
export class TodoItems {
  todoTitle: string;
}
