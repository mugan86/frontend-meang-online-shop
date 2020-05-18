import Swal from 'sweetalert2';

export async function formBasicDialog(
  title: string,
  html: string,
  property: string
) {
  const { value: formValues } = await Swal.fire({
    title,
    html,
    focusConfirm: true,
    cancelButtonText: 'Cancelar',
    showCancelButton: true,
    preConfirm: () => {
      return [(document.getElementById('name') as HTMLInputElement).value];
    },
  });

  if (formValues) {
    Swal.fire(JSON.stringify(formValues));
  }
}
