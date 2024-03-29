const apiKey = "c389e65b5866469bbb11b9b726d407be";

//const apiKey = "ce8a4bd6c94b418981d09c40288c7a3e";
//const apiKey = "31ee3cd77bec418ea747d432fdde44a0";
//const apiKey = "4073f9e40da0487b977508a4364fdd8f";
//const apiKey = "71abfa7aadef4ee783b7215989aca298";

const endpoint = "https://api.spoonacular.com/";

const randomFind = "recipes/random";
const recipesSearch = "recipes/complexSearch";

export const getRecipeInfo = async (recipeId) => {
  try {
    const response = await fetch(
      endpoint + `recipes/${recipeId}/information?apiKey=${apiKey}`
    );
    if (response.ok) {
      const json = await response.json();
      return json;
    } else {
      alert(
        "Oh no! It looks like the daily quota of Spoonacular API requests is full. Please come back tomorrow :(."
      );
    }
  } catch (err) {
    console.log(err);
  }
};

export const searchRecipes = async (searchTerm, limit) => {
  try {
    const response = await fetch(
      endpoint +
        recipesSearch +
        `?apiKey=${apiKey}&query=${searchTerm}&number=${limit}`
    );
    if (response.ok) {
      const json = await response.json();
      return json["results"];
    } else {
      alert(
        "Oh no! It looks like the daily quota of Spoonacular API requests is full. Please come back tomorrow :(."
      );
    }
  } catch (err) {
    console.log(err);
  }
};

export const getRandomRecipes = async (tags, limit) => {
  try {
    const response = await fetch(
      endpoint + randomFind + `?apiKey=${apiKey}&number=${limit}&tags=${tags}`
    );
    if (response.ok) {
      const json = await response.json();
      return json["recipes"];
    } else {
      alert(
        "Oh no! It looks like the daily quota of Spoonacular API requests is full. Please come back tomorrow :(."
      );
    }
  } catch (err) {
    console.log(err);
  }
};
