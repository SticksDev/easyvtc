import Swal from 'sweetalert2';

export default function signUp() {
    function toastFactory(type, title, text, time, showConfirmButton) {
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: showConfirmButton || false,
            timer: time || '3000',
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer);
                toast.addEventListener('mouseleave', Swal.resumeTimer);
            },
        });

        Toast.fire({
            icon: type,
            title: '<strong>' + title + '</strong>',
            text: text,
        });
    }

    async function submitForm() {
        // Get the form data
        const signUpButton = document.getElementById('signUpButton');

        const formData = {
            email: $('#email').val(),
            password: $('#passwordPlain').val(),
            first_name: $('#firstName').val(),
            last_name: $('#lastName').val(),
            aboutVTC: $('#aboutVTC').val(),
            discordId: $('#discordId').val(),
            discordTag: $('#discordTag').val(),
            testCheckBox: $('#testCheckBox').is(':checked'),
            emailCheckBox: $('#emailCheckBox').is(':checked'),
        };

        // If ANY of the fields are empty, don't submit
        if (
            formData.email === '' ||
            formData.password === '' ||
            formData.first_name === '' ||
            formData.last_name === '' ||
            formData.aboutVTC === '' ||
            formData.discordContact === ''
        ) {
            toastFactory(
                'error',
                'Error',
                'Please fill out all fields.',
                '5000',
            );
            return;
        }

        if (!formData.email.match(/^[^@]+@[^@]+\.[^@]+$/)) {
            return toastFactory(
                'error',
                'Email Invaild',
                'Please enter an vaild email',
                '5000',
            );
        }

        // Disable the submit button
        signUpButton.disabled = true;

        // Set the text to "Processing"
        signUpButton.innerText = 'Processing...';

        // Show the loader using jQuery
        $('#loaderSvg').show();

        // Create the request to the backend (/api/submitForm)

        const request = await fetch('/api/submitForm', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        if (request.status !== 200) {
            toastFactory(
                'error',
                'Error',
                'There was an error submitting your information. Please try again.',
                '8000',
            );

            // Re-enable the submit button
            signUpButton.disabled = false;
            signUpButton.innerText = 'Submit!';

            // Log the failed request
            console.warn(
                `Failed to submit to supabase: ${request.status} - ${request.body}`,
            );
            return;
        }

        // Success!
        Swal.fire({
            title: 'Success!',
            html: 'You have been added to the waitlist. You should also join our discord server for a better chance of being picked. (Use the buttons Below!)',
            icon: 'success',
            showDenyButton: true,
            denyButtonText: 'Close',
            confirmButtonText: 'Join Discord Server',
            allowOutsideClick: false,
        }).then((result) => {
            if (result.isConfirmed) {
                // Open the discord server in the same tab
                window.open('https://discord.gg/8a4bmQrj7f', '_self');
                return;
            } else {
                window.location.href = '/';
                return;
            }
        });
    }

    return (
        <div>
            <title>EasyVTC - Waitlist Signup </title>
            <meta charSet='utf-8' />
            <meta
                name='viewport'
                content='width=device-width, initial-scale=1, shrink-to-fit=no'
            />
            <meta content='Easy VTC' property='og:title' />
            <meta
                content='Easy VTC is providing mangement services for VTCs in truckersMP.'
                property='og:description'
            />
            <meta content='https://easyvtc.app/signup' property='og:url' />
            <meta
                content='https://easyvtc.app/img/EasyVTC-OnlyLogo.png'
                property='og:image'
            />
            <meta
                content='#6366F1'
                data-react-helmet='true'
                name='theme-color'
            />
            <meta name='description' content />
            <meta name='author' content />
            <link rel='stylesheet' href='css/tailwind/tailwind.min.css' />
            <link
                rel='icon'
                type='image/png'
                sizes='16x16'
                href='img/EasyVTC-OnlyLogo.png'
            />
            <script src='https://unpkg.com/flowbite@1.4.4/dist/flowbite.js'></script>
            <link
                rel='stylesheet'
                href='https://unpkg.com/flowbite@1.4.4/dist/flowbite.min.css'
            />
            <script
                src='https://code.jquery.com/jquery-3.6.0.min.js'
                integrity='sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4='
                crossorigin='anonymous'
            ></script>
            <link rel='stylesheet' href='css/site/ldbtn.min.css' />
            <div className>
                <section className='py-20'>
                    <div className='container px-4 mx-auto'>
                        <div className='max-w-md mx-auto py-12 px-8 bg-gray-50 rounded-lg text-center'>
                            <span className='text-sm text-gray-500 font-semibold uppercase'>
                                Sign Up
                            </span>
                            <h3 className='mb-8 text-3xl font-bold font-heading'>
                                Tell Us About Your Self.
                            </h3>
                            <form action='#' data-bitwarden-watching={1}>
                                <div className='flex flex-wrap md:flex-nowrap'>
                                    <input
                                        className='w-full md:w-1/2 md:mr-2 py-3 pl-3 mb-4 bg-white rounded-lg'
                                        type='text'
                                        placeholder='First Name'
                                        id='firstName'
                                        required
                                    />
                                    <input
                                        className='w-full md:w-1/2 py-3 pl-3 mb-4 bg-white rounded-lg'
                                        type='text'
                                        placeholder='Last Name'
                                        id='lastName'
                                        required
                                    />
                                </div>
                                <input
                                    className='w-full py-3 pl-3 mb-4 bg-white rounded-lg'
                                    type='email'
                                    placeholder='E-mail address'
                                    id='email'
                                    required
                                />
                                <input
                                    className='w-full py-3 pl-3 mb-4 bg-white rounded-lg'
                                    type='text'
                                    placeholder='Tell Us about your VTC...'
                                    id='aboutVTC'
                                    required
                                />
                                <input
                                    className='w-full py-3 pl-3 mb-4 bg-white rounded-lg'
                                    type='text'
                                    placeholder='Discord UserID'
                                    id='discordId'
                                    required
                                />
                                <input
                                    className='w-full py-3 pl-3 mb-4 bg-white rounded-lg'
                                    type='text'
                                    placeholder='Discord Tag'
                                    id='discordTag'
                                    required
                                />
                                <label className='inline-block mb-4'>
                                    <input
                                        className='mr-1'
                                        type='checkbox'
                                        name='testUserCheckBox'
                                        id='testCheckBox'
                                    />
                                    <span className='text-sm text-gray-500'>
                                        I would like to test EasyVTC
                                    </span>
                                </label>
                                <label className='inline-block mb-4'>
                                    <input
                                        className='mr-1'
                                        type='checkbox'
                                        name='emailCheckBox'
                                        id='emailCheckBox'
                                    />
                                    <span className='text-sm text-gray-500'>
                                        I would like email notifications
                                    </span>
                                </label>

                                <button
                                    type='button'
                                    className='block w-full mb-4 px-5 py-3 text-sm bg-indigo-500 hover:bg-indigo-600 text-white font-semibold border border-indigo-500 hover:border-indigo-600 rounded transition duration-200'
                                    onClick={submitForm}
                                    id='signUpButton'
                                >
                                    <svg
                                        role='status'
                                        className='inline w-4 h-4 mr-3 text-white animate-spin'
                                        viewBox='0 0 100 101'
                                        fill='none'
                                        xmlns='http://www.w3.org/2000/svg'
                                        style={{ display: 'none' }}
                                        id='loaderSvg'
                                    >
                                        <path
                                            d='M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z'
                                            fill='#E5E7EB'
                                        />
                                        <path
                                            d='M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z'
                                            fill='currentColor'
                                        />
                                    </svg>
                                    Submit!
                                </button>
                            </form>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
