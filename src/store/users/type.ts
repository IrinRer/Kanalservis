import { AxiosError } from 'axios';

export const USERS_SLICE_ALIAS = 'users';

export interface IUserItem {
  id: number,
  name: string,
  username: string,
  email: string,
  address: {
      street: string,
      suite: string,
      city: string,
      zipcode: string,
      geo: {
        lat: string,
        lng: string
      }
    },
    phone: string,
    website: string,
    company: {
      name: string,
      catchPhrase: string,
      bs: string
    }
}

export interface IUsersReducer {
  users: Array<IUserItem>;
  loading: boolean;
  error: AxiosError | null;
}
