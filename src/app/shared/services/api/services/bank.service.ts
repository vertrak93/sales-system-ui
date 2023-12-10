/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { apiBankGet } from '../fn/bank/api-bank-get';
import { ApiBankGet$Params } from '../fn/bank/api-bank-get';
import { apiBankIdDelete } from '../fn/bank/api-bank-id-delete';
import { ApiBankIdDelete$Params } from '../fn/bank/api-bank-id-delete';
import { apiBankPatch } from '../fn/bank/api-bank-patch';
import { ApiBankPatch$Params } from '../fn/bank/api-bank-patch';
import { apiBankPost } from '../fn/bank/api-bank-post';
import { ApiBankPost$Params } from '../fn/bank/api-bank-post';

@Injectable({ providedIn: 'root' })
export class BankService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `apiBankGet()` */
  static readonly ApiBankGetPath = '/api/bank';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiBankGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiBankGet$Response(params?: ApiBankGet$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiBankGet(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiBankGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiBankGet(params?: ApiBankGet$Params, context?: HttpContext): Observable<void> {
    return this.apiBankGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiBankPost()` */
  static readonly ApiBankPostPath = '/api/bank';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiBankPost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiBankPost$Response(params?: ApiBankPost$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiBankPost(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiBankPost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiBankPost(params?: ApiBankPost$Params, context?: HttpContext): Observable<void> {
    return this.apiBankPost$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiBankPatch()` */
  static readonly ApiBankPatchPath = '/api/bank';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiBankPatch()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiBankPatch$Response(params?: ApiBankPatch$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiBankPatch(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiBankPatch$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiBankPatch(params?: ApiBankPatch$Params, context?: HttpContext): Observable<void> {
    return this.apiBankPatch$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiBankIdDelete()` */
  static readonly ApiBankIdDeletePath = '/api/bank/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiBankIdDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiBankIdDelete$Response(params: ApiBankIdDelete$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiBankIdDelete(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiBankIdDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiBankIdDelete(params: ApiBankIdDelete$Params, context?: HttpContext): Observable<void> {
    return this.apiBankIdDelete$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
