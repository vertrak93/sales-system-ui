/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { apiVendorProductIdDelete } from '../fn/vendor-product/api-vendor-product-id-delete';
import { ApiVendorProductIdDelete$Params } from '../fn/vendor-product/api-vendor-product-id-delete';
import { apiVendorProductPatch } from '../fn/vendor-product/api-vendor-product-patch';
import { ApiVendorProductPatch$Params } from '../fn/vendor-product/api-vendor-product-patch';
import { apiVendorProductPost } from '../fn/vendor-product/api-vendor-product-post';
import { ApiVendorProductPost$Params } from '../fn/vendor-product/api-vendor-product-post';

@Injectable({ providedIn: 'root' })
export class VendorProductService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `apiVendorProductPost()` */
  static readonly ApiVendorProductPostPath = '/api/vendor/product';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiVendorProductPost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiVendorProductPost$Response(params?: ApiVendorProductPost$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiVendorProductPost(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiVendorProductPost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiVendorProductPost(params?: ApiVendorProductPost$Params, context?: HttpContext): Observable<void> {
    return this.apiVendorProductPost$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiVendorProductPatch()` */
  static readonly ApiVendorProductPatchPath = '/api/vendor/product';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiVendorProductPatch()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiVendorProductPatch$Response(params?: ApiVendorProductPatch$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiVendorProductPatch(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiVendorProductPatch$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiVendorProductPatch(params?: ApiVendorProductPatch$Params, context?: HttpContext): Observable<void> {
    return this.apiVendorProductPatch$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiVendorProductIdDelete()` */
  static readonly ApiVendorProductIdDeletePath = '/api/vendor/product/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiVendorProductIdDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiVendorProductIdDelete$Response(params: ApiVendorProductIdDelete$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiVendorProductIdDelete(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiVendorProductIdDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiVendorProductIdDelete(params: ApiVendorProductIdDelete$Params, context?: HttpContext): Observable<void> {
    return this.apiVendorProductIdDelete$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
