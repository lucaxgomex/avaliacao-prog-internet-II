import { Router, Request, Response } from 'express'
//import jwt from 'jsonwebtoken'

export interface User {
    id?: string,
    name: string,
    email: string,
    password: string
}

export class AuthController {
    public signUp = async (req: Request, res: Response) => {
        const {name, email, password} = req.body


    }
} 