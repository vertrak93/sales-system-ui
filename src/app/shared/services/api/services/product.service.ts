/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { apiProductGet } from '../fn/product/api-product-get';
import { ApiProductGet$Params } from '../fn/product/api-product-get';
import { apiProductIdDelete } from '../fn/product/api-product-id-delete';
import { ApiProductIdDelete$Params } from '../fn/product/api-product-id-delete';
import { apiProductIdGet } from '../fn/product/api-product-id-get';
import { ApiProductIdGet$Params } from '../fn/product/api-product-id-get';
import { apiProductIdVendorGet } from '../fn/product/api-product-id-vendor-get';
import { ApiProductIdVendorGet$Params } from '../fn/product/api-product-id-vendor-get';
import { apiProductPatch } from '../fn/product/api-product-patch';
import { ApiProductPatch$Params } from '../fn/product/api-product-patch';
import { apiProductPost } from '../fn/product/api-product-post';
import { ApiProductPost$Params } from '../fn/product/api-product-post';

@Injectable({ providedIn: 'root' })
export class ProductService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `apiProductGet()` */
  static readonly ApiProductGetPath = '/api/product';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiProductGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProductGet$Response(params?: ApiProductGet$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiProductGet(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiProductGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProductGet(params?: ApiProductGet$Params, context?: HttpContext): Observable<void> {
    return this.apiProductGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiProductPost()` */
  static readonly ApiProductPostPath = '/api/product';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiProductPost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiProductPost$Response(params?: ApiProductPost$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiProductPost(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiProductPost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiProductPost(params?: ApiProductPost$Params, context?: HttpContext): Observable<void> {
    return this.apiProductPost$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiProductPatch()` */
  static readonly ApiProductPatchPath = '/api/product';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiProductPatch()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiProductPatch$Response(params?: ApiProductPatch$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiProductPatch(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiProductPatch$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiProductPatch(params?: ApiProductPatch$Params, context?: HttpContext): Observable<void> {
    return this.apiProductPatch$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiProductIdGet()` */
  static readonly ApiProductIdGetPath = '/api/product/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiProductIdGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProductIdGet$Response(params: ApiProductIdGet$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiProductIdGet(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiProductIdGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProductIdGet(params: ApiProductIdGet$Params, context?: HttpContext): Observable<void> {
    return this.apiProductIdGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiProductIdDelete()` */
  static readonly ApiProductIdDeletePath = '/api/product/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiProductIdDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProductIdDelete$Response(params: ApiProductIdDelete$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiProductIdDelete(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiProductIdDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProductIdDelete(params: ApiProductIdDelete$Params, context?: HttpContext): Observable<void> {
    return this.apiProductIdDelete$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiProductIdVendorGet()` */
  static readonly ApiProductIdVendorGetPath = '/api/product/{id}/vendor';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiProductIdVendorGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProductIdVendorGet$Response(params: ApiProductIdVendorGet$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiProductIdVendorGet(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiProductIdVendorGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProductIdVendorGet(params: ApiProductIdVendorGet$Params, context?: HttpContext): Observable<void> {
    return this.apiProductIdVendorGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
