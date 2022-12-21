import axios from "axios";

export const createCardOnTrello = async () => {
  let response = await axios.post(
    "https://api.trello.com/1/cards",
    {},
    {
      params: {
        idList: process.env.REACT_APP_TRELLO_LIST,
        key: process.env.REACT_APP_TRELLO_API,
        token: process.env.REACT_APP_TRELLO_TOKEN,
      },
    }
  );

  return response;
};

export const populateCardOnTrello = async (id, customField, body) => {
  let response = await axios.put(
    `https://api.trello.com/1/cards/${id}/customField/${customField}/item`,
    {
      value: body,
    },
    {
      params: {
        key: process.env.REACT_APP_TRELLO_API,
        token: process.env.REACT_APP_TRELLO_TOKEN,
      },
    }
  );

  return response;
};
