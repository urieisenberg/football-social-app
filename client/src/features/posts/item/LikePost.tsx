import { useState } from 'react';
import { useAppSelector } from '../../../app/hooks/useAppSelector';
import { useLikePostMutation } from '../api';
import { Post } from '../../../app/types';
import { Like, LikeCount, LikeIcon } from './styles';
import { BsHeart, BsHeartFill } from 'react-icons/bs';

interface LikePostProps {
  post: Post;
}

export const LikePost = ({ post }: LikePostProps) => {
  const { user } = useAppSelector((state) => state.auth);
  const [likedByUser, setLikedByUser] = useState(
    user && post.likes?.includes(user._id)
  );

  const [likePost] = useLikePostMutation();

  const handleLike = async () => {
    await likePost(post._id);
    setLikedByUser((likedByUser) => !likedByUser);
  };

  return (
    <Like>
      {post.likes && post.likes.length > 0 && (
        <LikeCount>{post.likes.length}</LikeCount>
      )}
      {likedByUser ? (
        <LikeIcon onClick={handleLike}>
          <BsHeartFill size={16} />
        </LikeIcon>
      ) : (
        <LikeIcon onClick={handleLike}>
          <BsHeart size={16} />
        </LikeIcon>
      )}
    </Like>
  );
};
