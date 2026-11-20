import { fetchUsers } from "./api.js";
import { transformUsers } from "./transform.js";

async function main(): Promise<void> {
  try {
    const users = await fetchUsers();

    const dashboardUsers = transformUsers(users);

    console.table(dashboardUsers);

  } catch (error) {
    console.error("Application Error:", error);
  }
}

main();