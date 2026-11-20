import type { User, DashboardUser } from "./types.js";

export function transformUsers(
  users: User[]
): DashboardUser[] {

  return users.map((user) => ({
    id: user.id,
    fullName: user.name.toUpperCase(),
    email: user.email,
    city: user.address.city
  }));
}