import * as __aws_sdk_bucket_endpoint_middleware from "@aws-sdk/bucket-endpoint-middleware";
import * as __aws_sdk_md5_js from "@aws-sdk/md5-js";
import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_ssec_middleware from "@aws-sdk/ssec-middleware";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CopyObject } from "../model/CopyObject";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CopyObjectInput } from "../types/CopyObjectInput";
import { CopyObjectOutput } from "../types/CopyObjectOutput";
import { S3ResolvedConfiguration } from "../S3Configuration";
export * from "../types/CopyObjectInput";
export * from "../types/CopyObjectOutput";
export * from "../types/CopyObjectExceptionsUnion";

export class CopyObjectCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CopyObjectInput,
      OutputTypesUnion,
      CopyObjectOutput,
      S3ResolvedConfiguration,
      Blob
    > {
  readonly model = CopyObject;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CopyObjectInput,
    CopyObjectOutput,
    Blob
  >();

  constructor(readonly input: CopyObjectInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: S3ResolvedConfiguration
  ): __aws_sdk_types.Handler<CopyObjectInput, CopyObjectOutput> {
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
      __aws_sdk_ssec_middleware.ssecMiddleware<CopyObjectInput>({
        base64Encoder: configuration.base64Encoder,
        hashConstructor: configuration.md5,
        ssecProperties: {
          $serverSideEncryptionKey: {
            targetProperty: "SSECustomerKey",
            hashTargetProperty: "SSECustomerKeyMD5"
          },
          $copySourceServerSideEncryptionKey: {
            targetProperty: "CopySourceSSECustomerKey",
            hashTargetProperty: "CopySourceSSECustomerKeyMD5"
          }
        },
        utf8Decoder: configuration.utf8Decoder
      }),
      {
        step: "initialize",
        priority: 0
      }
    );
    return stack.resolve(
      handler<CopyObjectInput, CopyObjectOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
