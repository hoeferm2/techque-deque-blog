const commentFormHandler = async (event) => {
    event.preventDefault();

    // TODO: delcare postId here to get its .value
    // const postString = window.location.href
    // console.log(postString)
    // const postId = postString.slice(postString.length, postString.length)
    // console.log(postId)
    const commentText = document.querySelector('#comment-text').value.trim();
    console.log(commentText)

    if (commentText && postId) {
        await fetch('/api/comment', {
            method: 'POST',
            body: JSON.stringify({
                // TODO: declate postId var to get iits input val so it can be passed here
                // post_Id,
                commentText,
            }),
            headers: {
                'Content-Type': 'application/json',
            },
        })

        document.location.reload();
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

