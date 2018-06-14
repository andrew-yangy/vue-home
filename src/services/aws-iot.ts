import AWS from "aws-sdk";
import AwsIot from "aws-iot-device-sdk";

// export const iot = new AWS.Iot();
// iot.listThings({}, function(err, data) {
//   if (err) console.log(err, err.stack);
//   // an error occurred
//   else console.log(data); // successful response
// });
export const getAwsCredentials = () => {
  return new Promise((resolve, reject) => {
    const cognitoIdentity = new AWS.CognitoIdentity();
    AWS.config.region = "ap-southeast-2";
    AWS.config.credentials = new AWS.CognitoIdentityCredentials({
      IdentityPoolId: "ap-southeast-2:4ef023b0-e8f0-4eda-baa1-a50f0f42bc42"
    });
    AWS.config.credentials["get"](error => {
      if (error) {
        reject(error);
      }
      const {
        accessKeyId,
        secretAccessKey,
        sessionToken
      } = AWS.config.credentials;
      const credentialSubset = { accessKeyId, secretAccessKey, sessionToken };
      resolve(credentialSubset);
    });
  });
};

// shadows.updateWebSocketCredentials(
//   accessKeyId,
//   secretAccessKey,
//   sessionToken
// );

// shadows.on("connect", function(res, r) {
//   console.log(res);
//   // shadows.register("bed_lamp");
//   shadows.register("MyMac", () => {
//     shadows.get("MyMac", "iothome-0");
//   });
// });
// shadows.on("delta", function(name, stateObject) {
//   console.log("delta", name, stateObject);
// });
// shadows.on("message", (topic, message) => {
//   console.log(111, topic, message.toString());
// });
// shadows.on("close", function() {
//   console.log("close");
// });

// shadows.on("reconnect", function() {
//   console.log("reconnect");
// });
// shadows.on("error", function(error) {
//   console.log("error", error);
// });
// shadows.on("status", (thingName, stat, clientToken, stateObject) => {
//   console.log("status", thingName, stat, clientToken, stateObject);
// });
