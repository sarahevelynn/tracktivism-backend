
exports.seed = function(knex, Promise) {
  return knex("legislation").del()
    .then(function () {      return knex("legislation").insert([
        {id: 1, StateBillID: "NJ S1163", BillName: "restraint and seclusion on students with disabilities", KeyWords: "Civil Rights", Link:"https://www.billtrack50.com/BillDetail/706707"},
        {id: 2, StateBillID: "CA AB1008", BillName: "Ban the Box CA", KeyWords: "Civil Rights", Link:"https://www.billtrack50.com/BillDetail/830155"},
        {id: 3, StateBillID: "CA AB7", BillName: "Open Carry Firearms", KeyWords: "Firearms", Link:"https://www.billtrack50.com/BillDetail/757132"},
        {id: 4, StateBillID: "NJ S2508", BillName: "Nosey's Law", KeyWords: "Animal Rights", Link:"https://www.billtrack50.com/BillDetail/750051"},
        {id: 5, StateBillID: "CO HB1067", BillName: "Right To Rest Act", KeyWords: "Homelessness", Link:"https://www.billtrack50.com/BillDetail/917730"},
        {id: 6, StateBillID: "TN HB0892", BillName: "Tennessee Natural Marriage Defense Act", KeyWords: "LGBTQ Rights", Link:"https://www.billtrack50.com/BillDetail/816368"},
        {id: 7, StateBillID: "NJ A1451", BillName: "Women or minority owned businesses", KeyWords: "Entrepreneurial", Link:"https://www.billtrack50.com/BillDetail/694981"},
        {id: 8, StateBillID: "NH SB193", BillName: "Establishing education freedom savings accounts for students", KeyWords: "Education", Link:"https://www.billtrack50.com/BillDetail/802162"},
        {id: 9, StateBillID: "MO HB1382", BillName: "Concealed carry permit", KeyWords: "Firearms", Link:"https://www.billtrack50.com/BillDetail/898858"},
        {id: 10, StateBillID: "AL HB70", BillName: "Age change tobacco sales", KeyWords: "Tobacco", Link:"https://www.billtrack50.com/BillDetail/799672"},
        {id: 11, StateBillID: "US S1624", BillName: "Protect Children, Farmers, and Farmworkers from Nerve Agent Pesticides Act of 2017", KeyWords: "Health", Link:"https://www.billtrack50.com/BillDetail/887891"},
        {id: 12, StateBillID: "NJ A698", BillName: "Designates Im From New Jersey as the State song", KeyWords: "Random", Link:"https://www.billtrack50.com/BillDetail/695168"},
        {id: 13, StateBillID: "MS HB1100", BillName: "Requiring the 10 Comandments", KeyWords: "Public schools", Link:"https://www.billtrack50.com/BillDetail/924246"},
        {id: 14, StateBillID: "TX HB383", BillName: "Relating to enhancing the penalties for certain repeat and habitual offenders", KeyWords: "Felon", Link:"https://www.billtrack50.com/BillDetail/753467"},
        {id: 15, StateBillID: "KY HB120", BillName: "preserving the right of Kentuckians to own and use firearms", KeyWords: "Firearms", Link:"https://www.billtrack50.com/BillDetail/761788"},
        {id: 16, StateBillID: "HI HB1996", BillName: "Relating To Pretrial Release", KeyWords: "Bail", Link:"https://www.billtrack50.com/BillDetail/930838"},
      ]);
    })
    .then(() => {
  return knex.raw("ALTER SEQUENCE legislation_id_seq RESTART WITH 16");
});
};
