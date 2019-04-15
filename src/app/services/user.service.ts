import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";
import { ApiRequestService } from "./api-request.service";

export class User {
  constructor(
    public id: number,
    public first: string,
    public last: string,
    public username: string
  ) {}
}

export type UserPayload = {
  user: User;
  token: string;
};

@Injectable({
  providedIn: "root"
})
export class UserService {
  public user: User;

  constructor(private api: ApiRequestService) {
    this.user = null;
  }

  async login(username, password) {
    const { user, token } = await this.api
      .sendRequest<UserPayload>("post", `${environment.backendUrl}/api/login`, {
        username,
        password
      })
      .toPromise();
    this.api.token = token;
    this.user = user;
    return user;
  }
}
