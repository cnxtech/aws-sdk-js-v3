import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { PutFile } from "../model/PutFile";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { PutFileInput } from "../types/PutFileInput";
import { PutFileOutput } from "../types/PutFileOutput";
import { CodeCommitResolvedConfiguration } from "../CodeCommitConfiguration";
export * from "../types/PutFileInput";
export * from "../types/PutFileOutput";
export * from "../types/PutFileExceptionsUnion";

export class PutFileCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      PutFileInput,
      OutputTypesUnion,
      PutFileOutput,
      CodeCommitResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = PutFile;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    PutFileInput,
    PutFileOutput,
    _stream.Readable
  >();

  constructor(readonly input: PutFileInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: CodeCommitResolvedConfiguration
  ): __aws_sdk_types.Handler<PutFileInput, PutFileOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<PutFileInput, PutFileOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
