


async function postFormHandler(event) {
    event.preventDefault();
  
    const title = document.querySelector('#epsisode-title').value.trim();

    const post_url = document.querySelector('#episode-src').value.trim();
    const user_id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1

    
  
  
    // const post_id = window.location.toString().split('/')[
    //   window.location.toString().split('/').length - 1
    ];
  
    if (title && post_url && user_id) {
        const response = await fetch('/api/posts', {
          method: 'POST',
          body: JSON.stringify({
            title,
            post_url,
            user_id
          }),
          headers: {
            'Content-Type': 'application/json'
          }
        });
      
        if (response.ok) {
          document.location.reload();
        } else {
          alert(response.statusText);
        }
      }
      
  }
  
  document.querySelector('.add-post').addEventListener('submit', postFormHandler);