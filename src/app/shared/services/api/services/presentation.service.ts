/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { apiPresentationGet } from '../fn/presentation/api-presentation-get';
import { ApiPresentationGet$Params } from '../fn/presentation/api-presentation-get';
import { apiPresentationIdDelete } from '../fn/presentation/api-presentation-id-delete';
import { ApiPresentationIdDelete$Params } from '../fn/presentation/api-presentation-id-delete';
import { apiPresentationPatch } from '../fn/presentation/api-presentation-patch';
import { ApiPresentationPatch$Params } from '../fn/presentation/api-presentation-patch';
import { apiPresentationPost } from '../fn/presentation/api-presentation-post';
import { ApiPresentationPost$Params } from '../fn/presentation/api-presentation-post';

@Injectable({ providedIn: 'root' })
export class PresentationService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `apiPresentationGet()` */
  static readonly ApiPresentationGetPath = '/api/presentation';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiPresentationGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPresentationGet$Response(params?: ApiPresentationGet$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiPresentationGet(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiPresentationGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPresentationGet(params?: ApiPresentationGet$Params, context?: HttpContext): Observable<void> {
    return this.apiPresentationGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiPresentationPost()` */
  static readonly ApiPresentationPostPath = '/api/presentation';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiPresentationPost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiPresentationPost$Response(params?: ApiPresentationPost$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiPresentationPost(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiPresentationPost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiPresentationPost(params?: ApiPresentationPost$Params, context?: HttpContext): Observable<void> {
    return this.apiPresentationPost$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiPresentationPatch()` */
  static readonly ApiPresentationPatchPath = '/api/presentation';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiPresentationPatch()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiPresentationPatch$Response(params?: ApiPresentationPatch$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiPresentationPatch(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiPresentationPatch$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiPresentationPatch(params?: ApiPresentationPatch$Params, context?: HttpContext): Observable<void> {
    return this.apiPresentationPatch$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiPresentationIdDelete()` */
  static readonly ApiPresentationIdDeletePath = '/api/presentation/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiPresentationIdDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPresentationIdDelete$Response(params: ApiPresentationIdDelete$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiPresentationIdDelete(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiPresentationIdDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPresentationIdDelete(params: ApiPresentationIdDelete$Params, context?: HttpContext): Observable<void> {
    return this.apiPresentationIdDelete$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
