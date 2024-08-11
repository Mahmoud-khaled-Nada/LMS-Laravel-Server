import { FaTwitter, FaGithub } from "react-icons/fa";
import { Label, Input, Button } from "@windmill/react-ui";
import { Link } from "@inertiajs/react";

function LoginFrom() {
    return (
        <div className="w-full">
            <h1 className="mb-4 text-xl font-semibold text-gray-700 dark:text-gray-200">
                Login
            </h1>
            <Label>
                <span>Email</span>
                <Input
                    className="mt-1"
                    type="email"
                    placeholder="john@doe.com"
                />
            </Label>

            <Label className="mt-4">
                <span>Password</span>
                <Input
                    className="mt-1"
                    type="password"
                    placeholder="***************"
                />
            </Label>

            <Button className="mt-4" block tag={Link} to="/app">
                Log in
            </Button>

            <hr className="my-8" />

            <Button block layout="outline">
                <FaGithub className="w-4 h-4 mr-2" aria-hidden="true" />
                Github
            </Button>
            <Button className="mt-4" block layout="outline">
                <FaTwitter className="w-4 h-4 mr-2" aria-hidden="true" />
                Twitter
            </Button>

            <p className="mt-4">
                <Link
                    className="text-sm font-medium text-purple-600 dark:text-purple-400 hover:underline"
                    href="/auth/forgot-password"
                >
                    Forgot your password?
                </Link>
            </p>
            <p className="mt-1">
                <Link
                    className="text-sm font-medium text-purple-600 dark:text-purple-400 hover:underline"
                    href="/auth/register"
                >
                    Create account
                </Link>
            </p>
        </div>
    );
}

export default LoginFrom;
