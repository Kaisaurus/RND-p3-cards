export function newPost(post) {
  return dispatch => {
    getUniqueId().then(id => {
      // post new post with unique id
      // I would prefer to do this on the back end rather than catching a error request
      // but for this assignment I'm not supposed to touch the back-end
      axios
        .post(
          `${api}/posts`,
          {...post, id},
          { headers }
        )
        .then(resp => {
          dispatch({ type: NEW_POST_FULFILLED, payload: resp.data });
        })
        .catch(err => {
          dispatch({ type: NEW_POST_FAILED, payload: err });
        })
    }).catch(err => {
      dispatch({ type: NEW_POST_FAILED, payload: err });
    })
  }
}