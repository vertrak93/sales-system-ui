/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { apiTelephonyGet } from '../fn/telephony/api-telephony-get';
import { ApiTelephonyGet$Params } from '../fn/telephony/api-telephony-get';
import { apiTelephonyIdDelete } from '../fn/telephony/api-telephony-id-delete';
import { ApiTelephonyIdDelete$Params } from '../fn/telephony/api-telephony-id-delete';
import { apiTelephonyPatch } from '../fn/telephony/api-telephony-patch';
import { ApiTelephonyPatch$Params } from '../fn/telephony/api-telephony-patch';
import { apiTelephonyPost } from '../fn/telephony/api-telephony-post';
import { ApiTelephonyPost$Params } from '../fn/telephony/api-telephony-post';

@Injectable({ providedIn: 'root' })
export class TelephonyService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `apiTelephonyGet()` */
  static readonly ApiTelephonyGetPath = '/api/telephony';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiTelephonyGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiTelephonyGet$Response(params?: ApiTelephonyGet$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiTelephonyGet(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiTelephonyGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiTelephonyGet(params?: ApiTelephonyGet$Params, context?: HttpContext): Observable<void> {
    return this.apiTelephonyGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiTelephonyPost()` */
  static readonly ApiTelephonyPostPath = '/api/telephony';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiTelephonyPost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiTelephonyPost$Response(params?: ApiTelephonyPost$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiTelephonyPost(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiTelephonyPost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiTelephonyPost(params?: ApiTelephonyPost$Params, context?: HttpContext): Observable<void> {
    return this.apiTelephonyPost$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiTelephonyPatch()` */
  static readonly ApiTelephonyPatchPath = '/api/telephony';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiTelephonyPatch()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiTelephonyPatch$Response(params?: ApiTelephonyPatch$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiTelephonyPatch(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiTelephonyPatch$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiTelephonyPatch(params?: ApiTelephonyPatch$Params, context?: HttpContext): Observable<void> {
    return this.apiTelephonyPatch$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiTelephonyIdDelete()` */
  static readonly ApiTelephonyIdDeletePath = '/api/telephony/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiTelephonyIdDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiTelephonyIdDelete$Response(params: ApiTelephonyIdDelete$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiTelephonyIdDelete(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiTelephonyIdDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiTelephonyIdDelete(params: ApiTelephonyIdDelete$Params, context?: HttpContext): Observable<void> {
    return this.apiTelephonyIdDelete$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
