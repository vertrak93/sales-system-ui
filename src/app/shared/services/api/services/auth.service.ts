/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { apiAuthPost$Json } from '../fn/auth/api-auth-post-json';
import { ApiAuthPost$Json$Params } from '../fn/auth/api-auth-post-json';
import { apiAuthPost$Plain } from '../fn/auth/api-auth-post-plain';
import { ApiAuthPost$Plain$Params } from '../fn/auth/api-auth-post-plain';
import { apiAuthRefreshTokenPost$Json } from '../fn/auth/api-auth-refresh-token-post-json';
import { ApiAuthRefreshTokenPost$Json$Params } from '../fn/auth/api-auth-refresh-token-post-json';
import { apiAuthRefreshTokenPost$Plain } from '../fn/auth/api-auth-refresh-token-post-plain';
import { ApiAuthRefreshTokenPost$Plain$Params } from '../fn/auth/api-auth-refresh-token-post-plain';
import { ApiResponseDto } from '../models/api-response-dto';

@Injectable({ providedIn: 'root' })
export class AuthService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `apiAuthPost()` */
  static readonly ApiAuthPostPath = '/api/auth';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAuthPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAuthPost$Plain$Response(params?: ApiAuthPost$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiResponseDto>> {
    return apiAuthPost$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiAuthPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAuthPost$Plain(params?: ApiAuthPost$Plain$Params, context?: HttpContext): Observable<ApiResponseDto> {
    return this.apiAuthPost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiResponseDto>): ApiResponseDto => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAuthPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAuthPost$Json$Response(params?: ApiAuthPost$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiResponseDto>> {
    return apiAuthPost$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiAuthPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAuthPost$Json(params?: ApiAuthPost$Json$Params, context?: HttpContext): Observable<ApiResponseDto> {
    return this.apiAuthPost$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiResponseDto>): ApiResponseDto => r.body)
    );
  }

  /** Path part for operation `apiAuthRefreshTokenPost()` */
  static readonly ApiAuthRefreshTokenPostPath = '/api/auth/refresh-token';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAuthRefreshTokenPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAuthRefreshTokenPost$Plain$Response(params?: ApiAuthRefreshTokenPost$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiResponseDto>> {
    return apiAuthRefreshTokenPost$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiAuthRefreshTokenPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAuthRefreshTokenPost$Plain(params?: ApiAuthRefreshTokenPost$Plain$Params, context?: HttpContext): Observable<ApiResponseDto> {
    return this.apiAuthRefreshTokenPost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiResponseDto>): ApiResponseDto => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAuthRefreshTokenPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAuthRefreshTokenPost$Json$Response(params?: ApiAuthRefreshTokenPost$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiResponseDto>> {
    return apiAuthRefreshTokenPost$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiAuthRefreshTokenPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAuthRefreshTokenPost$Json(params?: ApiAuthRefreshTokenPost$Json$Params, context?: HttpContext): Observable<ApiResponseDto> {
    return this.apiAuthRefreshTokenPost$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiResponseDto>): ApiResponseDto => r.body)
    );
  }

}
