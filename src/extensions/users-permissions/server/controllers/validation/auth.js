"use strict";

const { yup, validateYupSchema } = require("@strapi/utils");

const callbackBodySchema = yup.object().shape(
  {
    email: yup.string().when("mobile", {
      is: (mobile) => !mobile || mobile.length === 0,
      then: yup.string().email().required(),
    }),
    mobile: yup.string().when("email", {
      is: (email) => !email || email.length === 0,
      then: yup.string().required(),
    }),
  },
  ["email", "mobile"]
);

module.exports = {
  validateCallbackBody: validateYupSchema(callbackBodySchema),
};
