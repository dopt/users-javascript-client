/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as DoptApi from "../../api/index";
import * as core from "../../core";
import { IdentifyBatchRequestBodyItem } from "./IdentifyBatchRequestBodyItem";

export const IdentifyBatchRequestBody: core.serialization.Schema<
    serializers.IdentifyBatchRequestBody.Raw,
    DoptApi.IdentifyBatchRequestBody
> = core.serialization.list(IdentifyBatchRequestBodyItem);

export declare namespace IdentifyBatchRequestBody {
    type Raw = IdentifyBatchRequestBodyItem.Raw[];
}
