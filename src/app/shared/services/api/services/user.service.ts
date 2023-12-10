/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { apiUserChangePasswordPut } from '../fn/user/api-user-change-password-put';
import { ApiUserChangePasswordPut$Params } from '../fn/user/api-user-change-password-put';
import { apiUserGet } from '../fn/user/api-user-get';
import { ApiUserGet$Params } from '../fn/user/api-user-get';
import { apiUserIdDelete } from '../fn/user/api-user-id-delete';
import { ApiUserIdDelete$Params } from '../fn/user/api-user-id-delete';
import { apiUserPatch } from '../fn/user/api-user-patch';
import { ApiUserPatch$Params } from '../fn/user/api-user-patch';
import { apiUserPost } from '../fn/user/api-user-post';
import { ApiUserPost$Params } from '../fn/user/api-user-post';

@Injectable({ providedIn: 'root' })
export class UserService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `apiUserGet()` */
  static readonly ApiUserGetPath = '/api/user';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserGet$Response(params?: ApiUserGet$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiUserGet(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiUserGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserGet(params?: ApiUserGet$Params, context?: HttpContext): Observable<void> {
    return this.apiUserGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiUserPost()` */
  static readonly ApiUserPostPath = '/api/user';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserPost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUserPost$Response(params?: ApiUserPost$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiUserPost(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiUserPost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUserPost(params?: ApiUserPost$Params, context?: HttpContext): Observable<void> {
    return this.apiUserPost$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiUserPatch()` */
  static readonly ApiUserPatchPath = '/api/user';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserPatch()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUserPatch$Response(params?: ApiUserPatch$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiUserPatch(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiUserPatch$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUserPatch(params?: ApiUserPatch$Params, context?: HttpContext): Observable<void> {
    return this.apiUserPatch$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiUserIdDelete()` */
  static readonly ApiUserIdDeletePath = '/api/user/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserIdDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserIdDelete$Response(params: ApiUserIdDelete$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiUserIdDelete(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiUserIdDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserIdDelete(params: ApiUserIdDelete$Params, context?: HttpContext): Observable<void> {
    return this.apiUserIdDelete$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiUserChangePasswordPut()` */
  static readonly ApiUserChangePasswordPutPath = '/api/user/change-password';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserChangePasswordPut()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUserChangePasswordPut$Response(params?: ApiUserChangePasswordPut$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiUserChangePasswordPut(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiUserChangePasswordPut$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUserChangePasswordPut(params?: ApiUserChangePasswordPut$Params, context?: HttpContext): Observable<void> {
    return this.apiUserChangePasswordPut$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
