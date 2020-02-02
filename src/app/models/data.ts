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
}

export class Liste {
  name: string;
  TodoItems: string[];
}
export class TodoItems {
  oneItem: string;
}
