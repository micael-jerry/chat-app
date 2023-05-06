import { register } from '@/localStorage/localStorage';
import { User } from '@/types'
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = User;

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    if (req.method === 'POST') {
        const body: Data = req.body;
        const user: Data = register({
            name: body.name,
            email: body.email,
            password: body.password
        })
        res.status(200).json(user);
    }
}
