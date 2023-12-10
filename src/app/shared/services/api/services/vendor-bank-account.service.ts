/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { apiVendorBankAccountIdDelete } from '../fn/vendor-bank-account/api-vendor-bank-account-id-delete';
import { ApiVendorBankAccountIdDelete$Params } from '../fn/vendor-bank-account/api-vendor-bank-account-id-delete';
import { apiVendorBankAccountPatch } from '../fn/vendor-bank-account/api-vendor-bank-account-patch';
import { ApiVendorBankAccountPatch$Params } from '../fn/vendor-bank-account/api-vendor-bank-account-patch';
import { apiVendorBankAccountPost } from '../fn/vendor-bank-account/api-vendor-bank-account-post';
import { ApiVendorBankAccountPost$Params } from '../fn/vendor-bank-account/api-vendor-bank-account-post';

@Injectable({ providedIn: 'root' })
export class VendorBankAccountService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `apiVendorBankAccountPost()` */
  static readonly ApiVendorBankAccountPostPath = '/api/vendor/bank-account';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiVendorBankAccountPost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiVendorBankAccountPost$Response(params?: ApiVendorBankAccountPost$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiVendorBankAccountPost(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiVendorBankAccountPost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiVendorBankAccountPost(params?: ApiVendorBankAccountPost$Params, context?: HttpContext): Observable<void> {
    return this.apiVendorBankAccountPost$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiVendorBankAccountPatch()` */
  static readonly ApiVendorBankAccountPatchPath = '/api/vendor/bank-account';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiVendorBankAccountPatch()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiVendorBankAccountPatch$Response(params?: ApiVendorBankAccountPatch$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiVendorBankAccountPatch(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiVendorBankAccountPatch$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiVendorBankAccountPatch(params?: ApiVendorBankAccountPatch$Params, context?: HttpContext): Observable<void> {
    return this.apiVendorBankAccountPatch$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiVendorBankAccountIdDelete()` */
  static readonly ApiVendorBankAccountIdDeletePath = '/api/vendor/bank-account/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiVendorBankAccountIdDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiVendorBankAccountIdDelete$Response(params: ApiVendorBankAccountIdDelete$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiVendorBankAccountIdDelete(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiVendorBankAccountIdDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiVendorBankAccountIdDelete(params: ApiVendorBankAccountIdDelete$Params, context?: HttpContext): Observable<void> {
    return this.apiVendorBankAccountIdDelete$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
