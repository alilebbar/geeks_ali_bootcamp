interface User {
  readonly id: number;
  name: string;
  email: string;
}
interface PremiumUser extends User {
  membershipLevel?: string;
}

const printUserDetails = (premiumUser: PremiumUser) => {
  console.log(`User id: ${premiumUser.id}`);
  console.log(`Name: ${premiumUser.name}`);
  console.log(`Email: ${premiumUser.email}`);
  if (premiumUser.membershipLevel) {
    console.log(`Membership level: ${premiumUser.membershipLevel}`);
  } else {
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