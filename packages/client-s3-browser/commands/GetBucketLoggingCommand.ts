import * as __aws_sdk_bucket_endpoint_middleware from "@aws-sdk/bucket-endpoint-middleware";
import * as __aws_sdk_middleware_header_default from "@aws-sdk/middleware-header-default";
import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetBucketLogging } from "../model/GetBucketLogging";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetBucketLoggingInput } from "../types/GetBucketLoggingInput";
import { GetBucketLoggingOutput } from "../types/GetBucketLoggingOutput";
import { S3ResolvedConfiguration } from "../S3Configuration";
export * from "../types/GetBucketLoggingInput";
export * from "../types/GetBucketLoggingOutput";
export * from "../types/GetBucketLoggingExceptionsUnion";

export class GetBucketLoggingCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetBucketLoggingInput,
      OutputTypesUnion,
      GetBucketLoggingOutput,
      S3ResolvedConfiguration,
      Blob
    > {
  readonly model = GetBucketLogging;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetBucketLoggingInput,
    GetBucketLoggingOutput,
    Blob
  >();

  constructor(readonly input: GetBucketLoggingInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: S3ResolvedConfiguration
  ): __aws_sdk_types.Handler<GetBucketLoggingInput, GetBucketLoggingOutput> {
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
      handler<GetBucketLoggingInput, GetBucketLoggingOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
