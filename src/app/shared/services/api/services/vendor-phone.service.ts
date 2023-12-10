/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { apiVendorPhoneIdDelete } from '../fn/vendor-phone/api-vendor-phone-id-delete';
import { ApiVendorPhoneIdDelete$Params } from '../fn/vendor-phone/api-vendor-phone-id-delete';
import { apiVendorPhonePatch } from '../fn/vendor-phone/api-vendor-phone-patch';
import { ApiVendorPhonePatch$Params } from '../fn/vendor-phone/api-vendor-phone-patch';
import { apiVendorPhonePost } from '../fn/vendor-phone/api-vendor-phone-post';
import { ApiVendorPhonePost$Params } from '../fn/vendor-phone/api-vendor-phone-post';

@Injectable({ providedIn: 'root' })
export class VendorPhoneService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `apiVendorPhonePost()` */
  static readonly ApiVendorPhonePostPath = '/api/vendor/phone';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiVendorPhonePost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiVendorPhonePost$Response(params?: ApiVendorPhonePost$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiVendorPhonePost(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiVendorPhonePost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiVendorPhonePost(params?: ApiVendorPhonePost$Params, context?: HttpContext): Observable<void> {
    return this.apiVendorPhonePost$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiVendorPhonePatch()` */
  static readonly ApiVendorPhonePatchPath = '/api/vendor/phone';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiVendorPhonePatch()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiVendorPhonePatch$Response(params?: ApiVendorPhonePatch$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiVendorPhonePatch(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiVendorPhonePatch$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiVendorPhonePatch(params?: ApiVendorPhonePatch$Params, context?: HttpContext): Observable<void> {
    return this.apiVendorPhonePatch$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiVendorPhoneIdDelete()` */
  static readonly ApiVendorPhoneIdDeletePath = '/api/vendor/phone/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiVendorPhoneIdDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiVendorPhoneIdDelete$Response(params: ApiVendorPhoneIdDelete$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiVendorPhoneIdDelete(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiVendorPhoneIdDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiVendorPhoneIdDelete(params: ApiVendorPhoneIdDelete$Params, context?: HttpContext): Observable<void> {
    return this.apiVendorPhoneIdDelete$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
