import Link from 'next/link';
import { Card } from 'components/card';
import { ContextAlert } from 'components/context-alert';
import { Markdown } from 'components/markdown';

const contextExplainer = `
If you wish to permanently delete your account, please follow the steps below.
This will erase all your data and remove your access to the platform.
`;

const postDeletionExplainer = `
Please note that once your account is deleted, this action cannot be undone.
We value your feedback, and if you decide to leave, please consider sharing your reasons with us.
If you change your mind, feel free to come back anytime.
`;

export default function Page() {
    return (
        <div className="flex flex-col gap-12 sm:gap-16">
            <section>
                <ContextAlert className="mb-6" />
                <h1 className="mb-4">Account Deletion</h1>
                <p className="mb-6 text-lg">
                    We&apos;re sorry to see you go. If you&apos;re sure about deleting your account, please follow the steps below.
                </p>
                <Link href="https://play.google.com/store/apps/details?id=com.havoca" className="btn btn-lg sm:min-w-64">
                    Go to Play Store
                </Link>
            </section>

            <section className="flex flex-col gap-4">
                <Markdown content={contextExplainer} />
                <RuntimeContextCard />
            </section>

            <section className="flex flex-col gap-4">
                <Markdown content={postDeletionExplainer} />
            </section>
        </div>
    );
}

function RuntimeContextCard() {
    const title = `Account Deletion: Proceed with caution.`;
    return (
        <Card title={title}>
            <p>If you delete your account, all your data will be permanently erased from our servers.</p>
            <p>Click the button below to proceed with account deletion.</p>
            <button className="btn btn-lg bg-red-600 text-white">
                Delete My Account
            </button>
        </Card>
    );
}
