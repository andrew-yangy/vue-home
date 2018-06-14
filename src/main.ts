import Vue from "vue";
import App from "@/App.vue";
import router from "@/router";
import store from "@/store";
import Element from "element-ui";
import "@/styles/theme-chalk/index.scss";
import "@/styles/index.scss";
import * as svgicon from "vue-svgicon";

Vue.use(svgicon);
import "./assets/icons";
Vue.config.productionTip = false;
Vue.use(Element, {
  size: "medium" // set element-ui default size
});

import IotClient from "./services/iot-client";
import { getAwsCredentials } from "./services/aws-iot";

const client = new IotClient();

client.updateWebSocketCredentials();

// import AwsIot from "aws-iot-device-sdk";
// import AWS from "aws-sdk";
// const shadows = AwsIot.thingShadow({
//   region: "ap-southeast-2",
//   host: "a3pxmwbmnvjupn.iot.ap-southeast-2.amazonaws.com",
//   clientId: "iothome",
//   protocol: "wss",
//   maximumReconnectTimeMs: 20000,
//   accessKeyId: "",
//   secretKey: "",
//   sessionToken: ""
// });

// const cognitoIdentity = new AWS.CognitoIdentity();
// AWS.config.region = "ap-southeast-2";
// AWS.config.credentials = new AWS.CognitoIdentityCredentials({
//   IdentityPoolId: "ap-southeast-2:4ef023b0-e8f0-4eda-baa1-a50f0f42bc42"
// });

// AWS.config.credentials["get"](error => {
//   const { accessKeyId, secretAccessKey, sessionToken } = AWS.config.credentials;
//   const credentialSubset = { accessKeyId, secretAccessKey, sessionToken };
//   shadows.updateWebSocketCredentials(
//     accessKeyId,
//     secretAccessKey,
//     sessionToken
//   );
// });

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
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
