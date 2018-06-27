import {  HttpBehaviorRequestInterface } from './http-optional-request.interface';

export class HttpRequestModal {
constructor(
    public actionName: string,
    public method: string,
    public payload: object| string,
    public apiBehaviorParams: HttpBehaviorRequestInterface,
) { }
}
