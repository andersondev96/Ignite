interface User {
    birthYear: number;
}

function CalculateAgeOfUser(user: User) {
    return new Date().getFullYear() - user.birthYear
}

CalculateAgeOfUser({
    birthYear: 1994
})