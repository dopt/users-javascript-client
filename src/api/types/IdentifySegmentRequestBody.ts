/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as DoptApi from "../index";

export type IdentifySegmentRequestBody =
    | DoptApi.IdentifySegmentRequestBody.Identify
    | DoptApi.IdentifySegmentRequestBody.Group;

export declare namespace IdentifySegmentRequestBody {
    interface Identify extends DoptApi.IdentifySegmentRequestBodyIdentify {
        type: "identify";
    }

    interface Group extends DoptApi.IdentifySegmentRequestBodyGroup {
        type: "group";
    }
}
