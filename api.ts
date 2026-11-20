import type  { User } from "./types.js";

export async function fetchUsers(): Promise<User[]> {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users"
    );

    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status}`);
    }

    const users: User[] = await response.json();

    return users;

  } catch (error) {
    console.error("Failed to fetch users:", error);
    throw error;
  }
}