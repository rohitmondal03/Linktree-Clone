"use server"

import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation";

import { routes } from "~/config/routes"
import { db } from "~/server/db"


export async function changeUserDetails(userId: string, name: string, email: string) {
  const { settingRoute, pagesRoute } = routes;

  await db.user.update({
    where: {
      id: userId
    },
    data: {
      name: name,
      email: email,
    }
  })

  revalidatePath(settingRoute());
  // redirect(pagesRoute());
}