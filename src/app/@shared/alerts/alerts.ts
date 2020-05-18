import Swal from 'sweetalert2';

export async function formBasicDialog(
  title: string,
  html: string,
  property: string
) {
  return await Swal.fire({
    title,
    html,
    focusConfirm: false,
    cancelButtonText: 'Cancelar',
    showCancelButton: true,
    preConfirm: () => {
        const value = (document.getElementById('name') as HTMLInputElement).value;
        if (value) {
            return value;
        }
        Swal.showValidationMessage('Tienes que añadir un género para poder almacenarlo');
        return;
    },
  });
}

export function infoDetailsBasic(title, html, width) {
    Swal.fire({
        title,
        text: html,
        width: `200px`
    });
}
