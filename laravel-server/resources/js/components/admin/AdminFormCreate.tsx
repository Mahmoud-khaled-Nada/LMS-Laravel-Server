import { Button, Label } from "@windmill/react-ui";
import { FormContainer } from "../ui/forms/FormContainer";
import InputField from "../ui/input/InputField";
import { useForm } from "@inertiajs/react";
import { useTranslation } from "react-i18next";
import { FormEventHandler } from "react";
import SingleSelect from "../ui/input/SingleSelect";
import { Spinners } from "../ui/icons/Spinners";

function AdminFormCreate() {
    const { t } = useTranslation();
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
        role: "",
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        console.log(data)
        console.log(errors)
        // post(route("login"), {
        //     onFinish: () => reset("name", "email"),
        // });
    };

    const optionss = [
        { value: "1", label: "Name" },
        { value: "2", label: "Email address" },
        { value: "3", label: "Description" },
        { value: "4", label: "User ID" },
    ];

    return (
        <FormContainer title={t("create")} submit={submit}>
            <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
                <Label className="mt-4">
                    <span>{t("name")}</span>
                    <InputField
                        name="name"
                        value={data.name}
                        isFocused={true}
                        isError={errors.name}
                        onChange={(e) => setData("name", e.target.value)}
                    />
                </Label>
                <Label className="mt-4">
                    <span>{t("email")}</span>
                    <InputField
                        type="email"
                        name="email"
                        value={data.email}
                        isFocused={true}
                        isError={errors.email}
                        onChange={(e) => setData("email", e.target.value)}
                    />
                </Label>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
                <Label className="mt-4">
                    <span>{t("password")}</span>
                    <InputField
                        type="password"
                        name="password"
                        value={data.password}
                        isFocused={true}
                        isError={errors.password}
                        onChange={(e) => setData("password", e.target.value)}
                    />
                </Label>
                <Label className="mt-4">
                    <span>{t("rpassword")}</span>
                    <InputField
                        type="password"
                        name="password_confirmation"
                        value={data.password_confirmation}
                        isFocused={true}
                        isError={errors.password_confirmation}
                        onChange={(e) =>
                            setData("password_confirmation", e.target.value)
                        }
                    />
                </Label>
            </div>

            <Label className="mt-4">
                <span>{t("roles")}</span>
                <SingleSelect
                    options={optionss}
                    placeholder="Select an option..."
                    onChange={(value) => setData("role", value)}
                />
            </Label>

            <div className="flex justify-end items-center m-6 gap-3 ">
                <Button type="submit" iconRight={processing ? Spinners : ""}>
                    {t("save")}
                </Button>
                <Button layout="outline">{t("back")}</Button>
            </div>
        </FormContainer>
    );
}

export default AdminFormCreate;
