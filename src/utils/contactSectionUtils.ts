import axios from "axios";

export const sendingEmailToUser = async (
  userEmail: string,
  userName: string,
  userContactNumber: string,
  userFeedback: string
) => {
  const payload = {
    endpoint: "sendingEmailToUser",
    params: {
      user_email: userEmail,
      user_name: userName,
      user_contact_number: userContactNumber,
      comment_feedback: userFeedback,
    },
  };

  let result = "Success!";
  await axios
    .post(
      "https://dc2my8iwv4.execute-api.ap-southeast-2.amazonaws.com/prod/emailer",
      payload
    )
    .catch(() => {
      result = "Sending email error!";
    });

  return result;
};
