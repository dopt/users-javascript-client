/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as DoptApi from "../../api";
import * as core from "../../core";

export const SegmentIdentify: core.serialization.ObjectSchema<
    serializers.SegmentIdentify.Raw,
    DoptApi.SegmentIdentify
> = core.serialization.object({
    type: core.serialization.stringLiteral("identify"),
    userId: core.serialization.string(),
    traits: core.serialization.record(core.serialization.string(), core.serialization.unknown()),
});

export declare namespace SegmentIdentify {
    interface Raw {
        type: "identify";
        userId: string;
        traits: Record<string, unknown>;
    }
}