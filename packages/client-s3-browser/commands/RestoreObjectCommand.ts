import * as __aws_sdk_bucket_endpoint_middleware from "@aws-sdk/bucket-endpoint-middleware";
import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { RestoreObject } from "../model/RestoreObject";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { RestoreObjectInput } from "../types/RestoreObjectInput";
import { RestoreObjectOutput } from "../types/RestoreObjectOutput";
import { S3ResolvedConfiguration } from "../S3Configuration";
export * from "../types/RestoreObjectInput";
export * from "../types/RestoreObjectOutput";
export * from "../types/RestoreObjectExceptionsUnion";

export class RestoreObjectCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      RestoreObjectInput,
      OutputTypesUnion,
      RestoreObjectOutput,
      S3ResolvedConfiguration,
      Blob
    > {
  readonly model = RestoreObject;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    RestoreObjectInput,
    RestoreObjectOutput,
    Blob
  >();

  constructor(readonly input: RestoreObjectInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: S3ResolvedConfiguration
  ): __aws_sdk_types.Handler<RestoreObjectInput, RestoreObjectOutput> {
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
    return stack.resolve(
      handler<RestoreObjectInput, RestoreObjectOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
