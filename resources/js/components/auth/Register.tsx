import { FaTwitter, FaGithub } from 'react-icons/fa';
import { Input, Label, Button } from '@windmill/react-ui';
import { Link } from '@inertiajs/react';
import InputField from '../ui/input/InputField';

function RegisterForm() {
    return (
        <div className="w-full">
            <h1 className="mb-4 text-xl font-semibold text-gray-700 dark:text-gray-200">Create account</h1>
            <Label>
                <span>Email</span>
                <InputField
                    type="email"
                    name="email"
                    // value={data.email}
                    // isFocused={true}
                    // isError={errors.email}
                    // onChange={(e) => setData('email', e.target.value)}
                />
            </Label>
            <Label className="mt-4">
                <span>Password</span>
                <InputField
                    type="email"
                    name="email"
                    // value={data.email}
                    // isFocused={true}
                    // isError={errors.email}
                    // onChange={(e) => setData('email', e.target.value)}
                />
            </Label>
            <Label className="mt-4">
                <span>Confirm password</span>
                <InputField
                    type="email"
                    name="email"
                    // value={data.email}
                    // isFocused={true}
                    // isError={errors.email}
                    // onChange={(e) => setData('email', e.target.value)}
                />
            </Label>

            <Label className="mt-6" check>
                <InputField
                    type="email"
                    name="email"
                    // value={data.email}
                    // isFocused={true}
                    // isError={errors.email}
                    // onChange={(e) => setData('email', e.target.value)}
                />
                <span className="ml-2">
                    I agree to the <span className="underline">privacy policy</span>
                </span>
            </Label>

            <Link href="/auth/login">
                <Button block className="mt-4">
                    Create account
                </Button>
            </Link>
            <hr className="my-8" />

            <Button block layout="outline">
                <FaGithub className="w-4 h-4 mr-2" aria-hidden="true" />
                Github
            </Button>
            <Button block className="mt-4" layout="outline">
                <FaTwitter className="w-4 h-4 mr-2" aria-hidden="true" />
                Twitter
            </Button>

            <p className="mt-4">
                <Link
                    className="text-sm font-medium text-purple-600 dark:text-purple-400 hover:underline"
                    href="/auth/login"
                >
                    Already have an account? Login
                </Link>
            </p>
        </div>
    );
}

export default RegisterForm;
