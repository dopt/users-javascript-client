/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as DoptApi from "../index";

export interface IdentifyBatchRequestBodyItem {
    identifier: string;
    properties: Record<string, unknown>;
    groups?: DoptApi.IdentifyBatchRequestBodyItemGroupsItem[];
}
