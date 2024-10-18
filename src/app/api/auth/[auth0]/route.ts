import { createUser } from "@/actions/actions";
import { handleAuth, Session, handleCallback } from "@auth0/nextjs-auth0";
import { NextApiRequest, NextApiResponse } from "next";
import { NextRequest } from "next/server";

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
	// Check to see if user exists in db. If not, create it.
	createUser(session);
	return session;
};
