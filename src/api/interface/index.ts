
export interface Result {
  code: string,
  msg: string
}

export interface ResultData<T = any> extends Result {
  data?: T
}


export namespace Login {
  export interface ReqLoginForm {
		username: string;
		password: string;
	}

  export interface ResLogin {
    access_token: string
  }

  export interface ResAuthButtons {
    [propName: string]: any
  }
}

export namespace Menu {
  export interface MenuOptions {
		path: string;
		title: string;
		icon?: string;
		isLink?: string;
		close?: boolean;
		children?: MenuOptions[];
	}
}
