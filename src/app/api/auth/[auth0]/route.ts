import prisma from "@/lib/db";
import {
	handleAuth,
	handleLogin,
	Session,
	GetLoginState,
	handleCallback,
} from "@auth0/nextjs-auth0";
import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

// TODO replace 'any' types. Add error handling. Think about response numbers?? Add name or email to User schema.

// export const GET = handleAuth();

export const GET = handleAuth({
	callback: async (req: any, res: any) => {
		try {
			return await handleCallback(req, res, {
				afterCallback,
			});
		} catch (error) {
			console.error(error);
		}
	},
});

const afterCallback = async (req: any, session: any, state: any) => {
	console.log("I am getting called after callback", session);
	if (session.user) {
		// permanentRedirect('/verify-email')
		// res.status(200).redirect('/verify-email')
		console.log("user found", session.user);
		const user = session.user;

		const existingUser = await prisma.user.findUnique({
			where: {
				auth0Sub: user.sub,
			},
		});

		if (!existingUser) {
			console.log("creating new user");
			// Create new user
			await prisma.user.create({
				data: {
					auth0Sub: user.sub,
				},
			});
		} else {
			console.log("user exists in db");
		}
	} else {
		console.log("user not found", session);
	}

	return session;
};
