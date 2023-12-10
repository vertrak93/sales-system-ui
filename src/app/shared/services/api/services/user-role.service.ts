/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { apiUserRoleIdDelete } from '../fn/user-role/api-user-role-id-delete';
import { ApiUserRoleIdDelete$Params } from '../fn/user-role/api-user-role-id-delete';
import { apiUserRolePost } from '../fn/user-role/api-user-role-post';
import { ApiUserRolePost$Params } from '../fn/user-role/api-user-role-post';
import { apiUserRoleUseridGet } from '../fn/user-role/api-user-role-userid-get';
import { ApiUserRoleUseridGet$Params } from '../fn/user-role/api-user-role-userid-get';

@Injectable({ providedIn: 'root' })
export class UserRoleService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `apiUserRoleUseridGet()` */
  static readonly ApiUserRoleUseridGetPath = '/api/user/role/{userid}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserRoleUseridGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserRoleUseridGet$Response(params: ApiUserRoleUseridGet$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiUserRoleUseridGet(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiUserRoleUseridGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserRoleUseridGet(params: ApiUserRoleUseridGet$Params, context?: HttpContext): Observable<void> {
    return this.apiUserRoleUseridGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiUserRolePost()` */
  static readonly ApiUserRolePostPath = '/api/user/role';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserRolePost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUserRolePost$Response(params?: ApiUserRolePost$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiUserRolePost(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiUserRolePost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUserRolePost(params?: ApiUserRolePost$Params, context?: HttpContext): Observable<void> {
    return this.apiUserRolePost$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiUserRoleIdDelete()` */
  static readonly ApiUserRoleIdDeletePath = '/api/user/role/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserRoleIdDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserRoleIdDelete$Response(params: ApiUserRoleIdDelete$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiUserRoleIdDelete(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiUserRoleIdDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserRoleIdDelete(params: ApiUserRoleIdDelete$Params, context?: HttpContext): Observable<void> {
    return this.apiUserRoleIdDelete$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
