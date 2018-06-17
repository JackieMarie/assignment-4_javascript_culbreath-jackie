// PRESIDENTS BRANCH - NUMBER 5 - Objects

var president1 = {
  firstName: "Donald",
  lastName: "Trump",
  termLength: 1,
  party: "Republican",
  yearsOfPresidency: "2017-present",
};

var president2 = {
  firstName: "Barak",
  lastName: "Obama",
  termLength: 2,
  party: "Democrat",
  yearsOfPresidency: "2009-2017",
};

var president3 = {
  firstName: "George W.",
  lastName: "Bush",
  termLength: 2,
  party: "Republican",
  yearsOfPresidency: "2001-2009",
};

var president4 = {
  firstName: "Bill",
  lastName: "Clinton",
  termLength: 2,
  party: "Democrat",
  yearsOfPresidency: "1993-2001",
};

var president5 = {
  firstName: "George",
  lastName: "Bush",
  termLength: 1,
  party: "Republican",
  yearsOfPresidency: "1989-1993",
};

var presidents = [
  {firstName: "Donald", lastName: "Trump", termLength: 1, party: "Republican", yearsOfPresidency: "2017-present"},
  {firstName: "Barak", lastName: "Obama", termLength: 2, party: "Democrat", yearsOfPresidency: "2009-2017"},
  {firstName: "George W.", lastName: "Bush", termLength: 2, party: "Republican", yearsOfPresidency: "2001-2009"},
  {firstName: "Bill", lastName: "Clinton", termLength: 2, party: "Democrat", yearsOfPresidency: "1993-2001"},
  {firstName: "George", lastName: "Bush", termLength: 1, party: "Republican", yearsOfPresidency: "1989-1993"},
]

console.log(presidents[2].firstName, presidents[2].lastName);
