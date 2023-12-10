/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { apiSubcategoryGet } from '../fn/sub-category/api-subcategory-get';
import { ApiSubcategoryGet$Params } from '../fn/sub-category/api-subcategory-get';
import { apiSubcategoryIdDelete } from '../fn/sub-category/api-subcategory-id-delete';
import { ApiSubcategoryIdDelete$Params } from '../fn/sub-category/api-subcategory-id-delete';
import { apiSubcategoryPatch } from '../fn/sub-category/api-subcategory-patch';
import { ApiSubcategoryPatch$Params } from '../fn/sub-category/api-subcategory-patch';
import { apiSubcategoryPost } from '../fn/sub-category/api-subcategory-post';
import { ApiSubcategoryPost$Params } from '../fn/sub-category/api-subcategory-post';

@Injectable({ providedIn: 'root' })
export class SubCategoryService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `apiSubcategoryGet()` */
  static readonly ApiSubcategoryGetPath = '/api/subcategory';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiSubcategoryGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiSubcategoryGet$Response(params?: ApiSubcategoryGet$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiSubcategoryGet(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiSubcategoryGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiSubcategoryGet(params?: ApiSubcategoryGet$Params, context?: HttpContext): Observable<void> {
    return this.apiSubcategoryGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiSubcategoryPost()` */
  static readonly ApiSubcategoryPostPath = '/api/subcategory';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiSubcategoryPost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiSubcategoryPost$Response(params?: ApiSubcategoryPost$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiSubcategoryPost(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiSubcategoryPost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiSubcategoryPost(params?: ApiSubcategoryPost$Params, context?: HttpContext): Observable<void> {
    return this.apiSubcategoryPost$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiSubcategoryPatch()` */
  static readonly ApiSubcategoryPatchPath = '/api/subcategory';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiSubcategoryPatch()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiSubcategoryPatch$Response(params?: ApiSubcategoryPatch$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiSubcategoryPatch(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiSubcategoryPatch$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiSubcategoryPatch(params?: ApiSubcategoryPatch$Params, context?: HttpContext): Observable<void> {
    return this.apiSubcategoryPatch$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiSubcategoryIdDelete()` */
  static readonly ApiSubcategoryIdDeletePath = '/api/subcategory/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiSubcategoryIdDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiSubcategoryIdDelete$Response(params: ApiSubcategoryIdDelete$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiSubcategoryIdDelete(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiSubcategoryIdDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiSubcategoryIdDelete(params: ApiSubcategoryIdDelete$Params, context?: HttpContext): Observable<void> {
    return this.apiSubcategoryIdDelete$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
