import { Request } from "express";
import Users from "src/user/user.entity";

interface RequestWithUsers extends Request {
    Users: Users
}
export default RequestWithUsers;