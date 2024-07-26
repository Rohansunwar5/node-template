import { Response } from "express";
import userModel from "../models/user.model";
import { redis } from "../utils/redis";

export const getUserById = async (id: string, res: Response) => {
  const userJson = await redis.get(id);

  if (userJson) {
    const user = JSON.parse(userJson);
    res.status(201).json({
      success: true,
      user,
    });
  }
};

// export const getLoggedInUsersService = async (res: Response) => {
//   try {
//     const sessionKeys = await redis.keys("*");
//     console.log("Session keys:", sessionKeys);

//     const loggedInUsers = [];

//     for (const key of sessionKeys) {
//       const sessionData = await redis.get(key);
//       console.log("Session data:", sessionData);

//       if (sessionData) {
//         const parsedData = JSON.parse(sessionData);
//         console.log("Parsed data:", parsedData);

//         const userId = parsedData._id;
//         console.log("User ID:", userId);

//         const user = await userModel.findById(userId).select("name email");
//         if (user) {
//           loggedInUsers.push(user);
//         }
//       }
//     }

//     res.status(200).json({
//       success: true,
//       users: loggedInUsers,
//     });
//   } catch (error: any) {
//     res.status(500).json({
//       success: false,
//       message: "Failed to fetch logged-in users",
//       error: error.message,
//     });
//   }
// };
export const getLoggedInUsersService = async (res: Response) => {
  try {
    const sessionKeys = await redis.keys("*");
    console.log(sessionKeys);

    const loggedInUsers = [];

    for (const key of sessionKeys) {
      const sessionData = await redis.get(key);
      if (sessionData) {
        const parsedData = JSON.parse(sessionData);
        loggedInUsers.push(parsedData);
      }
    }

    res.status(200).json({
      success: true,
      users: loggedInUsers,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch logged-in users",
      error: error.message,
    });
  }
};
