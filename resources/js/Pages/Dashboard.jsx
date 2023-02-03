import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Dashboard(props) {
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-100 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard" />

            {/* <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-zinc-700 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900 dark:text-gray-100">You're logged in!</div>
                    </div>
                </div>
            </div> */}

            <main className="pt-8 max-h-screen overflow-auto">
                <div className="px-6 py-2">
                <div className="max-w-7xl mx-auto">
                    <div className="bg-white rounded-3xl p-8 mb-5">
                    <h1 className="text-3xl font-bold mb-10">Messaging ID framework development for the marketing branch</h1>

                    <hr className="my-10"/>

                    <div className="grid grid-cols-2 gap-x-20">
                        <div>
                        <h2 className="text-2xl font-bold mb-4">Stats</h2>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="col-span-2">
                            <div className="p-4 bg-green-100 rounded-xl">
                                <div className="font-bold text-xl text-gray-800 leading-none">Good day, <br/>Kristin</div>
                                <div className="mt-5">
                                <button type="button" className="inline-flex items-center justify-center py-2 px-3 rounded-xl bg-white text-gray-800 hover:text-green-500 text-sm font-semibold transition">
                                    Start tracking
                                </button>
                                </div>
                            </div>
                            </div>
                            <div className="p-4 bg-yellow-100 rounded-xl text-gray-800">
                            <div className="font-bold text-2xl leading-none">20</div>
                            <div className="mt-2">Tasks finished</div>
                            </div>
                            <div className="p-4 bg-yellow-100 rounded-xl text-gray-800">
                            <div className="font-bold text-2xl leading-none">5,5</div>
                            <div className="mt-2">Tracked hours</div>
                            </div>
                            <div className="col-span-2">
                            <div className="p-4 bg-purple-100 rounded-xl text-gray-800">
                                <div className="font-bold text-xl leading-none">Your daily plan</div>
                                <div className="mt-2">5 of 8 completed</div>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div>
                        <h2 className="text-2xl font-bold mb-4">Your tasks today</h2>

                        <div className="space-y-4">
                            <div className="p-4 bg-white border rounded-xl text-gray-800 space-y-2">
                            <div className="flex justify-between">
                                <div className="text-gray-400 text-xs">Number 10</div>
                                <div className="text-gray-400 text-xs">4h</div>
                            </div>
                            <a href="#" className="font-bold hover:text-yellow-800 hover:underline">Blog and social posts</a>
                            <div className="text-sm text-gray-600">
                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" className="text-gray-800 inline align-middle mr-1" viewBox="0 0 16 16">
                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"></path>
                                </svg>Deadline is today
                            </div>
                            </div>
                            <div className="p-4 bg-white border rounded-xl text-gray-800 space-y-2">
                            <div className="flex justify-between">
                                <div className="text-gray-400 text-xs">Grace Aroma</div>
                                <div className="text-gray-400 text-xs">7d</div>
                            </div>
                            <a href="#" className="font-bold hover:text-yellow-800 hover:underline">New campaign review</a>
                            <div className="text-sm text-gray-600">
                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" className="text-gray-800 inline align-middle mr-1" viewBox="0 0 16 16">
                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"></path>
                                </svg>New feedback
                            </div>
                            </div>
                            <div className="p-4 bg-white border rounded-xl text-gray-800 space-y-2">
                            <div className="flex justify-between">
                                <div className="text-gray-400 text-xs">Petz App</div>
                                <div className="text-gray-400 text-xs">2h</div>
                            </div>
                            <a href="#" className="font-bold hover:text-yellow-800 hover:underline">Cross-platform and browser QA</a>
                            </div>

                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </main>
        </AuthenticatedLayout>
    );
}
