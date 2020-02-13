export class Data {
  utilisateur: string;
  password: string;
  todoListes: string[];

  constructor(utilisateur: string, password: string, todoListes: string[]) {
    this.utilisateur = utilisateur;
    this.password = password;
    this.todoListes = todoListes;
  }
}

export class todoListes {
  name: string;
  elements: string[];
  constructor(name: string, elements: string[]) {
    this.name = name;
    this.elements = elements;
  }
}

// {
//   utilisateur: "julien",
//   password: "julien",
//   todoListes: [
//     {
//       name: "Devoir IPIiiiiiiiiiiiii",
//       elements: ["Apprendre Ajax", "Etudier Javascript"]
//     },
//     {
//       name: "Perso",
//       elements: ["Se lever", "Se doucher"]
//     }
//   ]
// }
