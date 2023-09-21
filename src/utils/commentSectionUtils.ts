import axios from "axios";

export const fetchingComments = async () => {
  let result: Array<{
    comment: string;
    comment_date: string;
    comment_time: string;
    id: string;
    user_name: string;
  }> = [];
  await axios
    .post(
      "https://dc2my8iwv4.execute-api.ap-southeast-2.amazonaws.com/prod/comments",
      {
        endpoint: "getComments",
      }
    )
    .then(
      (res: {
        data: {
          Items: [
            {
              comment: string;
              comment_date: string;
              comment_time: string;
              id: string;
              user_name: string;
            }
          ];
        };
      }) => {
        result = res?.data?.Items;
      }
    );

  return result;
};

export const saveComment = async (userName: string, comment: string) => {
  const today = new Date();
  const commentDate = `${
    today.getMonth() + 1
  }/${today.getDate()}/${today.getFullYear()}`;
  const getMinute =
    today.getMinutes() < 10
      ? "0" + today.getMinutes().toString()
      : today.getMinutes();
  const commentTime = `${today.getHours()}:${getMinute}`;

  const payload = {
    endpoint: "saveComment",
    params: {
      user_name: userName,
      comment: comment,
      comment_date: commentDate,
      comment_time: commentTime,
    },
  };

  let result;
  await axios
    .post(
      "https://dc2my8iwv4.execute-api.ap-southeast-2.amazonaws.com/prod/comment",
      payload
    )
    .catch(() => {
      result = "Saving comment error!";
    });

  return result;
};
