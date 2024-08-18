import { Label } from '@windmill/react-ui';
import { FormContainerWithUpload } from '../ui/forms/FormContainerWithUpload';
import InputField from '../ui/input/InputField';
import { router, useForm, usePage } from '@inertiajs/react';
import { useTranslation } from 'react-i18next';
import { FormEventHandler } from 'react';
import { toast } from 'react-toastify';
import { SpinnerButton } from '../ui/buttons/SpinnerButton';
import { CourseParams } from '@/types';
import SingleSelect from './SingleSelect';

const CourseFormCreate = () => {
    const { t } = useTranslation();
    const { categories } = usePage().props as any;
    const types = [
        { id: 'online', name: 'online' },
        { id: 'onsite', name: 'onsite' },
    ];

    const { data, setData, post, processing, errors, reset } = useForm<CourseParams>();

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('category_id', data.category_id);
        formData.append('name', data.name);
        formData.append('hours', data.hours);
        formData.append('price', data.price);
        formData.append('type', data.type);
        formData.append('requirements', data.requirements);
        formData.append('description', data.description);

        // Append files if they exist
        if (data.photo) {
            formData.append('photo', data.photo);
        }
        if (data.video) {
            formData.append('video', data.video);
        }
    

        console.log(data)

        post('/courses/store', {
            data: formData, // Pass FormData directly
            onSuccess: () => {
                router.get('/courses');
                toast.success('Course created successfully');
            },
            onError: () => toast.error('Error creating course'),
            onFinish: () => reset(), // Reset after the request finishes
        });
    };
    return (
        <FormContainerWithUpload title={t('create')} submit={submit}>
            <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
                <Label className="mt-4">
                    <span>{t('name')}</span>
                    <InputField
                        name="name"
                        value={data.name}
                        isFocused={true}
                        isError={errors.name}
                        onChange={(e) => setData('name', e.target.value)}
                    />
                </Label>
                <Label className="mt-4">
                    <span>{t('Category')}</span>
                    <SingleSelect
                        options={categories}
                        placeholder="Select an option..."
                        onChange={(value) => setData('category_id', value)}
                    />
                </Label>
            </div>
            <div className="grid grid-cols-3 md:grid-cols-3 gap-4">
                <Label className="mt-4">
                    <span>{t('type')}</span>
                    <SingleSelect
                        options={types}
                        placeholder="Select an option..."
                        onChange={(value) => setData('type', value)}
                    />
                </Label>
                <Label className="mt-4">
                    <span>{t('hours')}</span>
                    <InputField
                        name="hours"
                        type="number"
                        value={data.hours}
                        isFocused={true}
                        isError={errors.hours}
                        onChange={(e) => setData('hours', e.target.value)}
                    />
                </Label>
                <Label className="mt-4">
                    <span>{t('Price')}</span>
                    <InputField
                        type="number"
                        name="price"
                        value={data.price}
                        isFocused={true}
                        isError={errors.price}
                        onChange={(e) => setData('price', e.target.value)}
                    />
                </Label>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
                <Label className="mt-4 w-full space-y-3">
                    <span>{t('Requirements')}</span>
                    <textarea
                        className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                        rows={3}
                        placeholder="This is a textarea placeholder"
                        value={data.requirements}
                        onChange={(e) => setData('requirements', e.target.value)}
                    ></textarea>
                </Label>
                <Label className="mt-4 w-full space-y-3">
                    <span>{t('Description')}</span>
                    <textarea
                        className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                        rows={3}
                        placeholder="This is a textarea placeholder"
                        value={data.description}
                        onChange={(e) => setData('description', e.target.value)}
                    ></textarea>
                </Label>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
                <Label className="mt-4">
                    <span>{t('Photo')}</span>
                    <input
                        type="file"
                        className="block w-full text-sm text-gray-500
                                    file:me-4 file:py-2 file:px-4
                                    file:rounded-lg file:border-0
                                    file:text-sm file:font-semibold
                                    file:bg-blue-600 file:text-white
                                    hover:file:bg-blue-700
                                    file:disabled:opacity-50 file:disabled:pointer-events-none
                                    dark:text-neutral-500
                                    dark:file:bg-blue-500
                                    dark:hover:file:bg-blue-400
                                    "
                                    onChange={(e) => {
                                        const file = e.target.files?.[0];
                                        if (file) setData('photo', file);
                                    }}
                    />
                </Label>
                <Label className="mt-4">
                    <span>{t('Video')}</span>
                    <input
                        type="file"
                        className="block w-full text-sm text-gray-500
                                    file:me-4 file:py-2 file:px-4
                                    file:rounded-lg file:border-0
                                    file:text-sm file:font-semibold
                                    file:bg-blue-600 file:text-white
                                    hover:file:bg-blue-700
                                    file:disabled:opacity-50 file:disabled:pointer-events-none
                                    dark:text-neutral-500
                                    dark:file:bg-blue-500
                                    dark:hover:file:bg-blue-400"
                                    onChange={(e) => {
                                        const file = e.target.files?.[0];
                                        if (file) setData('video', file);
                                    }}
                    />
                </Label>
            </div>

            <div className="flex justify-end items-center m-6 gap-3 ">
                <SpinnerButton isLoading={processing} disabled={!data.name || processing} route="/courses" />
            </div>
        </FormContainerWithUpload>
    );
};

export default CourseFormCreate;
