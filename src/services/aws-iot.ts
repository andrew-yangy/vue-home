import AWS from "aws-sdk";
import AwsIot from "aws-iot-device-sdk";

// export const iot = new AWS.Iot();
// iot.listThings({}, function(err, data) {
//   if (err) console.log(err, err.stack);
//   // an error occurred
//   else console.log(data); // successful response
// });

const AWSIot = {
  install(Vue, options) {
    const iot = new AWS.Iot();
    Vue.prototype.$iot = iot;
  }
};

export default AWSIot;
