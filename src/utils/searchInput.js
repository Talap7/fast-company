export const searchInput = (currentValue, data) => {
    const users = [];
    if (currentValue && currentValue !== "") {
        for (const user in data) {
            if (data[user].name.toLowerCase().includes(currentValue.toLowerCase())) users.push(data[user]);
        };
        return users;
    }
    return 0;
};
