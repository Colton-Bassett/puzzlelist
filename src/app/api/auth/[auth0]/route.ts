import prisma from "@/lib/db";
import { handleAuth, Session, handleCallback } from "@auth0/nextjs-auth0";
import { NextApiRequest, NextApiResponse } from "next";
import { NextRequest } from "next/server";

// TODO add error handling. Think about response numbers. Add name or email to User schema.

// export const GET = handleAuth();

export const GET = handleAuth({
	callback: async (req: NextApiRequest, res: NextApiResponse) => {
		try {
			return await handleCallback(req, res, {
				afterCallback,
			});
		} catch (error) {
			console.error(error);
		}
	},
});

const afterCallback = async (req: NextRequest, session: Session) => {
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
