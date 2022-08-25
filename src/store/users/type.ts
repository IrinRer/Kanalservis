import { AxiosError } from "axios";

export const USERS_SLICE_ALIAS = "users";

export interface IUsersReducer {
  id: string;
  name: string;
  company: string;
  loading: boolean;
  error: AxiosError | null;
}
