function showToast(msg, status) {
  const toastBox = document.getElementById('toast-box');

  if (!toastBox) {
    console.error("Elemento toast-box não encontrado!");
    return;
  }

  const toastMsg = msg;
  let toastStatus;

  const toast = document.createElement('div');

  if (status === 'success'){
    toastStatus = `<span class="material-symbols-outlined">check_circle</span>${toastMsg}`;

    toast.classList.add('ep-toast');
  } else if ( status === 'error'){
    toastStatus = `<span class="material-symbols-outlined">cancel</span>${toastMsg}`;

    toast.classList.add('ep-toast-error');
  } else if (status === 'alert'){
    toastStatus = `<span class="material-symbols-outlined">error</span>${toastMsg}`;

    toast.classList.add('ep-toast-alert');
  }

  toast.innerHTML = toastStatus;
  toastBox.appendChild(toast);

  setTimeout(() => {
    toast.remove();
  }, 6000);
}