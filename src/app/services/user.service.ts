import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";
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

  public login(username, password): Observable<UserPayload> {
    const loginCall = this.api.sendRequest<UserPayload>(
      "post",
      `${environment.backendUrl}/api/login`,
      {
        username,
        password
      }
    );
    loginCall.subscribe(userPayload => {
      console.log("recieved payload:", userPayload);
      this.api.token = userPayload.token;
      this.user = userPayload.user;
    });
    return loginCall;
  }
}
