import axios from "axios";

export const fetchingComments = async () => {
  let result: Array<{
    comment: string;
    comment_date: string;
    comment_time: string;
    id: string;
    user_id: string;
  }> = [];
  await axios
    .post("http://localhost:3000/prod/comments", {
      endpoint: "getComments",
    })
    .then(
      (res: {
        data: {
          Items: [
            {
              comment: string;
              comment_date: string;
              comment_time: string;
              id: string;
              user_id: string;
            }
          ];
        };
      }) => {
        result = res?.data?.Items;
      }
    );

  return result;
};
