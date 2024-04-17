/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as DoptApi from "../../api";
import * as core from "../../core";

export const IdentifySegmentResponseBody: core.serialization.ObjectSchema<
    serializers.IdentifySegmentResponseBody.Raw,
    DoptApi.IdentifySegmentResponseBody
> = core.serialization.object({
    count: core.serialization.number(),
});

export declare namespace IdentifySegmentResponseBody {
    interface Raw {
        count: number;
    }
}
