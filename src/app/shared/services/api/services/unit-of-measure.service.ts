/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { apiUnitofmeasureGet } from '../fn/unit-of-measure/api-unitofmeasure-get';
import { ApiUnitofmeasureGet$Params } from '../fn/unit-of-measure/api-unitofmeasure-get';
import { apiUnitofmeasureIdDelete } from '../fn/unit-of-measure/api-unitofmeasure-id-delete';
import { ApiUnitofmeasureIdDelete$Params } from '../fn/unit-of-measure/api-unitofmeasure-id-delete';
import { apiUnitofmeasurePatch } from '../fn/unit-of-measure/api-unitofmeasure-patch';
import { ApiUnitofmeasurePatch$Params } from '../fn/unit-of-measure/api-unitofmeasure-patch';
import { apiUnitofmeasurePost } from '../fn/unit-of-measure/api-unitofmeasure-post';
import { ApiUnitofmeasurePost$Params } from '../fn/unit-of-measure/api-unitofmeasure-post';

@Injectable({ providedIn: 'root' })
export class UnitOfMeasureService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `apiUnitofmeasureGet()` */
  static readonly ApiUnitofmeasureGetPath = '/api/unitofmeasure';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUnitofmeasureGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUnitofmeasureGet$Response(params?: ApiUnitofmeasureGet$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiUnitofmeasureGet(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiUnitofmeasureGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUnitofmeasureGet(params?: ApiUnitofmeasureGet$Params, context?: HttpContext): Observable<void> {
    return this.apiUnitofmeasureGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiUnitofmeasurePost()` */
  static readonly ApiUnitofmeasurePostPath = '/api/unitofmeasure';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUnitofmeasurePost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUnitofmeasurePost$Response(params?: ApiUnitofmeasurePost$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiUnitofmeasurePost(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiUnitofmeasurePost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUnitofmeasurePost(params?: ApiUnitofmeasurePost$Params, context?: HttpContext): Observable<void> {
    return this.apiUnitofmeasurePost$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiUnitofmeasurePatch()` */
  static readonly ApiUnitofmeasurePatchPath = '/api/unitofmeasure';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUnitofmeasurePatch()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUnitofmeasurePatch$Response(params?: ApiUnitofmeasurePatch$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiUnitofmeasurePatch(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiUnitofmeasurePatch$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUnitofmeasurePatch(params?: ApiUnitofmeasurePatch$Params, context?: HttpContext): Observable<void> {
    return this.apiUnitofmeasurePatch$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiUnitofmeasureIdDelete()` */
  static readonly ApiUnitofmeasureIdDeletePath = '/api/unitofmeasure/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUnitofmeasureIdDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUnitofmeasureIdDelete$Response(params: ApiUnitofmeasureIdDelete$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiUnitofmeasureIdDelete(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiUnitofmeasureIdDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUnitofmeasureIdDelete(params: ApiUnitofmeasureIdDelete$Params, context?: HttpContext): Observable<void> {
    return this.apiUnitofmeasureIdDelete$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
