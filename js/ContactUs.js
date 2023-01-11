function checkEmail(theForm) {
    if (theForm.email.value != theForm.email2.value)
    {
        alert('Those emails don\'t match!');
        return false;
    } else {
        alert('Those emails  matched!');
        
    }
}