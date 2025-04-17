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
            <p>If you wish to delete your account, you can do so directly in the app by navigating to your settings and selecting &quot;Delete Account&quot;.</p>
            <p>If you need further assistance or encounter any issues, please feel free to send an email to <strong>support@yourapp.com</strong> with the subject &quot;Account Deletion Request&quot;.</p>
            <p>Once we receive your request, we will begin the process of permanently erasing your data from our servers.</p>
            <p>We value your feedback, so please let us know if there&apos;s anything we could do to improve.</p>
        </Card>
    );
}
