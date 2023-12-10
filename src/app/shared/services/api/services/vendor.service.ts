/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { apiVendorGet } from '../fn/vendor/api-vendor-get';
import { ApiVendorGet$Params } from '../fn/vendor/api-vendor-get';
import { apiVendorIdDelete } from '../fn/vendor/api-vendor-id-delete';
import { ApiVendorIdDelete$Params } from '../fn/vendor/api-vendor-id-delete';
import { apiVendorIdGet } from '../fn/vendor/api-vendor-id-get';
import { ApiVendorIdGet$Params } from '../fn/vendor/api-vendor-id-get';
import { apiVendorIdProductGet } from '../fn/vendor/api-vendor-id-product-get';
import { ApiVendorIdProductGet$Params } from '../fn/vendor/api-vendor-id-product-get';
import { apiVendorPatch } from '../fn/vendor/api-vendor-patch';
import { ApiVendorPatch$Params } from '../fn/vendor/api-vendor-patch';
import { apiVendorPost } from '../fn/vendor/api-vendor-post';
import { ApiVendorPost$Params } from '../fn/vendor/api-vendor-post';

@Injectable({ providedIn: 'root' })
export class VendorService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `apiVendorGet()` */
  static readonly ApiVendorGetPath = '/api/vendor';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiVendorGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiVendorGet$Response(params?: ApiVendorGet$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiVendorGet(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiVendorGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiVendorGet(params?: ApiVendorGet$Params, context?: HttpContext): Observable<void> {
    return this.apiVendorGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiVendorPost()` */
  static readonly ApiVendorPostPath = '/api/vendor';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiVendorPost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiVendorPost$Response(params?: ApiVendorPost$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiVendorPost(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiVendorPost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiVendorPost(params?: ApiVendorPost$Params, context?: HttpContext): Observable<void> {
    return this.apiVendorPost$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiVendorPatch()` */
  static readonly ApiVendorPatchPath = '/api/vendor';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiVendorPatch()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiVendorPatch$Response(params?: ApiVendorPatch$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiVendorPatch(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiVendorPatch$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiVendorPatch(params?: ApiVendorPatch$Params, context?: HttpContext): Observable<void> {
    return this.apiVendorPatch$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiVendorIdGet()` */
  static readonly ApiVendorIdGetPath = '/api/vendor/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiVendorIdGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiVendorIdGet$Response(params: ApiVendorIdGet$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiVendorIdGet(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiVendorIdGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiVendorIdGet(params: ApiVendorIdGet$Params, context?: HttpContext): Observable<void> {
    return this.apiVendorIdGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiVendorIdDelete()` */
  static readonly ApiVendorIdDeletePath = '/api/vendor/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiVendorIdDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiVendorIdDelete$Response(params: ApiVendorIdDelete$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiVendorIdDelete(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiVendorIdDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiVendorIdDelete(params: ApiVendorIdDelete$Params, context?: HttpContext): Observable<void> {
    return this.apiVendorIdDelete$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiVendorIdProductGet()` */
  static readonly ApiVendorIdProductGetPath = '/api/vendor/{id}/product';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiVendorIdProductGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiVendorIdProductGet$Response(params: ApiVendorIdProductGet$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiVendorIdProductGet(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiVendorIdProductGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiVendorIdProductGet(params: ApiVendorIdProductGet$Params, context?: HttpContext): Observable<void> {
    return this.apiVendorIdProductGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
