/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { apiVendorAddressIdDelete } from '../fn/vendor-address/api-vendor-address-id-delete';
import { ApiVendorAddressIdDelete$Params } from '../fn/vendor-address/api-vendor-address-id-delete';
import { apiVendorAddressPatch } from '../fn/vendor-address/api-vendor-address-patch';
import { ApiVendorAddressPatch$Params } from '../fn/vendor-address/api-vendor-address-patch';
import { apiVendorAddressPost } from '../fn/vendor-address/api-vendor-address-post';
import { ApiVendorAddressPost$Params } from '../fn/vendor-address/api-vendor-address-post';

@Injectable({ providedIn: 'root' })
export class VendorAddressService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `apiVendorAddressPost()` */
  static readonly ApiVendorAddressPostPath = '/api/vendor/address';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiVendorAddressPost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiVendorAddressPost$Response(params?: ApiVendorAddressPost$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiVendorAddressPost(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiVendorAddressPost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiVendorAddressPost(params?: ApiVendorAddressPost$Params, context?: HttpContext): Observable<void> {
    return this.apiVendorAddressPost$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiVendorAddressPatch()` */
  static readonly ApiVendorAddressPatchPath = '/api/vendor/address';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiVendorAddressPatch()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiVendorAddressPatch$Response(params?: ApiVendorAddressPatch$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiVendorAddressPatch(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiVendorAddressPatch$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiVendorAddressPatch(params?: ApiVendorAddressPatch$Params, context?: HttpContext): Observable<void> {
    return this.apiVendorAddressPatch$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiVendorAddressIdDelete()` */
  static readonly ApiVendorAddressIdDeletePath = '/api/vendor/address/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiVendorAddressIdDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiVendorAddressIdDelete$Response(params: ApiVendorAddressIdDelete$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiVendorAddressIdDelete(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiVendorAddressIdDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiVendorAddressIdDelete(params: ApiVendorAddressIdDelete$Params, context?: HttpContext): Observable<void> {
    return this.apiVendorAddressIdDelete$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
