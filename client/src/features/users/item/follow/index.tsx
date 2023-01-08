import { useState, useEffect } from 'react';
import { useAppSelector } from '../../../../app/hooks';
import {
  useGetFollowersQuery,
  useFollowUserMutation,
  useUnfollowUserMutation,
} from '../../api';
import { toast } from 'react-toastify';
import { AiOutlineUserAdd, AiOutlineUserDelete } from 'react-icons/ai';
import { Item } from '../../styles';

interface FollowUserProps {
  username: string;
  id: string;
}

export const FollowUser = ({ id, username }: FollowUserProps) => {
  const { user } = useAppSelector((state) => state.auth);
  const { following } = useAppSelector((state) => state.user);

  const [checkIfFollowing, setCheckIfFollowing] = useState(false);

  const { data: followers } = useGetFollowersQuery(user?._id as string);

  const [followUser, { isLoading }] = useFollowUserMutation();

  const [unfollowUser, { isLoading: isUnfollowing }] =
    useUnfollowUserMutation();

  console.log(followers);
  console.log(checkIfFollowing);

  useEffect(() => {
    const userAlreadyFollowing = following?.some(
      (follower) => follower._id === user?._id
    );
    setCheckIfFollowing(userAlreadyFollowing ? true : false);
  }, [following, user]);

  const onClick = () => {
    if (!checkIfFollowing) {
      followUser(id);
      toast.success(`You are now following ${username}`, {
        toastId: 'followUser',
      });
    } else {
      unfollowUser(id);
      toast.success(`You are no longer following ${username}`, {
        toastId: 'unfollowUser',
      });
    }
  };

  let content;
  if (!checkIfFollowing) {
    content = (
      <Item
        onClick={onClick}
        data-bs-toggle="tooltip"
        data-bs-placement="bottom"
        title="follow user"
      >
        <AiOutlineUserAdd size={16} />
      </Item>
    );
  } else {
    content = (
      <Item
        onClick={onClick}
        data-bs-toggle="tooltip"
        data-bs-placement="bottom"
        title="unfollow user"
      >
        <AiOutlineUserDelete size={16} />
      </Item>
    );
  }

  return <>{content}</>;
};
