import { AxiosError } from "axios";

export const USERS_SLICE_ALIAS = "users";

export interface IUserItem {
  id: string;
  name: string;
  company: string;
}

export interface IUsersReducer {
  users: any;
  loading: boolean;
  error: AxiosError | null;
}

export interface IPayloadUsers {
  id: string;
  name: string;
  nameCompany: string;
}
