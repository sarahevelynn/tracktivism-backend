exports.seed = function(knex, Promise) {
  return knex("catagories")
    .del()
    .then(function() {
      return knex("catagories").insert([
        { id: 1, KeyWords: "Civil Rights" },
        { id: 2, KeyWords: "Sex & Drugs" },
        { id: 3, KeyWords: "LGBTQ" },
        { id: 4, KeyWords: "Health Care" },
        { id: 5, KeyWords: "Education" },
        { id: 6, KeyWords: "Energy" },
        { id: 7, KeyWords: "Science" },
        { id: 8, KeyWords: "Firearms" },
        { id: 9, KeyWords: "Business" },
        { id: 10, KeyWords: "Random" }
      ]);
    });
};
