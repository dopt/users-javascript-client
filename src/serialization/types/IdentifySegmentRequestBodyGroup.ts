/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as DoptApi from "../../api/index";
import * as core from "../../core";

export const IdentifySegmentRequestBodyGroup: core.serialization.ObjectSchema<
    serializers.IdentifySegmentRequestBodyGroup.Raw,
    DoptApi.IdentifySegmentRequestBodyGroup
> = core.serialization.object({
    groupId: core.serialization.string(),
    userId: core.serialization.string(),
    traits: core.serialization.record(core.serialization.string(), core.serialization.unknown()),
});

export declare namespace IdentifySegmentRequestBodyGroup {
    interface Raw {
        groupId: string;
        userId: string;
        traits: Record<string, unknown>;
    }
}
