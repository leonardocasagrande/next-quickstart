import Swal from 'sweetalert2';

export default function handleError(error: unknown) {
  let msg = '';
  if (typeof error === 'string') {
    msg = error;
  } else if (error instanceof Error) {
    msg = error.message;
  }
  Swal.fire({
    title: 'Something went wrong',
    html: `${
      msg ? `${msg}. ` : ''
    }We are sorry for the inconvenience. Please refresh the page or try again later.`,
    icon: 'warning',
    confirmButtonText: 'Close',
  });
}
