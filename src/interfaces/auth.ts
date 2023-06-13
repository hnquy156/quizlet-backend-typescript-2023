export interface Register {
  username: string;
  password: string;
  repeat_password: string;
  name: string;
  email: string;
  phone?: string;
}

export interface Login {
  username: string;
  password: string;
}

export interface User {
  username?: string;
  password?: string;
  repeat_password?: string;
  name?: string;
  email?: string;
  phone?: string;
  token?: string;
}
