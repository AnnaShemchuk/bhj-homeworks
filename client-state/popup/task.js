function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.classList.remove('modal_active');
    setCookie(`${modalId}_closed`, 'true', 30);
}