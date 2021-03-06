import { DeleteApnsChannelInput } from "./DeleteApnsChannelInput";
import { DeleteApnsChannelOutput } from "./DeleteApnsChannelOutput";
import { BadRequestException } from "./BadRequestException";
import { InternalServerErrorException } from "./InternalServerErrorException";
import { ForbiddenException } from "./ForbiddenException";
import { NotFoundException } from "./NotFoundException";
import { MethodNotAllowedException } from "./MethodNotAllowedException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DeleteApnsChannel: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteApnsChannel",
  http: {
    method: "DELETE",
    requestUri: "/v1/apps/{application-id}/channels/apns"
  },
  input: {
    shape: DeleteApnsChannelInput
  },
  output: {
    shape: DeleteApnsChannelOutput
  },
  errors: [
    {
      shape: BadRequestException
    },
    {
      shape: InternalServerErrorException
    },
    {
      shape: ForbiddenException
    },
    {
      shape: NotFoundException
    },
    {
      shape: MethodNotAllowedException
    },
    {
      shape: TooManyRequestsException
    }
  ]
};
