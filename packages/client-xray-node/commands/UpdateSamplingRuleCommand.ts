import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { UpdateSamplingRule } from "../model/UpdateSamplingRule";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateSamplingRuleInput } from "../types/UpdateSamplingRuleInput";
import { UpdateSamplingRuleOutput } from "../types/UpdateSamplingRuleOutput";
import { XRayResolvedConfiguration } from "../XRayConfiguration";
export * from "../types/UpdateSamplingRuleInput";
export * from "../types/UpdateSamplingRuleOutput";
export * from "../types/UpdateSamplingRuleExceptionsUnion";

export class UpdateSamplingRuleCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateSamplingRuleInput,
      OutputTypesUnion,
      UpdateSamplingRuleOutput,
      XRayResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = UpdateSamplingRule;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateSamplingRuleInput,
    UpdateSamplingRuleOutput,
    _stream.Readable
  >();

  constructor(readonly input: UpdateSamplingRuleInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: XRayResolvedConfiguration
  ): __aws_sdk_types.Handler<
    UpdateSamplingRuleInput,
    UpdateSamplingRuleOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateSamplingRuleInput, UpdateSamplingRuleOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
