/**
 * decode ProtocolBuffer messages
 *
 * 2016-10-11 Ab Reitsma
 */

// initialize protocol buffers

import * as fs from "fs";
import * as path from "path";

import * as iot from "./iotMsg";

var protoBuf = require("protocol-buffers");
var protobufFileLocation = path.join(__dirname, "..", "data", "sensor.proto");

var protoBufMsg = protoBuf(fs.readFileSync(protobufFileLocation));

export default function decodeProtoBuff(encodedMessage: Buffer): iot.IotPayload {
    "use strict";
    return <iot.IotPayload> protoBufMsg.NodeMessage.decode(encodedMessage).reading;
}
