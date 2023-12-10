/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { apiBrandGet } from '../fn/brand/api-brand-get';
import { ApiBrandGet$Params } from '../fn/brand/api-brand-get';
import { apiBrandIdDelete } from '../fn/brand/api-brand-id-delete';
import { ApiBrandIdDelete$Params } from '../fn/brand/api-brand-id-delete';
import { apiBrandPatch } from '../fn/brand/api-brand-patch';
import { ApiBrandPatch$Params } from '../fn/brand/api-brand-patch';
import { apiBrandPost } from '../fn/brand/api-brand-post';
import { ApiBrandPost$Params } from '../fn/brand/api-brand-post';

@Injectable({ providedIn: 'root' })
export class BrandService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `apiBrandGet()` */
  static readonly ApiBrandGetPath = '/api/brand';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiBrandGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiBrandGet$Response(params?: ApiBrandGet$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiBrandGet(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiBrandGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiBrandGet(params?: ApiBrandGet$Params, context?: HttpContext): Observable<void> {
    return this.apiBrandGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiBrandPost()` */
  static readonly ApiBrandPostPath = '/api/brand';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiBrandPost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiBrandPost$Response(params?: ApiBrandPost$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiBrandPost(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiBrandPost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiBrandPost(params?: ApiBrandPost$Params, context?: HttpContext): Observable<void> {
    return this.apiBrandPost$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiBrandPatch()` */
  static readonly ApiBrandPatchPath = '/api/brand';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiBrandPatch()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiBrandPatch$Response(params?: ApiBrandPatch$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiBrandPatch(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiBrandPatch$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiBrandPatch(params?: ApiBrandPatch$Params, context?: HttpContext): Observable<void> {
    return this.apiBrandPatch$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiBrandIdDelete()` */
  static readonly ApiBrandIdDeletePath = '/api/brand/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiBrandIdDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiBrandIdDelete$Response(params: ApiBrandIdDelete$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiBrandIdDelete(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiBrandIdDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiBrandIdDelete(params: ApiBrandIdDelete$Params, context?: HttpContext): Observable<void> {
    return this.apiBrandIdDelete$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
