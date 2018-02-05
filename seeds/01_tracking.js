exports.seed = function(knex, Promise) {
  return knex("tracking")
    .del()
    .then(function() {
      return knex("tracking").insert([
        {
          id: 1,
          StateBillID: "CA AB1008",
          Position: "Support",
          Call: true,
          Event: false,
          Online: true,
          SentOn: true,
          Other: false,
          Notes: "Good reception from office",
          NumberOfActions: 3
        },
        {
          id: 2,
          StateBillID: "CO HB1067",
          Position: "Support",
          Call: true,
          Event: true,
          Online: true,
          SentOn: true,
          Other: false,
          Notes: "Lot's of current traction - rally with Jeremy and co.",
          NumberOfActions: 4
        },
        {
          id: 3,
          StateBillID: "NJ A1451",
          Position: "Support",
          Call: false,
          Event: false,
          Online: true,
          SentOn: true,
          Other: true,
          Notes:
            "Great bill - looking to get ones like it sponsored accross US",
          NumberOfActions: 4
        },
        {
          id: 4,
          StateBillID: "TN HB0892",
          Position: "Oppose",
          Call: false,
          Event: false,
          Online: true,
          SentOn: true,
          Other: false,
          Notes: "Horrible bill - call Henri in TN to get some movement",
          NumberOfActions: 2
        },
        {
          id: 5,
          StateBillID: "MS HB1100",
          Position: "Oppose",
          Call: false,
          Event: false,
          Online: true,
          SentOn: true,
          Other: true,
          Notes: "Dangerous-bad bill. Need to keep an eye on this one",
          NumberOfActions: 3
        }
      ]);
    })
    .then(() => {
      return knex.raw("ALTER SEQUENCE tracking_id_seq RESTART WITH 6");
    });
};
