var printUserDetails = function (premiumUser) {
    console.log("User id: ".concat(premiumUser.id));
    console.log("Name: ".concat(premiumUser.name));
    console.log("Email: ".concat(premiumUser.email));
    if (premiumUser.membershipLevel) {
        console.log("Membership level: ".concat(premiumUser.membershipLevel));
    }
    else {
        console.log("No membership level assigned.");
    }
};
printUserDetails({ id: 1, name: "John Doe", email: "johndoe@example.com" });
printUserDetails({
    id: 2,
    name: "Jane Smith",
    email: "janesmith@example.com",
    membershipLevel: "Premium",
});
