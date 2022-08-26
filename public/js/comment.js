const commentFormHandler = async (event) => {
    event.preventDefault();

    const postString = window.location.href
    const post_id = postString.substring(postString.length - 1, postString.length)
    const commentText = document.querySelector('#comment-text').value.trim();


    if (post_id && commentText) {
        await fetch('/api/comment', {
            method: 'POST',
            body: JSON.stringify({
                post_id,
                commentText,
            }),
            headers: {
                'Content-Type': 'application/json',
            },
        })

        document.location.replace('/')
        // const response = await fetch(`/api/post/:id/comment`, {
        //     method: 'POST',
        //     body: JSON.stringify({ commentText }),
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        // });

        // if (response.ok) {
        //     document.location.replace('/');
        // } else {
        //     alert('Failed to comment');
        // }
    }
};


document
    .querySelector('.new-comment-form')
    .addEventListener('submit', commentFormHandler);

