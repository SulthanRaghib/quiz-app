import axios from "axios";

export const fetchQuestions = async (
  amount = 10,
  type = "multiple",
  category = null,
  difficulty = null
) => {
  let url = `https://opentdb.com/api.php?amount=${amount}&type=${type}`;
  if (category && Number(category) > 0) {
    url += `&category=${Number(category)}`;
  }
  if (difficulty && ["easy", "medium", "hard"].includes(String(difficulty))) {
    url += `&difficulty=${String(difficulty)}`;
  }
  const res = await axios.get(url);
  return res.data.results;
};

export const fetchCategories = async () => {
  const url = `https://opentdb.com/api_category.php`;
  const res = await axios.get(url);
  return res.data.trivia_categories;
};
