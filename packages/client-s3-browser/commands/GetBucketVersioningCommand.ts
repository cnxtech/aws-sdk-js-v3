import * as __aws_sdk_bucket_endpoint_middleware from "@aws-sdk/bucket-endpoint-middleware";
import * as __aws_sdk_middleware_header_default from "@aws-sdk/middleware-header-default";
import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetBucketVersioning } from "../model/GetBucketVersioning";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetBucketVersioningInput } from "../types/GetBucketVersioningInput";
import { GetBucketVersioningOutput } from "../types/GetBucketVersioningOutput";
import { S3ResolvedConfiguration } from "../S3Configuration";
export * from "../types/GetBucketVersioningInput";
export * from "../types/GetBucketVersioningOutput";
export * from "../types/GetBucketVersioningExceptionsUnion";

export class GetBucketVersioningCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetBucketVersioningInput,
      OutputTypesUnion,
      GetBucketVersioningOutput,
      S3ResolvedConfiguration,
      Blob
    > {
  readonly model = GetBucketVersioning;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetBucketVersioningInput,
    GetBucketVersioningOutput,
    Blob
  >();

  constructor(readonly input: GetBucketVersioningInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: S3ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetBucketVersioningInput,
    GetBucketVersioningOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };
    stack.add(
      __aws_sdk_bucket_endpoint_middleware.bucketEndpointMiddleware({
        forcePathStyle: configuration.forcePathStyle,
        preformedBucketEndpoint: configuration.bucketEndpoint,
        useAccelerateEndpoint: configuration.useAccelerateEndpoint,
        useDualstackEndpoint: configuration.useDualstackEndpoint
      }),
      {
        step: "build",
        priority: 0
      }
    );
    stack.add(
      __aws_sdk_middleware_header_default.headerDefault({
        "Content-Type": "application/octet-stream"
      }),
      {
        step: "build",
        priority: -50,
        tags: { "Content-Type": true }
      }
    );
    return stack.resolve(
      handler<GetBucketVersioningInput, GetBucketVersioningOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
