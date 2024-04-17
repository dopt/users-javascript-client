/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../..";
import * as DoptApi from "../../../../../api";
import * as core from "../../../../../core";
import { IdentifyUserRequestBodyGroupsItem } from "../../types/IdentifyUserRequestBodyGroupsItem";

export const IdentifyUserRequestBody: core.serialization.Schema<
    serializers.IdentifyUserRequestBody.Raw,
    DoptApi.IdentifyUserRequestBody
> = core.serialization.object({
    identifier: core.serialization.string(),
    properties: core.serialization.record(core.serialization.string(), core.serialization.unknown()),
    groups: core.serialization.list(IdentifyUserRequestBodyGroupsItem).optional(),
});

export declare namespace IdentifyUserRequestBody {
    interface Raw {
        identifier: string;
        properties: Record<string, unknown>;
        groups?: IdentifyUserRequestBodyGroupsItem.Raw[] | null;
    }
}