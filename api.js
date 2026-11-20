export async function fetchUsers() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status}`);
        }
        const users = await response.json();
        return users;
    }
    catch (error) {
        console.error("Failed to fetch users:", error);
        throw error;
    }
}
//# sourceMappingURL=api.js.map