/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { apiCategoryGet } from '../fn/category/api-category-get';
import { ApiCategoryGet$Params } from '../fn/category/api-category-get';
import { apiCategoryIdDelete } from '../fn/category/api-category-id-delete';
import { ApiCategoryIdDelete$Params } from '../fn/category/api-category-id-delete';
import { apiCategoryPatch } from '../fn/category/api-category-patch';
import { ApiCategoryPatch$Params } from '../fn/category/api-category-patch';
import { apiCategoryPost } from '../fn/category/api-category-post';
import { ApiCategoryPost$Params } from '../fn/category/api-category-post';

@Injectable({ providedIn: 'root' })
export class CategoryService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `apiCategoryGet()` */
  static readonly ApiCategoryGetPath = '/api/category';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCategoryGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCategoryGet$Response(params?: ApiCategoryGet$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiCategoryGet(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiCategoryGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCategoryGet(params?: ApiCategoryGet$Params, context?: HttpContext): Observable<void> {
    return this.apiCategoryGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiCategoryPost()` */
  static readonly ApiCategoryPostPath = '/api/category';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCategoryPost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCategoryPost$Response(params?: ApiCategoryPost$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiCategoryPost(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiCategoryPost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCategoryPost(params?: ApiCategoryPost$Params, context?: HttpContext): Observable<void> {
    return this.apiCategoryPost$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiCategoryPatch()` */
  static readonly ApiCategoryPatchPath = '/api/category';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCategoryPatch()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCategoryPatch$Response(params?: ApiCategoryPatch$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiCategoryPatch(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiCategoryPatch$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCategoryPatch(params?: ApiCategoryPatch$Params, context?: HttpContext): Observable<void> {
    return this.apiCategoryPatch$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiCategoryIdDelete()` */
  static readonly ApiCategoryIdDeletePath = '/api/category/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCategoryIdDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCategoryIdDelete$Response(params: ApiCategoryIdDelete$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiCategoryIdDelete(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiCategoryIdDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCategoryIdDelete(params: ApiCategoryIdDelete$Params, context?: HttpContext): Observable<void> {
    return this.apiCategoryIdDelete$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
