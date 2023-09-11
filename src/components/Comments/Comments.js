import { getComments } from '@/helpers/interview-helpers';
import Comment from '../Comment/Comment';
import React from 'react';

async function Comments() {
  const comments = await getComments();

  return (
    <>
      {comments.map((comment) => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </>
  );
}

export default Comments;
