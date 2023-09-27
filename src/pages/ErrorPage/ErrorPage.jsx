/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/no-unknown-property */


const ErrorPage = () => {
    return (
        <div class="min-h-screen flex items-center justify-center">
        <div class="bg-white shadow-lg rounded-lg px-8 py-12">
            <h1 class="text-3xl font-semibold text-red-500 mb-4">Oops! Something went wrong</h1>
            <p class="text-gray-700">We're sorry, but it seems there was an error. Please try again later.</p>
            <a href="/" class="text-blue-500 hover:underline mt-4 inline-block">Go back to the homepage</a>
        </div>
        </div>
    );
};

export default ErrorPage;