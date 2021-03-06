import { _UnmarshalledFunctionConfiguration } from "./_FunctionConfiguration";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListVersionsByFunctionOutput shape
 */
export interface ListVersionsByFunctionOutput {
  /**
   * <p>A string, present if there are more function versions.</p>
   */
  NextMarker?: string;

  /**
   * <p>A list of Lambda function versions.</p>
   */
  Versions?: Array<_UnmarshalledFunctionConfiguration>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
