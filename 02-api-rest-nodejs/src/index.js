function CalculateAgeOfUser(user) {
    return new Date().getFullYear() - user.birthYear;
}
CalculateAgeOfUser({
    birthYear: 1994
});
