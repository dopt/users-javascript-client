/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as DoptApi from "../../api";
import * as core from "../../core";
import { IdentifySegmentRequestBodyIdentify } from "./IdentifySegmentRequestBodyIdentify";
import { IdentifySegmentRequestBodyGroup } from "./IdentifySegmentRequestBodyGroup";

export const IdentifySegmentRequestBody: core.serialization.Schema<
    serializers.IdentifySegmentRequestBody.Raw,
    DoptApi.IdentifySegmentRequestBody
> = core.serialization
    .union("type", {
        identify: IdentifySegmentRequestBodyIdentify,
        group: IdentifySegmentRequestBodyGroup,
    })
    .transform<DoptApi.IdentifySegmentRequestBody>({
        transform: (value) => value,
        untransform: (value) => value,
    });

export declare namespace IdentifySegmentRequestBody {
    type Raw = IdentifySegmentRequestBody.Identify | IdentifySegmentRequestBody.Group;

    interface Identify extends IdentifySegmentRequestBodyIdentify.Raw {
        type: "identify";
    }

    interface Group extends IdentifySegmentRequestBodyGroup.Raw {
        type: "group";
    }
}