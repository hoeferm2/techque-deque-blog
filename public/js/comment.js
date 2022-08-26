const commentFormHandler = async (event) => {
    event.preventDefault();

    const commentText = document.querySelector('#comment-text').value.trim();

    if (commentText) {
        const response = await fetch(`/api/post/:id/comment`, {
            method: 'POST',
            body: JSON.stringify({ commentText }),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            document.location.replace('/');
        } else {
            alert('Failed to comment');
        }
    }
};


document
    .querySelector('.new-comment-form')
    .addEventListener('click', commentFormHandler);

