import AWS from "aws-sdk";
import AwsIot from "aws-iot-device-sdk";

let instance = null;
export default class IotClient {
  client: any;
  constructor(createNewClient = false, options = {}) {
    if (createNewClient && instance) {
      instance.disconnect();
      instance = null;
    }

    if (instance) {
      return instance;
    }
    instance = this;
    this.initClient(options);
    this.attachDebugHandlers();
    // const cognitoIdentity = new AWS.CognitoIdentity();
    // AWS.config.region = "ap-southeast-2";
    // AWS.config.credentials = new AWS.CognitoIdentityCredentials({
    //   IdentityPoolId: "ap-southeast-2:4ef023b0-e8f0-4eda-baa1-a50f0f42bc42"
    // });
    // AWS.config.credentials["get"](error => {
    //   if (error) {
    //   }
    //   const {
    //     accessKeyId,
    //     secretAccessKey,
    //     sessionToken
    //   } = AWS.config.credentials;
    //   const credentialSubset = { accessKeyId, secretAccessKey, sessionToken };
    //   console.log(credentialSubset);
    //   this.updateWebSocketCredentials(credentialSubset);
    // });
  }
  initClient(options) {
    const clientId = `iot-${Math.floor(Math.random() * 1000000 + 1)}`;
    this.client = AwsIot.thingShadow({
      region: "ap-southeast-2",
      host: "a3pxmwbmnvjupn.iot.ap-southeast-2.amazonaws.com",
      clientId,
      protocol: "wss",
      maximumReconnectTimeMs: 20000,
      accessKeyId: "",
      secretKey: "",
      sessionToken: ""
    });
  }
  disconnect() {
    this.client.end();
  }
  attachDebugHandlers() {
    this.client.on("reconnect", () => {
      console.log("reconnect");
    });

    this.client.on("offline", () => {
      console.log("offline");
    });

    this.client.on("error", err => {
      console.log("iot client error", err);
    });

    this.client.on("message", (topic, message) => {
      console.log("new message", topic, JSON.parse(message.toString()));
    });
  }
  updateWebSocketCredentials() {
    const cognitoIdentity = new AWS.CognitoIdentity();
    AWS.config.region = "ap-southeast-2";
    AWS.config.credentials = new AWS.CognitoIdentityCredentials({
      IdentityPoolId: "ap-southeast-2:4ef023b0-e8f0-4eda-baa1-a50f0f42bc42"
    });
    AWS.config.credentials["get"](error => {
      if (error) {
        console.log(error);
      }
      const {
        accessKeyId,
        secretAccessKey,
        sessionToken
      } = AWS.config.credentials;
      const credentialSubset = { accessKeyId, secretAccessKey, sessionToken };
      this.client.updateWebSocketCredentials(
        accessKeyId,
        secretAccessKey,
        sessionToken
      );
    });
  }
}
