export function transformUsers(users) {
    return users.map((user) => ({
        id: user.id,
        fullName: user.name.toUpperCase(),
        email: user.email,
        city: user.address.city
    }));
}
//# sourceMappingURL=transform.js.map