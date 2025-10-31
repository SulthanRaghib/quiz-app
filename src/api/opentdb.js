import axios from "axios";

export const fetchQuestions = async (amount = 10, type = "multiple") => {
  const url = `https://opentdb.com/api.php?amount=${amount}&type=${type}`;
  const res = await axios.get(url);
  return res.data.results;
};
